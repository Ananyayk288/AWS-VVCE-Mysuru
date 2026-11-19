'use client';

import React from 'react';
import { X, Gift, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface SwagPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SwagPopup: React.FC<SwagPopupProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm transition-all duration-300 select-none animate-in fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="swag-popup-title"
    >
      <div
        className="relative w-full max-w-md overflow-hidden bg-[#23303E] border-2 border-[#2D3C4E] p-6 sm:p-8 shadow-2xl transition-all"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Close Button */}
        <button
          onClick={onClose}
          type="button"
          aria-label="Close popup"
          className="absolute top-4 right-4 grid size-8 place-items-center border border-[#2D3C4E] bg-[#1a232f] text-[#A3A7AA] hover:border-[#07C2AC] hover:text-[#07C2AC] cursor-pointer transition-colors"
        >
          <X className="size-4" />
        </button>

        {/* Category Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="font-mono text-[10px] sm:text-xs uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-2.5 py-1 font-bold inline-flex items-center gap-1.5">
            <Sparkles className="size-3 text-[#23303E]" />
            SWAG ALERT
          </span>
        </div>

        {/* Icon & Title */}
        <div className="flex items-start gap-4">
          <div className="grid size-12 sm:size-14 shrink-0 place-items-center bg-[#1a232f] border border-[#2D3C4E]">
            <Gift className="size-6 sm:size-7 text-[#07C2AC]" />
          </div>
          <div>
            <h2 id="swag-popup-title" className="font-sans text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
              SWAG DISTRIBUTION
            </h2>
          </div>
        </div>

        {/* Time Highlight Box */}
        <div className="mt-5 flex items-center gap-2.5 bg-[#1a232f] border border-[#2D3C4E] p-3 sm:p-3.5">
          <Clock className="size-4 text-[#07C2AC] shrink-0" />
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
            <span className="font-mono text-xs uppercase tracking-wider text-[#A3A7AA]">Time:</span>
            <span className="font-mono text-base sm:text-lg font-bold text-[#D1E5CD] tracking-tight">
              5:15 PM – 5:30 PM
            </span>
          </div>
        </div>

        {/* Body Description */}
        <p className="mt-4 font-sans text-xs sm:text-sm leading-relaxed text-[#A3A7AA]">
          Collect your exclusive AWS Student Community Day Mysuru 2026 goodies after the Valedictory ceremony.
        </p>

        {/* Details Checklist */}
        <div className="mt-4 pt-3 border-t border-[#2D3C4E] flex flex-col gap-1.5 text-xs font-mono text-[#D1E5CD]">
          <div className="flex items-center gap-2">
            <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
            <span>Event Book</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
            <span>Community Stickers</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
            <span>Water Bottle</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
            <span>Bottle Holder</span>
          </div>
          <div className="flex items-center gap-2">
            <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
            <span>Pens</span>
          </div>
        </div>

        {/* Action Button */}
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            type="button"
            className="w-full sm:w-auto bg-[#D1E5CD] hover:bg-[#D1E5CD]/90 text-[#23303E] font-mono text-xs font-bold uppercase tracking-wider px-6 py-2.5 cursor-pointer transition-colors"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
