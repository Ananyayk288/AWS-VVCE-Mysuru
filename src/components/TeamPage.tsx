'use client';

import React, { useEffect } from 'react';
import { ArrowLeft } from 'lucide-react';
import { teamMembers, TeamCard, captainMember, CaptainCard } from './TeamSection';

interface TeamPageProps {
  onNavigateHome: () => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigateHome }) => {
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

        {/* Page Title & Subtitle Matching Reference */}
        <div className="max-w-3xl">
          <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#23303E] leading-[0.98] tracking-[-0.045em] font-medium">
            <span>Meet the Team</span>
            <br />
            <span>Behind the Experience</span>
          </h1>
          <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#23303E] leading-[1.1] font-light">
            Behind every keynote, workshop, and community moment is a team committed to creating an unforgettable experience for every attendee.
          </p>
        </div>

        {/* Standalone Captain Section — First */}
        <div className="mt-12 sm:mt-16 flex flex-col items-center">
          <div className="w-full flex items-center gap-3 mb-6">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#00A4B4] uppercase">
              CAPTAIN
            </span>
            <div className="h-[1px] flex-1 bg-[#CBD2DC]" />
          </div>
          <div className="w-full flex justify-center">
            <CaptainCard member={captainMember} />
          </div>
        </div>

        {/* Core Committee Section — Below the Captain */}
        <div className="mt-12 sm:mt-16 w-full">
          <div className="w-full flex items-center gap-3 mb-6">
            <h2 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#23303E] uppercase">
              CORE COMMITTEE
            </h2>
            <div className="h-[1px] flex-1 bg-[#CBD2DC]" />
          </div>

          {/* Team Grid with 12 Core Committee members */}
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member) => (
              <div key={member.id} className="w-full">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};
