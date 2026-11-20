'use client';

import React, { useRef, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowRight, ChevronLeft, ChevronRight, Linkedin } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface TeamMember {
  id: string;
  name?: string;
  role?: string;
  image?: string;
  linkedin?: string;
  twitter?: string;
}

// Standalone Captain definition
export const captainMember: TeamMember = {
  id: 'team-captain',
  name: 'Yashwanth R',
  role: 'Captain',
  image: '/team/yashwanth.jpg',
};

// 12 official AWS Cloud Club VVCE Core Team members in exact hierarchy and order
export const teamMembers: TeamMember[] = [
  { id: 'team-member-1', name: 'Vibha S', role: 'Secretary', image: '/team/vibha.jpg' },
  { id: 'team-member-2', name: 'Gagan K M', role: 'Technical Lead', image: '/team/gagan.jpg', linkedin: 'https://www.linkedin.com/in/gagankm' },
  { id: 'team-member-3', name: 'Yashas M V', role: 'Tech Lead', image: '/team/yashas_mv.jpg', linkedin: 'https://www.linkedin.com/in/yashas-mv-94a534291' },
  { id: 'team-member-4', name: 'Ananya Chetan', role: 'Event Management Lead', image: '/team/ananya.jpg', linkedin: 'https://www.linkedin.com/in/ananya-chatra-73a86b386' },
  { id: 'team-member-5', name: 'Samrudh BN', role: 'Social Media Lead', image: '/team/samrudh.jpg', linkedin: 'https://www.linkedin.com/in/samrudh-b-n-469b75312' },
  { id: 'team-member-6', name: 'Vinay V', role: 'Chief Editor', image: '/team/vinay.jpg', linkedin: 'https://www.linkedin.com/in/vinayvdesignerdeveloper' },
  { id: 'team-member-7', name: 'Shreya S Bharadwaj', role: 'Co-Editor', image: '/team/shreya.jpg', linkedin: 'https://www.linkedin.com/in/shreya-bharadwaj-b8323532b' },
  { id: 'team-member-8', name: 'K Reethu', role: 'IT Support and Management Lead', image: '/team/reethu.jpg', linkedin: 'https://www.linkedin.com/in/reethu-reddy-93b957331' },
  { id: 'team-member-9', name: 'Yashas U', role: 'Logistics Lead', image: '/team/yashas_u.jpg', linkedin: 'https://www.linkedin.com/in/yashas-u-317074340' },
  { id: 'team-member-10', name: 'Falkia Khan', role: 'Communication Lead', image: '/team/falkia.jpg', linkedin: 'https://www.linkedin.com/in/falkia-khan-2064112b3' },
  { id: 'team-member-11', name: 'Yuvika A Jain', role: 'Treasurer', image: '/team/yuvika.jpg', linkedin: 'https://www.linkedin.com/in/yuvika-a-jain-23161b385' },
  { id: 'team-member-12', name: 'Varsha N', role: 'Documentation Lead', image: '/team/varsha.jpg' },
];

