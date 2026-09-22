import {
  ShieldCheck,
  Package,
  TestTube,
  Lock,
  Gauge,
  Monitor,
  Smartphone,
  CheckCircle2,
  Loader2,
  Clock,
  AlertTriangle,
} from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';
import { Badge } from '@/components/ui/Badge';

const SECTIONS = [
  {
    id: 'build',
    label: 'Build',
    icon: Package,
    description: 'Compile and bundle integrity',
  },
  {
    id: 'tests',
    label: 'Tests',
    icon: TestTube,
    description: 'Unit, integration and E2E coverage',
  },
  {
    id: 'security',
    label: 'Security',
    icon: Lock,
    description: 'Vulnerability and dependency scan',
  },
  {
    id: 'performance',
    label: 'Performance',
    icon: Gauge,
    description: 'Core web vitals and load metrics',
  },
  {
    id: 'browser',
    label: 'Browser',
    icon: Monitor,
    description: 'Cross-browser compatibility',
  },
  {
    id: 'device',
    label: 'Device',
    icon: Smartphone,
    description: 'Responsive and device testing',
  },
];

const STATUS_STYLES = {
  verified: { icon: CheckCircle2, color: 'text-success-400', label: 'Verified', variant: 'success' as const },
  running: { icon: Loader2, color: 'text-accent-300', label: 'Running', variant: 'accent' as const },
  waiting: { icon: Clock, color: 'text-base-300/40', label: 'Waiting', variant: 'neutral' as const },
  attention: { icon: AlertTriangle, color: 'text-warning-400', label: 'Needs attention', variant: 'warning' as const },
};

export function Test() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <ShieldCheck className="h-5 w-5 text-accent-300" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold text-white">Verification</h1>
              <p className="text-sm text-base-300/40">Evidence before release.</p>
            </div>
          </div>
        </div>

        {/* Status legend */}
        <div className="mt-6 flex flex-wrap items-center gap-3 animate-fade-up" style={{ animationDelay: '60ms' }}>
          {Object.entries(STATUS_STYLES).map(([key, s]) => (
            <div key={key} className="flex items-center gap-1.5 text-xs text-base-300/40">
              <s.icon className={`h-3.5 w-3.5 ${s.color} ${key === 'running' ? 'animate-spin' : ''}`} strokeWidth={1.8} />
              {s.label}
            </div>
          ))}
        </div>

        {/* Sections grid */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 animate-fade-up" style={{ animationDelay: '120ms' }}>
          {SECTIONS.map((section) => (
            <div
              key={section.id}
              className="card p-5 hover:border-white/[0.1] transition-colors cursor-pointer group"
            >
              <div className="flex items-start justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-white/[0.03] border border-white/[0.06] text-base-300/50 group-hover:text-accent-300 transition-colors">
                    <section.icon className="h-4 w-4" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">{section.label}</h3>
                    <p className="text-[11px] text-base-300/30">{section.description}</p>
                  </div>
                </div>
              </div>
              <div className="mt-4">
                <Badge variant="neutral" dot>
                  Waiting
                </Badge>
              </div>
              {/* Empty state body */}
              <div className="mt-4 pt-4 border-t border-white/[0.04]">
                <p className="text-xs text-base-300/30">No results yet. Run a build to start verification.</p>
              </div>
            </div>
          ))}
        </div>

        {/* Empty state for no project */}
        <div className="mt-8 card p-8">
          <EmptyState
            icon={<ShieldCheck className="h-6 w-6" strokeWidth={1.5} />}
            title="No project selected"
            description="Open a project from Forge or Projects to run verification checks across build, tests, security, performance, browser and device."
          />
        </div>
      </div>
    </div>
  );
}
