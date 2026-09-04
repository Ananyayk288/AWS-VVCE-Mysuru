import React, { useState } from 'react';
import { Users, ShieldCheck, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Member {
  title: string;
  subtitle: string;
}

export const OrganizersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'faculty' | 'crew'>('faculty');

  const faculty: Member[] = [
    { title: 'To Be Announced', subtitle: 'Faculty Advisor · VVCE' },
    { title: 'To Be Announced', subtitle: 'Faculty Advisor · VVCE' },
    { title: 'To Be Announced', subtitle: 'Faculty Coordinator · VVCE' },
    { title: 'To Be Announced', subtitle: 'Faculty Coordinator · VVCE' },
  ];

  const crew: Member[] = [
    { title: 'To Be Announced', subtitle: 'AWS Student Builder Group VVCE' },
    { title: 'To Be Announced', subtitle: 'AWS Student Builder Group VVCE' },
    { title: 'To Be Announced', subtitle: 'AWS Student Builder Group VVCE' },
    { title: 'To Be Announced', subtitle: 'AWS Student Builder Group VVCE' },
  ];

  const currentList = activeTab === 'faculty' ? faculty : crew;

  return (
    <section id="organizers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>07 · Organizers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Meet the team <span className="text-gradient-cool">behind the vision.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Organized by AWS Student Builder Group VVCE with guidance from faculty mentors.
            </p>
          </header>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal variant="fade-up" delay={100}>
          <div className="mt-8 flex gap-3">
            <button
              onClick={() => setActiveTab('faculty')}
              className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'faculty'
                  ? 'bg-white text-black shadow-lg shadow-white/10 scale-105'
                  : 'border border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5'
              }`}
            >
              Faculty Advisors
            </button>

            <button
              onClick={() => setActiveTab('crew')}
              className={`rounded-full px-6 py-2.5 text-xs font-bold transition-all cursor-pointer ${
                activeTab === 'crew'
                  ? 'bg-[#A78BFA] text-black shadow-lg shadow-purple-500/20 scale-105'
                  : 'border border-white/10 text-white/70 hover:border-white/30 hover:text-white hover:bg-white/5'
              }`}
            >
              Student Crew
            </button>
          </div>
        </ScrollReveal>

        {/* TBA Organizers Banner */}
        <ScrollReveal variant="fade-up" delay={150}>
          <div className="mt-8 rounded-2xl border border-white/10 bg-white/[0.02] p-4 flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-[#A78BFA] shrink-0" />
            <p className="text-xs text-white/70">
              Faculty advisor and student crew details for <strong>AWS Student Community Day Mysuru 2026</strong> will be announced soon.
            </p>
          </div>
        </ScrollReveal>

        {/* Members Grid */}
        <div className="mt-8 grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
          {currentList.map((member, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 100}>
              <div
                className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-1 flex flex-col justify-between"
              >
                <div className="flex items-center justify-between border-b border-white/10 pb-4 mb-4">
                  <div className="grid h-10 w-10 place-items-center rounded-xl bg-white/5 border border-white/10 text-[#A78BFA]">
                    {activeTab === 'faculty' ? <ShieldCheck className="h-5 w-5" /> : <Users className="h-5 w-5" />}
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-1 rounded-full border border-[#A78BFA]/20">
                    TBA
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-bold text-white tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {member.title}
                  </h3>
                  <p className="mt-1 text-xs text-white/60">{member.subtitle}</p>
                </div>

                <div className="mt-5 pt-3 border-t border-white/5 font-tech text-[10px] uppercase tracking-widest text-white/30">
                  // Details Coming Soon
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
