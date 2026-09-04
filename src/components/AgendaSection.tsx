import React, { useState } from 'react';
import { Clock, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Talk {
  title: string;
  speaker: string;
  room?: string;
}

interface AgendaItem {
  id: string;
  time: string;
  title: string;
  subtitle?: string;
  category: 'Cloud' | 'AI' | 'DevOps' | 'Workshops';
  talks?: Talk[];
}

export const AgendaSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({
    'session-1': false,
    'session-2': false,
    'workshops-session': false,
  });

  const toggleExpand = (id: string) => {
    setExpandedItems((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const schedule: AgendaItem[] = [
    {
      id: 'reg',
      time: '8:30 AM – 9:30 AM',
      title: 'Registration and Welcome',
      subtitle: 'Check in, collect badge and networking',
      category: 'Cloud',
    },
    {
      id: 'opening',
      time: '9:30 AM – 9:50 AM',
      title: 'Opening Ceremony',
      subtitle: 'Welcome address and introduction by AWS Student Builder Group',
      category: 'Cloud',
    },
    {
      id: 'keynote',
      time: '9:50 AM – 10:05 AM',
      title: 'Keynote Address',
      subtitle: 'Jessica Gilmore (Manager, Community Groups @ Amazon)',
      category: 'Cloud',
    },
    {
      id: 'session-1',
      time: '10:10 AM – 11:00 AM',
      title: 'Session 1: Discover AWS',
      subtitle: '3 parallel technical talks across tracks',
      category: 'Cloud',
      talks: [
        {
          title: 'Architectural Patterns for High-Scale Applications on AWS',
          speaker: 'To Be Announced',
          room: 'Hall A',
        },
        {
          title: 'Building Real-time Data Analytics Pipelines with AWS Glue & Athena',
          speaker: 'To Be Announced',
          room: 'Hall B',
        },
        {
          title: 'Cloud Foundations: Kickstarting Your Cloud Journey with AWS',
          speaker: 'To Be Announced',
          room: 'Hall C',
        },
      ],
    },
    {
      id: 'tea-1',
      time: '11:00 AM – 11:15 AM',
      title: 'Tea & Community Networking Break',
      subtitle: 'Refreshments & Sponsor booth interactions',
      category: 'Cloud',
    },
    {
      id: 'session-2',
      time: '11:15 AM – 12:05 PM',
      title: 'Session 2: Build with AWS',
      subtitle: '3 parallel sessions on GenAI, Security & DevOps',
      category: 'DevOps',
      talks: [
        {
          title: 'Building Enterprise GenAI Applications using Amazon Bedrock',
          speaker: 'To Be Announced',
          room: 'Hall A',
        },
        {
          title: 'Serverless Security & IAM Zero-Trust Best Practices',
          speaker: 'To Be Announced',
          room: 'Hall B',
        },
        {
          title: 'Modern CI/CD Pipelines on AWS with GitOps & Terraform',
          speaker: 'To Be Announced',
          room: 'Hall C',
        },
      ],
    },
    {
      id: 'lunch',
      time: '12:05 PM – 1:00 PM',
      title: 'Lunch and Networking',
      subtitle: 'Complimentary buffet lunch & community networking',
      category: 'Cloud',
    },
    {
      id: 'workshops-session',
      time: '1:10 PM – 3:30 PM',
      title: 'Hands-on Technical Workshops',
      subtitle: 'Interactive hands-on practical lab sessions',
      category: 'Workshops',
      talks: [
        {
          title: 'Workshop 1: Hands-on GenAI App Development with Bedrock & LangChain',
          speaker: 'AWS Community Mentors',
          room: 'Lab 1',
        },
        {
          title: 'Workshop 2: Deploying Microservices on AWS EKS with Infrastructure as Code',
          speaker: 'DevOps Workshop Leads',
          room: 'Lab 2',
        },
      ],
    },
    {
      id: 'sponsors-showcase',
      time: '3:30 PM – 4:00 PM',
      title: 'Sponsor Showcase & Swag Drops',
      subtitle: 'Booth visits, career interaction and special AWS drops',
      category: 'Cloud',
    },
    {
      id: 'panel',
      time: '4:00 PM – 4:30 PM',
      title: 'Panel Discussion: Career Paths in Cloud & AI',
      subtitle: 'Insights from AWS Heroes, Industry Leaders & Founders',
      category: 'AI',
    },
    {
      id: 'closing',
      time: '4:30 PM – 4:50 PM',
      title: 'Closing Ceremony & Swag Giveaway',
      subtitle: 'Raffle draw, awards and announcement',
      category: 'Cloud',
    },
    {
      id: 'photo',
      time: '4:50 PM – 5:30 PM',
      title: 'Group Photo & Open Networking',
      subtitle: 'Hallway track and community photo session',
      category: 'Cloud',
    },
  ];

  const categories = ['All', 'Cloud', 'AI', 'DevOps', 'Workshops'];

  const filteredSchedule = schedule.filter(
    (item) => activeFilter === 'All' || item.category === activeFilter
  );

  return (
    <section id="agenda" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>03 · Agenda
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              One day. <span className="text-gradient-cool">Twelve moments.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Scroll to see the day fill in. Filter by track to plan yours.
            </p>
          </header>
        </ScrollReveal>

        {/* Filter Buttons */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`rounded-full px-5 py-2 text-xs font-semibold transition-all cursor-pointer ${
                  activeFilter === cat
                    ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                    : 'border border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Timeline List */}
        <div className="relative mt-12 pl-6 sm:pl-10">
          {/* Vertical Connector Line */}
          <div className="absolute bottom-0 left-2 top-0 w-0.5 bg-white/10 sm:left-4"></div>
          <div className="absolute left-2 top-0 w-0.5 sm:left-4 bg-gradient-to-b from-[#A78BFA] via-[#8B5CF6] to-[#5B21B6] h-full opacity-60"></div>

          <ul className="space-y-5">
            {filteredSchedule.map((item, index) => {
              const isCollapsible = !!(item.talks && item.talks.length > 0);
              const isExpanded = expandedItems[item.id];

              return (
                <li key={item.id} className="relative">
                  <ScrollReveal variant="fade-up" delay={Math.min(index * 60, 300)}>
                    {/* Timeline Dot */}
                    <span
                      className="absolute -left-[19px] top-5 h-3.5 w-3.5 rounded-full ring-4 ring-[#050508] sm:-left-[27px] transition-transform duration-300 hover:scale-125"
                      style={{
                        background: item.category === 'Workshops' ? '#5B21B6' : item.category === 'DevOps' ? '#8B5CF6' : '#A78BFA',
                        boxShadow: '0 0 12px rgba(167, 139, 250, 0.8)',
                      }}
                    ></span>

                    <div className="glass rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md overflow-hidden transition-all duration-300 hover:border-white/20 hover:bg-white/[0.05]">
                      {isCollapsible ? (
                        <div>
                          <button
                            type="button"
                            onClick={() => toggleExpand(item.id)}
                            className="w-full cursor-pointer p-5 sm:p-6 text-left transition-colors duration-200 hover:bg-white/[0.04]"
                          >
                            <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                              <span className="font-mono text-sm font-semibold text-white flex items-center gap-1.5">
                                <Clock className="h-4 w-4 text-white/50" />
                                {item.time}
                              </span>
                              <span
                                className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest font-semibold"
                                style={{
                                  background: 'rgba(167, 139, 250, 0.15)',
                                  color: '#A78BFA',
                                }}
                              >
                                {item.category}
                              </span>
                            </div>

                            <div className="mt-2 flex items-start justify-between gap-3">
                              <div className="min-w-0 flex-1">
                                <h3 className="text-lg font-semibold text-white tracking-tight sm:text-xl">
                                  {item.title}
                                </h3>
                                {item.subtitle && (
                                  <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
                                )}
                              </div>
                              <span className="mt-1 inline-flex shrink-0 text-white/50">
                                {isExpanded ? <ChevronUp className="h-5 w-5 text-[#A78BFA]" /> : <ChevronDown className="h-5 w-5" />}
                              </span>
                            </div>
                          </button>

                          {/* Collapsible talks content */}
                          {isExpanded && (
                            <div className="border-t border-white/10 bg-black/40 px-5 py-4 sm:px-6 space-y-3">
                              <p className="font-tech text-xs uppercase tracking-wider text-white/40 mb-2">Parallel Tracks:</p>
                              {item.talks?.map((talk, idx) => (
                                <div key={idx} className="rounded-xl border border-white/10 bg-white/[0.02] p-3.5 hover:border-white/20 transition-colors">
                                  <div className="flex items-center justify-between gap-2">
                                    <h4 className="text-sm font-semibold text-white">{talk.title}</h4>
                                    {talk.room && (
                                      <span className="shrink-0 font-mono text-[10px] bg-white/10 text-white/70 px-2 py-0.5 rounded-full">
                                        {talk.room}
                                      </span>
                                    )}
                                  </div>
                                  <p className="mt-1 text-xs text-[#A78BFA]">{talk.speaker}</p>
                                </div>
                              ))}
                            </div>
                          )}
                        </div>
                      ) : (
                        <div className="p-5 sm:p-6">
                          <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                            <span className="font-mono text-sm font-semibold text-white flex items-center gap-1.5">
                              <Clock className="h-4 w-4 text-white/50" />
                              {item.time}
                            </span>
                            <span
                              className="rounded-full px-2.5 py-0.5 font-mono text-[10px] uppercase tracking-widest font-semibold"
                              style={{
                                background: 'rgba(167, 139, 250, 0.15)',
                                color: '#A78BFA',
                              }}
                            >
                              {item.category}
                            </span>
                          </div>

                          <div className="mt-2 flex items-start justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-lg font-semibold text-white tracking-tight sm:text-xl">
                                {item.title}
                              </h3>
                              {item.subtitle && (
                                <p className="mt-1 text-sm text-white/60">{item.subtitle}</p>
                              )}
                            </div>
                          </div>
                        </div>
                      )}
                    </div>
                  </ScrollReveal>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};
