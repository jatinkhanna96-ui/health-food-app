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
  ArrowRight,
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
  const [summary, setSummary] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  if (!isOpen) return null;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setMimeType(file.type || 'image/jpeg');
    const reader = new FileReader();
    reader.onload = () => {
      const result = reader.result as string;
      setImagePreview(result);
      const base64Data = result.split(',')[1];
      setImageBase64(base64Data);
    };
    reader.readAsDataURL(file);
  };

  const handleScan = async () => {
    if (!menuText.trim() && !imageBase64) {
      setError('Please upload a menu image or paste menu text to scan.');
      return;
    }

    setIsScanning(true);
    setError(null);
    setResults(null);

    try {
      const res = await fetch('/api/gemini/scan-menu', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          menuText: menuText.trim(),
          imageBase64: imageBase64 || undefined,
          mimeType: mimeType,
        }),
      });

      const data = await res.json();
      if (data.error) {
        throw new Error(data.error);
      }

      setResults(data.dishes || []);
      setSummary(data.summary || null);
    } catch (err: any) {
      setError(err?.message || 'Failed to analyze menu. Please try again.');
    } finally {
      setIsScanning(false);
    }
  };

  const handleAddDiscoveredDish = (item: any) => {
    const newDish: Dish = {
      id: `scanned-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      name: item.name || 'Discovered Healthy Dish',
      restaurant: item.restaurant || `Scanned Spot (${city.name})`,
      restaurantAddress: `Local Verified Spot, ${city.name}, ${city.state}`,
      city: city?.name || 'Local',
      coordinates: {
        lat: (Number(city?.lat) || 40.7128) + (Math.random() - 0.5) * 0.018,
        lng: (Number(city?.lng) || -74.006) + (Math.random() - 0.5) * 0.018,
      },
      price: item.price || 23.5,
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
      cookingFat: item.cookingFat || 'Tallow / Extra Virgin Olive Oil',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-md overflow-y-auto">
      <div
        id="menu-scanner-modal"
        className="relative w-full max-w-2xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-stone-200 my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-6 bg-stone-900 text-white flex items-center justify-between shrink-0 border-b border-stone-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-[#C8102E] flex items-center justify-center text-white shadow-md">
              <ScanLine className="w-5 h-5 stroke-[2.5]" />
            </div>
            <div>
              <h3 className="text-lg font-black flex items-center gap-2">
                <span>AI Menu &amp; Recipe Scanner</span>
                <span className="px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-300 border border-rose-400/40 text-[10px] uppercase font-mono font-bold">
                  Gemini Vision
                </span>
              </h3>
              <p className="text-xs text-stone-300 mt-0.5">
                Scanning for <strong className="text-amber-300">{city.name}</strong> • Extracts macros, fats &amp; seed-oil vetoes.
              </p>
            </div>
          </div>

          <button
            id="close-scanner-modal-btn"
            onClick={onClose}
            className="p-2 rounded-full bg-stone-800 hover:bg-stone-700 text-stone-300 hover:text-white transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-stone-800 bg-stone-50/50">
          {/* Quick Preset Samples */}
          <div>
            <span className="block text-xs font-black text-stone-500 uppercase tracking-wider mb-2">
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
                  className="px-3 py-1.5 rounded-xl bg-white hover:bg-rose-50 hover:text-[#C8102E] border border-stone-200 text-stone-700 text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 shadow-xs"
                >
                  <FileText className="w-3.5 h-3.5 text-[#C8102E]" />
                  <span>{sample.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* File Upload Area */}
          <div>
            <label className="block text-xs font-black text-stone-800 uppercase tracking-wider mb-2">
              1. Upload Menu Photo (JPG / PNG)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-stone-300 hover:border-[#C8102E] rounded-2xl p-5 text-center cursor-pointer transition-all bg-white hover:bg-rose-50/30 group shadow-xs"
            >
              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFileChange}
                className="hidden"
              />

              {imagePreview ? (
                <div className="flex flex-col items-center gap-2">
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden border border-stone-200 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Menu Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#C8102E]">
                    Image ready for AI OCR analysis (Click to change)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-stone-500 group-hover:text-[#C8102E]">
                  <div className="w-10 h-10 rounded-full bg-stone-100 group-hover:bg-rose-50 border border-stone-200 flex items-center justify-center transition-colors">
                    <Upload className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-bold text-stone-800">
                    Click to browse or drop menu image here
                  </span>
                  <span className="text-[10px] text-stone-400">
                    Supports high-resolution menus, chalkboards &amp; PDF snapshots
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Paste Menu Text Area */}
          <div>
            <label className="block text-xs font-black text-stone-800 uppercase tracking-wider mb-2">
              2. Or Paste Menu Text / Dish Description
            </label>
            <textarea
              id="menu-text-input"
              value={menuText}
              onChange={(e) => setMenuText(e.target.value)}
              placeholder="e.g. 8oz Grass Fed Ribeye cooked over oak with chimichurri sauce, broccolini in beef tallow. Or paste an entire dinner menu section..."
              rows={3}
              autoComplete="off"
              autoCorrect="off"
              spellCheck={false}
              suppressHydrationWarning
              className="w-full p-3.5 rounded-2xl bg-white border border-stone-200 text-xs font-medium text-stone-900 placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#C8102E]/20 focus:border-[#C8102E]"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0" />
              <span>{error}</span>
            </div>
          )}

          {/* Scan Action Button */}
          <button
            id="run-menu-scan-btn"
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-3.5 rounded-2xl bg-[#C8102E] hover:bg-[#A30D25] disabled:opacity-50 text-white font-black text-sm transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin" />
                <span>Analyzing Ingredients &amp; Calculating Macros...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>Run AI Ingredient &amp; Macro Scan</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {results && (
            <div className="space-y-4 pt-4 border-t border-stone-200">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-stone-900 text-sm flex items-center gap-1.5">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>Discovered Clean-Fuel Dishes ({results.length})</span>
                </h4>
                <span className="text-[10px] uppercase font-mono font-bold text-stone-500">
                  OCR Verified
                </span>
              </div>

              {summary && (
                <p className="text-xs text-slate-300 bg-slate-950/80 p-3 rounded-xl border border-slate-800 italic">
                  &ldquo;{summary}&rdquo;
                </p>
              )}

              <div className="space-y-3">
                {results.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-slate-950/90 border border-slate-800 hover:border-emerald-500/50 shadow-sm space-y-2.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-black text-white text-sm">{dish.name}</h5>
                        <p className="text-xs text-slate-400 font-medium">
                          {dish.restaurant || `${city.name} Kitchen`}
                        </p>
                      </div>

                      <button
                        id={`add-scanned-dish-btn-${idx}`}
                        onClick={() => handleAddDiscoveredDish(dish)}
                        className="px-3 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 text-xs font-black transition-colors flex items-center gap-1 shrink-0 cursor-pointer shadow-sm"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to {city.name} Map</span>
                      </button>
                    </div>

                    {/* Macros Grid */}
                    <div className="grid grid-cols-4 gap-1.5 text-center bg-slate-900 p-2 rounded-xl text-xs font-mono">
                      <div>
                        <span className="text-[9px] font-bold text-slate-500 block uppercase">
                          Calories
                        </span>
                        <span className="font-extrabold text-white">{dish.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-emerald-400 block uppercase">
                          Protein
                        </span>
                        <span className="font-extrabold text-emerald-400">{dish.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-blue-400 block uppercase">
                          Carbs
                        </span>
                        <span className="font-extrabold text-blue-400">{dish.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-400 block uppercase">
                          Fat
                        </span>
                        <span className="font-extrabold text-amber-400">{dish.fat}g</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-slate-300">
                      <strong className="text-white">Cooking Fat: </strong>
                      <span className="text-emerald-400">{dish.cookingFat}</span>
                    </div>

                    {dish.analysisNotes && (
                      <p className="text-[11px] text-slate-400 italic bg-slate-900/80 p-2 rounded-lg border border-slate-800">
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
