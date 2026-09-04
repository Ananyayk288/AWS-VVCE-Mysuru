import React from 'react';
import { ScrollReveal } from './ScrollReveal';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <ScrollReveal variant="fade-left">
            <header className="max-w-3xl">
              <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
                <span className="text-white/40">#</span>01 · About
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
                A conference <span className="text-gradient-cool">by the community</span>, for anyone learning the cloud.
              </h2>
            </header>
          </ScrollReveal>

          <ScrollReveal variant="fade-right" delay={150}>
            <div className="space-y-5 text-base leading-relaxed text-white/70 sm:text-lg">
              <p>
                AWS Community Day is a full day of talks, workshops, and hallway conversations organized by the local AWS community. Whether you've just heard about “the cloud” or you've been running production workloads for a decade, you'll find something here that moves you forward.
              </p>
              <p>
                Every speaker, mentor, and volunteer is here because they love this stuff and they want you to love it too. No gatekeeping. Beginners welcomed at the front.
              </p>

              {/* Code Box */}
              <div className="glass mt-6 rounded-2xl p-5 font-mono text-sm text-white/80 border border-white/10 bg-white/[0.03] backdrop-blur-md">
                <span className="text-emerald-400">$</span> whoami<br />
                <span className="text-white font-semibold">builder</span><br />
                <span className="text-emerald-400">$</span> deploy --your potential<br />
                <span className="text-[#A78BFA] font-medium">→ Build Once. Scale Forever.</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
