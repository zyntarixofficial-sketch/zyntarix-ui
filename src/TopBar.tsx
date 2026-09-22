import { Search, Bell, ChevronRight } from 'lucide-react';
import { PAGE_BREADCRUMBS } from './nav-config';
import type { PageId } from '@/types';

interface TopBarProps {
  current: PageId;
  onOpenMobileNav: () => void;
}

export function TopBar({ current }: TopBarProps) {
  const crumbs = PAGE_BREADCRUMBS[current] ?? ['Studio'];

  return (
    <header className="sticky top-0 z-30 flex h-16 items-center gap-3 border-b border-white/[0.05] bg-base-950/70 backdrop-blur-xl px-4 lg:px-6 safe-top">
      {/* Breadcrumb */}
      <div className="flex items-center gap-1.5 text-sm min-w-0">
        {crumbs.map((crumb, i) => (
          <span key={i} className="flex items-center gap-1.5 min-w-0">
            {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-base-300/20 shrink-0" />}
            <span
              className={
                i === crumbs.length - 1
                  ? 'font-medium text-white truncate'
                  : 'text-base-300/40 truncate'
              }
            >
              {crumb}
            </span>
          </span>
        ))}
      </div>

      <div className="flex-1" />

      {/* Search */}
      <div className="relative hidden sm:block">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-300/30" strokeWidth={1.8} />
        <input
          type="text"
          placeholder="Search…"
          className="input !w-56 !bg-white/[0.03] !border-white/[0.06] !py-2 pl-9 text-xs"
        />
      </div>

      {/* Notifications */}
      <button className="btn-icon relative" aria-label="Notifications">
        <Bell className="h-[18px] w-[18px]" strokeWidth={1.8} />
        <span className="absolute top-2 right-2 h-1.5 w-1.5 rounded-full bg-accent-500" />
      </button>

      {/* Avatar */}
      <button className="h-9 w-9 shrink-0 rounded-full bg-gradient-to-br from-base-600 to-base-800 border border-white/[0.08] transition-all hover:border-white/[0.16] active:scale-95" aria-label="Profile" />
    </header>
  );
}
