import React from 'react';
import { Terminal, Clock, Laptop, ArrowRight } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';

interface WorkshopsSectionProps {
  onOpenRegister: () => void;
}

export const WorkshopsSection: React.FC<WorkshopsSectionProps> = () => {
  const workshops = [
    {
      title: 'Building Generative AI Applications with Amazon Bedrock',
      duration: '2.5 Hours',
      level: 'Intermediate',
      prerequisites: 'Laptop with AWS Account / CLI configured',
      desc: 'Step-by-step hands-on guide to building multi-agent RAG (Retrieval-Augmented Generation) applications using Claude 3, Bedrock Knowledge Bases, and LangChain.',
      instructor: 'AWS GenAI Community Leads',
      tag: 'GenAI & LLMs',
    },
    {
      title: 'Kubernetes on AWS: Deploying & Scaling Elastic Microservices',
      duration: '2 Hours',
      level: 'Advanced',
      prerequisites: 'Docker basics & basic Terminal experience',
      desc: 'Set up an Amazon EKS cluster, configure Helm charts, deploy microservices, and configure autoscaling with Karpenter and Prometheus monitoring.',
      instructor: 'Container Solutions Engineers',
      tag: 'Cloud & Containers',
    },
  ];

  return (
    <section id="workshops" className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal variant="fade-up">
          <header className="max-w-3xl">
            <p className="font-tech text-xs uppercase tracking-[0.25em] text-[#A78BFA]">
              <span className="text-white/40">#</span>05 · Workshops
            </p>
            <h2 className="mt-3 text-3xl font-bold tracking-tight text-white sm:text-4xl md:text-5xl">
              Build real projects in <span className="text-gradient-cool">hands-on sessions.</span>
            </h2>
            <p className="mt-4 text-base leading-relaxed text-white/60 sm:text-lg">
              Bring your laptop and code side-by-side with AWS experts. Walk away with working cloud projects.
            </p>
          </header>
        </ScrollReveal>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {workshops.map((ws, idx) => (
            <ScrollReveal key={idx} variant="fade-up" delay={idx * 150}>
              <div
                className="group relative flex flex-col justify-between overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] backdrop-blur-md p-7 transition-all duration-300 hover:border-white/25 hover:bg-white/[0.06]"
              >
                <div>
                  {/* Header Pills */}
                  <div className="flex flex-wrap items-center justify-between gap-2">
                    <span className="rounded-full bg-[#A78BFA]/15 border border-[#A78BFA]/30 px-3 py-1 font-mono text-[11px] font-semibold text-[#A78BFA]">
                      {ws.tag}
                    </span>
                    <span className="flex items-center gap-1.5 font-mono text-xs text-white/50">
                      <Clock className="h-3.5 w-3.5" />
                      {ws.duration}
                    </span>
                  </div>

                  <h3 className="mt-5 text-xl font-bold text-white tracking-tight group-hover:text-[#A78BFA] transition-colors">
                    {ws.title}
                  </h3>

                  <p className="mt-3 text-sm leading-relaxed text-white/60">
                    {ws.desc}
                  </p>

                  {/* Details */}
                  <div className="mt-6 space-y-2 pt-4 border-t border-white/5 text-xs text-white/70">
                    <div className="flex items-center gap-2">
                      <Laptop className="h-4 w-4 text-[#A78BFA]" />
                      <span><strong className="text-white">Requirements:</strong> {ws.prerequisites}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Terminal className="h-4 w-4 text-[#A78BFA]" />
                      <span><strong className="text-white">Instructor:</strong> {ws.instructor}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between">
                  <span className="font-mono text-xs text-white/40 uppercase">Level: {ws.level}</span>
                  <a
                    href="https://konfhub.com/aws-student-community-day-mysuru-2026"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-xs font-semibold text-white transition-all hover:bg-white/15 hover:border-white/40 cursor-pointer"
                  >
                    Reserve Seat <ArrowRight className="h-3.5 w-3.5" />
                  </a>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};
