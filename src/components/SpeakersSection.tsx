import React from 'react';
import { Linkedin, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface Speaker {
  name: string;
  role?: string;
  company?: string;
  image?: string;
  topic?: string;
  linkedin?: string;
  badge: string;
  isTBA?: boolean;
}

export const SpeakersSection: React.FC = () => {
  const speakers: Speaker[] = [
    {
      name: 'Jessica Gilmore',
      role: 'Manager, Community Groups',
      company: 'Amazon',
      image: '/speakers/Jessica.jpg',
      topic: 'Keynote: Empowering Global Builders & Community Growth',
      badge: 'AWS Keynote',
      linkedin: 'https://linkedin.com',
    },
    {
      name: 'To Be Announced',
      badge: 'TBA',
      isTBA: true,
    },
    {
      name: 'To Be Announced',
      badge: 'TBA',
      isTBA: true,
    },
    {
      name: 'To Be Announced',
      badge: 'TBA',
      isTBA: true,
    },
    {
      name: 'To Be Announced',
      badge: 'TBA',
      isTBA: true,
    },
    {
      name: 'To Be Announced',
      badge: 'TBA',
      isTBA: true,
    },
  ];

  return (
    <section id="speakers" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>04 · Speakers
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Learn from <span className="text-gradient-cool">industry leaders</span> & community builders.
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              World-class speakers sharing real-world insights, architecture patterns, and hands-on cloud wisdom.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker, index) => (
            <ScrollReveal key={index} variant="fade-up" delay={index * 100}>
              <div
                className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06] hover:-translate-y-1 ${
                  speaker.isTBA ? 'border-dashed border-white/20' : ''
                }`}
              >
                {/* Speaker Photo / Placeholder Container */}
                <div className="relative aspect-square w-full overflow-hidden rounded-xl bg-white/5 flex items-center justify-center">
                  {speaker.image ? (
                    <img
                      src={speaker.image}
                      alt={speaker.name}
                      className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-3 text-center p-6 bg-gradient-to-br from-purple-900/20 via-black to-amber-900/20 h-full w-full">
                      <div className="grid h-16 w-16 place-items-center rounded-2xl border border-white/15 bg-white/5 text-[#A78BFA] shadow-inner group-hover:scale-110 transition-transform">
                        <Sparkles className="h-8 w-8 text-[#A78BFA]" />
                      </div>
                      <span className="font-mono text-xs uppercase tracking-widest text-white/50">Speaker Announcement Soon</span>
                    </div>
                  )}
                  
                  {/* Badge Tag */}
                  <div className="absolute top-3 left-3 rounded-full bg-black/70 border border-white/15 px-3 py-1 text-[11px] font-mono font-semibold text-[#A78BFA] backdrop-blur-md">
                    {speaker.badge}
                  </div>
                </div>

                {/* Speaker Info */}
                <div className="mt-5">
                  <h3 className="text-xl font-bold text-white tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {speaker.name}
                  </h3>
                  {speaker.role && (
                    <p className="mt-1 text-sm font-medium text-white/70">
                      {speaker.role} {speaker.company && <><span className="text-white/40">@</span> <span className="text-white font-semibold">{speaker.company}</span></>}
                    </p>
                  )}

                  {speaker.topic && (
                    <p className="mt-3 text-xs leading-relaxed text-white/60 bg-white/[0.02] border border-white/5 rounded-lg p-3">
                      <span className="font-semibold text-white/80">Topic: </span>
                      {speaker.topic}
                    </p>
                  )}

                  {/* Social Links / Footer line */}
                  {speaker.linkedin ? (
                    <div className="mt-4 flex items-center gap-3 pt-3 border-t border-white/5">
                      <a
                        href={speaker.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="grid h-8 w-8 place-items-center rounded-full border border-white/10 text-white/60 transition-all hover:border-white/30 hover:bg-white/10 hover:text-white"
                      >
                        <Linkedin className="h-4 w-4" />
                      </a>
                    </div>
                  ) : (
                    <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-white/30">
                      // Speaker details to be announced
                    </div>
                  )}
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
