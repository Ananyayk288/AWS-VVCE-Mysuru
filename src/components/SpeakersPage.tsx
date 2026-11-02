'use client';

import React, { useEffect } from 'react';
import { ArrowLeft, Linkedin, Sparkles } from 'lucide-react';
import { allSpeakers, Speaker } from './SpeakersSection';

interface SpeakersPageProps {
  onNavigateHome: () => void;
}

export const SpeakersPage: React.FC<SpeakersPageProps> = ({ onNavigateHome }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-[#EFF0F3] text-[#23303E]">
      <main className="mx-auto w-full max-w-[1720px] px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 md:px-10 md:pt-36 lg:px-20 lg:pt-40">
        {/* Back Link */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="mb-8 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#5A6C86] hover:text-[#23303E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>

        {/* Category Tag matching Reference */}
        <div className="mb-3">
          <span className="font-mono text-xs uppercase tracking-[2.5px] text-[#5A6C86] font-semibold">
            SPEAKERS
          </span>
        </div>

        {/* Page Title & Subtitle Matching Reference */}
        <div className="max-w-3xl">
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#23303E] leading-[0.98] tracking-[-0.045em] font-normal">
            Meet the Speakers
            <br />
            Shaping What&apos;s Next
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#23303E] leading-[1.2] font-light">
            Learn from builders, engineers, and community leaders sharing practical experience from the world of cloud and technology.
          </p>
        </div>

        {/* 4-Column Speaker Card Grid Matching Reference */}
        <div className="mt-12 w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {allSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="group flex flex-col border border-[#A3A7AA]/40 bg-[#23303E] overflow-hidden transition-all duration-300 hover:shadow-2xl hover:border-[#07C2AC]/60"
            >
              {/* Top: Portrait Image */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a232f]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  loading="eager"
                />

                {/* Badge Tag */}
                {speaker.badge && (
                  <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-2.5 py-1 font-bold shadow-sm">
                    {speaker.badge}
                  </span>
                )}
              </div>

              {/* Bottom: Dark Banner Details matching Reference */}
              <div className="bg-[#23303E] p-5 flex flex-col justify-between flex-1 border-t border-[#2D3C4E]">
                <div>
                  {/* Name and LinkedIn Icon */}
                  <div className="flex items-start justify-between gap-3">
                    <h3 className="font-sans text-lg sm:text-xl font-bold text-white tracking-tight group-hover:text-[#D1E5CD] transition-colors whitespace-nowrap">
                      {speaker.name}
                    </h3>
                    {speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white/80 hover:text-[#07C2AC] transition-colors p-0.5 shrink-0"
                        aria-label={`${speaker.name} LinkedIn Profile`}
                      >
                        <Linkedin className="h-5 w-5 fill-current" />
                      </a>
                    )}
                  </div>

                  {/* Role & Company */}
                  <p className="font-mono text-xs uppercase tracking-wider text-[#A3A7AA] mt-1.5 leading-snug">
                    {speaker.role}{' '}
                    {speaker.company && (
                      <span className="text-[#07C2AC] font-semibold">@{speaker.company}</span>
                    )}
                  </p>
                </div>

                {/* Topic / Session */}
                {speaker.topic && (
                  <p className="font-sans text-xs text-[#FAFAFA]/75 mt-3 pt-3 border-t border-[#2D3C4E]/60 leading-relaxed">
                    {speaker.topic}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};
