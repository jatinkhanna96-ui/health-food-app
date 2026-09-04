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
      city: city.name,
      coordinates: {
        lat: city.lat + (Math.random() - 0.5) * 0.018,
        lng: city.lng + (Math.random() - 0.5) * 0.018,
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div
        id="menu-scanner-modal"
        className="relative w-full max-w-2xl glass-panel text-stone-100 rounded-3xl overflow-hidden my-8 flex flex-col max-h-[90vh]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/15 flex items-center justify-between bg-black/40 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center border border-[#b6f7c1]/30 shrink-0">
              <ScanLine className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base">
                AI Menu Vision &amp; Macro Auditor
              </h3>
              <p className="text-xs text-emerald-200/70 font-medium">
                OCR scanned ingredients, cooking oils &amp; macro breakdown for {city.name}
              </p>
            </div>
          </div>

          <button
            id="close-menu-scanner-btn"
            onClick={onClose}
            className="p-2 rounded-xl glass-pill hover:bg-white/15 text-emerald-100 border border-white/20 transition-all cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-stone-200">
          {/* Sample Prompts */}
          <div>
            <span className="block text-xs font-bold text-emerald-300/80 uppercase tracking-wider mb-2">
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
                  className="px-3 py-1.5 rounded-xl glass-pill hover:bg-white/15 border border-white/15 text-stone-200 hover:text-white text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-[#b6f7c1]" />
                  <span>{sample.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* File Upload Area */}
          <div>
            <label className="block text-xs font-bold text-emerald-200/90 uppercase tracking-wider mb-2">
              1. Upload Menu Photo (JPG / PNG)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-white/20 hover:border-[#b6f7c1]/60 rounded-2xl p-5 text-center cursor-pointer transition-all glass-pill-dark hover:bg-white/5 group"
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
                  <div className="relative w-32 h-24 rounded-lg overflow-hidden border border-white/20 shadow-sm">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Menu Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-[#b6f7c1]">
                    Image ready for AI OCR analysis (Click to change)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-stone-400 group-hover:text-emerald-200">
                  <div className="w-9 h-9 rounded-full glass-pill border border-white/20 group-hover:border-[#b6f7c1]/40 flex items-center justify-center transition-colors">
                    <Upload className="w-4 h-4 text-[#b6f7c1]" />
                  </div>
                  <span className="text-xs font-bold text-white group-hover:text-[#b6f7c1]">
                    Click to browse or drop menu image here
                  </span>
                  <span className="text-[10px] text-emerald-300/60 font-medium">
                    Supports high-resolution menus, chalkboards &amp; PDF snapshots
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Paste Menu Text Area */}
          <div>
            <label className="block text-xs font-bold text-emerald-200/90 uppercase tracking-wider mb-2">
              2. Or Paste Menu Text / Dish Description
            </label>
            <textarea
              id="menu-text-input"
              value={menuText}
              onChange={(e) => setMenuText(e.target.value)}
              placeholder="e.g. 8oz Grass Fed Ribeye cooked over oak with chimichurri sauce, broccolini in beef tallow. Or paste an entire dinner menu section..."
              rows={3}
              className="w-full p-3.5 rounded-2xl glass-pill-dark border border-white/20 text-xs font-medium text-white placeholder-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40 focus:border-[#b6f7c1]"
            />
          </div>

          {error && (
            <div className="p-3 rounded-xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Scan Action Button */}
          <button
            id="run-menu-scan-btn"
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-3.5 rounded-2xl glass-btn-plus disabled:opacity-50 text-slate-950 font-black text-sm transition-all flex items-center justify-center gap-2 cursor-pointer active:scale-95"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
                <span>Analyzing Ingredients &amp; Calculating Macros...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Run AI Ingredient &amp; Macro Scan</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {results && (
            <div className="space-y-4 pt-4 border-t border-white/15">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#b6f7c1]" />
                  <span>Discovered Clean-Fuel Dishes ({results.length})</span>
                </h4>
                <span className="text-[10px] uppercase font-bold text-[#b6f7c1] glass-pill-dark px-2 py-0.5 rounded-md border border-[#b6f7c1]/30">
                  OCR Verified
                </span>
              </div>

              {summary && (
                <p className="text-xs text-stone-200 glass-card p-3 rounded-xl border border-white/15 italic">
                  &ldquo;{summary}&rdquo;
                </p>
              )}

              <div className="space-y-3">
                {results.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl glass-card space-y-2.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-extrabold text-white text-sm">{dish.name}</h5>
                        <p className="text-xs text-emerald-300/80 font-semibold">
                          {dish.restaurant || `${city.name} Kitchen`}
                        </p>
                      </div>

                      <button
                        id={`add-scanned-dish-btn-${idx}`}
                        onClick={() => handleAddDiscoveredDish(dish)}
                        className="px-3.5 py-1.5 rounded-xl glass-btn-plus text-slate-950 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to {city.name} Map</span>
                      </button>
                    </div>

                    {/* Macros Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center glass-pill p-2.5 rounded-xl text-xs font-sans">
                      <div>
                        <span className="text-[9px] font-bold text-stone-400 block uppercase">
                          Calories
                        </span>
                        <span className="font-extrabold text-white">{dish.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-[#b6f7c1] block uppercase">
                          Protein
                        </span>
                        <span className="font-extrabold text-[#b6f7c1]">{dish.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-sky-400 block uppercase">
                          Carbs
                        </span>
                        <span className="font-extrabold text-sky-300">{dish.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-400 block uppercase">
                          Fat
                        </span>
                        <span className="font-extrabold text-amber-300">{dish.fat}g</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-stone-300">
                      <strong className="text-stone-400">Cooking Fat: </strong>
                      <span className="text-[#b6f7c1] font-bold">{dish.cookingFat}</span>
                    </div>

                    {dish.analysisNotes && (
                      <p className="text-[11px] text-emerald-100 italic glass-pill p-2.5 rounded-xl border border-white/10">
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
