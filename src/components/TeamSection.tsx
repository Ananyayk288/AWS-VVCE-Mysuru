import React, { useRef } from 'react';
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

// 8 blank placeholder cards as requested by the user, ready to be populated when member details are confirmed.
export const teamMembers: TeamMember[] = [
  { id: 'team-member-1', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-2', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-3', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-4', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-5', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-6', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-7', name: '', role: '', image: '', linkedin: '', twitter: '' },
  { id: 'team-member-8', name: '', role: '', image: '', linkedin: '', twitter: '' },
];

export const TeamCard: React.FC<{ member: TeamMember }> = ({ member }) => {
  const hasName = Boolean(member.name && member.name.trim().length > 0);
  const hasRole = Boolean(member.role && member.role.trim().length > 0);
  const hasImage = Boolean(member.image && member.image.trim().length > 0);
  const hasSocial = Boolean(member.linkedin || member.twitter);

  return (
    <div className="group relative aspect-[3/4] w-full bg-[#EFF0F3] p-5 sm:p-6 overflow-hidden rounded-none border border-[#CBD2DC]/30 hover:border-[#23303E]/40 transition-all duration-300 flex flex-col justify-between select-none">
      {/* Top Header: Name and Socials */}
      <div className="relative z-10 flex items-start justify-between gap-3 w-full">
        {hasName ? (
          <div>
            <h3 className="font-sans text-lg sm:text-xl lg:text-2xl font-bold leading-tight text-[#23303E]">
              {member.name}
            </h3>
            {hasRole && (
              <p className="mt-1 font-mono text-xs text-[#5A6C86] uppercase tracking-wider">
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

        {/* Social Link / Placeholder */}
        {hasSocial ? (
          <div className="flex items-center gap-1.5 shrink-0">
            {member.twitter && (
              <a
                href={member.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23303E] hover:text-[#00aa93] transition-colors p-1"
                aria-label="X Profile"
              >
                <svg className="h-4 w-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            )}
            {member.linkedin && (
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#23303E] hover:text-[#00aa93] transition-colors p-1"
                aria-label="LinkedIn Profile"
              >
                <Linkedin className="h-4 w-4 fill-current" />
              </a>
            )}
          </div>
        ) : (
          /* Blank Placeholder Social Icon */
          <div className="flex items-center gap-1.5 shrink-0 pt-1">
            <div className="h-4 w-4 rounded-none bg-[#D4D8DF]/60" />
          </div>
        )}
      </div>

      {/* Center/Bottom Area: Decorative Gradient Blob + Photo / Silhouette */}
      <div className="relative mt-auto flex h-48 sm:h-56 w-full items-end justify-center overflow-hidden">
        {/* Colorful Gradient Blob matching reference */}
        <div className="absolute -bottom-6 -right-6 h-40 w-40 sm:h-48 sm:w-48 rounded-full bg-gradient-to-tr from-[#98E223]/35 to-[#00DFC0]/45 blur-sm pointer-events-none transition-transform duration-500 group-hover:scale-105" />

        {hasImage ? (
          <img
            src={member.image}
            alt={member.name || 'Team member'}
            className="relative z-10 max-h-full w-auto object-contain object-bottom transition-transform duration-300 group-hover:scale-102"
          />
        ) : (
          /* Blank Placeholder Silhouette */
          <div className="relative z-10 mb-1 flex flex-col items-center justify-center opacity-25 group-hover:opacity-40 transition-opacity">
            <svg
              className="h-32 w-32 sm:h-36 sm:w-36 text-[#23303E] fill-current"
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
                    window.history.pushState({}, '', '/team');
                    window.dispatchEvent(new PopStateEvent('popstate'));
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

        {/* Carousel & Card Area with Blank Placeholder Cards */}
        <div className="relative mt-10 w-full sm:mt-12 lg:mt-16">
          <div
            ref={scrollContainerRef}
            className="flex w-full gap-5 overflow-x-auto pb-4 scroll-smooth"
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
