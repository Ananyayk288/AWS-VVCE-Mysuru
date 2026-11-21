'use client';

import React, { useState, useEffect, useRef } from 'react';
import { X, Gift, Sparkles, Clock, CheckCircle } from 'lucide-react';

interface SwagPopupProps {
  isOpen?: boolean;
  onClose?: () => void;
}

// Module-level variable persists across client-side SPA navigation in the current session
let hasBeenDismissedInNavigation = false;

export const SwagPopup: React.FC<SwagPopupProps> = ({ isOpen: controlledIsOpen, onClose }) => {
  const [internalOpen, setInternalOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const isClosingRef = useRef(false);
  const prevControlledIsOpenRef = useRef(controlledIsOpen);

  // Automatically trigger popup approximately 1 second after homepage load on initial visit / page refresh across all devices
  useEffect(() => {
    if (hasBeenDismissedInNavigation) {
      return;
    }

    const timer = setTimeout(() => {
      if (!hasBeenDismissedInNavigation) {
        setInternalOpen(true);
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const shouldBeOpen = !!controlledIsOpen || internalOpen;

  // Mount when target state is open
  useEffect(() => {
    if (shouldBeOpen && !isMounted) {
      isClosingRef.current = false;
      setIsClosing(false);
      setIsMounted(true);
    }
  }, [shouldBeOpen, isMounted]);

  // Prevent background scrolling while the popup is open
  useEffect(() => {
    if (isMounted && !isClosing) {
      const originalOverflow = document.body.style.overflow;
      const originalPaddingRight = document.body.style.paddingRight;
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
      document.body.style.overflow = 'hidden';

      return () => {
        document.body.style.overflow = originalOverflow;
        document.body.style.paddingRight = originalPaddingRight;
      };
    }
  }, [isMounted, isClosing]);

  const handleClose = () => {
    if (isClosingRef.current) return;
    isClosingRef.current = true;
    hasBeenDismissedInNavigation = true;
    setIsClosing(true);

    // Complete exit animation (400ms) before unmounting from DOM
    setTimeout(() => {
      setIsMounted(false);
      setIsClosing(false);
      setInternalOpen(false);
      if (onClose) {
        onClose();
      }
      isClosingRef.current = false;
    }, 400);
  };

  // If controlledIsOpen transitions from true to false externally, trigger fluid exit
  useEffect(() => {
    if (prevControlledIsOpenRef.current === true && controlledIsOpen === false && isMounted && !isClosingRef.current) {
      handleClose();
    }
    prevControlledIsOpenRef.current = controlledIsOpen;
  }, [controlledIsOpen, isMounted]);

  // Keyboard accessibility: Escape key closes the popup
  useEffect(() => {
    if (!isMounted) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        handleClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isMounted]);

  return (
    <>
      <style>{`
        @keyframes swagBackdropFadeIn {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
        @keyframes swagBackdropFadeOut {
          0% {
            opacity: 1;
          }
          100% {
            opacity: 0;
          }
        }
        @keyframes swagCardEnter {
          0% {
            opacity: 0;
            transform: translate3d(0, 18px, 0) scale(0.94);
          }
          100% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
        }
        @keyframes swagCardExit {
          0% {
            opacity: 1;
            transform: translate3d(0, 0, 0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translate3d(0, 10px, 0) scale(0.97);
          }
        }
        @media (prefers-reduced-motion: reduce) {
          .swag-overlay-anim-in,
          .swag-overlay-anim-out,
          .swag-card-anim-in,
          .swag-card-anim-out {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
          }
        }
      `}</style>
      {isMounted && (
        <div
          className={`fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/60 backdrop-blur-sm select-none overflow-y-auto overscroll-contain ${
            isClosing ? 'swag-overlay-anim-out pointer-events-none' : 'swag-overlay-anim-in'
          }`}
          style={{
            opacity: isClosing ? 1 : 0,
            animation: isClosing
              ? 'swagBackdropFadeOut 400ms cubic-bezier(0.25, 1, 0.5, 1) both'
              : 'swagBackdropFadeIn 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
            willChange: 'opacity',
          }}
          onClick={handleClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="swag-popup-title"
        >
          <div
            className={`relative w-full max-w-[calc(100vw-1.5rem)] sm:max-w-md max-h-[92vh] sm:max-h-[90vh] overflow-y-auto overscroll-contain my-auto bg-[#23303E] border-2 border-[#2D3C4E] p-4 sm:p-6 md:p-8 shadow-2xl ${
              isClosing ? 'swag-card-anim-out' : 'swag-card-anim-in'
            }`}
            style={{
              opacity: isClosing ? 1 : 0,
              transform: isClosing
                ? 'translate3d(0, 0, 0) scale(1)'
                : 'translate3d(0, 18px, 0) scale(0.94)',
              animation: isClosing
                ? 'swagCardExit 400ms cubic-bezier(0.25, 1, 0.5, 1) both'
                : 'swagCardEnter 500ms cubic-bezier(0.22, 1, 0.36, 1) both',
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
            }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Top Close Button */}
            <button
              onClick={handleClose}
              type="button"
              aria-label="Close popup"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 grid size-7 sm:size-8 place-items-center border border-[#2D3C4E] bg-[#1a232f] text-[#A3A7AA] hover:border-[#07C2AC] hover:text-[#07C2AC] cursor-pointer transition-colors"
            >
              <X className="size-4" />
            </button>

            {/* Category Tag */}
            <div className="flex items-center gap-2 mb-3 sm:mb-4 pr-8">
              <span className="font-mono text-[9px] sm:text-[10px] md:text-xs uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-2 sm:px-2.5 py-1 font-bold inline-flex items-center gap-1.5">
                <Sparkles className="size-3 text-[#23303E]" />
                SWAG ALERT
              </span>
            </div>

            {/* Icon & Title */}
            <div className="flex items-start gap-3 sm:gap-4">
              <div className="grid size-10 sm:size-12 md:size-14 shrink-0 place-items-center bg-[#1a232f] border border-[#2D3C4E]">
                <Gift className="size-5 sm:size-6 md:size-7 text-[#07C2AC]" />
              </div>
              <div className="min-w-0 pr-2">
                <h2 id="swag-popup-title" className="font-sans text-xl sm:text-2xl md:text-3xl font-bold text-white tracking-tight leading-tight break-words">
                  SWAG DISTRIBUTION
                </h2>
              </div>
            </div>

            {/* Time Highlight Box */}
            <div className="mt-4 sm:mt-5 flex items-center gap-2 sm:gap-2.5 bg-[#1a232f] border border-[#2D3C4E] p-2.5 sm:p-3.5">
              <Clock className="size-4 text-[#07C2AC] shrink-0" />
              <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-[#A3A7AA]">Time:</span>
                <span className="font-mono text-sm sm:text-base md:text-lg font-bold text-[#D1E5CD] tracking-tight">
                  5:45 PM – 6:00 PM
                </span>
              </div>
            </div>

            {/* Body Description */}
            <p className="mt-3 sm:mt-4 font-sans text-xs sm:text-sm leading-relaxed text-[#A3A7AA]">
              Collect your exclusive AWS Student Community Day Mysuru 2026 goodies after the Valedictory ceremony.
            </p>

            {/* Details Checklist */}
            <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-[#2D3C4E] flex flex-col gap-1.5 text-xs font-mono text-[#D1E5CD]">
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
                <span>Coozies</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="size-3.5 text-[#07C2AC] shrink-0" />
                <span>Pens</span>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-5 sm:mt-6 flex justify-end">
              <button
                onClick={handleClose}
                type="button"
                className="w-full sm:w-auto bg-[#D1E5CD] hover:bg-[#D1E5CD]/90 text-[#23303E] font-mono text-xs font-bold uppercase tracking-wider px-5 sm:px-6 py-2.5 cursor-pointer transition-colors active:scale-[0.98]"
              >
                Got It
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
