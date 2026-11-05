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
  {
    id: 'midhun-ns',
    name: 'Midhun N S',
    role: 'Associate Manager – Cloud Security',
    company: 'AWS Community Builder',
    image: '/speakers/midhun-ns.jpg',
    topic: 'Cloud Security, DevSecOps, SRE & Modern Cloud Architecture on AWS',
    badge: 'AWS Community Builder',
    linkedin: 'https://www.linkedin.com/in/nsmidhun/',
    isConfirmed: true,
  },
  {
    id: 'keerthivasan-kannan',
    name: 'Keerthivasan Kannan',
    role: 'Senior Cloud Engineer',
    company: 'ANZ',
    image: '/speakers/keerthivasan-kannan.jpg',
    topic: 'Cloud Infrastructure, Terraform, DevOps & Multi-Cloud Architecture on AWS',
    badge: 'AWS Community Builder',
    linkedin: 'https://www.linkedin.com/in/keerthivasan-kannan/',
    isConfirmed: true,
  },
  {
    id: 'rashi-dashore',
    name: 'Rashi Dashore',
    role: 'Software Engineer',
    company: 'Rakuten India',
    image: '/speakers/rashi-dashore.jpg',
    topic: 'Cloud-Native Infrastructure, Containers, Distributed Systems & Agentic AI',
    badge: 'AWS Community Builder',
    linkedin: 'https://www.linkedin.com/in/rashi-dashore/',
    isConfirmed: true,
  },
  {
    id: 'vishnu-rachapudi',
    name: 'Vishnu Rachapudi',
    role: 'Cloud & AI Engineer',
    company: 'SUDO Consultants',
    image: '/speakers/vishnu-rachapudi.jpg',
    topic: 'Cloud Security, Generative AI on AWS, Amazon Bedrock & Cloud Modernization',
    badge: 'AWS Community Builder',
    linkedin: 'https://www.linkedin.com/in/vishnu-rachapudi-28956920b/',
    isConfirmed: true,
  },
  {
    id: 'subramanya-navada',
    name: 'Subramanya Navada K R',
    role: 'Software Engineer',
    company: 'JPMorganChase',
    image: '/speakers/subramanya-navada.jpg',
    topic: 'Software Engineering, Machine Learning, Cloud & System AI Architectures',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/subramanya-navada-b27018194/',
    isConfirmed: true,
  },
  {
    id: 'pradyoth-prashanth',
    name: 'Pradyoth Prashanth',
    role: 'Security Engineer II – Gen AI Red Teaming',
    company: 'JPMorganChase',
    image: '/speakers/pradyoth-prashanth.jpg',
    topic: 'AI Security, Gen AI Red Teaming, LLM Security & Cloud Security on AWS',
    badge: 'Session Speaker',
    linkedin: 'https://www.linkedin.com/in/ppradyoth/',
    isConfirmed: true,
  },
];

interface SpeakersSectionProps {
  onOpenSpeakers?: () => void;
}

