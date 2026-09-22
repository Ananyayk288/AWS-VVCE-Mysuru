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
      time: '8:30 AM - 9:30 AM',
      title: 'REGISTRATION AND WELCOME',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Check-in, badge collection, and networking with fellow builders, speakers, and sponsors before the opening ceremony.',
    },
    {
      id: 'item-2',
      time: '9:30 AM - 9:50 AM',
      title: 'OPENING CEREMONY',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Welcome and introduction by AWS Student Builder Group VVCE, faculty mentors, and community leads.',
    },
    {
      id: 'item-3',
      time: '9:50 AM - 10:05 AM',
      title: 'KEYNOTE',
      tracks: ['MAIN STAGE'],
      description: 'Opening keynote address empowering student builders, exploring community momentum, and the future of cloud computing on AWS.',
      extra: 'Keynote Speaker',
      speakers: [
        {
          name: 'Jessica Gilmore',
          role: 'Manager, Community Groups',
          company: '@Amazon',
          image: '/speakers/Jessica.jpg',
          linkedin: 'https://www.linkedin.com/in/jessicagilmore/',
        },
      ],
    },
    {
      id: 'item-4',
      time: '10:10 AM - 11:00 AM',
      title: 'SESSION 1: DISCOVER AWS',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2'],
      description: '3 Parallel Talks exploring modern cloud architecture patterns, generative AI fundamentals, and developer platform tooling.\n\nWill be announced soon!!!',
      extra: '3 Parallel Talks',
    },
    {
      id: 'item-5',
      time: '11:00 AM - 11:15 AM',
      title: 'TEA AND NETWORKING BREAK',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Refreshments, tea, coffee, and hallway track networking with speakers and partners.',
    },
    {
      id: 'item-6',
      time: '11:15 AM - 12:05 PM',
      title: 'SESSION 2: BUILD WITH AWS',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2'],
      description: '3 Parallel Talks covering real-world production Kubernetes deployments, zero-trust cloud security, and serverless best practices.\n\nWill be announced soon!!!',
      extra: '3 Parallel Talks',
    },
    {
      id: 'item-7',
      time: '12:05 PM - 1:00 PM',
      title: 'LUNCH AND NETWORKING',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Food and Community Networking. Complimentary lunch for all attendees and sponsor booth interactive showcases.',
    },
    {
      id: 'item-8',
      time: '1:10 PM - 3:30 PM',
      title: 'HANDS-ON WORKSHOP',
      tracks: ['MAIN STAGE', 'WORKSHOPS'],
      description: '3 Parallel practical builder workshops:\n- Workshop 1: Building GenAI Applications with Amazon Bedrock & Claude\n- Workshop 2: Deploying Microservices on AWS EKS with Terraform\n- Workshop 3: Real-time Analytics Pipelines on AWS\n\nWill be Announced Soon!!!...',
      extra: '3 Parallel Workshops',
    },
    {
      id: 'item-9',
      time: '3:30 PM - 3:45 PM',
      title: 'BREAK',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Short transition break and community interaction.',
    },
    {
      id: 'item-10',
      time: '3:50 PM - 4:30 PM',
      title: 'PANEL DISCUSSION',
      tracks: ['MAIN STAGE'],
      description: 'Career Paths in Cloud & AI: Insights from AWS Heroes, Industry Leaders, and Engineering Directors on breaking into high-impact cloud roles.',
      extra: 'Panel Discussion',
    },
    {
      id: 'item-11',
      time: '4:30 PM - 5:00 PM',
      title: 'GUEST FELICITATION & CLOSING CEREMONY',
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Vote of thanks, closing address, appreciation awards for organizers, speakers, and student volunteers.',
    },
    {
      id: 'item-12',
      time: '5:00 PM - 5:30 PM',
      title: 'SWAG DISTRIBUTION',
      isBreak: true,
      tracks: ['MAIN STAGE', 'TRACK 1', 'TRACK 2', 'WORKSHOPS'],
      description: 'Exclusive AWS swag distribution, certification vouchers, stickers, and closing community photo session.',
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
                              className="h-full w-full object-cover"
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
                                    className="h-full w-full object-cover"
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
