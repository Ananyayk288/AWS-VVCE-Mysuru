import React, { useState } from 'react';
import { X, ExternalLink, CheckCircle2, Cloud, Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

interface RegistrationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({ isOpen, onClose }) => {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    role: 'Student',
    college: '',
  });

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    confetti({
      particleCount: 120,
      spread: 80,
      origin: { y: 0.5 },
      colors: ['#FF9900', '#A78BFA', '#7C3AED', '#ffffff'],
    });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/20 bg-[#090814] p-6 sm:p-8 shadow-[0_0_60px_rgba(124,58,237,0.4)]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        {!submitted ? (
          <div>
            <div className="flex items-center gap-3">
              <span className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-to-br from-[#FF9900] to-[#9B6DFF]">
                <Cloud className="h-6 w-6 text-black stroke-[2.5]" />
              </span>
              <div>
                <h3 className="text-xl font-bold text-white tracking-tight">Register for AWS SCD Mysuru 2026</h3>
                <p className="text-xs text-white/50"> Vidyavardhaka College of Engineering · 21 Nov 2026</p>
              </div>
            </div>

            {/* Direct KonfHub CTA Banner */}
            <div className="mt-6 rounded-2xl border border-amber-500/30 bg-amber-500/10 p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <h4 className="text-sm font-bold text-amber-300">Official KonfHub Ticketing</h4>
                  <p className="text-xs text-white/70 mt-0.5">Instant confirmation & badge issuance</p>
                </div>
                <a
                  href="https://konfhub.com/aws-student-community-day-mysuru-2026"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex shrink-0 items-center gap-1.5 rounded-full px-4 py-2 text-xs font-bold text-black shadow-md cursor-pointer transition-all hover:scale-105"
                  style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
                >
                  KonfHub Page <ExternalLink className="h-3.5 w-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Registration Form */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="John Doe"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase text-white/60 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="john@example.com"
                  className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">Role</label>
                  <select
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full rounded-xl border border-white/15 bg-black/60 px-3 py-2.5 text-sm text-white focus:border-[#A78BFA] focus:outline-none"
                  >
                    <option value="Student">Student</option>
                    <option value="Developer">Developer</option>
                    <option value="Faculty">Faculty</option>
                    <option value="Professional">Professional</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-white/60 mb-1">Phone</label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 9876543210"
                    className="w-full rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-white/30 focus:border-[#A78BFA] focus:outline-none"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full mt-2 rounded-full py-3.5 text-sm font-bold text-black shadow-lg cursor-pointer transition-all hover:scale-[1.02]"
                style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
              >
                Complete Pre-Registration
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center py-6 space-y-4">
            <CheckCircle2 className="h-16 w-16 text-emerald-400 mx-auto animate-bounce" />
            <h3 className="text-2xl font-bold text-white">Registration Submitted!</h3>
            <p className="text-sm text-white/70">
              Thank you, <strong className="text-white">{formData.name}</strong>! We look forward to seeing you at Vidyavardhaka College of Engineering on Saturday, November 21, 2026.
            </p>
            <div className="pt-4">
              <button
                onClick={onClose}
                className="rounded-full bg-white px-6 py-2.5 text-xs font-bold text-black hover:bg-white/90"
              >
                Close Window
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
