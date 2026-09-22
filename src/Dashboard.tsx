import { useRef, useState } from 'react';
import {
  Paperclip,
  ArrowUp,
  ChevronDown,
  Zap,
  Globe,
  Smartphone,
  Gamepad2,
  Wrench,
  Layout,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import type { PageId } from '@/types';

interface DashboardProps {
  onNavigate: (page: PageId) => void;
}

const BUILD_MODES = [
  { id: 'web', label: 'Web App', icon: Globe },
  { id: 'website', label: 'Website', icon: Layout },
  { id: 'mobile', label: 'Mobile', icon: Smartphone },
  { id: 'saas', label: 'SaaS', icon: Zap },
  { id: 'game', label: 'Game', icon: Gamepad2 },
  { id: 'tool', label: 'Tool', icon: Wrench },
];

const AGENTS = [
  { id: 'nexa', label: 'Nexa', description: 'AI Orchestrator' },
  { id: 'forge', label: 'Forge', description: 'Code Builder' },
];

export function Dashboard({ onNavigate }: DashboardProps) {
  const [prompt, setPrompt] = useState('');
  const [mode, setMode] = useState('web');
  const [agent, setAgent] = useState('nexa');
  const [agentOpen, setAgentOpen] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSend = () => {
    if (!prompt.trim()) return;
    onNavigate('nexa');
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="relative min-h-full">
      {/* Ambient glow + grid */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-40" />
      <div className="pointer-events-none absolute inset-0 radial-glow" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 pt-10 sm:pt-16 lg:pt-20 pb-16">
        {/* Hero */}
        <div className="text-center animate-fade-up">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3.5 py-1.5 mb-6">
            <Sparkles className="h-3.5 w-3.5 text-accent-300" strokeWidth={1.8} />
            <span className="text-xs font-medium text-base-300/60">Idea → Build → Verify → Ship</span>
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-gradient">
            Build anything with Zyntarix.
          </h1>
          <p className="mt-4 text-sm sm:text-base text-base-300/50 max-w-xl mx-auto leading-relaxed">
            From idea to verified software — plan, build, test and ship with AI.
          </p>
          <div className="mt-6 flex items-center justify-center gap-3">
            <button onClick={handleSend} className="btn-primary">
              Start Building
              <ArrowUp className="h-4 w-4" />
            </button>
            <button onClick={() => onNavigate('projects')} className="btn-secondary">
              Explore Projects
            </button>
          </div>
        </div>

        {/* Command box */}
        <div className="mt-10 sm:mt-12 animate-fade-up" style={{ animationDelay: '80ms' }}>
          <div className="glass-strong rounded-2xl shadow-panel overflow-hidden">
            {/* Textarea */}
            <div className="p-4">
              <textarea
                ref={textareaRef}
                value={prompt}
                onChange={(e) => setPrompt(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="What do you want to build?"
                rows={3}
                className="w-full resize-none bg-transparent text-[15px] text-white placeholder:text-base-300/35 focus:outline-none leading-relaxed"
              />
              <p className="text-xs text-base-300/30 mt-1">
                Describe your website, web app, mobile app, SaaS, game or tool…
              </p>
            </div>

            {/* Controls bar */}
            <div className="flex items-center gap-2 border-t border-white/[0.05] px-3 py-2.5">
              {/* Attachment */}
              <button className="btn-icon" aria-label="Attach file">
                <Paperclip className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>

              {/* Build mode selector */}
              <div className="flex items-center gap-1 overflow-x-auto no-scrollbar">
                {BUILD_MODES.map((m) => (
                  <button
                    key={m.id}
                    onClick={() => setMode(m.id)}
                    className={cn(
                      'flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium transition-all whitespace-nowrap',
                      mode === m.id
                        ? 'bg-white/[0.06] text-white border border-white/[0.08]'
                        : 'text-base-300/40 hover:text-base-300/70 hover:bg-white/[0.03] border border-transparent',
                    )}
                  >
                    <m.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
                    {m.label}
                  </button>
                ))}
              </div>

              <div className="flex-1" />

              {/* Agent selector */}
              <div className="relative">
                <button
                  onClick={() => setAgentOpen((v) => !v)}
                  className="flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-xs font-medium text-base-300/60 hover:text-white hover:bg-white/[0.04] transition-all border border-transparent hover:border-white/[0.06]"
                >
                  <span className="dot bg-accent-500" />
                  {AGENTS.find((a) => a.id === agent)?.label}
                  <ChevronDown className={cn('h-3 w-3 transition-transform', agentOpen && 'rotate-180')} />
                </button>
                {agentOpen && (
                  <div className="absolute bottom-full right-0 mb-2 w-44 rounded-xl border border-white/[0.08] bg-base-800 shadow-panel p-1 animate-scale-in origin-bottom-right">
                    {AGENTS.map((a) => (
                      <button
                        key={a.id}
                        onClick={() => {
                          setAgent(a.id);
                          setAgentOpen(false);
                        }}
                        className={cn(
                          'flex items-start gap-2.5 rounded-lg px-2.5 py-2 w-full text-left transition-colors',
                          agent === a.id ? 'bg-white/[0.05]' : 'hover:bg-white/[0.03]',
                        )}
                      >
                        <span className="dot bg-accent-500 mt-1.5" />
                        <div>
                          <p className="text-xs font-medium text-white">{a.label}</p>
                          <p className="text-[10px] text-base-300/40">{a.description}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Send */}
              <button
                onClick={handleSend}
                disabled={!prompt.trim()}
                className="btn h-9 w-9 rounded-xl bg-accent-500 text-white hover:bg-accent-400 hover:shadow-glow-sm active:bg-accent-600 disabled:bg-white/[0.04] disabled:text-base-300/30"
                aria-label="Build"
              >
                <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>

        {/* Pipeline visual */}
        <div className="mt-12 animate-fade-up" style={{ animationDelay: '160ms' }}>
          <div className="flex items-center justify-center gap-2 sm:gap-4 text-xs text-base-300/30">
            {['Idea', 'Build', 'Verify', 'Ship'].map((step, i) => (
              <span key={step} className="flex items-center gap-2 sm:gap-4">
                <span className="font-medium uppercase tracking-wider">{step}</span>
                {i < 3 && <span className="text-base-300/15">→</span>}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
