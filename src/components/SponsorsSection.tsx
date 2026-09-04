import React from 'react';
import { ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>06 · Sponsors
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Powered by <span className="text-gradient-cool">community champions.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Grateful to the organizations making AWS Student Community Day Mysuru 2026 possible.
            </p>
          </header>
        </ScrollReveal>

        {/* Sponsor Showcase Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* Main Title Partner Card */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-amber-500/30 bg-white/[0.03] backdrop-blur-md p-8 text-center transition-all duration-300 hover:border-amber-500/60 hover:bg-white/[0.06] h-full">
              <span className="absolute top-3 left-3 rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 font-mono text-[10px] uppercase font-bold text-amber-400">
                Community Partner
              </span>

              <div className="h-24 w-full flex items-center justify-center p-2">
                <img
                  src="/aws_partner.jpeg"
                  alt="AWS Student Builder Group"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg filter brightness-110"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = 'https://ui-avatars.com/api/?name=AWS+Student+Builder+Group&background=0f172a&color=ff9900';
                  }}
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">AWS Student Builder Group</h3>
              <p className="mt-1 text-xs text-white/50">Official AWS Community Chapter VVCE</p>
            </div>
          </ScrollReveal>

          {/* Venue & Academic Partner */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-purple-500/30 bg-white/[0.03] backdrop-blur-md p-8 text-center transition-all duration-300 hover:border-purple-500/60 hover:bg-white/[0.06] h-full">
              <span className="absolute top-3 left-3 rounded-full bg-purple-500/20 border border-purple-500/40 px-3 py-1 font-mono text-[10px] uppercase font-bold text-purple-400">
                Host & Venue Partner
              </span>

              <div className="h-24 w-full flex items-center justify-center p-2">
                <img
                  src="https://ui-avatars.com/api/?name=Vidyavardhaka+College+of+Engineering&background=1e1b4b&color=a78bfa&size=200&bold=true"
                  alt="Vidyavardhaka College of Engineering"
                  className="max-h-full max-w-full object-contain rounded-lg shadow-lg"
                />
              </div>
              <h3 className="mt-4 text-lg font-bold text-white">Vidyavardhaka College of Engineering</h3>
              <p className="mt-1 text-xs text-white/50">Mysuru, Karnataka</p>
            </div>
          </ScrollReveal>

          {/* Call to Sponsor Card */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="group relative flex flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-white/20 bg-white/[0.01] backdrop-blur-md p-8 text-center transition-all duration-300 hover:border-white/40 hover:bg-white/[0.04] h-full">
              <h3 className="text-xl font-bold text-white">Want to Sponsor?</h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60">
                Connect your brand with 500+ cloud developers, engineers, and tech talents.
              </p>
              <a
                href="mailto:awscloudclub@vvce.ac.in"
                className="mt-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:scale-105"
              >
                Get Sponsor Prospectus <ExternalLink className="h-3.5 w-3.5" />
              </a>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
