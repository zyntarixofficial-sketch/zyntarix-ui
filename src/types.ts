import type { LucideIcon } from 'lucide-react';

export type PageId = 'dashboard' | 'nexa' | 'projects' | 'forge' | 'test' | 'ship' | 'profile';

export interface NavItem {
  id: PageId;
  label: string;
  icon: LucideIcon;
  glyph: string;
}

export interface ComposerMode {
  id: string;
  label: string;
}

export interface AgentOption {
  id: string;
  label: string;
  description: string;
}
