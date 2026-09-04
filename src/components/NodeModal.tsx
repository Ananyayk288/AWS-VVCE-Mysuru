import React from 'react';
import { X, Cpu, Database, Bot, Box, Network, Shield, Zap } from 'lucide-react';

interface NodeModalProps {
  node: {
    title: string;
    category: string;
    description: string;
    icon: string;
  } | null;
  onClose: () => void;
}

export const NodeModal: React.FC<NodeModalProps> = ({ node, onClose }) => {
  if (!node) return null;

  const getIcon = () => {
    switch (node.icon) {
      case 'compute': return <Cpu className="h-8 w-8 text-[#FF9900]" />;
      case 'storage': return <Database className="h-8 w-8 text-[#A78BFA]" />;
      case 'ai': return <Bot className="h-8 w-8 text-[#A78BFA]" />;
      case 'containers': return <Box className="h-8 w-8 text-[#A78BFA]" />;
      case 'networking': return <Network className="h-8 w-8 text-[#A78BFA]" />;
      case 'security': return <Shield className="h-8 w-8 text-[#A78BFA]" />;
      case 'serverless': return <Zap className="h-8 w-8 text-[#FF9900]" />;
      default: return <Cpu className="h-8 w-8 text-[#A78BFA]" />;
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md transition-all duration-300">
      <div className="relative w-full max-w-md overflow-hidden rounded-3xl border border-white/20 bg-[#0c0a1d] p-6 sm:p-8 shadow-[0_0_50px_rgba(124,58,237,0.35)]">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 grid h-9 w-9 place-items-center rounded-full border border-white/10 text-white/70 hover:bg-white/10 hover:text-white"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="flex items-center gap-4">
          <div className="grid h-14 w-14 place-items-center rounded-2xl border border-white/10 bg-white/5 shadow-inner">
            {getIcon()}
          </div>
          <div>
            <span className="font-mono text-[10px] uppercase tracking-widest text-[#A78BFA] bg-[#A78BFA]/10 px-2.5 py-0.5 rounded-full">
              {node.category}
            </span>
            <h3 className="text-2xl font-bold text-white tracking-tight mt-1">{node.title} Node</h3>
          </div>
        </div>

        <p className="mt-5 text-sm leading-relaxed text-white/75 bg-white/[0.02] border border-white/5 rounded-2xl p-4">
          {node.description}
        </p>

        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="rounded-full bg-white px-5 py-2 text-xs font-bold text-black hover:bg-white/90 cursor-pointer"
          >
            Got It
          </button>
        </div>
      </div>
    </div>
  );
};
