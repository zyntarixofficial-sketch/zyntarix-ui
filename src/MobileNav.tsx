import { X } from 'lucide-react';
import { NAV_ITEMS, Logo, StatusDot } from './nav-config';
import type { PageId } from '@/types';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  open: boolean;
  current: PageId;
  onClose: () => void;
  onNavigate: (page: PageId) => void;
}

export function MobileNavPanel({ open, current, onClose, onNavigate }: MobileNavProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      <div
        className="absolute inset-0 bg-base-950/70 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="absolute left-0 top-0 bottom-0 w-[280px] max-w-[85vw] bg-base-900 border-r border-white/[0.06] flex flex-col animate-slide-in-right">
        <div className="flex items-center justify-between px-5 h-16 border-b border-white/[0.05]">
          <div className="flex items-center gap-3">
            <Logo size={22} />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-[15px] font-semibold text-white">Zyntarix</span>
              <span className="text-[10px] uppercase tracking-[0.18em] text-base-300/40">
                AI Software Factory
              </span>
            </div>
          </div>
          <button onClick={onClose} className="btn-icon" aria-label="Close menu">
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4">
          <ul className="space-y-1">
            {NAV_ITEMS.map((item) => {
              const active = current === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => {
                      onNavigate(item.id);
                      onClose();
                    }}
                    className={cn('nav-item w-full', active && 'nav-item-active')}
                  >
                    <item.icon
                      className={cn('h-[18px] w-[18px]', active ? 'text-accent-300' : 'text-base-300/50')}
                      strokeWidth={1.8}
                    />
                    <span>{item.label}</span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="border-t border-white/[0.05] p-3">
          <button
            onClick={() => {
              onNavigate('profile');
              onClose();
            }}
            className={cn('nav-item w-full', current === 'profile' && 'nav-item-active')}
          >
            <div className="relative h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-base-600 to-base-800 border border-white/[0.08]">
              <span className="absolute -bottom-0.5 -right-0.5">
                <StatusDot status="idle" />
              </span>
            </div>
            <div className="flex-1 text-left leading-tight">
              <p className="text-xs font-medium text-base-300/70">Account</p>
              <p className="text-[10px] text-base-300/40">Not signed in</p>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

interface MobileBottomNavProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
  onOpenMenu: () => void;
}

export function MobileBottomNav({ current, onNavigate, onOpenMenu }: MobileBottomNavProps) {
  const items = NAV_ITEMS.slice(0, 4);
  return (
    <nav className="lg:hidden fixed bottom-0 left-0 right-0 z-40 border-t border-white/[0.06] bg-base-950/85 backdrop-blur-xl pb-safe">
      <div className="flex items-stretch justify-around px-2 h-14">
        <button
          onClick={onOpenMenu}
          className="flex flex-col items-center justify-center gap-0.5 flex-1 text-base-300/40 hover:text-white transition-colors"
          aria-label="More"
        >
          <Logo size={18} />
          <span className="text-[10px] font-medium">Menu</span>
        </button>
        {items.map((item) => {
          const active = current === item.id;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={cn(
                'flex flex-col items-center justify-center gap-0.5 flex-1 transition-colors',
                active ? 'text-accent-300' : 'text-base-300/40 hover:text-white',
              )}
            >
              <item.icon className="h-5 w-5" strokeWidth={1.8} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