export const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imgError, setImgError] = useState(false);
  const [imgLoaded, setImgLoaded] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) {
        setImgError(true);
      } else {
        setImgLoaded(true);
      }
    }
  }, [member.image]);

  const hasName = Boolean(member.name && member.name.trim().length > 0);
  const hasRole = Boolean(member.role && member.role.trim().length > 0);
  const hasImage = Boolean(member.image && member.image.trim().length > 0 && !imgError);

  return (
    <div className="group relative aspect-[3/4] w-full bg-[#EFF0F3] p-5 sm:p-6 overflow-hidden rounded-none border border-[#CBD2DC]/30 hover:border-[#23303E]/40 transition-all duration-300 flex flex-col select-none">
      {/* Top Header: Name and Socials */}
      <div className="relative z-10 flex items-start justify-between gap-3 w-full shrink-0">
        {hasName ? (
          <div className="min-w-0 pr-1">
            <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-[#23303E]">
              {member.name}
            </h3>
            {hasRole && (
              <p className="mt-1 font-sans text-xs sm:text-sm font-bold text-[#5A6C86] leading-snug">
                {member.role}
              </p>
            )}
          </div>
        ) : (
          /* Blank Placeholder Name Bar */
          <div className="flex flex-col gap-2 pt-1">
            <div className="h-5 w-28 sm:w-32 bg-[#D4D8DF] rounded-none" />
            <div className="h-3.5 w-16 sm:w-20 bg-[#E0E4EA] rounded-none" />
          </div>
        )}

        {/* LinkedIn Icon in neat dark-grey square */}
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name}'s LinkedIn profile`}
            className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center bg-[#23303E] text-white hover:bg-[#0077B5] transition-colors duration-200 shrink-0 mt-0.5 rounded-none"
          >
            <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
          </a>
        ) : null}
      </div>

      {/* Image Area: Positioned directly below member name with small intentional gap */}
      <div className="relative mt-3 sm:mt-4 flex-1 w-full min-h-0 overflow-hidden flex items-end justify-center">
        {/* Colorful Gradient Blob matching reference */}
        <div className="absolute -bottom-6 -right-6 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-tr from-[#98E223]/35 to-[#00DFC0]/45 blur-sm pointer-events-none transition-transform duration-500 group-hover:scale-105" />

        {hasImage && (
          <img
            ref={imgRef}
            src={member.image}
            alt={member.name || 'Team member'}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`relative z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-102 ${
              imgLoaded ? 'block' : 'hidden'
            }`}
          />
        )}

        {(!hasImage || !imgLoaded) && (
          /* Blank Placeholder Silhouette */
          <div className="relative z-10 mb-1 flex flex-col items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity">
            <svg
              className="h-28 w-28 sm:h-32 sm:w-32 text-[#23303E] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

export const CaptainCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [imgLoaded, setImgLoaded] = useState(false);
  const [imgError, setImgError] = useState(false);
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (imgRef.current && imgRef.current.complete) {
      if (imgRef.current.naturalWidth === 0) {
        setImgError(true);
      } else {
        setImgLoaded(true);
      }
    }
  }, [member.image]);

  return (
    <div className="group relative aspect-[3/4] w-full max-w-[280px] sm:max-w-[320px] bg-[#EFF0F3] p-5 sm:p-6 overflow-hidden rounded-none border-2 border-[#00DFC0]/50 hover:border-[#00DFC0] shadow-xl hover:shadow-2xl transition-all duration-300 flex flex-col select-none">
      {/* Top Header: Name, Role and LinkedIn Icon */}
      <div className="relative z-10 flex items-start justify-between gap-3 w-full shrink-0">
        <div className="min-w-0 pr-1">
          <h3 className="font-sans text-xl sm:text-2xl font-bold leading-tight text-[#23303E]">
            {member.name}
          </h3>
          {member.role && (
            <p className="mt-1 font-sans text-xs sm:text-sm font-bold text-[#5A6C86] leading-snug">
              {member.role}
            </p>
          )}
        </div>
        {member.linkedin ? (
          <a
            href={member.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`View ${member.name}'s LinkedIn profile`}
            className="flex h-5 w-5 sm:h-6 sm:w-6 items-center justify-center bg-[#23303E] text-white hover:bg-[#0077B5] transition-colors duration-200 shrink-0 mt-0.5 rounded-none"
          >
            <Linkedin className="h-3 w-3 sm:h-3.5 sm:w-3.5 fill-current" />
          </a>
        ) : null}
      </div>

      {/* Image Area */}
      <div className="relative mt-3 sm:mt-4 flex-1 w-full min-h-0 overflow-hidden flex items-end justify-center">
        {/* Colorful Gradient Blob matching reference */}
        <div className="absolute -bottom-6 -right-6 h-44 w-44 sm:h-52 sm:w-52 rounded-full bg-gradient-to-tr from-[#98E223]/40 to-[#00DFC0]/55 blur-sm pointer-events-none transition-transform duration-500 group-hover:scale-105" />

        {member.image && !imgError && (
          <img
            ref={imgRef}
            src={member.image}
            alt={member.name || 'Captain'}
            onLoad={() => setImgLoaded(true)}
            onError={() => setImgError(true)}
            className={`relative z-10 h-full w-full object-cover object-top transition-transform duration-300 group-hover:scale-102 ${
              imgLoaded ? 'block' : 'hidden'
            }`}
          />
        )}

        {(!member.image || imgError || !imgLoaded) && (
          <div className="relative z-10 mb-1 flex flex-col items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity">
            <svg
              className="h-28 w-28 sm:h-32 sm:w-32 text-[#23303E] fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
          </div>
        )}
      </div>
    </div>
  );
};

