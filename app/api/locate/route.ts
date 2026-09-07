import { NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(req: NextRequest) {
  try {
    // 1. Direct Cloud Provider Headers (e.g. Cloudflare, GCP, App Engine, Fastly)
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

    // 2. Client IP Resolution across reverse proxy headers
    const forwarded = req.headers.get('x-forwarded-for');
    const realIp = req.headers.get('x-real-ip');
    const cfConnectingIp = req.headers.get('cf-connecting-ip');
    const xClientIp = req.headers.get('x-client-ip');

    let clientIp = '';
    if (cfConnectingIp) {
      clientIp = cfConnectingIp.trim();
    } else if (forwarded) {
      clientIp = forwarded.split(',')[0].trim();
    } else if (realIp) {
      clientIp = realIp.trim();
    } else if (xClientIp) {
      clientIp = xClientIp.trim();
    }

    // Filter out private / local / loopback IPs
    const isPrivate =
      !clientIp ||
      clientIp === '127.0.0.1' ||
      clientIp === '::1' ||
      clientIp === 'localhost' ||
      clientIp.startsWith('10.') ||
      clientIp.startsWith('192.168.') ||
      clientIp.startsWith('172.16.') ||
      clientIp.startsWith('172.17.') ||
      clientIp.startsWith('172.18.') ||
      clientIp.startsWith('172.19.') ||
      clientIp.startsWith('172.2') ||
      clientIp.startsWith('172.3') ||
      clientIp.startsWith('fc00:') ||
      clientIp.startsWith('fe80:');

    // If client IP is private/empty but Cloud headers gave us a country:
    if (isPrivate && gcpCountry && gcpCountry.length === 2) {
      return NextResponse.json({
        success: true,
        countryCode: gcpCountry.toUpperCase(),
        city: gcpCity || null,
        latitude: headerLat,
        longitude: headerLng,
        source: 'edge-header',
      });
    }

    // If client IP is private and no edge header, tell client to resolve directly
    if (isPrivate) {
      return NextResponse.json({
        success: false,
        isPrivate: true,
        message: 'Client IP is local or private; client-side direct IP lookup required',
      });
    }

    // 3. Primary Lookup with real Client IP: ipwho.is (Provides Coordinates, City, Country)
    try {
      const apiUrl = `https://ipwho.is/${clientIp}`;
      const res = await fetch(apiUrl, {
        signal: AbortSignal.timeout(3500),
        headers: { Accept: 'application/json' },
      });

      if (res.ok) {
        const data = await res.json();
        if (data && data.success) {
          return NextResponse.json({
            success: true,
            latitude: data.latitude,
            longitude: data.longitude,
            city: data.city || gcpCity || null,
            region: data.region || null,
            countryCode: data.country_code || gcpCountry || null,
            country: data.country || null,
            ip: data.ip || clientIp,
            source: 'ipwhois',
          });
        }
      }
    } catch {
      // Proceed to secondary fallback
    }

    // 4. Secondary Fast Lookup: api.country.is
    try {
      const countryUrl = `https://api.country.is/${clientIp}`;
      const countryRes = await fetch(countryUrl, {
        signal: AbortSignal.timeout(2500),
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
            ip: cData.ip || clientIp,
            source: 'country.is',
          });
        }
      }
    } catch {
      // Proceed to third fallback
    }

    // 5. If Cloud Provider headers identified the country
    if (gcpCountry) {
      return NextResponse.json({
        success: true,
        latitude: headerLat,
        longitude: headerLng,
        city: gcpCity || null,
        countryCode: gcpCountry,
        source: 'cloud-headers',
      });
    }

    return NextResponse.json(
      { success: false, error: 'Could not resolve country or location from IP' },
      { status: 404 }
    );
  } catch (err: any) {
    return NextResponse.json(
      { success: false, error: err?.message || 'Location resolution failed' },
      { status: 500 }
    );
  }
}
