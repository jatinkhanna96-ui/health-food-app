'use client';

import React, { useState } from 'react';
import { X, Sparkles, Video, CheckCircle2, AlertCircle } from 'lucide-react';
import { Reel, ReelCity, CookingFat, CITIES_LIST } from '@/lib/reelsData';

interface AddReelModalProps {
  isOpen: boolean;
  onClose: () => void;
  onAddReel: (reel: Reel) => void;
  defaultCity: ReelCity;
}

const COOKING_FATS: CookingFat[] = [
  'Beef Tallow',
  'Cold-Pressed EVOO',
  'Grass-Fed Ghee',
  'Avocado Oil',
  'Bone Marrow',
  'Zero Acre',
];

export default function AddReelModal({
  isOpen,
  onClose,
  onAddReel,
  defaultCity,
}: AddReelModalProps) {
  const [city, setCity] = useState<ReelCity>(defaultCity);
  const [restaurant, setRestaurant] = useState('');
  const [reelUrl, setReelUrl] = useState('');
  const [creatorHandle, setCreatorHandle] = useState('');
  const [eatingType, setEatingType] = useState('creator eating meal at table');
  const [cookingFat, setCookingFat] = useState<CookingFat>('Beef Tallow');
  const [tagsInput, setTagsInput] = useState('seed-oil-free, grass-fed');
  const [caption, setCaption] = useState('');
  const [macrosText, setMacrosText] = useState('42g Protein');
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);

  // Sync default city when modal opens
  React.useEffect(() => {
    if (isOpen) {
      setCity(defaultCity);
      setError(null);
      setSuccess(false);
    }
  }, [isOpen, defaultCity]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!restaurant.trim()) {
      setError('Please enter a restaurant name.');
      return;
    }
    if (!reelUrl.trim() || (!reelUrl.includes('instagram.com') && !reelUrl.includes('facebook.com'))) {
      setError('Please enter a valid Instagram or Facebook public reel URL.');
      return;
    }
    if (!caption.trim()) {
      setError('Please provide a short viral hook or caption.');
      return;
    }

    const cleanHandle = creatorHandle.trim().startsWith('@')
      ? creatorHandle.trim()
      : `@${creatorHandle.trim() || 'seedoilfree_eats'}`;

    const tags = tagsInput
      .split(',')
      .map((t) => t.trim().toLowerCase().replace(/^#/, ''))
      .filter(Boolean);

    const newReel: Reel = {
      id: `ugc-${Date.now()}`,
      city,
      restaurant: restaurant.trim(),
      reel_url: reelUrl.trim(),
      creator_handle: cleanHandle,
      eating_type: eatingType.trim() || 'creator eating meal at table',
      cooking_fat: cookingFat,
      tags: tags.length > 0 ? tags : ['seed-oil-free'],
      caption_for_app: caption.trim(),
      macros_text: macrosText.trim() || 'Clean Macros',
      views: '1.2k',
      verified: true,
      dish_name: `${cookingFat} Kitchen Special`,
      thumbnail: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80',
    };

    onAddReel(newReel);
    setSuccess(true);
    setTimeout(() => {
      onClose();
      // Reset form
      setRestaurant('');
      setReelUrl('');
      setCaption('');
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-md overflow-y-auto">
      <div
        id="add-reel-modal"
        className="relative w-full max-w-xl glass-panel text-stone-100 rounded-3xl overflow-hidden my-8 flex flex-col"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-black/40 backdrop-blur-md border-b border-white/15 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl glass-pill text-[#b6f7c1] flex items-center justify-center border border-[#b6f7c1]/30">
              <Video className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-black text-white flex items-center gap-2">
                <span>Submit Live Proof Reel</span>
                <span className="px-2 py-0.5 rounded-full glass-pill-dark text-[#b6f7c1] text-[10px] font-bold uppercase tracking-wider border border-[#b6f7c1]/30">
                  UGC Scout
                </span>
              </h3>
              <p className="text-xs text-emerald-200/70">
                Add an authentic viral kitchen proof reel of clean seed-oil-free dining.
              </p>
            </div>
          </div>
          <button
            id="close-add-reel-btn"
            onClick={onClose}
            className="p-2 rounded-xl glass-pill hover:bg-white/15 text-emerald-100 border border-white/20 transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {error && (
            <div className="p-3.5 rounded-2xl bg-rose-950/60 border border-rose-500/40 text-rose-200 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-3.5 rounded-2xl glass-pill-dark border border-[#b6f7c1]/40 text-[#b6f7c1] text-xs flex items-center gap-2 font-bold animate-pulse">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#b6f7c1]" />
              <span>Live reel published successfully to {city}!</span>
            </div>
          )}

          {/* City & Restaurant Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                City *
              </label>
              <select
                value={city}
                onChange={(e) => setCity(e.target.value as ReelCity)}
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40 cursor-pointer"
              >
                {CITIES_LIST.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#082419] text-white">
                    {c.id}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                Restaurant Name *
              </label>
              <input
                type="text"
                value={restaurant}
                onChange={(e) => setRestaurant(e.target.value)}
                placeholder="e.g. Talo Organic"
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
              />
            </div>
          </div>

          {/* Reel URL */}
          <div>
            <label className="block text-xs font-bold text-emerald-200/80 mb-1">
              Instagram / Facebook Public Reel URL *
            </label>
            <input
              type="url"
              value={reelUrl}
              onChange={(e) => setReelUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/DXwyzu3xkTK/"
              className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-mono placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
            />
            <p className="text-[11px] text-emerald-300/60 mt-1">
              Public reels only. We embed via Instagram / Facebook oEmbed without re-hosting.
            </p>
          </div>

          {/* Cooking Fat & Creator Handle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                Certified Cooking Fat *
              </label>
              <select
                value={cookingFat}
                onChange={(e) => setCookingFat(e.target.value as CookingFat)}
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-bold focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40 cursor-pointer"
              >
                {COOKING_FATS.map((fat) => (
                  <option key={fat} value={fat} className="bg-[#082419] text-white">
                    {fat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                Creator Handle
              </label>
              <input
                type="text"
                value={creatorHandle}
                onChange={(e) => setCreatorHandle(e.target.value)}
                placeholder="@handle"
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
              />
            </div>
          </div>

          {/* Eating Type & Macros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                Eating Type / Scene
              </label>
              <input
                type="text"
                value={eatingType}
                onChange={(e) => setEatingType(e.target.value)}
                placeholder="e.g. creator eating tallow burger at table"
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-emerald-200/80 mb-1">
                Macros Highlight
              </label>
              <input
                type="text"
                value={macrosText}
                onChange={(e) => setMacrosText(e.target.value)}
                placeholder="e.g. 48g Protein"
                className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
              />
            </div>
          </div>

          {/* Caption / Viral Hook */}
          <div>
            <label className="block text-xs font-bold text-emerald-200/80 mb-1">
              Viral Hook / Caption *
            </label>
            <textarea
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Healthiest zero-seed-oil smash burger in town — 100% tallow fried with raw cheddar"
              className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-bold text-emerald-200/80 mb-1">
              Diet &amp; Quality Tags (comma separated)
            </label>
            <input
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="seed-oil-free, grass-fed, pasture-raised"
              className="w-full px-3.5 py-2.5 rounded-xl glass-pill-dark text-white border border-white/20 text-xs font-medium placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-[#b6f7c1]/40"
            />
          </div>

          {/* Footer Submit */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-white/10 text-emerald-200 text-xs font-bold transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={success}
              className="px-6 py-2.5 rounded-xl glass-btn-plus text-[#0a2e1f] text-xs font-black transition-all cursor-pointer flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-[#0a2e1f]" />
              <span>Publish Reel</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
