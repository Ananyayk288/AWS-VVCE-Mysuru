import React from 'react';
import { GraduationCap, Terminal, Users, Briefcase, Heart, Gift } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const WhyAttendSection: React.FC = () => {
  const reasons = [
    {
      num: '01',
      title: 'Learn from Experts',
      desc: 'Talks from AWS Heroes, Community Builders, and senior engineers shipping real-world cloud systems.',
      icon: GraduationCap,
    },
    {
      num: '02',
      title: 'Hands-on Workshops',
      desc: 'Bring your laptop. Leave with working code across serverless, AI, containers, and more.',
      icon: Terminal,
    },
    {
      num: '03',
      title: 'Networking',
      desc: 'Meet the local cloud community — engineers, founders, students, and hiring teams.',
      icon: Users,
    },
    {
      num: '04',
      title: 'Career Opportunities',
      desc: 'Connect with sponsor booths hiring across cloud, ML, DevOps, and platform roles.',
      icon: Briefcase,
    },
    {
      num: '05',
      title: 'Community',
      desc: 'A welcoming, community-run event. First timers and students strongly encouraged.',
      icon: Heart,
    },
    {
      num: '06',
      title: 'Swag & Giveaways',
      desc: 'Surprise drops and more from AWS throughout the day.',
      icon: Gift,
    },
  ];

  return (
    <section id="why" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>02 · Why Attend
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Six good reasons. <span className="text-white/50">One extraordinary day.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              From your first Lambda to your next architecture decision — there's a room for every stage of your cloud journey.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {reasons.map((item, idx) => {
            const Icon = item.icon;
            return (
              <ScrollReveal key={item.num} variant="fade-up" delay={idx * 100}>
                <div className="group relative overflow-hidden rounded-2xl p-7 border border-white/10 bg-white/[0.03] backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06] hover:-translate-y-1">
                  {/* Radial Glow on Hover */}
                  <div
                    aria-hidden="true"
                    className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 transition-opacity duration-300 group-hover:opacity-60"
                    style={{ background: 'radial-gradient(circle, rgba(124, 58, 237, 0.45), transparent 70%)' }}
                  ></div>

                  <div
                    className="grid h-12 w-12 place-items-center rounded-xl transition-transform duration-300 group-hover:scale-110"
                    style={{ background: 'linear-gradient(135deg, rgba(167, 139, 250, 0.22), rgba(124, 58, 237, 0.22))' }}
                  >
                    <Icon className="h-6 w-6 text-white" />
                  </div>

                  <h3 className="mt-6 text-xl font-semibold text-white tracking-tight">{item.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/60">{item.desc}</p>

                  <span className="mt-6 inline-flex font-mono text-[10px] uppercase tracking-widest text-white/30">
                    {item.num} · reason
                  </span>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
