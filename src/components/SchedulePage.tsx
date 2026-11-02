'use client';

import React, { useState } from 'react';
import { ChevronDown, Linkedin, ArrowLeft } from 'lucide-react';

interface SpeakerInfo {
  name: string;
  role?: string;
  company?: string;
  image: string;
  linkedin?: string;
}

interface ScheduleRow {
  id: string;
  time: string;
  title: string;
  isBreak?: boolean;
  tracks: string[]; // ['MAIN STAGE', 'TRACK 1', etc.]
  description?: string;
  extra?: string;
  speakers?: SpeakerInfo[];
}

interface SchedulePageProps {
  onNavigateHome: () => void;
}

export const SchedulePage: React.FC<SchedulePageProps> = ({ onNavigateHome }) => {
  const [activeTab, setActiveTab] = useState<string>('MAIN STAGE');
  const [expandedRowId, setExpandedRowId] = useState<string | null>(null);

  const tabs = ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'];

  const scheduleData: ScheduleRow[] = [
    {
      id: 'item-1',
      time: '8.00 am - 9.00 am',
      title: 'Check-in & Registrations',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Check-in, badge collection, morning refreshments, and networking with fellow student builders, community leads, and sponsors.',
      extra: 'Check-in & Welcome',
    },
    {
      id: 'item-2',
      time: '9.00 am - 9.30 am',
      title: 'Inauguration Ceremony',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Official inauguration ceremony and lighting of the lamp by dignitaries, faculty coordinators, and AWS Student Builder Group VVCE community leads.',
      extra: 'Inauguration',
    },
    {
      id: 'item-3',
      time: '9.30 am - 10.00 am',
      title: 'Keynote Speech by Ravi Kompella',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Opening keynote by Ravi Kompella exploring cloud transformation, career opportunities on AWS, and architecting resilient enterprise systems.',
      extra: 'AWS Keynote',
      speakers: [
        {
          name: 'Ravi Kompelle',
          role: 'Principal Analytics Specialist - ISVs & Startups India',
          company: 'AWS',
          image: '/speakers/ravi-kompelle.jpg',
          linkedin: 'https://www.linkedin.com/in/ravikompella',
        },
      ],
    },
    {
      id: 'item-4',
      time: '10.00 am - 10.30 am',
      title: 'Keynote Speech by Vivek\u00A0Raja\u00A0P\u00A0S',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Keynote session by Vivek Raja P S sharing deep insights on cloud architecture, AI innovations, and community building across the AWS ecosystem.',
      extra: 'AWS Keynote',
      speakers: [
        {
          name: 'Vivek\u00A0Raja\u00A0P\u00A0S',
          role: 'Senior AI Solutions Architect & AWS AI Hero',
          company: 'Aivar Innovations',
          image: '/speakers/vivek-raja.jpg',
          linkedin: 'https://www.linkedin.com/in/meetvivekraja',
        },
      ],
    },
    {
      id: 'item-5',
      time: '10.30 am - 10.45 am',
      title: 'Keynote Speech by Jessica Gilmore',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Keynote address by Jessica Gilmore: Empowering Global Builders & Community Growth on AWS.',
      extra: 'AWS Keynote',
      speakers: [
        {
          name: 'Jessica Gilmore',
          role: 'Manager, Community Groups',
          company: '@Amazon',
          image: '/speakers/Jessica.jpg',
          linkedin: 'https://www.linkedin.com/in/jessicagilmore1/',
        },
      ],
    },
    {
      id: 'item-6',
      time: '10.45 am - 11.15 am',
      title: 'Tea Break',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Morning tea break, refreshments, and hallway track networking with speakers, mentors, and fellow student builders.',
      extra: 'Tea & Networking',
    },
    {
      id: 'item-7',
      time: '11.15 am - 12.00 pm',
      title: 'Session 1',
      tracks: ['MAIN STAGE', 'TRACK 1'],
      description: 'Technical Session 1 by Jones Zachariah Noel N exploring serverless architectures, cloud development patterns, and AWS builder tooling.',
      extra: 'Technical Session',
      speakers: [
        {
          name: 'Jones Zachariah Noel N',
          role: 'Community Speaker',
          company: 'AWS Community',
          image: '/speakers/jones-zachariah-noel.jpg',
          linkedin: 'https://www.linkedin.com/in/jones-zachariah-noel-n',
        },
      ],
    },
    {
      id: 'item-8',
      time: '12.00 pm - 12.45 pm',
      title: 'Session 2',
      tracks: ['MAIN STAGE', 'TRACK 2'],
      description: 'Technical Session 2 by Ganesh Kumar on enterprise cloud-native data platforms, lakehouse architectures, and modern cloud patterns.',
      extra: 'Technical Session',
      speakers: [
        {
          name: 'Ganesh Kumar',
          role: 'Solutions Architect',
          company: 'AWS Community',
          image: '/speakers/ganesh-kumar.jpg',
          linkedin: 'https://www.linkedin.com/in/ganesh-kumar-ponraj',
        },
      ],
    },
    {
      id: 'item-9',
      time: '12.45 pm - 2.00 pm',
      title: 'Lunch Break',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Complimentary buffet lunch for attendees, speakers, and volunteers. Sponsor booth visits, product demos, and community networking.',
      extra: 'Buffet Lunch & Booths',
    },
    {
      id: 'item-10',
      time: '2.00 pm - 2.45 pm',
      title: 'Session 3',
      tracks: ['MAIN STAGE', 'TRACK 1'],
      description: 'Technical Session 3 by Neha Kalbande on AI Agents, Agentic Architectures, LLM orchestration, and modern cloud software engineering.',
      extra: 'Technical Session',
      speakers: [
        {
          name: 'Neha Kalbande',
          role: 'Software Engineer',
          company: 'AWS Community',
          image: '/speakers/neha-kalbande.jpg',
          linkedin: 'https://www.linkedin.com/in/neha-kalbande/',
        },
      ],
    },
    {
      id: 'item-11',
      time: '2.45 pm - 3.30 pm',
      title: 'Session 4',
      tracks: ['MAIN STAGE', 'TRACK 2'],
      description: 'Deep-dive technical session covering practical cloud implementations, cloud security, and developer productivity on AWS.',
      extra: 'Technical Session',
    },
    {
      id: 'item-12',
      time: '3.30 pm - 4.00 pm',
      title: 'High Tea',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'High tea and refreshments break with community conversations and hands-on discussions.',
      extra: 'Tea & Refreshments',
    },
    {
      id: 'item-13',
      time: '4.00 pm - 4.15 pm',
      title: 'Networking Break',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Connect directly with speakers, mentors, community organizers, and sponsor booth representatives.',
      extra: 'Community Connect',
    },
    {
      id: 'item-14',
      time: '4.15 pm - 4.45 pm',
      title: 'Panel Discussion',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Interactive panel discussion featuring community leaders and AWS experts on Career Paths in Cloud & AI, Community Impact, and Building Scalable Systems.',
      extra: 'Expert Panel',
    },
    {
      id: 'item-15',
      time: '4.45 pm - 5.00 pm',
      title: 'Closing Keynote',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Closing keynote reflecting on the day of learning, community accomplishments, and future initiatives for student cloud builders in Mysuru.',
      extra: 'Closing Address',
    },
    {
      id: 'item-16',
      time: '5.00 pm - 5.30 pm',
      title: 'Valedictory',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Valedictory ceremony: felicitation of speakers, organizers, and volunteers, award presentations, and closing remarks.',
      extra: 'Awards & Felicitation',
    },
    {
      id: 'item-17',
      time: '5.30 pm - 6.00 pm',
      title: 'Swag Distribution',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Exclusive AWS Community Day swag distribution, certificates, stickers, and group photo session.',
      extra: 'Exclusive AWS Swags',
    },
  ];

  const filteredSchedule = scheduleData.filter((item) =>
    item.tracks.includes(activeTab)
  );

  const toggleRow = (id: string) => {
    setExpandedRowId((prev) => (prev === id ? null : id));
  };

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

        {/* Page Title & Subtitle Matching Reference */}
        <h1 className="font-sans text-4xl sm:text-5xl lg:text-6xl text-[#23303E] leading-[0.98] tracking-[-0.045em] font-normal">
          Schedule
        </h1>
        <p className="mt-6 text-lg sm:text-xl lg:text-2xl text-[#23303E] leading-[1.1] max-w-3xl font-light">
          From inspiring keynotes and technical deep dives to hands-on discussions and networking, explore everything happening at AWS Student Community Day Mysuru 2026.
        </p>

        {/* Track Selection Tabs Bar */}
        <div className="flex w-full items-center justify-start gap-0 py-6 overflow-x-auto mt-6">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <button
                key={tab}
                type="button"
                onClick={() => setActiveTab(tab)}
                className={`cursor-pointer shrink-0 items-center justify-center text-xs font-mono uppercase tracking-[-0.02em] whitespace-nowrap transition-all flex h-11 px-5 rounded-none border border-[#23303E] sm:text-base ${
                  isActive
                    ? 'bg-[#23303E] text-[#FAFAFA]'
                    : 'bg-transparent text-[#23303E] hover:bg-[#23303E]/20'
                }`}
              >
                {tab}
              </button>
            );
          })}
        </div>

        {/* Schedule Table Container */}
        <div className="w-full border border-[#A3A7AA] bg-[#EFF0F3] mt-2">
          {/* Table Header Row (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-2 w-full border-b border-[#A3A7AA]">
            <div className="col-span-2 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              TIME
            </div>
            <div className="col-span-6 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              SESSION
            </div>
            <div className="col-span-4 px-4 py-5 font-mono text-xs tracking-[1.5px] text-[#5A6C86] uppercase">
              SPEAKERS
            </div>
          </div>

          {/* Session Rows */}
          {filteredSchedule.map((row, index) => {
            const isExpanded = expandedRowId === row.id;
            const isLast = index === filteredSchedule.length - 1;
            const hasDetails = !row.isBreak;

            return (
              <div
                key={row.id}
                className={`w-full ${!isLast ? 'border-b border-[#A3A7AA]' : ''} ${
                  row.isBreak ? 'bg-[#A3A7AA]' : 'bg-[#EFF0F3]'
                }`}
              >
                {/* Row Header */}
                <div
                  onClick={() => toggleRow(row.id)}
                  className={`grid w-full grid-cols-1 md:grid-cols-12 md:items-center md:gap-2 p-4 md:p-0 transition-colors select-none ${
                    row.isBreak
                      ? 'cursor-pointer hover:bg-[#979ba0]'
                      : 'cursor-pointer hover:bg-[#23303E]/5'
                  }`}
                >
                  {/* Time Column */}
                  <div className="md:col-span-2 md:px-4 md:py-5 font-mono text-sm md:text-base text-[#23303E] md:text-[#5A6C86]">
                    {row.time}
                  </div>

                  {/* Title Column */}
                  <div className="md:col-span-6 md:px-4 md:py-5 font-mono text-base font-medium text-[#23303E] uppercase mt-1 md:mt-0">
                    {row.title}
                  </div>

                  {/* Speakers / Chevron Column */}
                  <div className="md:col-span-4 md:px-4 md:py-5 flex items-center justify-between md:justify-between gap-3 mt-3 md:mt-0">
                    {/* Avatars Preview */}
                    <div className="flex items-center gap-1.5">
                      {row.speakers && row.speakers.length > 0 ? (
                        row.speakers.map((sp, idx) => (
                          <div
                            key={idx}
                            className="aspect-square size-10 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20"
                          >
                            <img
                              src={sp.image}
                              alt={sp.name}
                              className="h-full w-full object-cover object-top"
                            />
                          </div>
                        ))
                      ) : row.extra ? (
                        <span className="font-mono text-xs text-[#23303E]/70 uppercase">
                          {row.extra}
                        </span>
                      ) : !row.isBreak ? (
                        <span className="font-mono text-xs text-[#23303E]/50 uppercase">
                          Speaker TBA
                        </span>
                      ) : null}
                    </div>

                    {/* Chevron Toggle Icon */}
                    <div className="flex items-center text-[#23303E] pr-2">
                      <ChevronDown
                        className={`size-5 transition-transform duration-200 ${
                          isExpanded ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Expanded Accordion Content */}
                {isExpanded && (
                  <div className="grid grid-cols-1 md:grid-cols-12 md:gap-2 p-4 pt-0 md:p-0 border-t border-[#A3A7AA]/50 pb-5">
                    {/* Time Offset Column */}
                    <div className="hidden md:block md:col-span-2" />

                    {/* Description Column */}
                    <div className="md:col-span-6 md:px-4 md:py-4 font-mono text-sm text-[#23303E] whitespace-pre-line leading-relaxed">
                      <p>{row.description}</p>
                    </div>

                    {/* Speaker Profiles Column */}
                    <div className="md:col-span-4 md:px-4 md:py-4 flex flex-col gap-4">
                      {row.speakers && row.speakers.length > 0 ? (
                        row.speakers.map((speaker, sIdx) => (
                          <div key={sIdx} className="flex items-center justify-between gap-3">
                            <div className="flex items-center gap-3">
                              {speaker.image ? (
                                <div className="aspect-square size-10 shrink-0 overflow-hidden bg-[#23303E]/10 border border-[#23303E]/20">
                                  <img
                                    src={speaker.image}
                                    alt={speaker.name}
                                    className="h-full w-full object-cover object-top"
                                  />
                                </div>
                              ) : null}
                              <div className="flex flex-col">
                                <span className="font-mono text-sm tracking-[0.02em] text-[#23303E] uppercase font-medium">
                                  {speaker.name}
                                </span>
                                {speaker.company && (
                                  <span className="font-mono text-xs tracking-[0.02em] text-[#5A6C86] uppercase">
                                    {speaker.company}
                                  </span>
                                )}
                              </div>
                            </div>

                            {speaker.linkedin && (
                              <a
                                href={speaker.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`LinkedIn for ${speaker.name}`}
                                className="bg-[#EEF0F3] border border-[#23303E]/20 size-8 flex items-center justify-center text-[#23303E] hover:bg-[#23303E] hover:text-[#FAFAFA] transition-colors shrink-0"
                              >
                                <Linkedin className="size-4" />
                              </a>
                            )}
                          </div>
                        ))
                      ) : (
                        <div className="font-mono text-xs text-[#5A6C86] uppercase">
                          {row.isBreak ? 'General Session' : 'Speakers / Mentors TBA'}
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </main>
    </div>
  );
};
