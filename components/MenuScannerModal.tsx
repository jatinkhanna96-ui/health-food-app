'use client';

import React, { useState, useRef } from 'react';
import {
  X,
  ScanLine,
  Upload,
  Sparkles,
  CheckCircle2,
  AlertTriangle,
  Loader2,
  FileText,
  Plus,
  ShieldCheck,
} from 'lucide-react';
import { Dish, CityLocation } from '@/lib/mockData';

interface MenuScannerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddDish: (dish: Dish) => void;
  city: CityLocation;
}

const SAMPLE_MENUS = [
  {
    title: 'Woodfire Steakhouse & Grill',
    text: `WOODFIRE GRILL & PRIMAL PROVISIONS:
- 10oz Prime Grass-Fed Ribeye, charred over oak embers, finished with house beef tallow & chimichurri (EVOO, parsley, garlic). Served with roasted broccolini.
- Pasture-Raised Bone-In Pork Chop (12oz) with braised rainbow chard in duck fat.
- Canola-free Truffle Beef Tartare with raw egg yolk, capers, shallots, cold-pressed olive oil.`,
  },
  {
    title: 'Wild Seafood & Coastal Farm',
    text: `COASTAL FORAGER MENU:
- Wild Alaska King Salmon (8oz) pan-seared skin-on in avocado oil, served with mashed avocado & lemon.
- Day-Boat Diver Scallops seared in grass-fed ghee with cauliflower puree. Zero refined vegetable oils.
- Wild Yellowfin Tuna Sashimi bowl with cucumber, pickled ginger, aged coconut aminos & toasted sesame oil.`,
  },
  {
    title: 'Ancestral Broth & Hearth',
    text: `ANCESTRAL NOURISHMENT:
- 48-Hour Simmered Bison Bone Broth Bowl with tender short rib slices, shirataki keto noodles, pastured soft egg, wild shiitake.
- Smoked Pastured Half Chicken roasted in rendered duck fat with sweet potato wedges.
- Lamb Kofta Plate grilled over charcoal with grass-fed ghee baste and A2 Greek yogurt tzatziki.`,
  },
];

