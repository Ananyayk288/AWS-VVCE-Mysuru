import React from 'react';
import { CalendarDays, MapPin, ArrowRight, Sparkles, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface RegisterSectionProps {
  onOpenRegister: () => void;
}

export const RegisterSection: React.FC<RegisterSectionProps> = () => {
  return (
    <section id="register" className="relative pt-24 pb-12 sm:pt-32 sm:pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="zoom-in">
          <div className="relative overflow-hidden rounded-3xl border border-white/15 bg-gradient-to-br from-[#120e29] via-[#080714] to-[#1a0f35] p-8 sm:p-12 lg:p-16 shadow-[0_0_80px_rgba(124,58,237,0.25)]">
            {/* Background Ambient Blur */}
            <div className="pointer-events-none absolute -right-20 -top-20 h-80 w-80 rounded-full bg-[#FF9900]/20 blur-3xl"></div>
            <div className="pointer-events-none absolute -bottom-20 -left-20 h-80 w-80 rounded-full bg-[#7C3AED]/25 blur-3xl"></div>

            <div className="relative z-10 grid gap-8 lg:grid-cols-2 lg:items-center">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-amber-500/30 bg-amber-500/10 px-3.5 py-1.5 font-tech text-xs uppercase tracking-widest text-amber-400">
                  <Sparkles className="h-3.5 w-3.5" /> Limited Seats Available
                </span>

                <h2 className="mt-6 text-3xl font-black tracking-tight text-white sm:text-5xl lg:text-6xl">
                  Ready to Join the <span className="text-gradient-cool">Cloud Movement?</span>
                </h2>

                <p className="mt-4 text-base leading-relaxed text-white/70 sm:text-lg">
                  Secure your pass for AWS Student Community Day Mysuru 2026. Access all technical tracks, hands-on workshops, lunch, networking & official swag.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <a
                    href="https://konfhub.com/aws-student-community-day-mysuru-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full px-8 py-4 text-base font-bold text-black shadow-[0_2px_20px_rgba(214,163,75,0.4)] transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_30px_rgba(214,163,75,0.6)]"
                    style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
                  >
                    Register Now on KonfHub <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>
              </div>

              {/* Venue & Event Details Card */}
              <div className="glass rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-xl p-6 sm:p-8 space-y-6">
                <h3 className="text-lg font-bold text-white tracking-tight border-b border-white/10 pb-4">
                  Event Logistics & Venue
                </h3>

                <div className="flex items-start gap-3.5">
                  <CalendarDays className="h-5 w-5 text-[#A78BFA] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Date & Time</h4>
                    <p className="text-xs text-white/70 mt-0.5">Saturday, November 21, 2026</p>
                    <p className="text-xs text-white/50">9:00 AM – 6:00 PM IST</p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <MapPin className="h-5 w-5 text-[#A78BFA] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-semibold text-white">Venue Location</h4>
                    <p className="text-xs text-white/70 mt-0.5">Vidyavardhaka College of Engineering</p>
                    <p className="text-xs text-white/50">Kannada Sahithya Parishath Road, III Stage, Gokulam, Mysuru - 570002</p>
                  </div>
                </div>

                <a
                  href="https://www.google.com/maps/search/?api=1&query=Vidyavardhaka+College+of+Engineering,Mysuru,Karnataka"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 py-3 text-xs font-semibold text-white transition-colors hover:bg-white/10"
                >
                  Get Google Maps Directions <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};
