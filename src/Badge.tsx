import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'danger' | 'accent' | 'neutral';
  className?: string;
  dot?: boolean;
}

const variants: Record<NonNullable<BadgeProps['variant']>, string> = {
  default: 'bg-white/[0.05] text-base-300/70 border-white/[0.08]',
  neutral: 'bg-white/[0.03] text-base-300/50 border-white/[0.06]',
  success: 'bg-success-500/10 text-success-400 border-success-500/20',
  warning: 'bg-warning-500/10 text-warning-400 border-warning-500/20',
  danger: 'bg-danger-500/10 text-danger-400 border-danger-500/20',
  accent: 'bg-accent-500/10 text-accent-300 border-accent-500/20',
};

export function Badge({ children, variant = 'default', className, dot = false }: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 rounded-full border px-2.5 py-0.5 text-xs font-medium',
        variants[variant],
        className,
      )}
    >
      {dot && <span className={cn('dot', `bg-current`)} />}
      {children}
    </span>
  );
}
