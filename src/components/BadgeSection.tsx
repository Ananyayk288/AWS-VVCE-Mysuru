import React, { useState, useRef } from 'react';
import { Download, Share2, Sparkles, Upload, Cloud } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScrollReveal } from './ScrollReveal';

export const BadgeSection: React.FC = () => {
  const [name, setName] = useState('Alex Developer');
  const [role, setRole] = useState('Cloud Enthusiast');
  const [company, setCompany] = useState('Vidyavardhaka College of Engineering');
  const [photo, setPhoto] = useState<string | null>(null);

  const badgeRef = useRef<HTMLDivElement>(null);

  const handlePhotoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setPhoto(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(e.target.files[0]);
    }
  };

  const triggerConfetti = () => {
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#FF9900', '#A78BFA', '#7C3AED', '#ffffff'],
    });
  };

  const handleDownload = () => {
    triggerConfetti();
    const link = document.createElement('a');
    link.download = `AWS-SCD-Mysuru-2026-Badge-${name.replace(/\s+/g, '-')}.png`;
    alert(`Badge generated for ${name}! Confetti launched! 🚀`);
  };

  return (
    <section id="badge" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>09 · Badge
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Claim your <span className="text-gradient-cool">digital builder badge.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Personalize your official AWS Student Community Day Mysuru 2026 badge and share it on LinkedIn & Twitter.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Input Form */}
          <ScrollReveal variant="fade-left" delay={150}>
            <div className="glass rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#A78BFA]" />
                Personalize Your Badge
              </h3>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Role / Title</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Cloud Engineer, Student, Developer"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Organization / College</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Vidyavardhaka College of Engineering"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Upload Profile Photo</label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-white/20 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:border-white/40">
                  <Upload className="h-4 w-4 text-[#A78BFA]" />
                  {photo ? 'Change Photo' : 'Choose Photo File'}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-xs font-bold text-black shadow-lg cursor-pointer transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
                >
                  <Download className="h-4 w-4" /> Download Badge
                </button>

                <button
                  onClick={triggerConfetti}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3 text-xs font-bold text-white cursor-pointer transition-all hover:bg-white/20 hover:scale-105"
                >
                  <Share2 className="h-4 w-4" /> Celebrate!
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Live Digital Badge Card */}
          <ScrollReveal variant="zoom-in" delay={250}>
            <div className="flex justify-center">
              <div
                ref={badgeRef}
                className="relative aspect-[3/4] w-full max-w-[360px] overflow-hidden rounded-3xl border-2 border-[#A78BFA]/40 bg-[#070711] p-6 shadow-[0_0_50px_rgba(124,58,237,0.3)] transition-transform duration-500 hover:scale-[1.02]"
              >
                {/* Badge Top Header */}
                <div className="flex items-center justify-between border-b border-white/10 pb-4">
                  <div className="flex items-center gap-2">
                    <span className="grid h-7 w-7 place-items-center rounded-lg bg-gradient-to-br from-[#FF9900] to-[#9B6DFF]">
                      <Cloud className="h-4 w-4 text-black stroke-[3]" />
                    </span>
                    <span className="font-tech text-xs font-bold uppercase tracking-wider text-white">
                      AWS SCD 2026
                    </span>
                  </div>
                  <span className="font-mono text-[9px] uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 px-2 py-0.5 rounded-md border border-[#A78BFA]/20">
                    ATTENDEE
                  </span>
                </div>

                {/* Avatar Section */}
                <div className="mt-6 flex flex-col items-center text-center">
                  <div className="relative h-28 w-28 overflow-hidden rounded-full border-2 border-[#A78BFA] p-1 shadow-[0_0_20px_rgba(167,139,250,0.5)]">
                    <img
                      src={photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Builder')}&background=1e1b4b&color=a78bfa&size=200`}
                      alt="Attendee"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <h4 className="mt-4 text-xl font-bold text-white tracking-tight line-clamp-1">
                    {name || 'Your Name'}
                  </h4>
                  <p className="mt-1 text-xs font-semibold text-[#A78BFA]">{role || 'Cloud Enthusiast'}</p>
                  <p className="text-[11px] text-white/50">{company || 'Vidyavardhaka College of Engineering'}</p>
                </div>

                {/* Badge Footer Details */}
                <div className="mt-6 rounded-2xl border border-white/10 bg-white/[0.03] p-3 text-center space-y-1">
                  <div className="font-tech text-[10px] uppercase tracking-widest text-white/40">VENUE</div>
                  <div className="text-xs font-semibold text-white">Vidyavardhaka College of Engineering, Mysuru</div>
                  <div className="text-[10px] text-white/60">Saturday, November 21, 2026</div>
                </div>

                {/* Holographic Footer Bar */}
                <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-black/60 px-6 py-3 backdrop-blur-md font-mono text-[10px] text-white/40">
                  <span>#AWS Mysuru</span>
                  <span className="text-[#A78BFA]">AWS-SCD-2026-{Math.floor(1000 + Math.random() * 9000)}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
