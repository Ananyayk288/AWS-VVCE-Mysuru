import React, { useState, useRef } from 'react';
import { Download, Share2, Sparkles, Upload, Cloud, ShieldCheck } from 'lucide-react';
import confetti from 'canvas-confetti';
import { ScrollReveal } from './ScrollReveal';

export const BadgeSection: React.FC = () => {
  const [name, setName] = useState('Alex Developer');
  const [role, setRole] = useState('Cloud Enthusiast');
  const [company, setCompany] = useState('Vidyavardhaka College of Engineering');
  const [photo, setPhoto] = useState<string | null>(null);

  const canvasRef = useRef<HTMLCanvasElement>(null);

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
      particleCount: 120,
      spread: 80,
      origin: { y: 0.6 },
      colors: ['#FF9900', '#A78BFA', '#D6A34B', '#ffffff'],
    });
  };

  const handleDownload = () => {
    triggerConfetti();

    // Create high-res canvas (600x800 for crisp export)
    const canvas = document.createElement('canvas');
    canvas.width = 600;
    canvas.height = 800;
    const ctx = canvas.getContext('2d');

    if (!ctx) {
      alert(`Badge generated for ${name}!`);
      return;
    }

    // 1. Background Gradient (Royal Mysuru Deep Purple)
    const bgGradient = ctx.createLinearGradient(0, 0, 0, 800);
    bgGradient.addColorStop(0, '#0a0618');
    bgGradient.addColorStop(0.5, '#160b33');
    bgGradient.addColorStop(1, '#080414');
    ctx.fillStyle = bgGradient;
    ctx.fillRect(0, 0, 600, 800);

    // 2. Mysuru Palace Decorative Glow Orbs
    const orb1 = ctx.createRadialGradient(300, 150, 10, 300, 150, 250);
    orb1.addColorStop(0, 'rgba(124, 58, 237, 0.4)');
    orb1.addColorStop(0.6, 'rgba(183, 121, 31, 0.15)');
    orb1.addColorStop(1, 'transparent');
    ctx.fillStyle = orb1;
    ctx.fillRect(0, 0, 600, 800);

    // 3. Gold & Purple Outer Border Frame
    ctx.strokeStyle = '#D6A34B';
    ctx.lineWidth = 6;
    ctx.strokeRect(16, 16, 568, 768);

    ctx.strokeStyle = 'rgba(167, 139, 250, 0.4)';
    ctx.lineWidth = 2;
    ctx.strokeRect(24, 24, 552, 752);

    // 4. Header Bar Text
    ctx.fillStyle = '#D6A34B';
    ctx.font = 'bold 16px "JetBrains Mono", monospace';
    ctx.textAlign = 'center';
    ctx.fillText('MYSURU PALACE EDITION', 300, 56);

    ctx.fillStyle = '#FFFFFF';
    ctx.font = 'bold 22px "Inter", sans-serif';
    ctx.fillText('AWS STUDENT COMMUNITY DAY 2026', 300, 88);

    ctx.fillStyle = '#A78BFA';
    ctx.font = '500 13px "JetBrains Mono", monospace';
    ctx.fillText('SATURDAY, NOVEMBER 21, 2026 · MYSURU', 300, 112);

    // 5. Mysuru Palace Architectural Silhouette Line Art
    ctx.strokeStyle = 'rgba(214, 163, 75, 0.25)';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    // Central Dome Arch
    ctx.arc(300, 250, 120, Math.PI, 0, false);
    // Left & Right Minaret Pillars
    ctx.moveTo(120, 250); ctx.lineTo(120, 360);
    ctx.moveTo(480, 250); ctx.lineTo(480, 360);
    ctx.stroke();

    // 6. Draw Avatar Circle
    const avatarImg = new Image();
    avatarImg.crossOrigin = 'anonymous';
    avatarImg.src = photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Builder')}&background=1e1b4b&color=a78bfa&size=300`;

    avatarImg.onload = () => {
      ctx.save();
      ctx.beginPath();
      ctx.arc(300, 270, 75, 0, Math.PI * 2, true);
      ctx.closePath();
      ctx.clip();
      ctx.drawImage(avatarImg, 225, 195, 150, 150);
      ctx.restore();

      // Avatar Border Ring (Imperial Gold)
      ctx.strokeStyle = '#D6A34B';
      ctx.lineWidth = 4;
      ctx.beginPath();
      ctx.arc(300, 270, 77, 0, Math.PI * 2);
      ctx.stroke();

      // 7. Attendee Name & Details
      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 28px "Inter", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText(name || 'Your Name', 300, 390);

      ctx.fillStyle = '#A78BFA';
      ctx.font = 'bold 16px "Inter", sans-serif';
      ctx.fillText(role || 'Cloud Enthusiast', 300, 420);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.7)';
      ctx.font = '14px "Inter", sans-serif';
      ctx.fillText(company || 'Vidyavardhaka College of Engineering', 300, 448);

      // 8. Venue & Organizer Box
      ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
      ctx.strokeStyle = 'rgba(214, 163, 75, 0.3)';
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.roundRect(60, 480, 480, 160, 16);
      ctx.fill();
      ctx.stroke();

      ctx.fillStyle = '#D6A34B';
      ctx.font = 'bold 12px "JetBrains Mono", monospace';
      ctx.fillText('HOST & VENUE PARTNER', 300, 510);

      ctx.fillStyle = '#FFFFFF';
      ctx.font = 'bold 16px "Inter", sans-serif';
      ctx.fillText('Vidyavardhaka College of Engineering', 300, 538);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '13px "Inter", sans-serif';
      ctx.fillText('Gokulam III Stage, Mysuru, Karnataka - 570002', 300, 564);

      ctx.fillStyle = '#A78BFA';
      ctx.font = '500 12px "JetBrains Mono", monospace';
      ctx.fillText('Title Sponsor: AWS | Host: VVCE | Community: AWS UG Mysuru', 300, 610);

      // 9. Bottom Ticket Bar
      ctx.fillStyle = '#06030e';
      ctx.fillRect(24, 690, 552, 60);

      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      ctx.font = '12px "JetBrains Mono", monospace';
      ctx.textAlign = 'left';
      ctx.fillText('#AWSMysuru #AWSCommunityDay', 48, 726);

      ctx.fillStyle = '#D6A34B';
      ctx.textAlign = 'right';
      ctx.fillText(`VERIFIED PASS · AWS-SCD-2026-${Math.floor(1000 + Math.random() * 9000)}`, 552, 726);

      // Save image to link
      const dataUrl = canvas.toDataURL('image/png');
      const link = document.createElement('a');
      link.download = `AWS-SCD-Mysuru-2026-Palace-Badge-${name.replace(/\s+/g, '-')}.png`;
      link.href = dataUrl;
      link.click();
    };

    // Trigger image loading fallback if fast
    if (avatarImg.complete) {
      avatarImg.onload(new Event('load'));
    }
  };

  return (
    <section id="badge" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>09 · Digital Builder Badge
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Claim your <span className="text-gradient-cool">Mysuru Palace Edition Badge.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Personalize your official royal Mysuru edition pass for AWS Student Community Day 2026 and share it on LinkedIn & Twitter.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-10 lg:grid-cols-2 lg:items-center">
          {/* Left: Input Form */}
          <ScrollReveal variant="fade-left" delay={150}>
            <div className="glass rounded-2xl border border-amber-500/20 bg-white/[0.03] backdrop-blur-md p-6 sm:p-8 space-y-5">
              <h3 className="text-xl font-bold text-white tracking-tight flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-[#D6A34B]" />
                Personalize Your Badge
              </h3>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Full Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D6A34B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Role / Title</label>
                <input
                  type="text"
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  placeholder="e.g. Cloud Engineer, Student, Developer"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D6A34B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Organization / College</label>
                <input
                  type="text"
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  placeholder="e.g. Vidyavardhaka College of Engineering"
                  className="w-full rounded-xl border border-white/15 bg-black/40 px-4 py-3 text-sm text-white placeholder-white/30 focus:border-[#D6A34B] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-2">Upload Profile Photo</label>
                <label className="flex cursor-pointer items-center justify-center gap-2 rounded-xl border border-dashed border-amber-500/30 bg-white/5 px-4 py-3.5 text-xs font-semibold text-white/80 transition-all hover:bg-white/10 hover:border-amber-500/50">
                  <Upload className="h-4 w-4 text-[#D6A34B]" />
                  {photo ? 'Change Photo' : 'Choose Photo File'}
                  <input type="file" accept="image/*" onChange={handlePhotoUpload} className="hidden" />
                </label>
              </div>

              <div className="pt-2 flex flex-wrap gap-3">
                <button
                  onClick={handleDownload}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full px-5 py-3.5 text-xs font-bold text-black shadow-lg cursor-pointer transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
                >
                  <Download className="h-4 w-4" /> Download High-Res Badge
                </button>

                <button
                  onClick={triggerConfetti}
                  className="inline-flex items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-5 py-3.5 text-xs font-bold text-white cursor-pointer transition-all hover:bg-white/20 hover:scale-105"
                >
                  <Share2 className="h-4 w-4" /> Celebrate!
                </button>
              </div>
            </div>
          </ScrollReveal>

          {/* Right: Mysuru Palace Edition Live Card */}
          <ScrollReveal variant="zoom-in" delay={250}>
            <div className="flex justify-center">
              <div
                className="relative aspect-[3/4] w-full max-w-[370px] overflow-hidden rounded-3xl border-2 border-[#D6A34B]/60 bg-gradient-to-b from-[#0e0725] via-[#170c3d] to-[#090416] p-6 shadow-[0_0_60px_rgba(214,163,75,0.25)] transition-transform duration-500 hover:scale-[1.02] flex flex-col justify-between"
              >
                {/* Mysuru Palace Background Dome Line Art Silhouette */}
                <div aria-hidden="true" className="pointer-events-none absolute inset-0 opacity-15 overflow-hidden flex items-center justify-center">
                  <div className="h-64 w-64 rounded-full border border-[#D6A34B] flex items-center justify-center">
                    <div className="h-48 w-48 rounded-full border border-[#A78BFA] border-dashed"></div>
                  </div>
                </div>

                {/* Badge Top Header */}
                <div className="relative z-10 flex items-center justify-between border-b border-amber-500/20 pb-3">
                  <div className="flex items-center gap-2">
                    <img src="/aws_partner.jpeg" alt="AWS Title Sponsor" className="h-7 w-auto object-contain rounded bg-white p-0.5" />
                    <span className="font-tech text-[10px] font-extrabold uppercase tracking-wider text-amber-400">
                      MYSURU EDITION
                    </span>
                  </div>
                  <img src="/vvce_logo.png" alt="VVCE Logo" className="h-7 w-auto object-contain bg-white rounded p-0.5" />
                </div>

                {/* Avatar Section */}
                <div className="relative z-10 mt-3 flex flex-col items-center text-center">
                  <div className="relative h-26 w-26 overflow-hidden rounded-full border-2 border-[#D6A34B] p-1 shadow-[0_0_25px_rgba(214,163,75,0.4)] bg-black/40">
                    <img
                      src={photo || `https://ui-avatars.com/api/?name=${encodeURIComponent(name || 'Builder')}&background=1e1b4b&color=a78bfa&size=200`}
                      alt="Attendee"
                      className="h-full w-full rounded-full object-cover"
                    />
                  </div>

                  <h4 className="mt-3 text-xl font-bold text-white tracking-tight line-clamp-1">
                    {name || 'Your Name'}
                  </h4>
                  <p className="mt-0.5 text-xs font-semibold text-[#D6A34B]">{role || 'Cloud Enthusiast'}</p>
                  <p className="mt-0.5 text-[11px] text-white/60 line-clamp-1">{company || 'Vidyavardhaka College of Engineering'}</p>
                </div>

                {/* Badge Details Box */}
                <div className="relative z-10 mt-3 rounded-2xl border border-amber-500/20 bg-white/[0.04] p-3 text-center space-y-1 backdrop-blur-sm">
                  <div className="font-tech text-[9px] uppercase tracking-widest text-[#D6A34B]">HOST & VENUE PARTNER</div>
                  <div className="text-xs font-bold text-white">Vidyavardhaka College of Engineering</div>
                  <div className="text-[10px] text-white/70">Saturday, November 21, 2026 · Mysuru</div>
                </div>

                {/* Palace Holographic Footer Bar */}
                <div className="relative z-10 -mx-6 -mb-6 mt-3 flex items-center justify-between border-t border-amber-500/30 bg-black/80 px-6 py-3 font-mono text-[10px] text-white/50">
                  <span className="text-amber-400 font-semibold">#AWSMysuru</span>
                  <span className="text-[#A78BFA]">PALACE-PASS-2026</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};
