'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { ArrowUpRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface ScheduleSpeaker {
  name: string;
  image: string;
  role?: string;
  company?: string;
}

interface ScheduleSession {
  time: string;
  title: string;
  subtitle?: string;
  extra?: string;
  speakers?: ScheduleSpeaker[];
}

interface AgendaSectionProps {
  onOpenSchedule?: () => void;
}

export const AgendaSection: React.FC<AgendaSectionProps> = ({ onOpenSchedule }) => {
  const router = useRouter();
  const schedule: ScheduleSession[] = [
    {
      time: '8.00 am - 9.00 am',
      title: 'Check-in & Registrations',
    },
    {
      time: '9.00 am - 9.30 am',
      title: 'Inauguration Ceremony',
    },
    {
      time: '9.30 am - 10.00 am',
      title: 'Keynote Speech by Ravi Kompella',
      speakers: [
        {
          name: 'Ravi Kompelle',
          image: '/speakers/ravi-kompelle.jpg',
        },
      ],
    },
    {
      time: '10.00 am - 10.30 am',
      title: 'Keynote Speech by Vivek\u00A0Raja\u00A0P\u00A0S',
      speakers: [
        {
          name: 'Vivek\u00A0Raja\u00A0P\u00A0S',
          image: '/speakers/vivek-raja.jpg',
        },
      ],
    },
    {
      time: '10.30 am - 10.45 am',
      title: 'Keynote Speech by Jessica Gilmore',
      speakers: [
        {
          name: 'Jessica Gilmore',
          image: '/speakers/Jessica.jpg',
        },
      ],
    },
    {
      time: '10.45 am - 11.15 am',
      title: 'Tea Break',
    },
    {
      time: '11.15 am - 12.00 pm',
      title: 'Session 1',
      speakers: [
        {
          name: 'Jones Zachariah Noel N',
          image: '/speakers/jones-zachariah-noel.jpg',
        },
      ],
    },
    {
      time: '12.00 pm - 12.45 pm',
      title: 'Session 2',
      speakers: [
        {
          name: 'Ganesh Kumar',
          image: '/speakers/ganesh-kumar.jpg',
        },
      ],
    },
    {
      time: '12.45 pm - 2.00 pm',
      title: 'Lunch Break',
    },
    {
      time: '2.00 pm - 2.45 pm',
      title: 'Session 3',
      speakers: [
        {
          name: 'Neha Kalbande',
          image: '/speakers/neha-kalbande.jpg',
        },
      ],
    },
    {
      time: '2.45 pm - 3.30 pm',
      title: 'Session 4',
    },
    {
      time: '3.30 pm - 4.00 pm',
      title: 'High Tea',
    },
    {
      time: '4.00 pm - 4.15 pm',
      title: 'Networking Break',
    },
    {
      time: '4.15 pm - 4.45 pm',
      title: 'Panel Discussion',
    },
    {
      time: '4.45 pm - 5.00 pm',
      title: 'Closing Keynote',
    },
    {
      time: '5.00 pm - 5.30 pm',
      title: 'Valedictory',
    },
    {
      time: '5.30 pm - 6.00 pm',
      title: 'Swag Distribution',
    },
  ];

  return (
    <section
      id="agenda"
      className="flex w-full max-w-full overflow-hidden flex-col items-center justify-center gap-8 p-5 py-12 sm:gap-10 sm:p-8 sm:py-16 md:p-10 lg:gap-16 lg:p-20 bg-[#D1E5CD] scroll-mt-20"
    >
      <div className="grid w-full grid-cols-1 items-start justify-start gap-8 lg:grid-cols-12 lg:gap-16">
        {/* Left Column: Heading, Subtitle & Action Button (matching reference) */}
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

        {/* Right Column: Sessions List with Reference Styling */}
        <div className="w-full lg:col-span-8 flex flex-col">
          {schedule.map((session, index) => {
            return (
              <ScrollReveal
                key={index}
                variant="fade-up"
                delay={Math.min(index * 20, 200)}
              >
                <div className="flex w-full flex-col">
                  <div className="flex w-full flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-6 py-1">
                    {/* Left: Title and Time */}
                    <div className="flex flex-col gap-1.5 flex-1 min-w-0">
                      <h3 className="font-sans text-xl sm:text-2xl lg:text-[26px] font-medium text-[#23303E] tracking-tight leading-snug">
                        {session.title}
                      </h3>
                      <p className="font-mono text-sm uppercase tracking-wider text-[#5A6C86]">
                        {session.time}
                      </p>
                    </div>

                    {/* Right: Speaker Avatars & Subtitle */}
                    <div className="flex items-center gap-2 shrink-0 sm:self-center">
                      {session.subtitle && (
                        <p className="font-sans text-sm font-normal text-[#23303E]/80">
                          {session.subtitle}
                        </p>
                      )}
                      {session.speakers && session.speakers.length > 0 && (
                        <div className="flex items-center gap-2">
                          {session.speakers.map((sp, sIdx) => (
                            <div
                              key={sIdx}
                              className="aspect-square size-11 sm:size-12 shrink-0 overflow-hidden bg-[#23303E]/40 border border-[#23303E]/30 rounded-none shadow-sm"
                              title={sp.name}
                            >
                              <img
                                src={sp.image}
                                alt={sp.name}
                                className="aspect-square size-full object-cover object-top"
                              />
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Dark Divider Line Matching Reference */}
                  <div className="my-5 h-0.5 w-full bg-[#23303E]" />
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