export const SpeakersSection: React.FC<SpeakersSectionProps> = ({ onOpenSpeakers }) => {
  const router = useRouter();

  // Display a maximum of 5 speakers in the main Speakers section across both desktop and mobile
  const mainSpeakers = allSpeakers.slice(0, 5);

  const [activeSpeakerIndex, setActiveSpeakerIndex] = useState<number>(0);
  const activeSpeaker = mainSpeakers[activeSpeakerIndex] || mainSpeakers[0];

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

        {/* Desktop & Tablet: Interactive 2-Column Showcase (Matches Reference 1:1, Max 5 Speakers) */}
        <div className="mt-12 hidden md:grid md:grid-cols-[1.25fr_1fr] border-2 border-[#2D3C4E] bg-[#23303E] overflow-hidden">
          {/* Left Column: Speaker Rows */}
          <div className="flex flex-col divide-y-2 divide-[#2D3C4E] h-full">
            {mainSpeakers.map((speaker, index) => {
              const isActive = index === activeSpeakerIndex;

              return (
                <div
                  key={speaker.id}
                  onMouseEnter={() => setActiveSpeakerIndex(index)}
                  onClick={() => setActiveSpeakerIndex(index)}
                  className={`group relative flex flex-1 cursor-pointer flex-col justify-center px-6 lg:px-8 transition-all duration-200 select-none py-5 lg:py-6 ${
                    isActive 
                      ? 'bg-[#2D3C4E]' 
                      : 'bg-[#23303E] hover:bg-[#2D3C4E]/40'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <h3 
                      className={`font-sans tracking-tight transition-colors duration-200 whitespace-nowrap ${
                        isActive 
                          ? 'text-3xl lg:text-4xl font-semibold text-[#FAFAFA]' 
                          : 'text-2xl lg:text-[28px] font-normal text-[#FAFAFA]/75 group-hover:text-[#FAFAFA]'
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
                        <Linkedin className="h-5 w-5 lg:h-6 lg:w-6 fill-current" />
                      </a>
                    )}
                  </div>

                  {/* Active Speaker Details */}
                  {isActive && (
                    <div className="mt-2 flex flex-col gap-1">
                      <p className="font-mono text-xs lg:text-[13px] uppercase tracking-wider text-[#D1E5CD]">
                        {speaker.role}{' '}
                        {speaker.company && (
                          <span className="text-[#07C2AC] font-bold">@{speaker.company}</span>
                        )}
                      </p>
                      {speaker.topic && (
                        <p className="font-sans text-xs lg:text-sm text-[#FAFAFA]/80 mt-1 leading-snug line-clamp-2">
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
          <div className="relative border-l-2 border-[#2D3C4E] bg-[#1a232f] flex items-end justify-center overflow-hidden min-h-[500px] lg:min-h-[560px]">
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

        {/* Mobile View: Restored Previous Spacious Layout (Max 5 Speakers) */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 border-t-2 border-l-2 border-[#2D3C4E] md:hidden">
          {mainSpeakers.map((speaker) => (
            <div
              key={speaker.id}
              className="flex flex-col border-r-2 border-b-2 border-[#2D3C4E] bg-[#23303E] overflow-hidden"
            >
              {/* Photo */}
              <div className="relative aspect-[4/5] w-full overflow-hidden bg-[#1a232f]">
                <img
                  src={speaker.image}
                  alt={speaker.name}
                  className="h-full w-full object-cover object-top"
                />
                {speaker.badge && (
                  <span className="absolute top-3 left-3 font-mono text-[9px] uppercase tracking-widest text-[#23303E] bg-[#D1E5CD] px-2 py-0.5 font-bold">
                    {speaker.badge}
                  </span>
                )}
              </div>

              {/* Speaker Information */}
              <div className="p-4 flex flex-col gap-1">
                <div className="flex items-center justify-between">
                  <h3 className="font-sans text-lg font-bold text-[#FAFAFA]">{speaker.name}</h3>
                  {speaker.linkedin && (
                    <a
                      href={speaker.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#FAFAFA] hover:text-[#07C2AC] p-1"
                      aria-label={`${speaker.name} LinkedIn Profile`}
                    >
                      <Linkedin className="h-4 w-4 fill-current" />
                    </a>
                  )}
                </div>
                {(speaker.role || speaker.company) && (
                  <p className="font-mono text-[11px] uppercase tracking-wider text-[#D1E5CD]">
                    {speaker.role}{' '}
                    {speaker.company && (
                      <span className="text-[#07C2AC] font-semibold">@{speaker.company}</span>
                    )}
                  </p>
                )}
                {speaker.topic && (
                  <p className="font-sans text-xs text-[#FAFAFA]/70 mt-1 leading-snug">
                    {speaker.topic}
                  </p>
                )}
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
            <span>VIEW ALL SPEAKERS</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
};