interface TeamSectionProps {
  onOpenTeam?: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({ onOpenTeam }) => {
  const router = useRouter();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: 'smooth' });
    }
  };

  return (
    <section
      id="team"
      className="relative w-full max-w-full overflow-hidden bg-[#23303E] p-5 py-12 sm:gap-10 sm:p-8 sm:py-16 md:p-10 lg:gap-16 lg:p-20 scroll-mt-20"
    >
      {/* Background SVG Matching Reference */}
      <img
        src="/team-section-bg.svg"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center select-none"
      />

      <div className="relative z-10 mx-auto w-full max-w-[1720px]">
        {/* Section Header */}
        <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-2 lg:gap-16">
          <ScrollReveal variant="fade-left">
            <div className="flex w-full flex-col items-start justify-start gap-4">
              <h2 className="font-sans flex w-full flex-col gap-1 text-4xl leading-[105%] font-medium tracking-[-0.03em] text-[#FAFAFA] sm:text-5xl">
                <span>Meet the Team</span>
                <span>Behind the Experience</span>
              </h2>
              <p className="flex w-full flex-col gap-0.5 font-sans text-base leading-[115%] font-light text-[#FAFAFA] sm:text-xl sm:leading-[105%]">
                <span>Behind every keynote, workshop, and community moment is a team</span>
                <span>committed to creating an unforgettable experience for every attendee.</span>
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <div className="flex h-full w-full flex-col items-start justify-start lg:items-end">
              <a
                href="/team"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenTeam) {
                    onOpenTeam();
                  } else {
                    router.push('/team');
                  }
                }}
                className="group/button cursor-pointer shrink-0 items-center justify-center border border-transparent bg-clip-padding text-xs font-medium whitespace-nowrap transition-all outline-none select-none flex h-11 min-h-11 rounded-none border-none bg-[#FAFAFA] px-5 text-[#23303E] hover:bg-[#FAFAFA]/80 flex-row gap-2"
              >
                <span className="font-mono text-sm tracking-[-0.02em] text-[#23303E] uppercase sm:text-base">
                  View All
                </span>
                <ArrowRight className="h-5 w-5 text-[#23303E] shrink-0" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Standalone Captain Section — First */}
        <div className="mt-10 sm:mt-12 lg:mt-16 flex flex-col items-center">
          <div className="w-full flex items-center gap-3 mb-6">
            <span className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#00DFC0] uppercase">
              CAPTAIN
            </span>
            <div className="h-[1px] flex-1 bg-[#2D3C4E]" />
          </div>
          <div className="w-full flex justify-center">
            <CaptainCard member={captainMember} />
          </div>
        </div>

        {/* Core Committee Section — Below the Captain */}
        <div className="relative mt-12 sm:mt-16 w-full">
          <div className="w-full flex items-center gap-3 mb-6">
            <h3 className="font-mono text-xs sm:text-sm font-bold tracking-widest text-[#FAFAFA] uppercase">
              CORE COMMITTEE
            </h3>
            <div className="h-[1px] flex-1 bg-[#2D3C4E]" />
          </div>

          <div
            ref={scrollContainerRef}
            className="flex w-full gap-5 overflow-x-auto pb-4 scroll-smooth no-scrollbar"
            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
          >
            {teamMembers.map((member) => (
              <div
                key={member.id}
                className="basis-[80%] sm:basis-[45%] md:basis-[31%] lg:basis-[23.5%] shrink-0"
              >
                <TeamCard member={member} />
              </div>
            ))}
          </div>

          {/* Navigation Controls (< and >) */}
          <div className="mt-8 flex items-center justify-between">
            <button
              type="button"
              onClick={scrollLeft}
              aria-label="Previous team slide"
              className="flex h-11 w-11 items-center justify-center rounded-none bg-[#2D3C4E] text-[#FAFAFA] hover:bg-[#3D4F65] transition-colors cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={scrollRight}
              aria-label="Next team slide"
              className="flex h-11 w-11 items-center justify-center rounded-none bg-[#FAFAFA] text-[#23303E] hover:bg-[#FAFAFA]/80 transition-colors cursor-pointer"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
