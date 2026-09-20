import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { TicketsSection } from './components/TicketsSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { SponsorsSection } from './components/SponsorsSection';
import { OrganizersSection } from './components/OrganizersSection';
import { FaqSection } from './components/FaqSection';
import { FooterCtaSection } from './components/FooterCtaSection';
import { RegisterSection } from './components/RegisterSection';
import { Footer } from './components/Footer';
import { NodeModal } from './components/NodeModal';
import { SchedulePage } from './components/SchedulePage';

import { TeamSection } from './components/TeamSection';
import { TeamPage } from './components/TeamPage';
import { BadgePage } from './components/BadgePage';

export function App() {
  const [currentPath, setCurrentPath] = useState<string>(() => {
    if (window.location.pathname === '/schedule' || window.location.hash === '#/schedule') return '/schedule';
    if (window.location.pathname === '/team' || window.location.hash === '#/team') return '/team';
    if (window.location.pathname === '/badge' || window.location.hash === '#/badge') return '/badge';
    return '/';
  });

  const [selectedNode, setSelectedNode] = useState<{
    title: string;
    category: string;
    description: string;
    icon: string;
  } | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      if (window.location.pathname === '/schedule' || window.location.hash === '#/schedule') {
        setCurrentPath('/schedule');
      } else if (window.location.pathname === '/team' || window.location.hash === '#/team') {
        setCurrentPath('/team');
      } else if (window.location.pathname === '/badge' || window.location.hash === '#/badge') {
        setCurrentPath('/badge');
      } else {
        setCurrentPath('/');
      }
    };
    window.addEventListener('popstate', handlePopState);
    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  const navigateToSchedule = () => {
    window.history.pushState({}, '', '/schedule');
    setCurrentPath('/schedule');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToTeam = () => {
    window.history.pushState({}, '', '/team');
    setCurrentPath('/team');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToBadge = () => {
    window.history.pushState({}, '', '/badge');
    setCurrentPath('/badge');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navigateToHome = (hash?: string) => {
    window.history.pushState({}, '', '/' + (hash ? hash : ''));
    setCurrentPath('/');
    if (hash) {
      setTimeout(() => {
        const targetId = hash.replace(/^#/, '');
        const el = document.getElementById(targetId);
        if (el) {
          const yOffset = -80;
          const y = el.getBoundingClientRect().top + window.pageYOffset + yOffset;
          window.scrollTo({ top: y, behavior: 'smooth' });
        }
      }, 80);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleOpenRegister = () => {
    window.open('https://konfhub.com/aws-student-community-day-mysuru-2026', '_blank');
  };

  if (currentPath === '/badge') {
    return (
      <div className="relative min-h-screen overflow-x-clip text-[#222b38] selection:bg-[#00aa93]/30 selection:text-[#222b38] bg-[#EFF0F3]">
        <Header
          onOpenRegister={handleOpenRegister}
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
          currentPath="/badge"
        />
        <BadgePage onNavigateHome={() => navigateToHome()} />
        <Footer
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
        />
      </div>
    );
  }

  if (currentPath === '/schedule') {
    return (
      <div className="relative min-h-screen overflow-x-clip text-[#222b38] selection:bg-[#00aa93]/30 selection:text-[#222b38] bg-[#EFF0F3]">
        <Header
          onOpenRegister={handleOpenRegister}
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
          currentPath="/schedule"
        />
        <SchedulePage onNavigateHome={() => navigateToHome()} />
        <Footer
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
        />
      </div>
    );
  }

  if (currentPath === '/team') {
    return (
      <div className="relative min-h-screen overflow-x-clip text-[#222b38] selection:bg-[#00aa93]/30 selection:text-[#222b38] bg-[#EFF0F3]">
        <Header
          onOpenRegister={handleOpenRegister}
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
          currentPath="/team"
        />
        <TeamPage onNavigateHome={() => navigateToHome()} />
        <Footer
          onNavigateHome={navigateToHome}
          onNavigateSchedule={navigateToSchedule}
          onNavigateTeam={navigateToTeam}
          onNavigateBadge={navigateToBadge}
        />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen overflow-x-clip text-[#222b38] selection:bg-[#00aa93]/30 selection:text-[#222b38] bg-[#EFF0F3]">

      {/* Navigation Header */}
      <Header
        onOpenRegister={handleOpenRegister}
        onNavigateHome={navigateToHome}
        onNavigateSchedule={navigateToSchedule}
        onNavigateTeam={navigateToTeam}
        onNavigateBadge={navigateToBadge}
        currentPath="/"
      />

      {/* Main Page Content matching Reference Flow */}
      <main className="w-full overflow-hidden">
        <HeroSection
          onOpenRegister={handleOpenRegister}
          onSelectNode={(node) => setSelectedNode(node)}
        />
        <AboutSection />
        <SpeakersSection />
        <TicketsSection />
        <WorkshopsSection
          onOpenRegister={handleOpenRegister}
        />
        <SponsorsSection />
        <AgendaSection onOpenSchedule={navigateToSchedule} />
        <TeamSection onOpenTeam={navigateToTeam} />

        {/* Clean spacing gap between Team and Venue */}
        <div className="w-full bg-[#EFF0F3] py-6 sm:py-10" aria-hidden="true" />

        <RegisterSection
          onOpenRegister={handleOpenRegister}
        />
        <FaqSection />
        <FooterCtaSection
          onOpenRegister={handleOpenRegister}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigateHome={navigateToHome}
        onNavigateSchedule={navigateToSchedule}
        onNavigateTeam={navigateToTeam}
        onNavigateBadge={navigateToBadge}
      />

      {/* Node Details Modal */}
      <NodeModal
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

    </div>
  );
}

export default App;
