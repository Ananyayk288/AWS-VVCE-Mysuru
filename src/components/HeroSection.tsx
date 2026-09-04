import React, { useState, useEffect } from 'react';
import { ArrowRight, CalendarDays, MapPin, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  onOpenRegister: () => void;
  onSelectNode: (node: { title: string; category: string; description: string; icon: string }) => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ onOpenRegister, onSelectNode }) => {
  const [attendees, setAttendees] = useState(0);
  const [speakers, setSpeakers] = useState(0);
  const [sessions, setSessions] = useState(0);

  useEffect(() => {
    const duration = 1500;
    const steps = 40;
    const intervalTime = duration / steps;

    let step = 0;
    const timer = setInterval(() => {
      step++;
      const progress = step / steps;
      setAttendees(Math.floor(500 * Math.min(progress, 1)));
      setSpeakers(Math.floor(15 * Math.min(progress, 1)));
      setSessions(Math.floor(12 * Math.min(progress, 1)));

      if (step >= steps) clearInterval(timer);
    }, intervalTime);

    return () => clearInterval(timer);
  }, []);

  const nodes = [
    {
      title: 'Compute',
      category: 'Infrastructure & EC2',
      description: 'Powering cloud workloads from scalable Amazon EC2 instances to serverless AWS Fargate and AWS Lambda execution environments.',
      cx: 240, cy: 240, r: 26, color: 'orange'
    },
    {
      title: 'Storage',
      category: 'Data & Persistence',
      description: 'Highly available Amazon S3 buckets, Elastic Block Store (EBS), and high-performance EBS/EFS file systems for enterprise apps.',
      cx: 105.6, cy: 144, r: 20, color: 'purple'
    },
    {
      title: 'AI',
      category: 'Generative AI & ML',
      description: 'Amazon Bedrock, SageMaker, and Q developer tools allowing builders to integrate foundation models into custom applications seamlessly.',
      cx: 374.4, cy: 124.8, r: 20, color: 'purple'
    },
    {
      title: 'Containers',
      category: 'EKS & ECS Orchestration',
      description: 'Docker container management with Amazon Elastic Kubernetes Service (EKS) and Elastic Container Service (ECS) at hyper scale.',
      cx: 72, cy: 345.6, r: 20, color: 'purple'
    },
    {
      title: 'Networking',
      category: 'VPC & Edge Delivery',
      description: 'Global CloudFront CDN, Route53 DNS, AWS Transit Gateway, and isolated Virtual Private Clouds (VPC) securing data paths.',
      cx: 412.8, cy: 355.2, r: 20, color: 'purple'
    },
    {
      title: 'Security',
      category: 'IAM & Compliance',
      description: 'AWS Identity and Access Management (IAM), GuardDuty, AWS KMS encryption, and zero-trust policies protecting infrastructure.',
      cx: 240, cy: 57.6, r: 20, color: 'purple'
    },
    {
      title: 'Serverless',
      category: 'Event-Driven Architectures',
      description: 'EventBridge, DynamoDB, API Gateway, and Step Functions building resilient, scalable, cost-effective serverless architectures.',
      cx: 240, cy: 422.4, r: 20, color: 'purple'
    }
  ];

  return (
    <section id="top" className="relative pt-28 sm:pt-32 lg:pt-40 pb-16">
      <div className="mx-auto grid max-w-7xl gap-12 px-4 sm:px-6 lg:grid-cols-[1.05fr_1fr] lg:gap-8 lg:px-8">
        
        {/* Left Column: Text Content & Info */}
        <div className="relative">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3.5 py-1.5 font-tech text-[11px] uppercase tracking-widest text-white/70 backdrop-blur">
            <span className="h-2 w-2 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.8)] animate-pulse"></span>
            Registration open · Learn · Build · Connect · Grow
          </div>

          {/* Heading */}
          <h1 className="mt-6 text-4xl font-black leading-[1.02] tracking-tight text-white sm:text-6xl lg:text-7xl">
            Where Builders<br />
            Meet the <span className="text-gradient-cool">Cloud.</span>
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/70 sm:text-lg">
            A one-day, community-run AWS conference for students, developers, architects, and the cloud-curious. Deep talks, hands-on workshops, and the kind of people you'll want to build the future with.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="https://konfhub.com/aws-student-community-day-mysuru-2026"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight text-black shadow-[0_2px_12px_rgba(214,163,75,0.25)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_20px_rgba(214,163,75,0.45)]"
              style={{ background: 'linear-gradient(120deg, #B7791F, #D6A34B 60%, #B7791F)' }}
            >
              Register Now <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </a>

            <a
              href="#agenda"
              className="group relative inline-flex cursor-pointer items-center justify-center gap-2 rounded-full border border-white/15 px-6 py-3.5 text-sm font-semibold text-white transition-all hover:bg-white/10 hover:border-white/30"
            >
              Explore Agenda
            </a>
          </div>

          {/* Metadata Pills */}
          <div className="mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 text-sm text-white/60">
            <span className="flex items-center gap-2">
              <CalendarDays className="h-4 w-4 text-[#A78BFA]" />
              Saturday, November 21, 2026
            </span>

            <a
              href="https://www.google.com/maps/search/?api=1&query=Vidyavardhaka+College+of+Engineering,Mysuru,Karnataka"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 transition-colors hover:text-white underline decoration-white/30 underline-offset-4"
            >
              <MapPin className="h-4 w-4 text-[#A78BFA]" />
              Vidyavardhaka College of Engineering
            </a>

            <span className="flex items-center gap-2 font-tech text-xs text-white/40">
              <Sparkles className="h-3.5 w-3.5 text-[#A78BFA]" />
              // sudo attend aws-community-day
            </span>
          </div>

          {/* Stats Cards */}
          <div className="mt-10 grid grid-cols-3 gap-3">
            <div className="glass rounded-2xl p-4 border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <p className="text-3xl font-bold text-white tracking-tight">
                <span>{attendees}</span><span className="text-[#A78BFA]">+</span>
              </p>
              <p className="mt-1 font-tech text-[10px] uppercase tracking-widest text-white/50">Attendees</p>
            </div>

            <div className="glass rounded-2xl p-4 border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <p className="text-3xl font-bold text-white tracking-tight">
                <span>{speakers}</span><span className="text-[#A78BFA]">+</span>
              </p>
              <p className="mt-1 font-tech text-[10px] uppercase tracking-widest text-white/50">Speakers</p>
            </div>

            <div className="glass rounded-2xl p-4 border border-white/10 bg-white/[0.03] backdrop-blur-md">
              <p className="text-3xl font-bold text-white tracking-tight">
                <span>{sessions}</span><span className="text-[#A78BFA]">+</span>
              </p>
              <p className="mt-1 font-tech text-[10px] uppercase tracking-widest text-white/50">Sessions</p>
            </div>
          </div>
        </div>

        {/* Right Column: Interactive Cloud Diagram */}
        <div className="relative flex items-center justify-center">
          <div className="relative mx-auto aspect-square w-full max-w-[520px]">
            {/* Ambient Background Glow */}
            <div
              className="absolute inset-0 rounded-full blur-3xl opacity-60"
              style={{ background: 'radial-gradient(circle at 50% 50%, rgba(255, 153, 0, 0.24), rgba(124, 58, 237, 0.2) 42%, transparent 70%)' }}
            ></div>

            <svg viewBox="0 0 480 480" className="relative h-full w-full" role="img" aria-label="Interactive cloud network illustration">
              <defs>
                <radialGradient id="node-orange" cx="50%" cy="40%" r="60%">
                  <stop offset="0%" stopColor="#FFD494" />
                  <stop offset="60%" stopColor="#FF9900" />
                  <stop offset="100%" stopColor="#CC7A00" />
                </radialGradient>
                <radialGradient id="node-purple" cx="50%" cy="38%" r="62%">
                  <stop offset="0%" stopColor="#8B5CF6" />
                  <stop offset="50%" stopColor="#6D28D9" />
                  <stop offset="100%" stopColor="#3B0764" />
                </radialGradient>
                <linearGradient id="link" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0%" stopColor="#FF9900" stopOpacity="0.75" />
                  <stop offset="50%" stopColor="#A78BFA" stopOpacity="0.55" />
                  <stop offset="100%" stopColor="#7C3AED" stopOpacity="0.75" />
                </linearGradient>
              </defs>

              {/* Orbit Rings */}
              <circle cx="240" cy="240" r="84" fill="none" stroke="rgba(124, 58, 237, 0.18)" strokeWidth="1" />
              <circle cx="240" cy="240" r="132" fill="none" stroke="rgba(124, 58, 237, 0.15)" strokeWidth="1" />
              <circle cx="240" cy="240" r="180" fill="none" stroke="rgba(124, 58, 237, 0.12)" strokeWidth="1" />

              {/* Animated Connection Lines */}
              <line x1="240" y1="240" x2="105.6" y2="144" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 8s linear infinite' }} />
              <line x1="240" y1="240" x2="374.4" y2="124.8" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 8.5s linear infinite' }} />
              <line x1="240" y1="240" x2="72" y2="345.6" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 9s linear infinite' }} />
              <line x1="240" y1="240" x2="412.8" y2="355.2" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 9.5s linear infinite' }} />
              <line x1="240" y1="240" x2="240" y2="57.6" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 10s linear infinite' }} />
              <line x1="240" y1="240" x2="240" y2="422.4" stroke="url(#link)" strokeWidth="1" strokeDasharray="4 6" style={{ animation: 'dash 10.5s linear infinite' }} />

              {/* Inter-node links */}
              <line x1="105.6" y1="144" x2="240" y2="57.6" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="374.4" y1="124.8" x2="240" y2="57.6" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="105.6" y1="144" x2="72" y2="345.6" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="374.4" y1="124.8" x2="412.8" y2="355.2" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="72" y1="345.6" x2="240" y2="422.4" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />
              <line x1="412.8" y1="355.2" x2="240" y2="422.4" stroke="url(#link)" strokeWidth="0.8" strokeDasharray="3 5" opacity="0.6" />

              {/* Interactive Rendered Nodes */}
              {nodes.map((node) => (
                <g 
                  key={node.title}
                  onClick={() => onSelectNode({
                    title: node.title,
                    category: node.category,
                    description: node.description,
                    icon: node.title.toLowerCase()
                  })}
                  className="cursor-pointer transition-transform duration-300 hover:scale-110"
                >
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r + 10}
                    fill={`url(#node-${node.color})`}
                    opacity="0.2"
                    className="animate-pulse"
                  />
                  <circle
                    cx={node.cx}
                    cy={node.cy}
                    r={node.r}
                    fill={`url(#node-${node.color})`}
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="1"
                    className="drop-shadow-lg"
                  />
                  <text
                    x={node.cx}
                    y={node.cy + 1}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fill="white"
                    fontSize="10"
                    fontFamily="JetBrains Mono, monospace"
                    fontWeight="600"
                    pointerEvents="none"
                  >
                    {node.title}
                  </text>
                </g>
              ))}
            </svg>

            {/* Sub-label */}
            <div className="pointer-events-none absolute left-1/2 top-3 -translate-x-1/2 rounded-full border border-white/10 bg-black/60 px-3.5 py-1 font-mono text-[10px] uppercase tracking-widest text-white/80 backdrop-blur-md shadow-xl">
              &gt; click a node
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};
