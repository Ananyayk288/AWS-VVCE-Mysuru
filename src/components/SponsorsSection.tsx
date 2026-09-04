import React from 'react';
import { ExternalLink, Ticket, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

export const SponsorsSection: React.FC = () => {
  return (
    <section id="sponsors" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>06 · Partners & Sponsors
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Powered by <span className="text-gradient-cool">community champions.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Grateful to the esteemed partners making AWS Student Community Day Mysuru 2026 possible.
            </p>
          </header>
        </ScrollReveal>

        {/* Sponsor & Partner Showcase Grid */}
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          
          {/* 1. Title Sponsor: AWS */}
          <ScrollReveal variant="fade-up" delay={100}>
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-amber-500/40 bg-gradient-to-b from-amber-500/10 via-white/[0.04] to-white/[0.02] backdrop-blur-md p-6 text-center transition-all duration-300 hover:border-amber-500/80 hover:bg-white/[0.08] h-full shadow-[0_0_25px_rgba(214,163,75,0.15)]">
              <span className="rounded-full bg-amber-500/20 border border-amber-500/50 px-3 py-1 font-mono text-[10px] uppercase font-bold text-amber-300 tracking-wider">
                Title Sponsor
              </span>

              <div className="my-5 h-32 w-full flex items-center justify-center p-3 rounded-xl bg-white shadow-lg">
                <img
                  src="/aws_partner.jpeg"
                  alt="AWS (Amazon Web Services)"
                  className="max-h-full max-w-full object-contain rounded-lg filter transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-lg font-extrabold text-white tracking-tight">AWS</h3>
                <p className="mt-1 text-xs text-amber-400/90 font-medium">Amazon Web Services</p>
              </div>
            </div>
          </ScrollReveal>

          {/* 2. Host & Venue Partner: VVCE */}
          <ScrollReveal variant="fade-up" delay={200}>
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-purple-500/30 bg-white/[0.04] backdrop-blur-md p-6 text-center transition-all duration-300 hover:border-purple-500/60 hover:bg-white/[0.08] h-full">
              <span className="rounded-full bg-purple-500/20 border border-purple-500/40 px-3 py-1 font-mono text-[10px] uppercase font-bold text-purple-300 tracking-wider">
                Host & Venue Partner
              </span>

              <div className="my-5 h-32 w-full flex items-center justify-center p-3 rounded-xl bg-white shadow-md">
                <img
                  src="/vvce_logo.png"
                  alt="Vidyavardhaka College of Engineering"
                  className="max-h-full max-w-full object-contain filter drop-shadow-md transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">Vidyavardhaka College of Engineering</h3>
                <p className="mt-1 text-xs text-white/60">Mysuru, Karnataka</p>
              </div>
            </div>
          </ScrollReveal>

          {/* 3. Official Ticketing Partner: KonfHub */}
          <ScrollReveal variant="fade-up" delay={300}>
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-amber-500/30 bg-white/[0.04] backdrop-blur-md p-6 text-center transition-all duration-300 hover:border-amber-500/60 hover:bg-white/[0.08] h-full">
              <span className="rounded-full bg-amber-500/20 border border-amber-500/40 px-3 py-1 font-mono text-[10px] uppercase font-bold text-amber-400 tracking-wider">
                Official Ticketing Partner
              </span>

              <div className="my-5 h-32 w-full flex items-center justify-center p-4 rounded-xl bg-white shadow-md">
                <img
                  src="/konfhub_logo.png"
                  alt="KonfHub"
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">KonfHub</h3>
                <a
                  href="https://konfhub.com/aws-student-community-day-mysuru-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1.5 inline-flex items-center gap-1 text-xs font-semibold text-amber-400 hover:underline"
                >
                  Visit Ticketing Portal <ExternalLink className="h-3 w-3" />
                </a>
              </div>
            </div>
          </ScrollReveal>

          {/* 4. Official Community Partner: AWS User Group Mysuru */}
          <ScrollReveal variant="fade-up" delay={400}>
            <div className="group relative flex flex-col items-center justify-between overflow-hidden rounded-2xl border border-indigo-500/30 bg-white/[0.04] backdrop-blur-md p-6 text-center transition-all duration-300 hover:border-indigo-500/60 hover:bg-white/[0.08] h-full">
              <span className="rounded-full bg-indigo-500/20 border border-indigo-500/40 px-3 py-1 font-mono text-[10px] uppercase font-bold text-indigo-300 tracking-wider">
                Official Community Partner
              </span>

              <div className="my-5 h-32 w-full flex items-center justify-center p-3 rounded-xl bg-white shadow-md">
                <img
                  src="/aws_user_group_mysuru_logo.png"
                  alt="AWS User Group Mysuru"
                  className="max-h-full max-w-full object-contain filter drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
                />
              </div>

              <div>
                <h3 className="text-base font-bold text-white">AWS User Group Mysuru</h3>
                <p className="mt-1 text-xs text-white/60">Regional AWS Community Chapter</p>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Call to Sponsor Banner */}
        <ScrollReveal variant="fade-up" delay={450}>
          <div className="mt-10 rounded-2xl border border-dashed border-white/20 bg-white/[0.02] backdrop-blur-md p-8 text-center flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="text-left max-w-xl">
              <h3 className="text-xl font-bold text-white flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-amber-400" />
                Interested in Sponsoring?
              </h3>
              <p className="mt-2 text-xs leading-relaxed text-white/60 sm:text-sm">
                Connect your brand with 500+ cloud developers, engineers, students, and tech leaders across Mysuru and Karnataka.
              </p>
            </div>

            <a
              href="mailto:awscloudclub@vvce.ac.in"
              className="shrink-0 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-6 py-3 text-xs font-semibold text-white transition-all hover:bg-white/20 hover:scale-105"
            >
              Get Sponsor Prospectus <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
