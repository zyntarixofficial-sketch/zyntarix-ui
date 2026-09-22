import { useRef, useState, useEffect } from 'react';
import {
  X,
  Paperclip,
  ArrowUp,
  Sparkles,
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface ZynAssistantProps {
  open: boolean;
  onToggle: () => void;
}

export function ZynAssistant({ open, onToggle }: ZynAssistantProps) {
  const [message, setMessage] = useState('');
  const [keyboardVisible, setKeyboardVisible] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Detect mobile keyboard via visualViewport
  useEffect(() => {
    if (typeof window === 'undefined' || !window.visualViewport) return;
    const vv = window.visualViewport;
    const handler = () => {
      const keyboard = window.innerHeight - vv.height > 100;
      setKeyboardVisible(keyboard);
    };
    vv.addEventListener('resize', handler);
    return () => vv.removeEventListener('resize', handler);
  }, []);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && (e.metaKey || e.ctrlKey)) {
      e.preventDefault();
      setMessage('');
    }
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={onToggle}
        className={cn(
          'fixed z-40 bottom-5 right-5 lg:bottom-6 lg:right-6 flex h-12 w-12 items-center justify-center rounded-full',
          'bg-gradient-to-br from-accent-500 to-accent-700 text-white shadow-glow',
          'transition-all duration-200 hover:scale-105 active:scale-95',
          open && 'opacity-0 pointer-events-none scale-90',
        )}
        aria-label="Open Zyn assistant"
      >
        <Sparkles className="h-5 w-5" strokeWidth={1.8} />
        <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-success-500 border-2 border-base-950" />
      </button>

      {/* Panel */}
      {open && (
        <div
          ref={panelRef}
          className={cn(
            'fixed z-50 flex flex-col overflow-hidden',
            'bg-base-900/95 backdrop-blur-xl border border-white/[0.08] shadow-panel',
            // Desktop: compact panel bottom-right
            'lg:bottom-6 lg:right-6 lg:w-[380px] lg:h-[520px] lg:max-h-[80vh] lg:rounded-2xl',
            // Mobile: full-width above keyboard
            'inset-x-0 bottom-0 max-h-[70vh] rounded-t-2xl lg:inset-auto',
            keyboardVisible && 'lg:max-h-[80vh]',
          )}
          style={{
            paddingBottom: keyboardVisible && !window.matchMedia('(min-width: 1024px)').matches ? 'env(safe-area-inset-bottom)' : 0,
          }}
        >
          {/* Header */}
          <div className="flex items-center gap-3 px-4 h-14 border-b border-white/[0.06] shrink-0">
            <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <Sparkles className="h-4 w-4 text-accent-300" strokeWidth={1.8} />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold text-white leading-tight">Zyn</p>
              <p className="text-[11px] text-base-300/40 leading-tight">Zyntarix Assistant</p>
            </div>
            <button onClick={onToggle} className="btn-icon" aria-label="Close Zyn">
              <X className="h-5 w-5" />
            </button>
          </div>

          {/* Conversation area — welcome/empty state */}
          <div className="flex-1 overflow-y-auto p-4">
            <div className="flex flex-col items-center justify-center h-full text-center animate-fade-in">
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl border border-accent-500/20 bg-accent-500/10">
                <Sparkles className="h-6 w-6 text-accent-300" strokeWidth={1.5} />
              </div>
              <h3 className="font-display text-base font-semibold text-white">Hi, I'm Zyn</h3>
              <p className="mt-2 text-sm text-base-300/50 leading-relaxed max-w-[260px]">
                I can help with your account, credits, usage, projects, plan, prompts and support.
              </p>
              <div className="mt-5 flex flex-wrap gap-2 justify-center">
                {['Account', 'Credits', 'Plan', 'Support'].map((chip) => (
                  <button
                    key={chip}
                    onClick={() => setMessage(`Tell me about ${chip.toLowerCase()}`)}
                    className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-xs text-base-300/60 hover:text-white hover:bg-white/[0.06] transition-all active:scale-95"
                  >
                    {chip}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Composer */}
          <div className="border-t border-white/[0.06] p-3 shrink-0">
            <div className="flex items-end gap-2 rounded-xl bg-base-850/80 border border-white/[0.08] px-3 py-2">
              <button className="btn-icon h-8 w-8 shrink-0" aria-label="Attach">
                <Paperclip className="h-[18px] w-[18px]" strokeWidth={1.8} />
              </button>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Ask Zyn…"
                rows={1}
                className="flex-1 resize-none bg-transparent text-sm text-white placeholder:text-base-300/35 focus:outline-none max-h-24 leading-relaxed py-1.5"
              />
              <button
                onClick={() => setMessage('')}
                disabled={!message.trim()}
                className="btn h-8 w-8 shrink-0 rounded-lg bg-accent-500 text-white hover:bg-accent-400 active:bg-accent-600 disabled:bg-white/[0.04] disabled:text-base-300/30"
                aria-label="Send"
              >
                <ArrowUp className="h-4 w-4" strokeWidth={2.2} />
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