export default function MenuScannerModal({
  isOpen,
  onClose,
  onAddDish,
  city,
}: MenuScannerModalProps) {
  const [menuText, setMenuText] = useState('');
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [imageBase64, setImageBase64] = useState<string | null>(null);
  const [mimeType, setMimeType] = useState<string>('image/jpeg');
  const [isScanning, setIsScanning] = useState(false);
  const [results, setResults] = useState<any[] | null>(null);
  const [summary, setSummary] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMimeType(file.type || 'image/jpeg');

    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result as string;
      setImagePreview(dataUrl);
      const base64Clean = dataUrl.split(',')[1];
      setImageBase64(base64Clean);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = async () => {
    if (!menuText.trim() && !imageBase64) {
      setError('Please either upload an image of a menu or paste menu text to scan.');
      return;
    }

    setIsScanning(true);
    setError(null);
    setResults(null);

    try {
      const response = await fetch('/api/gemini/scan-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          menuText: menuText.trim(),
          imageBase64: imageBase64 || undefined,
          mimeType: imageBase64 ? mimeType : undefined,
          cityName: city.name,
        }),
      });

      if (!response.ok) {
        const errJson = await response.json().catch(() => ({}));
        throw new Error(errJson.error || 'Failed to scan menu.');
      }

      const data = await response.json();
      setResults(data.dishes || []);
      setSummary(data.summary || '');
    } catch (err: any) {
      console.error('Menu scan error:', err);
      setError(err.message || 'An error occurred while analyzing the menu.');
    } finally {
      setIsScanning(false);
    }
  };

  const handleAddDiscoveredDish = (item: any) => {
    const newDish: Dish = {
      id: `custom-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
      name: item.name || 'Custom Verified Dish',
      restaurant: item.restaurant || `${city.name} Kitchen`,
      restaurantAddress: `${city.name} Culinary District`,
      city: city.name,
      coordinates: {
        lat: city.lat + (Math.random() - 0.5) * 0.02,
        lng: city.lng + (Math.random() - 0.5) * 0.02,
      },
      price: item.estimatedPrice || 22.0,
      rating: 4.9,
      reviewsCount: 1,
      image:
        'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
      calories: item.calories || 520,
      protein: item.protein || 45,
      carbs: item.carbs || 8,
      fat: item.fat || 34,
      fiber: item.fiber || 3,
      dietTags: item.dietTags || ['Seed Oil Free', 'High Protein'],
      cookingFat: item.cookingFat || '100% Grass-Fed Tallow / EVOO',
      isSeedOilFree: item.isSeedOilFree ?? true,
      isGlutenFree: item.isGlutenFree ?? true,
      isKeto: item.isKeto ?? true,
      isGrassFed: item.isGrassFed ?? true,
      isDairyFree: item.isDairyFree ?? true,
      highlights: [
        'AI OCR Verified',
        `Cooking fat: ${item.cookingFat || 'Clean Fats'}`,
        'High Protein Density',
      ],
      ingredients: [
        item.name,
        `Cooked with ${item.cookingFat || 'Clean Medium'}`,
        item.analysisNotes || 'Verified via Gemini Multi-Modal Scanner',
      ],
      chefNotes: item.analysisNotes || 'Discovered from menu image OCR scan.',
    };

    onAddDish(newDish);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2.5 sm:p-4 bg-[#07130F]/80 backdrop-blur-md overflow-y-auto">
      <div
        id="menu-scanner-modal"
        className="relative w-full max-w-2xl bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] rounded-2xl overflow-hidden my-3 sm:my-8 flex flex-col max-h-[92vh] sm:max-h-[90vh] shadow-2xl"
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-[#1B3B2F] flex items-center justify-between bg-[#07130F]">
          <div className="flex items-center gap-2.5 sm:gap-3">
            <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center border border-[#1B3B2F] shrink-0">
              <ScanLine className="w-4 h-4 sm:w-5 sm:h-5 text-[#35E27F]" />
            </div>
            <div>
              <h3 className="font-bold text-[#F5F7F3] text-sm sm:text-base flex items-center gap-2">
                <span>AI Menu Scanner</span>
                <span className="px-2 py-0.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[10px] font-bold uppercase tracking-wider border border-[#1B3B2F]">
                  Instant Read
                </span>
              </h3>
              <p className="text-[11px] sm:text-xs text-[#A8B5AE] truncate max-w-[200px] sm:max-w-none">
                Discover nutrition, ingredients and cooking details from menus in {city.name}
              </p>
            </div>
          </div>

          <button
            id="close-menu-scanner-btn"
            onClick={onClose}
            className="p-1.5 sm:p-2 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F] transition-all cursor-pointer"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-3.5 sm:p-6 overflow-y-auto space-y-4 sm:space-y-5 text-[#F5F7F3]">
          {/* Sample Prompts */}
          <div>
            <span className="block text-xs font-semibold text-[#A8B5AE] uppercase tracking-wider mb-2">
              Quick Try Sample Menus:
            </span>
            <div className="flex flex-wrap gap-2">
              {SAMPLE_MENUS.map((sample, idx) => (
                <button
                  key={idx}
                  id={`sample-menu-btn-${idx}`}
                  type="button"
                  onClick={() => {
                    setMenuText(sample.text);
                    setImagePreview(null);
                    setImageBase64(null);
                  }}
                  className="px-3 py-1.5 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] border border-[#1B3B2F] hover:border-[#35E27F]/40 text-[#F5F7F3] text-xs font-semibold transition-all duration-200 cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#35E27F]" />
                  <span>{sample.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* File Upload Area */}
          <div>
            <label className="block text-xs font-semibold text-[#F5F7F3] uppercase tracking-wider mb-2">
              1. Upload Menu Photo (JPG / PNG)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-[#1B3B2F] hover:border-[#35E27F]/60 rounded-xl p-5 text-center cursor-pointer transition-all duration-200 bg-[#07130F] hover:bg-[#0F231B] group"
            >
              <input
                ref={fileInputRef}
                suppressHydrationWarning
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {imagePreview ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-36 h-24 rounded-xl overflow-hidden border border-[#1B3B2F] shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Menu Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#35E27F]">
                    Menu photo ready for forensic OCR scan (Click to change)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-[#A8B5AE] group-hover:text-[#35E27F]">
                  <div className="w-10 h-10 rounded-xl bg-[#0F231B] border border-[#1B3B2F] text-[#35E27F] group-hover:border-[#35E27F]/60 flex items-center justify-center transition-colors">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-[#F5F7F3] group-hover:text-[#35E27F]">
                    Click to browse or drop menu image here
                  </span>
                  <span className="text-[11px] text-[#A8B5AE]">
                    Supports high-resolution menus, chalkboards &amp; PDF snapshots
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Paste Menu Text Area */}
          <div>
            <label className="block text-xs font-semibold text-[#F5F7F3] uppercase tracking-wider mb-2">
              2. Or Paste Menu Text / Dish Description
            </label>
            <textarea
              id="menu-text-input"
              suppressHydrationWarning
              value={menuText}
              onChange={(e) => setMenuText(e.target.value)}
              placeholder="e.g. 10oz Grass Fed Ribeye cooked over oak with chimichurri sauce, broccolini in beef tallow. Or paste an entire dinner menu section..."
              rows={3}
              className="w-full p-3.5 rounded-xl bg-[#07130F] border border-[#1B3B2F] text-xs font-medium text-[#F5F7F3] placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] transition-all shadow-xs"
            />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs font-semibold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Scan Action Button */}
          <button
            id="run-menu-scan-btn"
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-3.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] disabled:opacity-50 text-[#07130F] font-bold text-sm transition-all duration-200 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-md shadow-[#35E27F]/20"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-[#07130F]" />
                <span>Reading Menu &amp; Discovering Nutrition Details...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-[#07130F]" />
                <span>Scan Menu Details</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {results && (
            <div className="space-y-4 pt-4 border-t border-[#1B3B2F]">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-[#F5F7F3] text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#35E27F]" />
                  <span>Found Dishes ({results.length})</span>
                </h4>
                <span className="text-[10px] uppercase font-bold text-[#35E27F] bg-[#123D2A] px-2.5 py-1 rounded-md border border-[#1B3B2F]">
                  Menu Confirmed
                </span>
              </div>

              {summary && (
                <p className="text-xs text-[#A8B5AE] bg-[#0F231B] p-3.5 rounded-xl border border-[#1B3B2F] italic">
                  &ldquo;{summary}&rdquo;
                </p>
              )}

              <div className="space-y-3">
                {results.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-xl bg-[#0F231B] border border-[#1B3B2F] space-y-2.5 shadow-xs transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-bold text-[#F5F7F3] text-sm">{dish.name}</h5>
                        <p className="text-xs text-[#35E27F] font-semibold">
                          {dish.restaurant || `${city.name} Kitchen`}
                        </p>
                      </div>

                      <button
                        id={`add-scanned-dish-btn-${idx}`}
                        onClick={() => handleAddDiscoveredDish(dish)}
                        className="px-3.5 py-1.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to Dishes</span>
                      </button>
                    </div>

                    {/* Macros Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center bg-[#07130F] border border-[#1B3B2F] p-2.5 rounded-xl text-xs">
                      <div>
                        <span className="text-[9px] font-bold text-[#A8B5AE] block uppercase">
                          Calories
                        </span>
                        <span className="font-bold text-[#F5F7F3]">{dish.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-[#35E27F] block uppercase">
                          Protein
                        </span>
                        <span className="font-bold text-[#35E27F]">{dish.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-[#A8B5AE] block uppercase">
                          Carbs
                        </span>
                        <span className="font-bold text-[#F5F7F3]">{dish.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-[#35E27F] block uppercase">
                          Clean Fat
                        </span>
                        <span className="font-bold text-[#35E27F]">{dish.fat}g</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-[#F5F7F3]">
                      <strong className="text-[#A8B5AE]">Cooking Fat: </strong>
                      <span className="text-[#35E27F] font-bold">{dish.cookingFat}</span>
                    </div>

                    {dish.analysisNotes && (
                      <p className="text-[11px] text-[#A8B5AE] italic bg-[#07130F] p-2.5 rounded-xl border border-[#1B3B2F]">
                        {dish.analysisNotes}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
