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
      setError('Please provide a short description or caption.');
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
      type: 'real',
      city,
      restaurant: restaurant.trim(),
      reel_url: reelUrl.trim(),
      creator_handle: cleanHandle,
      eating_type: eatingType.trim() || 'creator eating meal at table',
      cooking_fat: cookingFat,
      protein: '48g',
      fiber: '11g',
      calories: '540',
      sugar: '3g',
      tags: tags.length > 0 ? tags : ['highprotein', 'seed-oil-free'],
      caption_for_app: caption.trim() || 'Clean high protein meal reviewed on camera.',
      macros_text: macrosText.trim() || '48g Protein / 11g Fiber / 540 cal / 3g Sugar',
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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#07130F]/80 backdrop-blur-md overflow-y-auto">
      <div
        id="add-reel-modal"
        className="relative w-full max-w-xl bg-[#0B1A14] border border-[#1B3B2F] text-[#F5F7F3] rounded-2xl overflow-hidden my-8 flex flex-col shadow-2xl"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-[#07130F] border-b border-[#1B3B2F] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-[#123D2A] text-[#35E27F] flex items-center justify-center border border-[#1B3B2F]">
              <Video className="w-5 h-5 text-[#35E27F]" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-[#F5F7F3] flex items-center gap-2">
                <span>Share a Video</span>
                <span className="px-2 py-0.5 rounded-full bg-[#123D2A] text-[#35E27F] text-[10px] font-bold uppercase tracking-wider border border-[#1B3B2F]">
                  Community Video
                </span>
              </h3>
              <p className="text-xs text-[#A8B5AE]">
                Share a video showing a great healthy dish or cooking in action.
              </p>
            </div>
          </div>
          <button
            id="close-add-reel-btn"
            onClick={onClose}
            className="p-2 rounded-xl bg-[#0F231B] hover:bg-[#123D2A] text-[#A8B5AE] hover:text-[#F5F7F3] border border-[#1B3B2F] transition-all cursor-pointer"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Content Body */}
        <form onSubmit={handleSubmit} className="p-5 sm:p-6 space-y-4">
          {error && (
            <div className="p-3.5 rounded-xl bg-red-950/40 border border-red-800/60 text-red-300 text-xs flex items-center gap-2">
              <AlertCircle className="w-4 h-4 shrink-0 text-red-400" />
              <span>{error}</span>
            </div>
          )}

          {success && (
            <div className="p-3.5 rounded-xl bg-[#123D2A] border border-[#35E27F]/40 text-[#35E27F] text-xs flex items-center gap-2 font-bold animate-pulse">
              <CheckCircle2 className="w-4 h-4 shrink-0 text-[#35E27F]" />
              <span>Video shared successfully for {city}!</span>
            </div>
          )}

          {/* City & Restaurant Row */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                City *
              </label>
              <select
                suppressHydrationWarning
                value={city}
                onChange={(e) => setCity(e.target.value as ReelCity)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-semibold focus:outline-none focus:border-[#35E27F] cursor-pointer shadow-xs"
              >
                {CITIES_LIST.map((c) => (
                  <option key={c.id} value={c.id} className="bg-[#0B1A14] text-[#F5F7F3]">
                    {c.id}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                Restaurant Name *
              </label>
              <input
                suppressHydrationWarning
                type="text"
                value={restaurant}
                onChange={(e) => setRestaurant(e.target.value)}
                placeholder="e.g. Talo Organic"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
              />
            </div>
          </div>

          {/* Reel URL */}
          <div>
            <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
              Instagram / Facebook Public Reel URL *
            </label>
            <input
              suppressHydrationWarning
              type="url"
              value={reelUrl}
              onChange={(e) => setReelUrl(e.target.value)}
              placeholder="https://www.instagram.com/reel/DXwyzu3xkTK/"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-mono placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
            />
            <p className="text-[11px] text-[#A8B5AE] mt-1">
              Public reels only. We embed via Instagram / Facebook oEmbed without re-hosting.
            </p>
          </div>

          {/* Cooking Fat & Creator Handle */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                Cooking Oil / Fat *
              </label>
              <select
                suppressHydrationWarning
                value={cookingFat}
                onChange={(e) => setCookingFat(e.target.value as CookingFat)}
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-semibold focus:outline-none focus:border-[#35E27F] cursor-pointer shadow-xs"
              >
                {COOKING_FATS.map((fat) => (
                  <option key={fat} value={fat} className="bg-[#0B1A14] text-[#F5F7F3]">
                    {fat}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                Creator Handle
              </label>
              <input
                suppressHydrationWarning
                type="text"
                value={creatorHandle}
                onChange={(e) => setCreatorHandle(e.target.value)}
                placeholder="@handle"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
              />
            </div>
          </div>

          {/* Eating Type & Macros */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                Scene / Setting
              </label>
              <input
                suppressHydrationWarning
                type="text"
                value={eatingType}
                onChange={(e) => setEatingType(e.target.value)}
                placeholder="e.g. dining at the patio"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
                Nutrition Highlights
              </label>
              <input
                suppressHydrationWarning
                type="text"
                value={macrosText}
                onChange={(e) => setMacrosText(e.target.value)}
                placeholder="e.g. 48g Protein"
                className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
              />
            </div>
          </div>

          {/* Caption / Viral Hook */}
          <div>
            <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
              Short Description / Caption *
            </label>
            <textarea
              suppressHydrationWarning
              rows={2}
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. Great high-protein burger cooked in beef tallow with fresh avocado"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-xs font-semibold text-[#F5F7F3] mb-1">
              Diet &amp; Quality Tags (comma separated)
            </label>
            <input
              suppressHydrationWarning
              type="text"
              value={tagsInput}
              onChange={(e) => setTagsInput(e.target.value)}
              placeholder="seed-oil-free, grass-fed, gluten-free"
              className="w-full px-3.5 py-2.5 rounded-xl bg-[#0F231B] text-[#F5F7F3] border border-[#1B3B2F] text-xs font-medium placeholder:text-[#A8B5AE]/60 focus:outline-none focus:border-[#35E27F] shadow-xs"
            />
          </div>

          {/* Footer Submit */}
          <div className="pt-2 flex items-center justify-end gap-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2.5 rounded-xl bg-transparent hover:bg-[#0F231B] text-[#A8B5AE] hover:text-[#F5F7F3] text-xs font-semibold transition-all cursor-pointer"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={success}
              className="px-6 py-2.5 rounded-xl bg-[#35E27F] hover:bg-[#44eb8c] text-[#07130F] text-xs font-bold transition-all cursor-pointer flex items-center gap-2 active:scale-95 disabled:opacity-50"
            >
              <Sparkles className="w-4 h-4 text-[#07130F]" />
              <span>Share Video</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
