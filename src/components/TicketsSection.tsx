'use client';

import React, { useEffect } from 'react';
import { Check } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const TicketsSection: React.FC = () => {
  useEffect(() => {
    if (typeof document === 'undefined') return;

    // Helper to ensure KonfHub widget iframe receives the required btnColor parameter.
    // Without btnColor in the URL, KonfHub's widget CSS sets '--widget-button: auto',
    // which makes the checkout "Proceed" button transparent with white text (blank white button).
    const appendBtnColor = (urlStr: string) => {
      if (typeof urlStr === 'string' && urlStr.includes('konfhub.com/widget/') && !urlStr.includes('btnColor')) {
        const delimiter = urlStr.includes('?') ? '&' : '?';
        return `${urlStr}${delimiter}btnColor=23303E&btnBg=23303E`;
      }
      return urlStr;
    };

    const originalSrcDesc = Object.getOwnPropertyDescriptor(HTMLIFrameElement.prototype, 'src');
    if (originalSrcDesc && originalSrcDesc.set) {
      Object.defineProperty(HTMLIFrameElement.prototype, 'src', {
        set(val: string) {
          return originalSrcDesc.set!.call(this, appendBtnColor(val));
        },
        get() {
          return originalSrcDesc.get!.call(this);
        },
        configurable: true,
      });
    }

    const originalSetAttribute = HTMLIFrameElement.prototype.setAttribute;
    HTMLIFrameElement.prototype.setAttribute = function (name: string, val: string) {
      if (name.toLowerCase() === 'src') {
        val = appendBtnColor(val);
      }
      return originalSetAttribute.call(this, name, val);
    };

    // Create a dedicated top-level portal root attached to document.body
    // This isolates the KonfHub modal from any CSS transforms, clipping, or card hover transitions.
    let portal = document.getElementById('konfhub-portal-root');
    if (!portal) {
      portal = document.createElement('div');
      portal.id = 'konfhub-portal-root';
      document.body.appendChild(portal);
    }

    // Inject the exact official KonfHub widget script if not already present
    if (!portal.querySelector('script[button_id="btn_7129a9d5f0e9"]')) {
      const script = document.createElement('script');
      script.src = 'https://widget.konfhub.com/widget.js';
      script.setAttribute('button_id', 'btn_7129a9d5f0e9');
      script.async = true;
      portal.appendChild(script);
    }

    // Scroll lock observer: Lock body scroll when the popup is open, restore when closed,
    // and ensure any existing iframe also has the btnColor parameter.
    const observer = new MutationObserver(() => {
      const modal = document.querySelector('.modal-container-wrapper');
      if (modal) {
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }

      const iframe = document.querySelector<HTMLIFrameElement>('.konfhub-buttons-ifrm');
      if (iframe && iframe.src && iframe.src.includes('konfhub.com/widget/') && !iframe.src.includes('btnColor')) {
        iframe.src = appendBtnColor(iframe.src);
      }
    });

    observer.observe(document.body, { childList: true, subtree: true });

    // Backdrop click-to-close handler
    const handleBackdropClick = (e: MouseEvent) => {
      const modalWrapper = document.querySelector('.modal-container-wrapper');
      if (!modalWrapper) return;
      const iframeButtons = modalWrapper.querySelector('.iframe-konfhub-buttons');
      if (
        iframeButtons &&
        !iframeButtons.contains(e.target as Node) &&
        modalWrapper.contains(e.target as Node)
      ) {
        const closeBtn = modalWrapper.querySelector<HTMLButtonElement>('.iframe-konfhub-close-btn');
        if (closeBtn) {
          closeBtn.click();
        }
      }
    };

    window.addEventListener('click', handleBackdropClick, true);

    return () => {
      observer.disconnect();
      window.removeEventListener('click', handleBackdropClick, true);
      document.body.style.overflow = '';
      if (originalSrcDesc) {
        Object.defineProperty(HTMLIFrameElement.prototype, 'src', originalSrcDesc);
      }
      HTMLIFrameElement.prototype.setAttribute = originalSetAttribute;
    };
  }, []);

  const handleOpenKonfHub = () => {
    const triggerBtn = document.querySelector<HTMLButtonElement>('#konfhub-portal-root .reg-button');
    if (triggerBtn) {
      triggerBtn.click();
    } else if (typeof window !== 'undefined' && (window as unknown as { konfhubButton?: (id: string) => void }).konfhubButton) {
      (window as unknown as { konfhubButton: (id: string) => void }).konfhubButton('btn_7129a9d5f0e9');
    }
  };

  const tickets = [
    {
      id: 'super-early-bird',
      title: 'Super Early Bird Tickets',
      subtitle: 'Be Super, Be Early!',
      price: '₹149',
      availability: 'Available Till: 17th Sep 2026, 06:36 PM (GMT+05:30)',
      buttonText: 'GRAB YOUR TICKET',
      features: [
        'Full access to the entire AWS Student Community Day Mysuru 2026 on 21st November 2026',
        'Exclusive event Swags & Goodies',
        'Morning Snacks',
        'Lunch',
        'Hi-Tea',
        'Visit to all sponsor booths and demo areas',
        'Networking opportunities with fellow students, speakers, sponsors, and industry professionals',
        'Digital Certificate of Participation from AWS.',
      ],
    },
    {
      id: 'early-bird',
      title: 'Early Bird Ticket',
      subtitle: 'Early Bird, Be Quick!',
      price: '₹249',
      availability: 'Starts On: 26th Sep 2026, 04:58 PM (GMT+05:30)',
      buttonText: 'GRAB YOUR TICKET',
      badge: 'Avail Off',
      features: [
        'Full access to the entire AWS Student Community Day Mysuru 2026 on 21st November 2026',
        'Exclusive event Swags & Goodies',
        'Morning Snacks',
        'Lunch',
        'Hi-Tea',
        'Visit to all sponsor booths and demo areas',
        'Networking opportunities with fellow students, speakers, sponsors, and industry professionals',
        'Digital Certificate of Participation from AWS.',
      ],
    },
    {
      id: 'regular',
      title: 'Regular',
      subtitle: 'Early Bird, Be Quick!',
      price: '₹349',
      availability: 'Starts On: 22nd Oct 2026, 05:54 PM (GMT+05:30)',
      buttonText: 'GRAB YOUR TICKET',
      features: [
        'Full access to the entire AWS Student Community Day Mysuru 2026 on 21st November 2026',
        'Exclusive event Swags & Goodies',
        'Morning Snacks',
        'Lunch',
        'Hi-Tea',
        'Visit to all sponsor booths and demo areas',
        'Networking opportunities with fellow students, speakers, sponsors, and industry professionals',
        'Digital Certificate of Participation from AWS.',
      ],
    },
  ];

  return (
    <section 
      id="tickets" 
      className="flex w-full flex-col items-start justify-center gap-8 py-16 sm:py-20 lg:py-24 bg-[#D1E5CD] px-5 sm:px-8 md:px-10 lg:px-20 overflow-hidden scroll-mt-20"
    >
      {/* Section Header Matching Reference */}
      <ScrollReveal variant="fade-left" className="w-full max-w-7xl mx-auto">
        <div className="max-w-3xl">
          <h2 className="font-sans text-4xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-[#23303E] leading-[105%]">
            Tickets for every builder
          </h2>
          <p className="mt-3 font-sans text-base leading-[115%] font-light text-[#23303E] sm:text-xl sm:leading-[105%]">
            Join AWS Student Community Day Mysuru 2026 with access to talks, workshops, and community experiences.
          </p>
        </div>
      </ScrollReveal>

      {/* 3-Column Grid Structure for 3 Ticket Tiers */}
      <div className="w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
        {tickets.map((ticket) => (
          <div
            key={ticket.id}
            className="flex flex-col justify-between border border-[#23303E] bg-[#23303E] p-6 sm:p-7 min-h-[620px] rounded-none select-none transition-transform duration-200 hover:-translate-y-1"
          >
            {/* Top Area */}
            <div>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-sans text-base sm:text-lg font-normal text-[#FAFAFA]">
                    {ticket.title}
                  </h3>
                  {ticket.subtitle && (
                    <p className="font-sans text-xs text-[#FAFAFA]/70 mt-0.5">
                      {ticket.subtitle}
                    </p>
                  )}
                </div>
                {ticket.badge && (
                  <span className="font-mono text-[10px] uppercase tracking-wider font-bold bg-[#CDE3CB] text-[#23303E] px-2 py-0.5 rounded-none shrink-0">
                    {ticket.badge}
                  </span>
                )}
              </div>

              {/* Price */}
              <div className="mt-2">
                <span className="font-sans text-3xl sm:text-4xl lg:text-5xl font-normal text-[#FAFAFA] tracking-tight">
                  {ticket.price}
                </span>
                {ticket.availability && (
                  <p className="font-mono text-[11px] text-[#FAFAFA]/65 mt-1.5 leading-snug">
                    {ticket.availability}
                  </p>
                )}
              </div>

              {/* Features List */}
              <ul className="mt-6 flex flex-col gap-2.5">
                {ticket.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-[13px] text-[#FAFAFA]/85 leading-snug">
                    <Check className="h-3.5 w-3.5 text-[#FAFAFA] shrink-0 mt-0.5" strokeWidth={2.5} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom Button */}
            <div className="mt-8 pt-4 border-t border-white/10">
              <button
                type="button"
                onClick={handleOpenKonfHub}
                className="w-full h-11 rounded-none font-mono text-xs uppercase tracking-wider font-bold bg-[#CDE3CB] text-[#23303E] hover:bg-[#CDE3CB]/90 cursor-pointer flex items-center justify-center transition-colors shadow-xs"
              >
                {ticket.buttonText}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
