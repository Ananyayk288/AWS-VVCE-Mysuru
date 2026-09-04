import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { AboutSection } from './components/AboutSection';
import { WhyAttendSection } from './components/WhyAttendSection';
import { AgendaSection } from './components/AgendaSection';
import { SpeakersSection } from './components/SpeakersSection';
import { WorkshopsSection } from './components/WorkshopsSection';
import { SponsorsSection } from './components/SponsorsSection';
import { OrganizersSection } from './components/OrganizersSection';
import { FaqSection } from './components/FaqSection';
import { BadgeSection } from './components/BadgeSection';
import { RegisterSection } from './components/RegisterSection';
import { Footer } from './components/Footer';
import { NodeModal } from './components/NodeModal';

export function App() {
  const [selectedNode, setSelectedNode] = useState<{
    title: string;
    category: string;
    description: string;
    icon: string;
  } | null>(null);

  const handleOpenRegister = () => {
    window.open('https://konfhub.com/aws-student-community-day-mysuru-2026', '_blank');
  };

  return (
    <div className="relative min-h-screen overflow-x-clip text-white selection:bg-purple-500 selection:text-white bg-[#050508]">
      
      {/* Background Animated Layer */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
        {/* Dark base */}
        <div className="absolute inset-0 bg-[#050508]"></div>

        {/* Aurora Radial Glow 1 */}
        <div
          className="animate-aurora absolute -top-40 -left-40 h-[70vh] w-[70vh] rounded-full blur-3xl opacity-70"
          style={{ background: 'radial-gradient(circle at 30% 30%, rgba(91, 33, 182, 0.25), transparent 62%)' }}
        ></div>

        {/* Aurora Radial Glow 2 */}
        <div
          className="animate-aurora absolute top-1/3 -right-40 h-[80vh] w-[80vh] rounded-full blur-3xl opacity-70"
          style={{ background: 'radial-gradient(circle at 70% 40%, rgba(124, 58, 237, 0.28), transparent 62%)', animationDelay: '-6s' }}
        ></div>

        {/* Aurora Radial Glow 3 */}
        <div
          className="animate-aurora absolute bottom-[-20vh] left-1/3 h-[70vh] w-[70vh] rounded-full blur-3xl opacity-60"
          style={{ background: 'radial-gradient(circle at 50% 50%, rgba(167, 139, 250, 0.18), transparent 62%)', animationDelay: '-12s' }}
        ></div>

        {/* Grid and Noise patterns */}
        <div className="grid-bg absolute inset-0 opacity-70"></div>
        <div className="noise absolute inset-0 opacity-[0.5] mix-blend-overlay"></div>
        <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse at 50% 0%, transparent 40%, rgba(5, 5, 8, 0.7) 100%)' }}></div>
      </div>

      {/* Navigation Header */}
      <Header onOpenRegister={handleOpenRegister} />

      {/* Main Page Content */}
      <main>
        <HeroSection
          onOpenRegister={handleOpenRegister}
          onSelectNode={(node) => setSelectedNode(node)}
        />
        <AboutSection />
        <WhyAttendSection />
        <AgendaSection />
        <SpeakersSection />
        <WorkshopsSection
          onOpenRegister={handleOpenRegister}
        />
        <SponsorsSection />
        <OrganizersSection />
        <FaqSection />
        <BadgeSection />
        <RegisterSection
          onOpenRegister={handleOpenRegister}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Node Details Modal */}
      <NodeModal
        node={selectedNode}
        onClose={() => setSelectedNode(null)}
      />

    </div>
  );
}

export default App;
