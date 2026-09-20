import React from 'react';

interface FooterProps {
  onNavigateHome?: (hash?: string) => void;
  onNavigateSchedule?: () => void;
  onNavigateTeam?: () => void;
  onNavigateBadge?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigateHome,
  onNavigateSchedule,
  onNavigateTeam,
  onNavigateBadge,
}) => {
  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '/badge') {
      if (onNavigateBadge) {
        e.preventDefault();
        onNavigateBadge();
      }
    } else if (href === '/schedule') {
      if (onNavigateSchedule) {
        e.preventDefault();
        onNavigateSchedule();
      }
    } else if (href === '/team') {
      if (onNavigateTeam) {
        e.preventDefault();
        onNavigateTeam();
      }
    } else if (href.startsWith('/#') || href.startsWith('#')) {
      const hash = href.replace(/^\//, '');
      if (onNavigateHome) {
        e.preventDefault();
        onNavigateHome(hash);
      }
    }
  };

  return (
    <footer className="flex w-full flex-col items-center justify-center bg-[#23303E] p-5 py-10 sm:p-8 sm:py-12 md:p-10 lg:px-20 lg:pt-20">
      <div className="flex w-full max-w-7xl flex-col items-start justify-between gap-10 lg:flex-row">
        
        {/* Brand / Logo & Tagline Column */}
        <div className="flex w-full max-w-sm flex-col items-start justify-start gap-5">
          <a
            href="/"
            onClick={(e) => handleNav(e, '/#')}
            className="flex items-center gap-3 group cursor-pointer"
          >
            <div className="h-10 w-10 rounded-full overflow-hidden shrink-0 flex items-center justify-center">
              <img
                src="/club_logo.png"
                alt="AWS Student Builder Group VVCE"
                className="w-[145%] h-[145%] object-cover scale-100"
                style={{ objectPosition: 'center center', marginTop: '-2%' }}
              />
            </div>
            <span className="flex flex-col leading-none">
              <span className="text-base font-bold tracking-tight text-[#FAFAFA]">
                COMMUNITY DAY
              </span>
              <span className="text-[10px] uppercase tracking-wider mt-0.5 text-[#DDECDA]/80">
                MYSURU 2026
              </span>
            </span>
          </a>
          <p className="font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] sm:text-base sm:leading-[105%]">
            Built by the community, for the community.
          </p>
        </div>

        {/* 3 Column Navigation Grid */}
        <div className="grid w-full grid-cols-3 items-start justify-start gap-8 lg:flex lg:w-fit lg:flex-row lg:justify-center lg:gap-12">
          
          {/* Explore Column */}
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="font-sans text-lg leading-[105%] font-normal tracking-[-0.02em] text-[#FAFAFA] sm:text-xl">
              Explore
            </p>
            <div className="flex flex-col gap-2">
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#about"
                onClick={(e) => handleNav(e, '/#about')}
              >
                About
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#speakers"
                onClick={(e) => handleNav(e, '/#speakers')}
              >
                Speakers
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#tickets"
                onClick={(e) => handleNav(e, '/#tickets')}
              >
                Tickets
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#sponsors"
                onClick={(e) => handleNav(e, '/#sponsors')}
              >
                Sponsors
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/schedule"
                onClick={(e) => handleNav(e, '/schedule')}
              >
                Schedule
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/team"
                onClick={(e) => handleNav(e, '/team')}
              >
                Team
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#venue"
                onClick={(e) => handleNav(e, '/#venue')}
              >
                Venue
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#faq"
                onClick={(e) => handleNav(e, '/#faq')}
              >
                FAQ
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/badge"
                onClick={(e) => handleNav(e, '/badge')}
              >
                Badge
              </a>
            </div>
          </div>

          {/* Community Column */}
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="font-sans text-lg leading-[105%] font-normal tracking-[-0.02em] text-[#FAFAFA] sm:text-xl">
              Community
            </p>
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://konfhub.com/aws-student-community-day-mysuru-2026"
              >
                Get Tickets
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://konfhub.com/aws-student-community-day-mysuru-2026"
              >
                Become a Partner
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="mailto:contact@awssbg.org"
              >
                Contact Us
              </a>
              <a
                target="_self"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="/#about"
                onClick={(e) => handleNav(e, '/#about')}
              >
                Code of Conduct
              </a>
            </div>
          </div>

          {/* Socials Column */}
          <div className="flex flex-col items-start justify-center gap-2">
            <p className="font-sans text-lg leading-[105%] font-normal tracking-[-0.02em] text-[#FAFAFA] sm:text-xl">
              Socials
            </p>
            <div className="flex flex-col gap-2">
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://linkedin.com/company/awsvvce"
              >
                LinkedIn
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://x.com"
              >
                X / Twitter
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://instagram.com/awssbg_vvce"
              >
                Instagram
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://meetup.com"
              >
                Meetup
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-6 font-sans text-sm leading-[115%] font-light tracking-[-0.01em] text-[#DDECDA] hover:text-[#FAFAFA] hover:underline focus-visible:ring-2 focus-visible:ring-[#DDECDA] focus-visible:ring-offset-2 focus-visible:ring-offset-[#23303E] focus-visible:outline-none sm:text-base sm:leading-[105%]"
                href="https://youtube.com"
              >
                YouTube
              </a>
            </div>
          </div>

        </div>
      </div>

      {/* Horizontal Divider & Copyright */}
      <div className="flex w-full max-w-7xl flex-col items-center justify-center">
        <div className="my-8 h-px w-full bg-[#3B4C5A] lg:my-9"></div>
        <p className="w-full text-center font-mono text-sm font-light tracking-[-0.02em] text-[#FAFAFA] uppercase">
          © 2026 AWS STUDENT BUILDER GROUP VVCE
        </p>
      </div>
    </footer>
  );
};
