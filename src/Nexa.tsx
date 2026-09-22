import { useRef, useState } from 'react';
import {
  Sparkles,
  Paperclip,
  Image,
  FileUp,
  ArrowUp,
  Plus,
  Clock,
  MessageSquare,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { EmptyState } from '@/components/ui/EmptyState';

export function Nexa() {
  const [prompt, setPrompt] = useState('');
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setPrompt('');
    }
  };

  return (
    <div className="flex h-full">
      {/* Left: conversation history */}
      <div className="hidden md:flex w-[260px] shrink-0 flex-col border-r border-white/[0.05] bg-base-950/40">
        <div className="px-4 h-14 flex items-center justify-between border-b border-white/[0.05]">
          <span className="text-sm font-semibold text-white">History</span>
          <button className="btn-icon h-8 w-8" aria-label="New conversation">
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3">
          <p className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
            Recent
          </p>
          <div className="space-y-1">
            {/* Empty state for history */}
            {Array.from({ length: 0 }).map((_, i) => (
              <div key={i} />
            ))}
          </div>
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Clock className="h-5 w-5 text-base-300/20" strokeWidth={1.5} />
            <p className="mt-2 text-xs text-base-300/30">No conversations yet</p>
          </div>
        </div>
      </div>

      {/* Center: conversation area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Nexa header */}
        <div className="flex items-center gap-3 px-4 sm:px-6 h-14 border-b border-white/[0.05]">
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
            <Sparkles className="h-4 w-4 text-accent-300" strokeWidth={1.8} />
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold text-white">Nexa</span>
            <span className="text-[11px] text-base-300/40">AI Orchestrator</span>
          </div>
          <div className="flex-1" />
          <span className="hidden sm:inline-flex items-center gap-1.5 text-xs text-base-300/30">
            <span className="dot bg-success-500" /> Ready
          </span>
        </div>

        {/* Conversation / empty state */}
        <div className="flex-1 overflow-y-auto">
          <div className="h-full flex items-center justify-center px-4">
            <div className="text-center max-w-lg animate-fade-up">
              <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                <Sparkles className="h-7 w-7 text-accent-300" strokeWidth={1.5} />
              </div>
              <h2 className="font-display text-2xl font-semibold text-white">What are we building?</h2>
              <p className="mt-3 text-sm text-base-300/50 leading-relaxed">
                Describe your idea and Nexa will help turn it into a structured software plan.
              </p>
            </div>
          </div>
        </div>

        {/* Composer */}
        <div className="border-t border-white/[0.05] bg-base-950/40 p-3 sm:p-4 pb-safe">
          <div className="glass-strong rounded-2xl overflow-hidden max-w-3xl mx-auto">
            <textarea
              ref={textareaRef}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Describe your idea to Nexa…"
              rows={2}
              className="w-full resize-none bg-transparent px-4 pt-3.5 text-[15px] text-white placeholder:text-base-300/35 focus:outline-none leading-relaxed"
            />
            <div className="flex items-center gap-2 px-3 py-2.5">
              <button className="btn-icon" aria-label="Attach file">
                <Paperclip className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>
              <button className="btn-icon" aria-label="Upload screenshot">
                <Image className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>
              <button className="btn-icon" aria-label="Upload file">
                <FileUp className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>
              <div className="flex-1" />
              <button
                onClick={() => setPrompt('')}
                disabled={!prompt.trim()}
                className="btn h-9 px-4 rounded-xl bg-accent-500 text-white hover:bg-accent-400 hover:shadow-glow-sm active:bg-accent-600 disabled:bg-white/[0.04] disabled:text-base-300/30 gap-2"
              >
                Build
                <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
