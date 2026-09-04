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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
      <div
        id="menu-scanner-modal"
        className="relative w-full max-w-2xl bg-zinc-950 border border-white/10 text-zinc-100 rounded-3xl overflow-hidden my-6 sm:my-8 flex flex-col max-h-[90vh] shadow-[0_0_50px_rgba(0,0,0,0.85)]"
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-center justify-between bg-zinc-900/50">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-emerald-500/15 text-emerald-400 flex items-center justify-center border border-emerald-500/30 shrink-0 shadow-[0_0_12px_rgba(16,185,129,0.2)]">
              <ScanLine className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-extrabold text-white text-base flex items-center gap-2">
                <span>AI Menu Vision &amp; Clean Zone Auditor</span>
                <span className="px-2 py-0.5 rounded-full bg-emerald-950/80 text-emerald-300 text-[10px] font-black uppercase tracking-wider border border-emerald-500/40">
                  Gemini OCR
                </span>
              </h3>
              <p className="text-xs text-zinc-400 font-medium">
                Deep ingredient forensics &amp; bio-individual macro breakdown for {city.name}
              </p>
            </div>
          </div>

          <button
            id="close-menu-scanner-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-zinc-900 hover:bg-zinc-800 text-zinc-400 hover:text-white border border-white/10 transition-all cursor-pointer active:scale-95"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto space-y-5 text-zinc-200">
          {/* Sample Prompts */}
          <div>
            <span className="block text-xs font-bold text-zinc-400 uppercase tracking-wider mb-2">
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
                  className="px-3 py-1.5 rounded-xl bg-zinc-900 hover:bg-zinc-800 border border-white/10 hover:border-emerald-500/40 text-zinc-300 hover:text-white text-xs font-bold transition-all duration-300 cursor-pointer flex items-center gap-1.5"
                >
                  <FileText className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{sample.title}</span>
                </button>
              ))}
            </div>
          </div>

          {/* File Upload Area */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              1. Upload Menu Photo (JPG / PNG)
            </label>
            <div
              onClick={() => fileInputRef.current?.click()}
              className="border-2 border-dashed border-zinc-800 hover:border-emerald-500/50 rounded-2xl p-5 text-center cursor-pointer transition-all duration-300 bg-zinc-900/40 hover:bg-zinc-900/70 group"
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
                  <div className="relative w-36 h-24 rounded-xl overflow-hidden border border-white/15 shadow-md">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={imagePreview}
                      alt="Menu Preview"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <span className="text-xs font-bold text-emerald-400">
                    Menu photo ready for forensic OCR scan (Click to change)
                  </span>
                </div>
              ) : (
                <div className="flex flex-col items-center gap-1.5 text-zinc-400 group-hover:text-emerald-400">
                  <div className="w-10 h-10 rounded-2xl bg-zinc-900 border border-white/10 text-emerald-400 group-hover:border-emerald-500/40 flex items-center justify-center shadow-md transition-colors">
                    <Upload className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-bold text-zinc-200 group-hover:text-white">
                    Click to browse or drop menu image here
                  </span>
                  <span className="text-[10px] text-zinc-500 font-medium">
                    Supports high-resolution menus, chalkboards &amp; PDF snapshots
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Paste Menu Text Area */}
          <div>
            <label className="block text-xs font-bold text-zinc-300 uppercase tracking-wider mb-2">
              2. Or Paste Menu Text / Dish Description
            </label>
            <textarea
              id="menu-text-input"
              suppressHydrationWarning
              value={menuText}
              onChange={(e) => setMenuText(e.target.value)}
              placeholder="e.g. 10oz Grass Fed Ribeye cooked over oak with chimichurri sauce, broccolini in beef tallow. Or paste an entire dinner menu section..."
              rows={3}
              className="w-full p-3.5 rounded-2xl bg-zinc-900/80 border border-white/10 text-xs font-medium text-white placeholder:text-zinc-500 focus:bg-zinc-950 focus:outline-none focus:ring-2 focus:ring-emerald-500/30 focus:border-emerald-500/60 transition-all"
            />
          </div>

          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/60 border border-red-500/40 text-red-300 text-xs font-bold flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {/* Scan Action Button */}
          <button
            id="run-menu-scan-btn"
            onClick={handleScan}
            disabled={isScanning}
            className="w-full py-3.5 rounded-2xl bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-zinc-950 font-black text-sm transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer active:scale-95 shadow-lg shadow-emerald-500/30"
          >
            {isScanning ? (
              <>
                <Loader2 className="w-4 h-4 animate-spin text-zinc-950" />
                <span>Auditing Ingredients &amp; Calculating Clean Macros...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4 text-zinc-950" />
                <span>Run AI Ingredient &amp; Macro Forensics</span>
              </>
            )}
          </button>

          {/* Results Display */}
          {results && (
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center justify-between">
                <h4 className="font-extrabold text-white text-sm flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                  <span>Discovered Clean-Fuel Dishes ({results.length})</span>
                </h4>
                <span className="text-[10px] uppercase font-bold text-emerald-300 bg-emerald-950/80 px-2.5 py-1 rounded-md border border-emerald-500/40">
                  OCR Verified
                </span>
              </div>

              {summary && (
                <p className="text-xs text-zinc-300 bg-zinc-900/80 p-3.5 rounded-xl border border-white/10 italic">
                  &ldquo;{summary}&rdquo;
                </p>
              )}

              <div className="space-y-3">
                {results.map((dish, idx) => (
                  <div
                    key={idx}
                    className="p-4 rounded-2xl bg-zinc-900/80 border border-white/10 space-y-2.5 transition-all"
                  >
                    <div className="flex items-start justify-between gap-2">
                      <div>
                        <h5 className="font-extrabold text-white text-sm">{dish.name}</h5>
                        <p className="text-xs text-emerald-400 font-semibold">
                          {dish.restaurant || `${city.name} Kitchen`}
                        </p>
                      </div>

                      <button
                        id={`add-scanned-dish-btn-${idx}`}
                        onClick={() => handleAddDiscoveredDish(dish)}
                        className="px-3.5 py-1.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-xs font-black transition-all flex items-center gap-1.5 shrink-0 cursor-pointer active:scale-95 shadow-md shadow-emerald-500/20"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add to {city.name} Oasis</span>
                      </button>
                    </div>

                    {/* Macros Grid */}
                    <div className="grid grid-cols-4 gap-2 text-center bg-zinc-950/90 border border-white/10 p-2.5 rounded-xl text-xs">
                      <div>
                        <span className="text-[9px] font-bold text-zinc-400 block uppercase">
                          Calories
                        </span>
                        <span className="font-extrabold text-white">{dish.calories}</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-emerald-400 block uppercase">
                          Protein
                        </span>
                        <span className="font-extrabold text-emerald-300">{dish.protein}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-amber-400 block uppercase">
                          Carbs
                        </span>
                        <span className="font-extrabold text-amber-300">{dish.carbs}g</span>
                      </div>
                      <div>
                        <span className="text-[9px] font-bold text-emerald-400 block uppercase">
                          Clean Fat
                        </span>
                        <span className="font-extrabold text-emerald-300">{dish.fat}g</span>
                      </div>
                    </div>

                    <div className="text-[11px] text-zinc-300">
                      <strong className="text-zinc-500">Cooking Fat: </strong>
                      <span className="text-emerald-300 font-bold">{dish.cookingFat}</span>
                    </div>

                    {dish.analysisNotes && (
                      <p className="text-[11px] text-zinc-400 italic bg-zinc-950/70 p-2.5 rounded-xl border border-white/10">
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
