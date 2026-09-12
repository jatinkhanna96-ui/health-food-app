import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

function isPrivateIp(ip: string): boolean {
  if (!ip) return true;
  const clean = ip.trim().replace(/^::ffff:/, '');
  return (
    clean === '127.0.0.1' ||
    clean === '::1' ||
    clean === 'localhost' ||
    clean.startsWith('10.') ||
    clean.startsWith('192.168.') ||
    /^172\.(1[6-9]|2[0-9]|3[0-1])\./.test(clean) ||
    clean.startsWith('169.254.') ||
    clean.startsWith('fc00:') ||
    clean.startsWith('fe80:')
  );
}

export async function GET(req: NextRequest) {
  try {
    const searchParams = req.nextUrl.searchParams;
    const qLat = parseFloat(searchParams.get('lat') || '');
    const qLng = parseFloat(searchParams.get('lng') || '');

    // 1. Reverse Geocoding Mode: Client passes GPS coordinates (lat, lng)
    if (!isNaN(qLat) && !isNaN(qLng) && qLat >= -90 && qLat <= 90 && qLng >= -180 && qLng <= 180) {
      try {
        const nominatimUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${qLat}&lon=${qLng}&zoom=12`;
        const revRes = await fetch(nominatimUrl, {
          signal: AbortSignal.timeout(3000),
          headers: {
            'User-Agent': 'HealthyVicinityLocationResolver/1.0 (info@healthyvicinity.internal)',
            Accept: 'application/json',
          },
        });

        if (revRes.ok) {
          const revData = await revRes.json();
          const addr = revData?.address || {};
          const detectedCity =
            addr.city ||
            addr.town ||
            addr.city_district ||
            addr.suburb ||
            addr.municipality ||
            addr.village ||
            revData?.name ||
            null;
          const detectedCountry = (addr.country_code || '').toUpperCase();

          return NextResponse.json({
            success: true,
            latitude: qLat,
            longitude: qLng,
            city: detectedCity,
            state: addr.state || null,
            countryCode: detectedCountry || (qLat >= 6 && qLat <= 38 && qLng >= 68 && qLng <= 98 ? 'IN' : 'US'),
            country: addr.country || null,
            displayName: revData?.display_name || null,
            source: 'reverse-geocode',
          });
        }
      } catch {
        // Fall back to coordinate response
      }

      const inferredCountry = qLat >= 6 && qLat <= 38 && qLng >= 68 && qLng <= 98 ? 'IN' : 'US';
      return NextResponse.json({
        success: true,
        latitude: qLat,
        longitude: qLng,
        countryCode: inferredCountry,
        source: 'coordinates-direct',
      });
    }

    // 2. Direct Cloud Provider Headers (Cloudflare, GCP, App Engine)
    const gcpCountry =
      req.headers.get('cf-ipcountry') ||
      req.headers.get('x-appengine-country') ||
      req.headers.get('x-country-code') ||
      req.headers.get('x-client-geo-country');
    const gcpCity =
      req.headers.get('cf-ipcity') ||
      req.headers.get('x-appengine-city');
    const gcpCityLatLong = req.headers.get('x-appengine-citylatlong');

    let headerLat: number | null = null;
    let headerLng: number | null = null;
    if (gcpCityLatLong && gcpCityLatLong.includes(',')) {
      const [latStr, lngStr] = gcpCityLatLong.split(',');
      const parsedLat = parseFloat(latStr.trim());
      const parsedLng = parseFloat(lngStr.trim());
      if (!isNaN(parsedLat) && !isNaN(parsedLng)) {
        headerLat = parsedLat;
        headerLng = parsedLng;
      }
    }

    // 3. Scan for First Public IP across Reverse Proxy Headers
    const ipCandidates: string[] = [];
    const cfConnectingIp = req.headers.get('cf-connecting-ip');
    if (cfConnectingIp) ipCandidates.push(cfConnectingIp.trim());

    const xClientIp = req.headers.get('x-client-ip');
    if (xClientIp) ipCandidates.push(xClientIp.trim());

    const realIp = req.headers.get('x-real-ip');
    if (realIp) ipCandidates.push(realIp.trim());

    const forwarded = req.headers.get('x-forwarded-for');
    if (forwarded) {
      const parts = forwarded.split(',').map((p) => p.trim());
      ipCandidates.push(...parts);
    }

    // Pick first non-private IP
    const publicClientIp = ipCandidates.find((ip) => !isPrivateIp(ip));

    // 4. If we have a public IP, query IP Geolocation Providers
    if (publicClientIp) {
      // Primary: ip-api.com
      try {
        const ipApiUrl = `http://ip-api.com/json/${publicClientIp}?fields=status,message,country,countryCode,region,regionName,city,lat,lon,timezone,query`;
        const res = await fetch(ipApiUrl, {
          signal: AbortSignal.timeout(3000),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.status === 'success') {
            return NextResponse.json({
              success: true,
              latitude: data.lat ?? headerLat,
              longitude: data.lon ?? headerLng,
              city: data.city || gcpCity || null,
              region: data.regionName || null,
              countryCode: data.countryCode || gcpCountry || null,
              country: data.country || null,
              timezone: data.timezone || null,
              ip: data.query || publicClientIp,
              source: 'ip-api',
            });
          }
        }
      } catch {
        // Fall through to ipwho.is
      }

      // Secondary: ipwho.is
      try {
        const apiUrl = `https://ipwho.is/${publicClientIp}`;
        const res = await fetch(apiUrl, {
          signal: AbortSignal.timeout(3000),
          headers: { Accept: 'application/json' },
        });

        if (res.ok) {
          const data = await res.json();
          if (data && data.success) {
            return NextResponse.json({
              success: true,
              latitude: data.latitude ?? headerLat,
              longitude: data.longitude ?? headerLng,
              city: data.city || gcpCity || null,
              region: data.region || null,
              countryCode: data.country_code || gcpCountry || null,
              country: data.country || null,
              timezone: data.timezone?.id || null,
              ip: data.ip || publicClientIp,
              source: 'ipwhois',
            });
          }
        }
      } catch {
        // Fall through
      }

      // Tertiary: api.country.is
      try {
        const countryUrl = `https://api.country.is/${publicClientIp}`;
        const countryRes = await fetch(countryUrl, {
          signal: AbortSignal.timeout(2000),
          headers: { Accept: 'application/json' },
        });
        if (countryRes.ok) {
          const cData = await countryRes.json();
          if (cData && cData.country) {
            return NextResponse.json({
              success: true,
              latitude: headerLat,
              longitude: headerLng,
              city: gcpCity || null,
              countryCode: cData.country,
              ip: cData.ip || publicClientIp,
              source: 'country.is',
            });
          }
        }
      } catch {
        // Fall through
      }
    }

    // 5. If Cloud headers identified country & city
    if (gcpCountry) {
      return NextResponse.json({
        success: true,
        countryCode: gcpCountry.toUpperCase(),
        city: gcpCity || null,
        latitude: headerLat,
        longitude: headerLng,
        source: 'edge-header',
      });
    }

    // 6. Inspect Accept-Language header for regional preference
    const acceptLanguage = req.headers.get('accept-language') || '';
    if (
      acceptLanguage.toLowerCase().includes('en-in') ||
      acceptLanguage.toLowerCase().includes('hi-in') ||
      acceptLanguage.toLowerCase().includes('hi')
    ) {
      return NextResponse.json({
        success: true,
        countryCode: 'IN',
        city: 'Delhi',
        source: 'accept-language',
      });
    }

    return NextResponse.json({
      success: true,
      countryCode: 'US',
      city: 'Austin',
      source: 'default-fallback',
    });
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Location resolution failed' },
      { status: 500 }
    );
  }
}
