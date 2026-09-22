import { Settings, ChevronRight } from 'lucide-react';
import { NAV_ITEMS, Logo, StatusDot } from './nav-config';
import type { PageId } from '@/types';
import { cn } from '@/lib/utils';

interface SidebarProps {
  current: PageId;
  onNavigate: (page: PageId) => void;
}

export function Sidebar({ current, onNavigate }: SidebarProps) {
  return (
    <aside className="hidden lg:flex w-[264px] shrink-0 flex-col border-r border-white/[0.05] bg-base-950/60 backdrop-blur-xl">
      {/* Logo block */}
      <div className="flex items-center gap-3 px-5 h-16 border-b border-white/[0.05]">
        <Logo size={22} />
        <div className="flex flex-col leading-tight">
          <span className="font-display text-[15px] font-semibold text-white tracking-tight">
            Zyntarix
          </span>
          <span className="text-[10px] font-medium uppercase tracking-[0.18em] text-base-300/40">
            AI Software Factory
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 overflow-y-auto px-3 py-4 no-scrollbar">
        <p className="px-3 mb-2 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
          Workspace
        </p>
        <ul className="space-y-1">
          {NAV_ITEMS.map((item) => {
            const active = current === item.id;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onNavigate(item.id)}
                  className={cn('nav-item w-full', active && 'nav-item-active')}
                  aria-current={active ? 'page' : undefined}
                >
                  <item.icon
                    className={cn(
                      'h-[18px] w-[18px] shrink-0',
                      active ? 'text-accent-300' : 'text-base-300/50',
                    )}
                    strokeWidth={1.8}
                  />
                  <span className="flex-1 text-left">{item.label}</span>
                  {active && <ChevronRight className="h-3.5 w-3.5 text-base-300/30" />}
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      {/* Bottom: profile / plan / credits */}
      <div className="border-t border-white/[0.05] p-3 space-y-3">
        {/* Plan + credits — empty/loading state, no fake numbers */}
        <div className="rounded-xl border border-white/[0.05] bg-white/[0.02] p-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-base-300/40">Plan</span>
            <span className="text-xs font-medium text-base-300/50">—</span>
          </div>
          <div className="mt-2 flex items-center justify-between">
            <span className="text-xs text-base-300/40">Credits</span>
            <span className="text-xs font-medium text-base-300/50">—</span>
          </div>
          <div className="mt-3 h-1.5 w-full overflow-hidden rounded-full bg-white/[0.04]">
            <div className="h-full w-0 rounded-full bg-accent-500/30" />
          </div>
        </div>

        {/* Profile */}
        <button
          onClick={() => onNavigate('profile')}
          className={cn(
            'nav-item w-full',
            current === 'profile' && 'nav-item-active',
          )}
        >
          <div className="relative h-8 w-8 shrink-0 rounded-full bg-gradient-to-br from-accent-600/40 to-accent-800/40 border border-accent-500/20">
            <span className="absolute -bottom-0.5 -right-0.5">
              <StatusDot status="online" />
            </span>
          </div>
          <div className="flex-1 text-left leading-tight">
            <p className="text-xs font-medium text-base-300/70">Account</p>
            <p className="text-[10px] text-base-300/40">View profile</p>
          </div>
          <Settings className="h-4 w-4 text-base-300/30" strokeWidth={1.8} />
        </button>
      </div>
    </aside>
  );
}
