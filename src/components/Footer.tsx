import React from 'react';
import { Cloud, Linkedin, Instagram, Youtube, Users } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="relative border-t border-white/10 bg-[#030305] text-white/70 py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          
          {/* Brand Info */}
          <div className="space-y-4 lg:col-span-2">
            <a href="#top" className="flex items-center gap-2.5 text-white">
              <span
                className="grid h-8 w-8 place-items-center rounded-lg shadow-md"
                style={{ background: 'linear-gradient(135deg, #FF9900 0%, #9B6DFF 100%)' }}
              >
                <Cloud className="h-4 w-4 text-black stroke-[2.5]" />
              </span>
              <span className="font-bold tracking-tight text-white text-base">
                AWS Student Community Day Mysuru 2026
              </span>
            </a>

            <p className="max-w-md text-xs leading-relaxed text-white/50">
              AWS Student Community Day is a community-run event organized by AWS Student Builder Group at Vidyavardhaka College of Engineering. AWS is a trademark of Amazon.com, Inc. or its affiliates.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com/company/awsvvce"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </a>

              <a
                href="https://instagram.com/awssbg_vvce"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Instagram className="h-4 w-4" />
              </a>

              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </a>

              <a
                href="https://meetup.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Meetup"
                className="grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                <Users className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Event Links</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-white transition-colors">About Event</a></li>
              <li><a href="#why" className="hover:text-white transition-colors">Why Attend</a></li>
              <li><a href="#agenda" className="hover:text-white transition-colors">Full Agenda</a></li>
              <li><a href="#speakers" className="hover:text-white transition-colors">Speakers</a></li>
              <li><a href="#workshops" className="hover:text-white transition-colors">Workshops</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-xs uppercase tracking-widest text-white/40 mb-4">Community</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#sponsors" className="hover:text-white transition-colors">Sponsors</a></li>
              <li><a href="#organizers" className="hover:text-white transition-colors">Organizers & Crew</a></li>
              <li><a href="#faq" className="hover:text-white transition-colors">FAQ</a></li>
              <li><a href="#badge" className="hover:text-white transition-colors">Builder Badge</a></li>
              <li><a href="https://konfhub.com/aws-student-community-day-mysuru-2026" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">Register Now</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Disclaimer */}
        <div className="mt-12 pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between text-[11px] text-white/40 gap-4">
          <p>© 2026 AWS Student Builder Group VVCE. All rights reserved.</p>
          <p>Organized with ❤️ for the AWS Community Mysuru.</p>
        </div>
      </div>
    </footer>
  );
};
