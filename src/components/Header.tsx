import React, { useState, useEffect } from 'react';
import { Cloud, Menu, X } from 'lucide-react';

interface HeaderProps {
  onOpenRegister: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenRegister }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Why Attend', href: '#why' },
    { label: 'Agenda', href: '#agenda' },
    { label: 'Speakers', href: '#speakers' },
    { label: 'Workshops', href: '#workshops' },
    { label: 'Sponsors', href: '#sponsors' },
    { label: 'Organizers', href: '#organizers' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Badge', href: '#badge' },
    { label: 'Contact', href: '#register' },
  ];

  return (
    <header 
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-md border-b border-white/10 bg-[#050508]/80' 
          : 'backdrop-blur-0 bg-transparent'
      }`}
    >
      <nav 
        aria-label="Main navigation" 
        className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
      >
        <a href="#top" className="flex items-center gap-2.5 text-white group">
          <span 
            className="grid h-9 w-9 place-items-center rounded-xl shadow-lg transition-transform duration-300 group-hover:scale-105" 
            style={{ background: 'linear-gradient(135deg, #FF9900 0%, #9B6DFF 100%)' }}
          >
            <Cloud className="h-5 w-5 text-black stroke-[2.5]" />
          </span>
          <span className="flex flex-col leading-none">
            <span className="text-base font-bold tracking-tight text-white">AWS Community Day</span>
            <span className="font-tech text-[10px] uppercase tracking-[0.2em] text-white/45 mt-0.5">
              where builders meet the cloud
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links */}
        <ul className="hidden items-center gap-1 lg:flex">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-medium text-white/70 transition-all hover:bg-white/10 hover:text-white"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Action Button & Mobile Menu Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="https://konfhub.com/aws-student-community-day-mysuru-2026"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden whitespace-nowrap rounded-full px-5 py-2 text-sm font-semibold text-black shadow-[0_2px_12px_rgba(214,163,75,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_18px_rgba(214,163,75,0.45)] sm:inline-flex cursor-pointer"
            style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
          >
            Register Now
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            className="grid h-10 w-10 place-items-center rounded-full border border-white/10 text-white lg:hidden hover:bg-white/5"
          >
            {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-x-0 top-16 z-40 border-b border-white/10 bg-[#050508]/95 px-6 py-6 backdrop-blur-xl lg:hidden transition-all duration-300">
          <ul className="flex flex-col gap-3">
            {navItems.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="block rounded-lg px-4 py-2.5 text-sm font-medium text-white/80 transition-colors hover:bg-white/10 hover:text-white"
                >
                  {item.label}
                </a>
              </li>
            ))}
            <li className="pt-2">
              <a
                href="https://konfhub.com/aws-student-community-day-mysuru-2026"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center rounded-full px-5 py-2.5 text-sm font-semibold text-black cursor-pointer"
                style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
              >
                Register Now
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
};
