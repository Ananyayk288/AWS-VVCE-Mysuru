'use client';

import React, { useState } from 'react';
import { ChevronDown, Linkedin, ArrowLeft } from 'lucide-react';

/* ─── Interfaces & Types ─────────────────────────────────────────────────── */

type TrackType = 'AI/ML' | 'DevOps' | 'Security';

interface SpeakerInfo {
  name: string;
  role?: string;
  company?: string;
  image: string;
  linkedin?: string;
}

interface SimpleRow {
  kind: 'simple';
  id: string;
  time: string;
  title: string;
  isBreak?: boolean;
  description?: string;
  speakers?: SpeakerInfo[];
}

interface SessionSlot {
  id: string;
  track: TrackType;
  speakers: SpeakerInfo[];
  isJoint?: boolean;
  description?: string;
}

interface AccordionSlotRow {
  kind: 'accordion';
  id: string;
  time: string;
  sessions: SessionSlot[];
}

type ScheduleItem = SimpleRow | AccordionSlotRow;

interface SchedulePageProps {
  onNavigateHome: () => void;
}

/* ─── SchedulePage Component ─────────────────────────────────────────────── */

export const SchedulePage: React.FC<SchedulePageProps> = ({ onNavigateHome }) => {
  // Independent accordion state — all four time slots collapsed initially
  const [openSlots, setOpenSlots] = useState<Record<string, boolean>>({
    'slot-1115': false,
    'slot-1200': false,
    'slot-1400': false,
    'slot-1445': false,
  });

  // State for simple rows (keynotes, breaks) details toggle
  const [expandedSimpleId, setExpandedSimpleId] = useState<string | null>(null);

  const toggleSlot = (id: string) => {
    setOpenSlots((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const toggleSimple = (id: string) => {
    setExpandedSimpleId((prev) => (prev === id ? null : id));
  };

  const scheduleItems: ScheduleItem[] = [
    {
      kind: 'simple',
      id: 'checkin',
      time: '8:00 AM – 8:45 AM',
      title: 'Check-in & Registrations',
      isBreak: true,
      description: 'Check-in, badge collection, morning refreshments, and networking with fellow student builders, community leads, and sponsors. Registrations close promptly at 8:45 AM.',
    },
    {
      kind: 'simple',
      id: 'inauguration',
      time: '9:00 AM – 9:30 AM',
      title: 'Inauguration Ceremony',
      isBreak: true,
      description: 'Official inauguration ceremony and lighting of the lamp by dignitaries, faculty coordinators, and AWS Student Builder Group VVCE community leads.',
    },
    {
      kind: 'simple',
      id: 'keynote-ravi',
      time: '9:30 AM – 9:55 AM',
      title: 'Keynote by Ravi Kompelle',
      description: 'Opening keynote by Ravi Kompelle exploring cloud transformation, career opportunities on AWS, and architecting resilient enterprise systems.',
      speakers: [
        {
          name: 'Ravi Kompelle',
          role: 'Principal Analytics Specialist — ISVs & Startups India',
          company: 'AWS',
          image: '/speakers/ravi-kompelle.jpg',
          linkedin: 'https://www.linkedin.com/in/ravikompella',
        },
      ],
    },
    {
      kind: 'simple',
      id: 'keynote-vivek',
      time: '9:55 AM – 10:20 AM',
      title: 'Keynote by Vivek\u00A0Raja\u00A0P\u00A0S',
      description: 'Keynote session by Vivek Raja P S sharing deep insights on cloud architecture, AI innovations, and community building across the AWS ecosystem.',
      speakers: [
        {
          name: 'Vivek\u00A0Raja\u00A0P\u00A0S',
          role: 'Senior AI Solutions Architect & AWS AI Hero',
          company: 'Aivar Innovations',
          image: '/speakers/vivek-raja-hd.jpg',
          linkedin: 'https://www.linkedin.com/in/meetvivekraja',
        },
      ],
    },
    {
      kind: 'simple',
      id: 'keynote-vijay',
      time: '10:20 AM – 10:45 AM',
      title: 'Keynote by Vijay Rajagopal',
      description: 'Keynote address by Vijay Rajagopal exploring enterprise conversational and agentic AI adoption, cloud transformation, and real-world deployment at scale.',
      speakers: [
        {
          name: 'Vijay Rajagopal',
          role: 'Country Leader & Head of Business',
          company: 'Nugget AI by Zomato (Eternal Group)',
          image: '/speakers/vijay-rajagopal.jpg',
          linkedin: 'https://www.linkedin.com/in/vijayrajagopal/',
        },
      ],
    },
    {
      kind: 'simple',
      id: 'tea',
      time: '10:45 AM – 11:15 AM',
      title: 'Tea Break',
      isBreak: true,
      description: 'Morning tea break, refreshments, and hallway networking with speakers, mentors, and fellow student builders.',
    },
    // ── Four interactive accordion time-slot rows with track identification ─
    {
      kind: 'accordion',
      id: 'slot-1115',
      time: '11:15 AM – 12:00 PM',
      sessions: [
        {
          id: 'jones',
          track: 'AI/ML',
          speakers: [
            {
              name: 'Jones Zachariah Noel N',
              image: '/speakers/jones-zachariah-noel.jpg',
              linkedin: 'https://www.linkedin.com/in/jones-zachariah-noel-n',
            },
          ],
        },
        {
          id: 'dipin',
          track: 'DevOps',
          speakers: [
            {
              name: 'Dipin Thomas',
              image: '/speakers/dipin-thomas.jpg',
              linkedin: 'https://www.linkedin.com/in/dipin-thomas',
            },
          ],
        },
        {
          id: 'tejas',
          track: 'Security',
          speakers: [
            {
              name: 'Tejas Gupta',
              image: '/speakers/tejas-gupta.jpg',
              linkedin: 'https://www.linkedin.com/in/tejas-gupta',
            },
          ],
        },
      ],
    },
    {
      kind: 'accordion',
      id: 'slot-1200',
      time: '12:00 PM – 12:45 PM',
      sessions: [
        {
          id: 'ganesh',
          track: 'AI/ML',
          speakers: [
            {
              name: 'Ganesh Kumar',
              image: '/speakers/ganesh-kumar.jpg',
              linkedin: 'https://www.linkedin.com/in/ganesh-kumar-ponraj',
            },
          ],
        },
        {
          id: 'keerthivasan',
          track: 'DevOps',
          speakers: [
            {
              name: 'Keerthivasan',
              image: '/speakers/keerthivasan-kannan.jpg',
              linkedin: 'https://www.linkedin.com/in/keerthivasan-kannan',
            },
          ],
        },
        {
          id: 'midhun',
          track: 'Security',
          speakers: [
            {
              name: 'Midhun N S',
              image: '/speakers/midhun-ns.jpg',
              linkedin: 'https://www.linkedin.com/in/nsmidhun/',
            },
          ],
        },
      ],
    },
    {
      kind: 'simple',
      id: 'lunch',
      time: '12:45 PM – 2:00 PM',
      title: 'Lunch Break',
      isBreak: true,
      description: 'Complimentary buffet lunch for attendees, speakers, and volunteers. Sponsor booth visits, product demos, and community networking.',
    },
    {
      kind: 'accordion',
      id: 'slot-1400',
      time: '2:00 PM – 2:45 PM',
      sessions: [
        {
          id: 'yeshwanth',
          track: 'AI/ML',
          speakers: [
            {
              name: 'Yeshwanth L M',
              image: '/speakers/yeshwanth-lm.jpg',
              linkedin: 'https://www.linkedin.com/in/yeshwanth-l-m/',
            },
          ],
        },
        {
          id: 'rashi',
          track: 'DevOps',
          speakers: [
            {
              name: 'Rashi Dashore',
              image: '/speakers/rashi-dashore.jpg',
              linkedin: 'https://www.linkedin.com/in/rashi-dashore',
            },
          ],
        },
        {
          id: 'neha',
          track: 'Security',
          speakers: [
            {
              name: 'Neha Kalbande',
              image: '/speakers/neha-kalbande.jpg',
              linkedin: 'https://www.linkedin.com/in/neha-kalbande/',
            },
          ],
        },
      ],
    },
    {
      kind: 'accordion',
      id: 'slot-1445',
      time: '2:45 PM – 3:30 PM',
      sessions: [
        {
          id: 'saksham',
          track: 'AI/ML',
          speakers: [
            {
              name: 'Saksham Dhull',
              image: '/speakers/saksham-dhull.jpg',
              linkedin: 'https://www.linkedin.com/in/saksham-dhull',
            },
          ],
        },
        {
          id: 'vishnu',
          track: 'DevOps',
          speakers: [
            {
              name: 'Vishnu Rachapudi',
              image: '/speakers/vishnu-rachapudi.jpg',
              linkedin: 'https://www.linkedin.com/in/vishnu-rachapudi',
            },
          ],
        },
        {
          id: 'joint',
          track: 'Security',
          isJoint: true,
          speakers: [
            {
              name: 'P Pradyoth',
              image: '/speakers/pradyoth-prashanth.jpg',
              linkedin: 'https://www.linkedin.com/in/pradyoth-prashanth',
            },
            {
              name: 'Subramanya Navada',
              image: '/speakers/subramanya-navada.jpg',
              linkedin: 'https://www.linkedin.com/in/subramanya-navada',
            },
          ],
        },
      ],
    },
    {
      kind: 'simple',
      id: 'high-tea',
      time: '3:30 PM – 4:00 PM',
      title: 'High Tea',
      isBreak: true,
      description: 'High tea and refreshments break with community conversations and hands-on discussions.',
    },
    {
      kind: 'simple',
      id: 'networking',
      time: '4:00 PM – 4:15 PM',
      title: 'Networking Break',
      isBreak: true,
      description: 'Connect directly with speakers, mentors, community organizers, and sponsor booth representatives.',
    },
    {
      kind: 'simple',
      id: 'panel',
      time: '4:15 PM – 4:45 PM',
      title: 'Panel Discussion',
      description: 'Interactive panel discussion featuring community leaders and AWS experts on Career Paths in Cloud & AI, Community Impact, and Building Scalable Systems.',
    },
    {
      kind: 'simple',
      id: 'valedictory',
      time: '4:45 PM – 5:15 PM',
      title: 'Valedictory',
      description: 'Valedictory ceremony: felicitation of speakers, organizers, and volunteers, award presentations, and closing remarks.',
    },
    {
      kind: 'simple',
      id: 'swag',
      time: '5:15 PM – 5:30 PM',
      title: 'Swag Distribution',
      isBreak: true,
      description: 'Exclusive AWS Community Day swag distribution, certificates, stickers, and group photo session.',
    },
  ];

  /* ── Render Helpers ──────────────────────────────────────────────────── */

  const renderSimpleRow = (row: SimpleRow, isLast: boolean) => {
    const isExpanded = expandedSimpleId === row.id;
    return (
      <div
        key={row.id}
        className={`w-full ${!isLast ? 'border-b border-[#A3A7AA]' : ''} ${
          row.isBreak ? 'bg-[#A3A7AA]' : 'bg-[#EFF0F3]'
        }`}
      >
        {/* Desktop Header Row (md and up) - Existing desktop presentation preserved */}
        <div
          onClick={() => toggleSimple(row.id)}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSimple(row.id)}
          className={`hidden md:grid w-full grid-cols-12 items-center gap-2 p-0 transition-colors select-none cursor-pointer ${
            row.isBreak ? 'hover:bg-[#979ba0]' : 'hover:bg-[#23303E]/5'
          }`}
        >
          <div className="col-span-3 px-4 py-5 font-mono text-base text-[#5A6C86]">
            {row.time}
          </div>
          <div className="col-span-5 px-4 py-5 font-mono text-base font-medium text-[#23303E] uppercase">
            {row.title}
          </div>
          <div className="col-span-4 px-4 py-5 flex items-center justify-between gap-3">
            <div className="flex items-center gap-1.5">
              {row.speakers && row.speakers.length > 0 ? (
                row.speakers.map((sp, idx) => (
                  <div
                    key={idx}
                    className="aspect-square size-12 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full"
                    title={sp.name}
                  >
                    <img src={sp.image} alt={sp.name} width={96} height={96} className="h-full w-full object-cover object-center" />
                  </div>
                ))
              ) : !row.isBreak ? (
                <span className="font-mono text-xs text-[#23303E]/50 uppercase">General Session</span>
              ) : null}
            </div>
            <div className="flex items-center text-[#23303E] pr-2">
              <ChevronDown
                className={`size-5 transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
              />
            </div>
          </div>
        </div>

        {/* Mobile Header Row (< md): Title, Time, then Speaker Name FIRST and Photograph IMMEDIATELY AFTER on same horizontal line */}
        <div
          onClick={() => toggleSimple(row.id)}
          role="button"
          tabIndex={0}
          aria-expanded={isExpanded}
          onKeyDown={(e) => (e.key === 'Enter' || e.key === ' ') && toggleSimple(row.id)}
          className={`flex md:hidden w-full flex-col p-4 transition-colors select-none cursor-pointer ${
            row.isBreak ? 'hover:bg-[#979ba0]' : 'hover:bg-[#23303E]/5'
          }`}
        >
          <div className="flex items-center justify-between gap-2">
            <span className="font-mono text-xs text-[#5A6C86] uppercase tracking-wider">{row.time}</span>
            <ChevronDown
              className={`size-4 text-[#23303E] transition-transform duration-200 ${isExpanded ? 'rotate-180' : ''}`}
            />
          </div>
          <h3 className="font-mono text-sm font-medium text-[#23303E] uppercase mt-1">
            {row.title}
          </h3>
          {row.speakers && row.speakers.length > 0 && (
            <div className="flex items-center gap-3 mt-2 pt-1">
              {row.speakers.map((sp, idx) => (
                <div key={idx} className="flex flex-row items-center gap-2.5 flex-nowrap">
                  <span className="font-sans text-sm font-medium text-[#23303E] leading-snug">{sp.name}</span>
                  <div className="aspect-square size-12 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full shadow-sm">
                    <img src={sp.image} alt={sp.name} width={96} height={96} className="h-full w-full object-cover object-center" />
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {isExpanded && row.description && (
          <div className="grid grid-cols-1 md:grid-cols-12 md:gap-2 p-4 pt-0 md:p-0 border-t border-[#A3A7AA]/50 pb-5">
            <div className="hidden md:block md:col-span-3" />
            <div className="md:col-span-5 md:px-4 md:py-4 font-mono text-sm text-[#23303E] leading-relaxed">
              <p>{row.description}</p>
            </div>
            <div className="md:col-span-4 md:px-4 md:py-4 flex flex-col gap-4">
              {row.speakers && row.speakers.length > 0 ? (
                row.speakers.map((sp, sIdx) => (
                  <div key={sIdx} className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3">
                      <div className="aspect-square size-14 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full">
                        <img src={sp.image} alt={sp.name} width={112} height={112} className="h-full w-full object-cover object-center" />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-mono text-sm tracking-[0.02em] text-[#23303E] uppercase font-medium">
                          {sp.name}
                        </span>
                        {sp.company && (
                          <span className="font-mono text-xs tracking-[0.02em] text-[#5A6C86] uppercase">
                            {sp.company}
                          </span>
                        )}
                      </div>
                    </div>
                    {sp.linkedin && (
                      <a
                        href={sp.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`LinkedIn for ${sp.name}`}
                        className="bg-[#EEF0F3] border border-[#23303E]/20 size-8 flex items-center justify-center text-[#23303E] hover:bg-[#23303E] hover:text-[#FAFAFA] transition-colors shrink-0"
                      >
                        <Linkedin className="size-4" />
                      </a>
                    )}
                  </div>
                ))
              ) : (
                <div className="font-mono text-xs text-[#5A6C86] uppercase">
                  {row.isBreak ? 'General Session' : 'Details'}
                </div>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  const renderAccordionRow = (row: AccordionSlotRow, isLast: boolean) => {
    const isOpen = !!openSlots[row.id];
    return (
      <div
        key={row.id}
        className={`w-full ${!isLast ? 'border-b border-[#A3A7AA]' : ''} bg-[#EFF0F3]`}
        data-testid={`accordion-row-${row.id}`}
      >
        {/* Accordion Row Header: Time Range + Chevron */}
        <button
          type="button"
          onClick={() => toggleSlot(row.id)}
          aria-expanded={isOpen}
          aria-controls={`panel-${row.id}`}
          className="flex w-full items-center justify-between p-4 md:px-4 md:py-5 transition-colors cursor-pointer hover:bg-[#23303E]/5 text-left focus:outline-none select-none group"
        >
          <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
            <span className="font-mono text-base md:text-lg font-medium text-[#23303E] tracking-tight">
              {row.time}
            </span>
          </div>

          <div className="shrink-0 size-8 sm:size-9 flex items-center justify-center border border-[#23303E]/30 rounded-none transition-colors group-hover:bg-[#23303E]/10 bg-transparent pr-0">
            <ChevronDown
              className={`size-5 text-[#23303E] transition-transform duration-300 ${
                isOpen ? 'rotate-180' : ''
              }`}
            />
          </div>
        </button>

        {/* Smoothly Animated Expandable Speaker List */}
        <div
          id={`panel-${row.id}`}
          className={`overflow-hidden transition-all duration-300 ease-in-out ${
            isOpen ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
          }`}
        >
          <div className="border-t border-[#A3A7AA]/50 bg-[#EFF0F3]">
            {row.sessions.map((sess, sIdx) => {
              const isJoint = sess.isJoint;
              return (
                <React.Fragment key={sess.id}>
                  {/* Desktop Layout (md and up) - Existing desktop presentation preserved */}
                  <div
                    className={`hidden md:flex items-center justify-between gap-6 px-6 py-4 ${
                      sIdx < row.sessions.length - 1 ? 'border-b border-[#A3A7AA]/30' : ''
                    }`}
                  >
                    <div className="flex items-center gap-4 flex-1 min-w-0">
                      {isJoint ? (
                        <div className="flex items-center gap-1.5 shrink-0">
                          {sess.speakers.map((sp, pIdx) => (
                            <div
                              key={pIdx}
                              className="aspect-square size-11 md:size-12 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full shadow-sm"
                              title={sp.name}
                            >
                              <img
                                src={sp.image}
                                alt={sp.name}
                                className="size-full object-cover object-top"
                              />
                            </div>
                          ))}
                        </div>
                      ) : (
                        <div
                          className="aspect-square size-13 md:size-14 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full shadow-sm"
                          title={sess.speakers[0].name}
                        >
                          <img
                            src={sess.speakers[0].image}
                            alt={sess.speakers[0].name}
                            className="size-full object-cover object-top"
                          />
                        </div>
                      )}

                      <div className="flex flex-col min-w-0 flex-1">
                        <span className="font-sans text-base md:text-lg font-medium text-[#23303E] leading-snug">
                          {sess.speakers.map((sp) => sp.name).join(' & ')}
                        </span>
                        <span className="text-xs md:text-sm font-medium tracking-wide text-[#5A6C86] mt-0.5">
                          {sess.track} Track
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0 text-right">
                      <span className="font-mono text-xs md:text-sm uppercase tracking-wider text-[#5A6C86] whitespace-nowrap">
                        {row.time}
                      </span>
                      {sess.speakers.map((sp) =>
                        sp.linkedin ? (
                          <a
                            key={sp.name}
                            href={sp.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`LinkedIn for ${sp.name}`}
                            className="hidden sm:flex bg-[#EEF0F3] border border-[#23303E]/20 size-8 items-center justify-center text-[#23303E] hover:bg-[#23303E] hover:text-[#FAFAFA] transition-colors shrink-0"
                          >
                            <Linkedin className="size-4" />
                          </a>
                        ) : null
                      )}
                    </div>
                  </div>

                  {/* Mobile Layout (< md): Speaker Name FIRST and Photograph(s) IMMEDIATELY AFTER on same horizontal line */}
                  <div
                    className={`flex md:hidden flex-col gap-1.5 p-4 ${
                      sIdx < row.sessions.length - 1 ? 'border-b border-[#A3A7AA]/30' : ''
                    }`}
                  >
                    <div className="flex flex-row items-center gap-2 min-w-0 flex-nowrap">
                      <span
                        className={`font-sans ${
                          isJoint ? 'text-xs md:text-base' : 'text-sm md:text-base'
                        } font-medium text-[#23303E] leading-snug whitespace-nowrap`}
                      >
                        {sess.speakers.map((sp) => sp.name).join(' & ')}
                      </span>
                      {/* Circular photograph(s) immediately after the speaker name */}
                      <div className="flex items-center gap-1.5 shrink-0">
                        {sess.speakers.map((sp, pIdx) => (
                          <div
                            key={pIdx}
                            className={`aspect-square ${
                              isJoint ? 'size-9 md:size-11' : 'size-11'
                            } shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20 rounded-full shadow-sm`}
                            title={sp.name}
                          >
                            <img
                              src={sp.image}
                              alt={sp.name}
                              className="size-full object-cover object-top"
                            />
                          </div>
                        ))}
                      </div>
                    </div>

                    <div className="flex items-center justify-between text-xs text-[#5A6C86] font-medium tracking-wide mt-0.5">
                      <span>{sess.track} Track</span>
                      <span className="font-mono text-xs uppercase tracking-wider">{row.time}</span>
                    </div>
                  </div>
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    );
  };

  /* ── Main Render ─────────────────────────────────────────────────────── */

  return (
    <div className="min-h-screen bg-[#EFF0F3] text-[#23303E]">
      <main className="flex w-full flex-col items-start justify-start p-5 pt-28 pb-16 sm:p-8 sm:pt-32 sm:pb-20 md:p-10 md:pt-36 lg:p-20 lg:pt-40 bg-[#EFF0F3]">
        {/* Back Link */}
        <button
          type="button"
          onClick={onNavigateHome}
          className="mb-8 flex items-center gap-2 font-mono text-sm uppercase tracking-wider text-[#5A6C86] hover:text-[#23303E] transition-colors cursor-pointer"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </button>

        {/* Page Title & Subtitle */}
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#23303E] leading-[0.98] tracking-[-0.045em] font-normal">
          Schedule
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#23303E] leading-[1.1] max-w-3xl font-light">
          From inspiring keynotes and technical deep dives to hands-on discussions and networking, explore everything happening at AWS Student Community Day Mysuru 2026.
        </p>

        {/* Schedule Table Container */}
        <div className="w-full border border-[#A3A7AA] bg-[#EFF0F3] mt-8">
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-2 w-full border-b border-[#A3A7AA]">
            <div className="col-span-3 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              TIME
            </div>
            <div className="col-span-5 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              SESSION / PROGRAM
            </div>
            <div className="col-span-4 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              DETAILS / SPEAKERS
            </div>
          </div>

          {/* Schedule Rows */}
          {scheduleItems.map((item, idx) => {
            const isLast = idx === scheduleItems.length - 1;
            if (item.kind === 'simple') {
              return renderSimpleRow(item, isLast);
            }
            return renderAccordionRow(item, isLast);
          })}
        </div>
      </main>
    </div>
  );
};
