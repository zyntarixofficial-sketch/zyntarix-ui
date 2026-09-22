import {
  Sparkles,
  FolderKanban,
  Hammer,
  ShieldCheck,
  Rocket,
  type LucideIcon,
} from 'lucide-react';
import type { NavItem, PageId } from '@/types';

export const NAV_ITEMS: NavItem[] = [
  { id: 'nexa', label: 'Nexa', icon: Sparkles, glyph: '✦' },
  { id: 'projects', label: 'Projects', icon: FolderKanban, glyph: '▣' },
  { id: 'forge', label: 'Forge', icon: Hammer, glyph: '⌘' },
  { id: 'test', label: 'Test', icon: ShieldCheck, glyph: '✓' },
  { id: 'ship', label: 'Ship', icon: Rocket, glyph: '↗' },
];

export const PAGE_TITLES: Record<PageId, string> = {
  dashboard: 'Dashboard',
  nexa: 'Nexa',
  projects: 'Projects',
  forge: 'Forge',
  test: 'Test',
  ship: 'Ship',
  profile: 'Profile',
};

export const PAGE_BREADCRUMBS: Record<PageId, string[]> = {
  dashboard: ['Home'],
  nexa: ['Studio', 'Nexa'],
  projects: ['Studio', 'Projects'],
  forge: ['Studio', 'Forge'],
  test: ['Studio', 'Test'],
  ship: ['Studio', 'Ship'],
  profile: ['Settings', 'Profile'],
};

export function Logo({ size = 20 }: { size?: number }) {
  return (
    <div
      className="flex items-center justify-center rounded-xl bg-gradient-to-br from-accent-500/20 to-accent-700/10 border border-accent-500/20"
      style={{ width: size + 8, height: size + 8 }}
    >
      <svg
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="none"
        className="text-accent-300"
      >
        <path
          d="M12 2L4 7v10l8 5 8-5V7l-8-5z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinejoin="round"
        />
        <path
          d="M12 7v10M8 9.5l8 5M16 9.5l-8 5"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          opacity="0.5"
        />
      </svg>
    </div>
  );
}

export function StatusDot({ status }: { status: 'online' | 'idle' | 'offline' }) {
  const colors = {
    online: 'bg-success-500',
    idle: 'bg-warning-500',
    offline: 'bg-base-400',
  };
  return (
    <span className="relative flex h-2 w-2">
      {status === 'online' && (
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success-500/60 opacity-60" />
      )}
      <span className={`relative inline-flex h-2 w-2 rounded-full ${colors[status]}`} />
    </span>
  );
}

export { type LucideIcon };
