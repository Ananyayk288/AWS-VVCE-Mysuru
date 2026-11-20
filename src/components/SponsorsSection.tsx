'use client';

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface SponsorItem {
  name: string;
  logo?: string | null;
  url?: string;
  logoClassName?: string;
  label?: string;
}

interface SponsorTier {
  category: string;
  layout: 'full' | 'grid-2' | 'grid-4';
  sponsors: SponsorItem[];
}

export const SponsorsSection: React.FC = () => {
  const tiers: SponsorTier[] = [
    {
      category: 'TITLE SPONSOR',
      layout: 'full',
      sponsors: [
        {
          name: 'Amazon Web Services',
          logo: '/aws_partner.jpeg',
          url: 'https://builder.aws.com/',
        },
      ],
    },
    {
      category: 'VENUE SPONSOR',
      layout: 'full',
      sponsors: [
        {
          name: 'Vidyavardhaka College of Engineering',
          logo: '/vvce_logo.png',
          url: 'https://vvce.ac.in/',
        },
      ],
    },
    {
      category: 'EVENT PARTNERS',
      layout: 'grid-4',
      sponsors: [
        {
          name: 'KonfHub',
          logo: '/konfhub_logo.png',
          url: 'https://konfhub.com/',
          label: 'TICKETING PARTNER',
          logoClassName: 'max-w-[140px] sm:max-w-[170px] max-h-9 sm:max-h-11',
        },
        {
          name: 'Vastram',
          logo: '/vastram_logo.png',
          url: 'https://vastram.net/',
          label: 'EVENT SPONSOR',
          logoClassName: 'max-w-[110px] sm:max-w-[130px] max-h-12 sm:max-h-14',
        },
        {
          name: 'Malabar Gold & Diamonds',
          logo: '/malabar_logo.svg',
          url: 'https://www.malabargoldanddiamonds.com/',
          label: 'EVENT SPONSOR',
          logoClassName: 'max-w-[160px] sm:max-w-[190px] max-h-9 sm:max-h-11',
        },
        {
          name: 'Interactive Solution',
          logo: '/interactive_solution_logo.png',
          url: 'https://interactivesolution.co.in/',
          label: 'EVENT SPONSOR',
          logoClassName: 'max-w-[150px] sm:max-w-[180px] max-h-9 sm:max-h-11',
        },
        {
          name: 'Bimba Hotels',
          logo: '/bimba_hotels_logo.png',
          url: 'https://bimbahotel.com/',
          label: 'EVENT SPONSOR',
          logoClassName: 'max-w-[56px] sm:max-w-[64px] max-h-14 sm:max-h-16',
        },
        {
          name: 'Café Nestaa',
          logo: '/cafe_nestaa_logo.jpg',
          label: 'EVENT SPONSOR',
          logoClassName: 'max-w-[56px] sm:max-w-[64px] max-h-14 sm:max-h-16 rounded-full shadow-sm',
        },
      ],
    },
    {
      category: 'COMMUNITY PARTNER',
      layout: 'grid-4',
      sponsors: [
        {
          name: 'AWS User Groups Mysuru',
          logo: '/aws_user_group_mysuru_logo.png',
          logoClassName: 'max-w-[90%] sm:max-w-[210px] max-h-16 sm:max-h-32',
        },
        {
          name: 'Cloud Native Mysore',
          logo: '/cloud_native_mysore.png',
          logoClassName: 'max-w-[90%] sm:max-w-[210px] max-h-16 sm:max-h-60',
        },
        {
          name: 'AWS User Group Bengaluru',
          logo: '/awsugblr-logo.png',
          url: 'https://www.awsugblr.in/',
          logoClassName: 'max-w-[90%] sm:max-w-[620px] max-h-28 sm:max-h-60',
        },
        {
          name: 'AWS User Group Madurai',
          logo: '/logo-Tx1zCSPp.png',
          url: 'https://www.awsugmdu.in/',
          logoClassName: 'max-w-[90%] sm:max-w-[210px] max-h-16 sm:max-h-32',
        },
      ],
    },
  ];

  return (
    <section 
      id="sponsors" 
      className="flex w-full max-w-full overflow-hidden flex-col items-center justify-center gap-8 p-5 py-12 sm:gap-10 sm:p-8 sm:py-16 md:p-10 lg:gap-16 lg:p-20 bg-white scroll-mt-20"
    >
      {/* Section Header Matching Reference */}
      <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2 lg:gap-16">
        <ScrollReveal variant="fade-left">
          <div className="flex w-full flex-col items-center justify-center gap-4">
            <h2 className="font-sans w-full text-4xl leading-[105%] font-medium tracking-[-0.03em] text-[#23303E] sm:text-5xl">
              Sponsors
            </h2>
            <p className="w-full font-sans text-base leading-[115%] font-light text-[#23303E] sm:text-xl sm:leading-[105%]">
              Backed by organizations helping shape cloud, developer, and technology communities. Previous editions have been supported by ecosystem partners committed to learning, innovation, and community growth.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal variant="fade-right">
          <div className="flex h-full w-full flex-col items-start justify-start lg:items-end">
            <a
              href="mailto:awscloudclub@vvce.ac.in"
              className="cursor-pointer shrink-0 items-center justify-center text-xs font-medium whitespace-nowrap transition-all flex h-11 min-h-11 rounded-none border-none bg-[#23303E] px-5 hover:bg-[#23303E]/80 flex-row gap-2"
            >
              <span className="font-mono text-sm tracking-[-0.02em] text-[#fafafa] uppercase sm:text-base">
                PARTNER WITH US
              </span>
              <ArrowUpRight className="h-5 w-5 text-[#fafafa] shrink-0" />
            </a>
          </div>
        </ScrollReveal>
      </div>

      {/* Sponsor Categories Grid System Matching Reference */}
      <div className="flex w-full flex-col items-center justify-center gap-8 lg:gap-9">
        {tiers.map((tier) => {
          // Special two-row rendering for EVENT PARTNERS:
          // Row 1: Ticketing Partner alone (full width)
          // Row 2: All Event Sponsors together in a 4-column responsive grid
          if (tier.category === 'EVENT PARTNERS') {
            const ticketingSponsors = tier.sponsors.filter((s) => s.label === 'TICKETING PARTNER');
            const eventSponsors = tier.sponsors.filter((s) => s.label !== 'TICKETING PARTNER');

            return (
              <div key={tier.category} className="flex w-full flex-col items-center justify-center gap-3">
                <h3 className="w-full font-mono text-sm tracking-[-0.02em] text-[#5A6C86] uppercase sm:text-base">
                  {tier.category}
                </h3>

                {/* Unified Border Grid: Row 1 = Ticketing Partner, Row 2 = Event Sponsors */}
                <div className="flex w-full flex-wrap border-t border-l border-[#D1E5CD]">
                  {/* Row 1: Ticketing Partner alone in first row — vertically centered stack */}
                  {ticketingSponsors.map((sponsor, idx) => (
                    <div
                      key={`ticket-${idx}`}
                      className="basis-full flex min-h-24 sm:min-h-28 grow items-center justify-center border-r border-b border-[#D1E5CD]"
                    >
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${sponsor.name}`}
                          className="flex h-full w-full flex-col items-center justify-center gap-2 sm:gap-2.5 p-4 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30"
                        >
                          <div className="flex h-10 sm:h-12 items-center justify-center">
                            <img
                              src={sponsor.logo!}
                              alt={sponsor.name}
                              loading="lazy"
                              className="h-auto w-auto object-contain select-none max-w-[140px] sm:max-w-[170px] max-h-9 sm:max-h-11"
                            />
                          </div>
                          <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] text-center">
                            {sponsor.label}
                          </span>
                        </a>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 sm:gap-2.5 p-4 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30">
                          <div className="flex h-10 sm:h-12 items-center justify-center">
                            {sponsor.logo && (
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                loading="lazy"
                                className="h-auto w-auto object-contain select-none max-w-[140px] sm:max-w-[170px] max-h-9 sm:max-h-11"
                              />
                            )}
                          </div>
                          <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] text-center">
                            {sponsor.label}
                          </span>
                        </div>
                      )}
                    </div>
                  ))}

                  {/* Row 2: All five Event Sponsors displayed together in consistent layout */}
                  {eventSponsors.map((sponsor, idx) => (
                    <div
                      key={`sponsor-${idx}`}
                      className="basis-1/2 sm:basis-1/3 lg:basis-1/5 flex min-h-28 sm:min-h-32 min-w-0 grow items-center justify-center border-r border-b border-[#D1E5CD]"
                    >
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${sponsor.name}`}
                          className="flex h-full w-full flex-col items-center justify-center gap-2 sm:gap-2.5 p-3.5 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30"
                        >
                          {/* Standardized Logo Area */}
                          <div className="flex h-14 sm:h-16 items-center justify-center">
                            {sponsor.name === 'Bimba Hotels' ? (
                              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                                <img
                                  src={sponsor.logo!}
                                  alt="Bimba Hotels Logo"
                                  loading="lazy"
                                  className="h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 object-contain select-none shrink-0"
                                />
                                <span className="font-sans font-bold text-sm sm:text-base md:text-lg text-[#23303E] tracking-tight whitespace-nowrap">
                                  Bimba Hotels
                                </span>
                              </div>
                            ) : sponsor.logo ? (
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                loading="lazy"
                                className={`h-auto w-auto object-contain select-none ${
                                  sponsor.logoClassName ?? 'max-w-44 sm:max-w-56 max-h-12 sm:max-h-14'
                                }`}
                              />
                            ) : (
                              <span className="font-mono text-xs uppercase tracking-wider text-[#5A6C86]/60">
                                {sponsor.name}
                              </span>
                            )}
                          </div>

                          {/* Category Label */}
                          {sponsor.label && (
                            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] text-center">
                              {sponsor.label}
                            </span>
                          )}
                        </a>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2 sm:gap-2.5 p-3.5 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30">
                          {/* Standardized Logo Area */}
                          <div className="flex h-14 sm:h-16 items-center justify-center">
                            {sponsor.name === 'Bimba Hotels' ? (
                              <div className="flex items-center justify-center gap-2.5 sm:gap-3">
                                <img
                                  src={sponsor.logo!}
                                  alt="Bimba Hotels Logo"
                                  loading="lazy"
                                  className="h-11 w-11 sm:h-13 sm:w-13 md:h-14 md:w-14 object-contain select-none shrink-0"
                                />
                                <span className="font-sans font-bold text-sm sm:text-base md:text-lg text-[#23303E] tracking-tight whitespace-nowrap">
                                  Bimba Hotels
                                </span>
                              </div>
                            ) : sponsor.logo ? (
                              <img
                                src={sponsor.logo}
                                alt={sponsor.name}
                                loading="lazy"
                                className={`h-auto w-auto object-contain select-none ${
                                  sponsor.logoClassName ?? 'max-w-44 sm:max-w-56 max-h-12 sm:max-h-14'
                                }`}
                              />
                            ) : (
                              <span className="font-mono text-xs uppercase tracking-wider text-[#5A6C86]/60">
                                {sponsor.name}
                              </span>
                            )}
                          </div>

                          {/* Category Label */}
                          {sponsor.label && (
                            <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] text-center">
                              {sponsor.label}
                            </span>
                          )}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            );
          }

          // Default rendering for all other tiers
          return (
            <div key={tier.category} className="flex w-full flex-col items-center justify-center gap-3">
              <h3 className="w-full font-mono text-sm tracking-[-0.02em] text-[#5A6C86] uppercase sm:text-base">
                {tier.category}
              </h3>

              <div className="flex w-full flex-wrap border-t border-l border-[#D1E5CD]">
                {tier.sponsors.map((sponsor, idx) => {
                  const isFullWidth = tier.layout === 'full';
                  const isTwoCol = tier.layout === 'grid-2';
                  const colClass = isFullWidth
                    ? 'basis-full flex min-h-24 grow items-center justify-center border-r border-b border-[#D1E5CD] sm:min-h-28'
                    : isTwoCol
                    ? 'basis-full sm:basis-1/2 flex min-h-32 sm:min-h-36 min-w-0 grow items-center justify-center border-r border-b border-[#D1E5CD]'
                    : sponsor.label
                    ? 'basis-full sm:basis-1/2 lg:basis-1/4 flex min-h-32 sm:min-h-36 min-w-0 grow items-center justify-center border-r border-b border-[#D1E5CD]'
                    : 'basis-1/2 sm:basis-1/2 lg:basis-1/4 flex min-h-20 min-w-0 grow items-center justify-center border-r border-b border-[#D1E5CD] sm:min-h-25';

                  const content = (
                    <>
                      <div className={sponsor.label ? 'flex h-16 sm:h-20 items-center justify-center' : 'flex items-center justify-center'}>
                        {sponsor.logo ? (
                          <img
                            src={sponsor.logo}
                            alt={sponsor.name}
                            loading="lazy"
                            className={`h-auto w-auto object-contain select-none ${
                              sponsor.logoClassName
                                ? sponsor.logoClassName
                                : isFullWidth
                                ? 'max-w-64 sm:max-w-80 max-h-16 sm:max-h-20'
                                : 'max-w-44 sm:max-w-56 max-h-12'
                            }`}
                          />
                        ) : (
                          <span className="font-mono text-xs uppercase tracking-wider text-[#5A6C86]/60">
                            {sponsor.name}
                          </span>
                        )}
                      </div>
                      {sponsor.label && (
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] text-center">
                          {sponsor.label}
                        </span>
                      )}
                    </>
                  );

                  return (
                    <div key={idx} className={colClass}>
                      {sponsor.url ? (
                        <a
                          href={sponsor.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Visit ${sponsor.name}`}
                          className="flex h-full w-full flex-col items-center justify-center gap-2.5 p-4 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30"
                        >
                          {content}
                        </a>
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center gap-2.5 p-4 sm:p-5 transition-colors hover:bg-[#D1E5CD]/30">
                          {content}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
