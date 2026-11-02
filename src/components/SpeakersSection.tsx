'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Linkedin, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export interface Speaker {
  id: string;
  name: string;
  role: string;
  company: string;
  image: string;
  topic?: string;
  badge?: string;
  linkedin?: string;
  isConfirmed?: boolean;
}

// Complete directory of all official speakers for AWS Student Community Day Mysuru 2026
export const allSpeakers: Speaker[] = [
  {
    id: 'jessica-gilmore',
    name: 'Jessica Gilmore',
    role: 'Manager, Community Groups',
    company: 'Amazon',
    image: '/speakers/Jessica.jpg',
    topic: 'Keynote: Empowering Global Builders & Community Growth on AWS',
    badge: 'AWS Keynote',
    linkedin: 'https://www.linkedin.com/in/jessicagilmore1/',
    isConfirmed: true,
  },
  {
    id: 'ravi-kompelle',
    name: 'Ravi Kompelle',
    role: 'Principal Analytics Specialist - ISVs & Startups India',
    company: 'AWS',
    image: '/speakers/ravi-kompelle.jpg',
    topic: 'Keynote: Cloud Transformation, Career Paths & Enterprise Resiliency',
    badge: 'AWS Keynote',
    linkedin: 'https://www.linkedin.com/in/ravikompella',
    isConfirmed: true,
  },
  {
    id: 'vivek-raja',
    name: 'Vivek Raja P\u00A0S',
    role: 'Senior AI Solutions Architect & AWS AI Hero',
    company: 'Aivar Innovations',
    image: '/speakers/vivek-raja.jpg',
    topic: 'Keynote: Architecting Cloud & AI Innovations Across the AWS Ecosystem',
    badge: 'AWS Keynote',
    linkedin: 'https://www.linkedin.com/in/meetvivekraja',
    isConfirmed: true,
  },
  {
    id: 'jones-zachariah-noel',
    name: 'Jones Zachariah Noel N',
    role: 'Developer Advocate',
    company: 'AWS Community',
    image: '/speakers/jones-zachariah-noel.jpg',
    topic: 'Technical Session 1: Serverless Architectures, Cloud Patterns & Builder Tooling',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/jones-zachariah-noel-n',
    isConfirmed: true,
  },
  {
    id: 'ganesh-kumar',
    name: 'Ganesh Kumar',
    role: 'Solutions Architect',
    company: 'AWS Community',
    image: '/speakers/ganesh-kumar.jpg',
    topic: 'Technical Session 2: Enterprise Cloud-Native Data Platforms & Modern Lakehouses',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/ganesh-kumar-ponraj',
    isConfirmed: true,
  },
  {
    id: 'neha-kalbande',
    name: 'Neha Kalbande',
    role: 'Software Engineer',
    company: 'AWS Community',
    image: '/speakers/neha-kalbande.jpg',
    topic: 'Technical Session 3: AI Agents, Agentic Architectures & Modern LLM Orchestration',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/neha-kalbande/',
    isConfirmed: true,
  },
  {
    id: 'dipin-thomas',
    name: 'Dipin Thomas',
    role: 'Lead Engineer',
    company: 'Xero',
    image: '/speakers/dipin-thomas.jpg',
    topic: 'Cloud Infrastructure, Kubernetes & Platform Engineering on AWS',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/dipin-thomas/',
    isConfirmed: true,
  },
  {
    id: 'tejas-gupta',
    name: 'Tejas Gupta',
    role: 'Senior DevOps Engineer',
    company: 'Swiggy',
    image: '/speakers/tejas-gupta.jpg',
    topic: 'Cloud & DevOps Architectures, Resilient Systems & Scale on AWS',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/tejasguptaa',
    isConfirmed: true,
  },
];

