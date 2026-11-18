'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight, ChevronDown } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

type TrackType = 'AI/ML' | 'DevOps' | 'Security';

interface Speaker {
  name: string;
  image: string;
}

interface SessionEntry {
  speakers: Speaker[];
  track: TrackType;
  isJoint?: boolean;
}

interface AccordionSlot {
  id: string;
  time: string;
  sessions: SessionEntry[];
}

interface RegularItem {
  time: string;
  title: string;
  isBreak?: boolean;
  speaker?: Speaker;
}

interface AgendaSectionProps {
  onOpenSchedule?: () => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ onOpenSchedule }) => {
  const router = useRouter();

  // Each accordion time slot expands/collapses independently; all collapsed initially
  const [openSlots, setOpenSlots] = useState<Record<string, boolean>>({
    'slot-1115': false,
    'slot-1200': false,
    'slot-1400': false,
    'slot-1445': false,
  });

  const toggleSlot = (id: string) => {
    setOpenSlots((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  // Exact schedule and authoritative speaker-to-track mapping
  const accordionSlots: AccordionSlot[] = [
    {
      id: 'slot-1115',
      time: '11:15 AM – 12:00 PM',
      sessions: [
        {
          track: 'AI/ML',
          speakers: [{ name: 'Jones Zachariah Noel N', image: '/speakers/jones-zachariah-noel.jpg' }],
        },
        {
          track: 'DevOps',
          speakers: [{ name: 'Dipin Thomas', image: '/speakers/dipin-thomas.jpg' }],
        },
        {
          track: 'Security',
          speakers: [{ name: 'Tejas Gupta', image: '/speakers/tejas-gupta.jpg' }],
        },
      ],
    },
    {
      id: 'slot-1200',
      time: '12:00 PM – 12:45 PM',
      sessions: [
        {
          track: 'AI/ML',
          speakers: [{ name: 'Ganesh Kumar', image: '/speakers/ganesh-kumar.jpg' }],
        },
        {
          track: 'DevOps',
          speakers: [{ name: 'Keerthivasan', image: '/speakers/keerthivasan-kannan.jpg' }],
        },
        {
          track: 'Security',
          speakers: [{ name: 'Yeshwanth L M', image: '/speakers/yeshwanth-lm.jpg' }],
        },
      ],
    },
    {
      id: 'slot-1400',
      time: '2:00 PM – 2:45 PM',
      sessions: [
        {
          track: 'AI/ML',
          speakers: [{ name: 'Saksham Dhull', image: '/speakers/saksham-dhull.jpg' }],
        },
        {
          track: 'DevOps',
          speakers: [{ name: 'Rashi Dashore', image: '/speakers/rashi-dashore.jpg' }],
        },
        {
          track: 'Security',
          speakers: [{ name: 'Midhun N S', image: '/speakers/midhun-ns.jpg' }],
        },
      ],
    },
    {
      id: 'slot-1445',
      time: '2:45 PM – 3:30 PM',
      sessions: [
        {
          track: 'AI/ML',
          speakers: [{ name: 'Neha Kalbande', image: '/speakers/neha-kalbande.jpg' }],
        },
        {
          track: 'DevOps',
          speakers: [{ name: 'Vishnu Rachapudi', image: '/speakers/vishnu-rachapudi.jpg' }],
        },
        {
          track: 'Security',
          isJoint: true,
          speakers: [
            { name: 'P Pradyoth', image: '/speakers/pradyoth-prashanth.jpg' },
            { name: 'Subramanya Navada', image: '/speakers/subramanya-navada.jpg' },
          ],
        },
      ],
    },
  ];

  // Schedule items before the accordion sessions
  const morningItems: RegularItem[] = [
    { time: '8:00 AM – 9:00 AM', title: 'Check-in & Registrations', isBreak: true },
    { time: '9:00 AM – 9:30 AM', title: 'Inauguration Ceremony', isBreak: true },
    {
      time: '9:30 AM – 10:00 AM',
      title: 'Keynote by Ravi Kompelle',
      speaker: { name: 'Ravi Kompelle', image: '/speakers/ravi-kompelle.jpg' },
    },
    {
      time: '10:00 AM – 10:30 AM',
      title: 'Keynote by Vivek\u00A0Raja\u00A0P\u00A0S',
      speaker: { name: 'Vivek\u00A0Raja\u00A0P\u00A0S', image: '/speakers/vivek-raja-hd.jpg' },
    },
    {
      time: '10:30 AM – 10:45 AM',
      title: 'Keynote by Jessica Gilmore',
      speaker: { name: 'Jessica Gilmore', image: '/speakers/Jessica.jpg' },
    },
    { time: '10:45 AM – 11:15 AM', title: 'Tea Break', isBreak: true },
  ];

  // Afternoon & evening items after the accordion sessions
  const eveningItems: RegularItem[] = [
    { time: '3:30 PM – 4:00 PM', title: 'High Tea', isBreak: true },
    { time: '4:00 PM – 4:15 PM', title: 'Networking Break', isBreak: true },
    { time: '4:15 PM – 4:45 PM', title: 'Panel Discussion' },
    { time: '4:45 PM – 5:00 PM', title: 'Closing Keynote' },
    { time: '5:00 PM – 5:30 PM', title: 'Valedictory' },
    { time: '5:30 PM – 6:00 PM', title: 'Swag Distribution', isBreak: true },
  ];

  const renderRegularItem = (item: RegularItem, key: string | number) => (
    <div key={key} className="flex w-full flex-col">
      {/* Desktop Layout (sm and up) - Existing desktop presentation preserved */}
      <div className="hidden sm:flex w-full sm:flex-row sm:items-center sm:justify-between gap-6 py-1">
        <div className="flex flex-col gap-1.5 flex-1 min-w-0">
          <h3 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-medium text-[#23303E] tracking-tight leading-snug">
            {item.title}
          </h3>
          <p className="font-mono text-sm uppercase tracking-wider text-[#5A6C86]">{item.time}</p>
        </div>
        {item.speaker && (
          <div
            className="aspect-square size-14 sm:size-16 shrink-0 overflow-hidden bg-[#23303E]/40 border border-[#23303E]/30 rounded-full shadow-sm"
            title={item.speaker.name}
          >
            <img
              src={item.speaker.image}
              alt={item.speaker.name}
              width={128}
              height={128}
              className="size-full object-cover object-center"
            />
          </div>
        )}
      </div>

      {/* Mobile Layout (< sm): Title, Time, then Speaker Name FIRST and Photograph IMMEDIATELY AFTER on same horizontal line */}
      <div className="flex sm:hidden w-full flex-col gap-1.5 py-1">
        <h3 className="font-sans text-xl font-medium text-[#23303E] tracking-tight leading-snug">
          {item.title}
        </h3>
        <p className="font-mono text-sm uppercase tracking-wider text-[#5A6C86]">{item.time}</p>
        {item.speaker && (
          <div className="flex flex-row items-center gap-3 pt-1 flex-nowrap">
            <span className="font-sans text-base font-medium text-[#23303E] leading-snug">
              {item.speaker.name}
            </span>
            <div
              className="aspect-square size-12 shrink-0 overflow-hidden bg-[#23303E]/40 border border-[#23303E]/30 rounded-full shadow-sm"
              title={item.speaker.name}
            >
              <img
                src={item.speaker.image}
                alt={item.speaker.name}
                width={96}
                height={96}
                className="size-full object-cover object-center"
              />
            </div>
          </div>
        )}
      </div>

      <div className="my-5 h-0.5 w-full bg-[#23303E]" />
    </div>
  );

  const renderAccordionSlot = (slot: AccordionSlot, idx: number) => {
    const isOpen = !!openSlots[slot.id];
    return (
      <ScrollReveal key={slot.id} variant="fade-up" delay={Math.min(idx * 20, 200)}>
        <div className="flex w-full flex-col" data-testid={`accordion-${slot.id}`}>
          {/* Accordion Row Header: Time Range + Chevron */}
          <button
            type="button"
            onClick={() => toggleSlot(slot.id)}
            aria-expanded={isOpen}
            aria-controls={`panel-${slot.id}`}
            className="flex w-full items-center justify-between gap-3 sm:gap-4 py-2 text-left focus:outline-none group cursor-pointer transition-colors"
          >
            <div className="flex items-center gap-3 sm:gap-4 flex-1 min-w-0">
              <h3 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-medium text-[#23303E] tracking-tight leading-snug">
                {slot.time}
              </h3>
            </div>

            <div className="shrink-0 size-9 sm:size-10 flex items-center justify-center border border-[#23303E]/30 rounded-none transition-colors group-hover:bg-[#23303E]/10 bg-transparent">
              <ChevronDown
                className={`size-5 text-[#23303E] transition-transform duration-300 ${
                  isOpen ? 'rotate-180' : ''
                }`}
              />
            </div>
          </button>

          {/* Smoothly Animated Expandable Panel */}
          <div
            id={`panel-${slot.id}`}
            className={`overflow-hidden transition-all duration-300 ease-in-out ${
              isOpen ? 'max-h-[850px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div className="flex flex-col pt-3 pb-2 gap-0 border-t border-[#23303E]/20 mt-3">
              {slot.sessions.map((session, sIdx) => {
                const isJoint = session.isJoint;
                return (
                  <React.Fragment key={sIdx}>
                    {/* Desktop Layout (sm and up) - Existing desktop presentation preserved */}
                    <div className="hidden sm:flex items-center justify-between gap-6 py-3.5 border-b border-[#23303E]/15 last:border-b-0">
                      <div className="flex items-center gap-4 flex-1 min-w-0">
                        {isJoint ? (
                          <div className="flex items-center gap-1.5 shrink-0">
                            {session.speakers.map((sp, pIdx) => (
                              <div
                                key={pIdx}
                                className="aspect-square size-11 md:size-12 shrink-0 overflow-hidden bg-[#23303E]/20 border border-[#23303E]/25 rounded-full shadow-sm"
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
                            className="aspect-square size-13 md:size-14 shrink-0 overflow-hidden bg-[#23303E]/20 border border-[#23303E]/25 rounded-full shadow-sm"
                            title={session.speakers[0].name}
                          >
                            <img
                              src={session.speakers[0].image}
                              alt={session.speakers[0].name}
                              className="size-full object-cover object-top"
                            />
                          </div>
                        )}

                        <div className="flex flex-col min-w-0 flex-1">
                          <span className="font-sans text-base sm:text-lg font-medium text-[#23303E] leading-snug">
                            {session.speakers.map((sp) => sp.name).join(' & ')}
                          </span>
                          <span className="text-xs sm:text-sm font-medium tracking-wide text-[#5A6C86] mt-0.5">
                            {session.track} Track
                          </span>
                        </div>
                      </div>

                      <div className="shrink-0 text-right">
                        <span className="font-mono text-xs sm:text-sm uppercase tracking-wider text-[#5A6C86] whitespace-nowrap">
                          {slot.time}
                        </span>
                      </div>
                    </div>

                    {/* Mobile Layout (< sm): Speaker Name FIRST and Photograph(s) IMMEDIATELY AFTER on same horizontal line */}
                    <div className="flex sm:hidden flex-col gap-1.5 py-3 border-b border-[#23303E]/15 last:border-b-0">
                      <div className="flex flex-row items-center gap-2 min-w-0 flex-nowrap">
                        <span
                          className={`font-sans ${
                            isJoint ? 'text-xs sm:text-base' : 'text-sm sm:text-base'
                          } font-medium text-[#23303E] leading-snug whitespace-nowrap`}
                        >
                          {session.speakers.map((sp) => sp.name).join(' & ')}
                        </span>
                        {/* Circular photograph(s) immediately after the speaker name */}
                        <div className="flex items-center gap-1.5 shrink-0">
                          {session.speakers.map((sp, pIdx) => (
                            <div
                              key={pIdx}
                              className={`aspect-square ${
                                isJoint ? 'size-9 sm:size-11' : 'size-11'
                              } shrink-0 overflow-hidden bg-[#23303E]/20 border border-[#23303E]/25 rounded-full shadow-sm`}
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
                        <span>{session.track} Track</span>
                        <span className="font-mono text-xs uppercase tracking-wider">{slot.time}</span>
                      </div>
                    </div>
                  </React.Fragment>
                );
              })}
            </div>
          </div>

          <div className="my-5 h-0.5 w-full bg-[#23303E]" />
        </div>
      </ScrollReveal>
    );
  };

  return (
    <section
      id="agenda"
      className="flex w-full max-w-full overflow-hidden flex-col items-center justify-center gap-8 p-5 py-12 sm:gap-10 sm:p-8 sm:py-16 md:p-10 lg:gap-16 lg:p-20 bg-[#D1E5CD] scroll-mt-20"
    >
      <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Heading, Subtitle & Action Button */}
        <div className="flex w-full flex-col gap-8 lg:col-span-4 lg:gap-16 lg:sticky lg:top-28 self-start">
          <ScrollReveal variant="fade-left">
            <h2 className="font-sans w-full text-4xl leading-[105%] font-medium tracking-[-0.03em] text-[#23303E] sm:text-5xl uppercase">
              AGENDA FOR AWS SCD MYSURU 2026
            </h2>
            <p className="mt-4 w-full font-sans text-base leading-[115%] font-light text-[#23303E] sm:text-xl sm:leading-[105%]">
              A full day of keynotes, technical deep dives, hands-on knowledge, and community conversations designed for builders at every stage.
            </p>
            <div className="mt-8 flex">
              <a
                href="/schedule"
                onClick={(e) => {
                  e.preventDefault();
                  if (onOpenSchedule) {
                    onOpenSchedule();
                  } else {
                    router.push('/schedule');
                  }
                }}
                className="cursor-pointer shrink-0 items-center justify-center text-xs font-medium whitespace-nowrap transition-all flex h-11 min-h-11 rounded-none border-none bg-[#23303E] px-5 hover:bg-[#23303E]/80 flex-row gap-2"
              >
                <span className="font-mono text-sm tracking-[-0.02em] text-[#fafafa] uppercase sm:text-base">
                  Full Schedule
                </span>
                <ArrowUpRight className="h-5 w-5 text-[#fafafa] shrink-0" />
              </a>
            </div>
          </ScrollReveal>
        </div>

        {/* Right Column: Complete Unified Schedule */}
        <div className="w-full lg:col-span-8 flex flex-col">
          {/* Morning regular items */}
          {morningItems.map((item, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={Math.min(idx * 20, 200)}>
              {renderRegularItem(item, idx)}
            </ScrollReveal>
          ))}

          {/* Slots 1 and 2 (11:15 AM and 12:00 PM) */}
          {accordionSlots.slice(0, 2).map((slot, idx) => renderAccordionSlot(slot, idx))}

          {/* Preserved Lunch Break (12:45 PM – 2:00 PM) */}
          <ScrollReveal variant="fade-up" delay={80}>
            {renderRegularItem(
              { time: '12:45 PM – 2:00 PM', title: 'Lunch Break', isBreak: true },
              'lunch-break'
            )}
          </ScrollReveal>

          {/* Slots 3 and 4 (2:00 PM and 2:45 PM) */}
          {accordionSlots.slice(2, 4).map((slot, idx) => renderAccordionSlot(slot, idx + 2))}

          {/* Evening regular items */}
          {eveningItems.map((item, idx) => (
            <ScrollReveal key={`eve-${idx}`} variant="fade-up" delay={Math.min(idx * 20, 200)}>
              {renderRegularItem(item, `eve-${idx}`)}
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