interface SpeakersSectionProps {
  onOpenSpeakers?: () => void;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({ onOpenSpeakers }) => {
  const router = useRouter();

  // All confirmed speakers displayed in the reference interactive showcase
  const featuredSpeakers = allSpeakers;

  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState<number>(0);
  const activeSpeaker = featuredSpeakers[activeSpeakerIndex] || featuredSpeakers[0];

  const handleViewAll = (e: React.MouseEvent) => {
    e.preventDefault();
    if (onOpenSpeakers) {
      onOpenSpeakers();
    } else {
      router.push('/speakers');
    }
  };

  return (
    <section 
      id="speakers" 
      className="relative flex w-full max-w-full flex-col items-center justify-center overflow-hidden bg-[#23303E] py-16 sm:py-20 lg:py-24 scroll-mt-20"
    >
      {/* Subtle architectural wavy vector lines in background matching reference */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-10">
        <svg 
          className="absolute -right-24 -top-24 h-[800px] w-[800px] stroke-white/40 fill-none" 
          viewBox="0 0 800 800"
        >
          <path d="M0,200 Q200,100 400,300 T800,200" strokeWidth="1" />
          <path d="M0,250 Q200,150 400,350 T800,250" strokeWidth="1" />
          <path d="M0,300 Q200,200 400,400 T800,300" strokeWidth="1" />
          <path d="M0,350 Q200,250 400,450 T800,350" strokeWidth="1" />
          <path d="M0,400 Q200,300 400,500 T800,400" strokeWidth="1" />
          <path d="M0,450 Q200,350 400,550 T800,450" strokeWidth="1" />
        </svg>
      </div>

      <div className="relative z-10 w-full px-5 sm:px-8 md:px-10 lg:px-20">
        {/* Section Header Matching Reference Website */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <ScrollReveal variant="fade-left">
            <h2 className="font-sans flex flex-col text-4xl sm:text-5xl lg:text-6xl leading-[105%] font-medium tracking-[-0.03em] text-[#FAFAFA]">
              <span>Meet the Speakers</span>
              <span>Shaping What&apos;s Next</span>
            </h2>
          </ScrollReveal>

          <ScrollReveal variant="fade-right">
            <a
              href="/speakers"
              onClick={handleViewAll}
              className="flex h-11 min-h-11 rounded-none border-none bg-[#D1E5CD] px-6 hover:bg-[#D1E5CD]/90 flex-row items-center gap-2 font-mono text-xs sm:text-sm uppercase tracking-wider text-[#23303E] font-bold transition-all duration-200 cursor-pointer self-start md:self-end"
            >
              VIEW ALL SPEAKERS <ArrowRight className="h-4 w-4" />
            </a>
          </ScrollReveal>
        </div>

        {/* Desktop & Tablet: Interactive 2-Column Showcase (Matches Reference 1:1) */}
        <div className="mt-12 hidden md:grid md:grid-cols-[1.25fr_1fr] border-2 border-[#2D3C4E] bg-[#23303E] overflow-hidden">
          {/* Left Column: Speaker Rows */}
          <div className="flex flex-col divide-y-2 divide-[#2D3C4E]">
            {featuredSpeakers.map((speaker, index) => {
              const isActive = index === activeSpeakerIndex;

              return (
                <div
                  key={speaker.id}
                  onMouseEnter={() => setActiveSpeakerIndex(index)}
                  onClick={() => setActiveSpeakerIndex(index)}
                  className={`group relative flex cursor-pointer flex-col justify-center px-6 lg:px-8 transition-all duration-200 select-none ${
                    isActive 
                      ? 'bg-[#2D3C4E] py-4 lg:py-5' 
                      : 'bg-[#23303E] hover:bg-[#2D3C4E]/40 py-3.5 lg:py-4'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 
                      className={`font-sans tracking-tight transition-colors duration-200 whitespace-nowrap ${
                        isActive 
                          ? 'text-2xl lg:text-3xl font-medium text-[#FAFAFA]' 
                          : 'text-xl lg:text-2xl font-normal text-[#FAFAFA]/75 group-hover:text-[#FAFAFA]'
                      }`}
                    >
                      {speaker.name}
                    </h3>

                    {/* LinkedIn icon displayed on active row matching reference */}
                    {isActive && speaker.linkedin && (
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="text-[#FAFAFA]/90 hover:text-[#07C2AC] transition-colors p-1"
                        aria-label={`${speaker.name} LinkedIn Profile`}
                      >
                        <Linkedin className="h-4 w-4 lg:h-5 lg:w-5 fill-current" />
                      </a>
                    )}
                  </div>

                  {/* Active Speaker Details */}
                  {isActive && (
                    <div className="mt-1 flex flex-col gap-0.5">
                      <p className="font-mono text-[11px] lg:text-xs uppercase tracking-wider text-[#D1E5CD]">
                        {speaker.role}{' '}
                        {speaker.company && (
                          <span className="text-[#07C2AC] font-bold">@{speaker.company}</span>
                        )}
                      </p>
                      {speaker.topic && (
                        <p className="font-sans text-xs text-[#FAFAFA]/80 mt-0.5 leading-snug line-clamp-2">
                          {speaker.topic}
                        </p>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* Right Column: Featured High-Resolution Portrait Image of Active Speaker */}
          <div className="relative border-l-2 border-[#2D3C4E] bg-[#1a232f] flex items-end justify-center overflow-hidden min-h-[580px] lg:min-h-[640px]">
            {activeSpeaker && activeSpeaker.image ? (
              <>
                <img
                  src={activeSpeaker.image}
                  alt={activeSpeaker.name}
                  className="h-full w-full object-cover object-top transition-all duration-300"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#23303E] via-[#23303E]/20 to-transparent opacity-90" />
                
                <div className="absolute bottom-6 left-6 right-6 z-10">
                  <div className="flex items-center justify-between mb-2">
                    {activeSpeaker.badge && (
                      <span className="font-mono text-[10px] uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-2.5 py-1 font-bold inline-block">
                        {activeSpeaker.badge}
                      </span>
                    )}
                    {activeSpeaker.linkedin && (
                      <a
                        href={activeSpeaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 bg-[#23303E]/90 border border-[#D1E5CD]/40 text-[#FAFAFA] hover:bg-[#D1E5CD] hover:text-[#23303E] px-3 py-1.5 font-mono text-xs font-semibold transition-colors"
                        aria-label={`${activeSpeaker.name} LinkedIn Profile`}
                      >
                        <Linkedin className="h-4 w-4 fill-current" />
                        <span>LinkedIn</span>
                      </a>
                    )}
                  </div>
                  <p className="font-sans text-2xl font-bold text-white">{activeSpeaker.name}</p>
                  <p className="font-mono text-xs text-[#A3A7AA] uppercase tracking-wider mt-0.5">
                    {activeSpeaker.role}{' '}
                    {activeSpeaker.company && (
                      <span className="text-[#07C2AC] font-semibold">@{activeSpeaker.company}</span>
                    )}
                  </p>
                  {activeSpeaker.topic && (
                    <p className="mt-2 font-sans text-xs text-[#FAFAFA]/85 leading-snug">
                      {activeSpeaker.topic}
                    </p>
                  )}
                </div>
              </>
            ) : null}
          </div>
        </div>

        {/* Mobile View: 2x2 Featured Grid Matching Reference Mobile Layout */}
        <div className="mt-8 grid grid-cols-2 border border-[#2D3C4E] md:hidden">
          {featuredSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="flex flex-col border border-[#2D3C4E] bg-[#23303E] overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a232f]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover object-top"
                />
                {speaker.badge && (
                  <span className="absolute top-2 left-2 font-mono text-[8px] uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-1.5 py-0.5 font-bold">
                    {speaker.badge}
                  </span>
                )}
              </div>

              {/* Bottom Info Bar matching Reference Mobile */}
              <div className="p-3.5 flex flex-col justify-between flex-1 bg-[#23303E]">
                <div className="flex items-center justify-between gap-1 mb-1">
                  <h3 className="font-sans text-xs sm:text-sm font-bold text-[#FAFAFA] uppercase tracking-tight whitespace-nowrap line-clamp-1">
                    {speaker.name}
                  </h3>
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FAFAFA]/80 hover:text-[#07C2AC] p-0.5 shrink-0"
                      aria-label={`${speaker.name} LinkedIn Profile`}
                    >
                      <Linkedin className="h-3.5 w-3.5 fill-current" />
                    </a>
                  )}
                </div>

                <p className="font-mono text-[10px] uppercase tracking-wider text-[#A3A7AA] line-clamp-1">
                  {speaker.role}{' '}
                  {speaker.company && (
                    <span className="text-[#07C2AC] font-semibold">@{speaker.company}</span>
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View All Speakers Button */}
        <div className="mt-6 flex justify-center md:hidden">
          <a
            href="/speakers"
            onClick={handleViewAll}
            className="w-full flex h-11 items-center justify-center gap-2 bg-[#D1E5CD] font-mono text-xs uppercase tracking-wider text-[#23303E] font-bold hover:bg-[#D1E5CD]/90 transition-colors"
          >
            <span>VIEW ALL 8 SPEAKERS</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
