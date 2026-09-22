import {
  Rocket,
  Globe,
  Smartphone,
  Apple,
  Link2,
  Send,
  Package,
  ShieldCheck,
  Boxes,
  CheckCircle2,
  ChevronRight,
} from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';
import { Badge } from '@/components/ui/Badge';

const PLATFORMS = [
  { id: 'web', label: 'Web', icon: Globe, description: 'Deploy to global edge network' },
  { id: 'android', label: 'Android', icon: Smartphone, description: 'Build and sign APK / AAB' },
  { id: 'ios', label: 'iOS', icon: Apple, description: 'Build and sign IPA' },
  { id: 'domain', label: 'Domain', icon: Link2, description: 'Connect a custom domain' },
];

const PIPELINE = [
  { id: 'build', label: 'Build', icon: Package, description: 'Compile and bundle' },
  { id: 'verify', label: 'Verify', icon: ShieldCheck, description: 'Run all checks' },
  { id: 'package', label: 'Package', icon: Boxes, description: 'Create release artifact' },
  { id: 'release', label: 'Release', icon: Send, description: 'Deploy to platform' },
];

export function Ship() {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <Rocket className="h-5 w-5 text-accent-300" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold text-white">Release</h1>
              <p className="text-sm text-base-300/40">Ship your software to the world.</p>
            </div>
          </div>
        </div>

        {/* Pipeline */}
        <div className="mt-8 animate-fade-up" style={{ animationDelay: '60ms' }}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
            Release Pipeline
          </p>
          <div className="card p-5">
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {PIPELINE.map((step, i) => (
                <div key={step.id} className="flex items-center gap-2 shrink-0">
                  <div className="flex items-center gap-2.5 rounded-xl border border-white/[0.06] bg-white/[0.02] px-3 py-2.5">
                    <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/[0.03] text-base-300/40">
                      <step.icon className="h-4 w-4" strokeWidth={1.8} />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-white">{step.label}</p>
                      <p className="text-[10px] text-base-300/30">{step.description}</p>
                    </div>
                  </div>
                  {i < PIPELINE.length - 1 && (
                    <ChevronRight className="h-4 w-4 text-base-300/15 shrink-0" />
                  )}
                </div>
              ))}
            </div>
            <div className="mt-4 pt-4 border-t border-white/[0.04]">
              <Badge variant="neutral" dot>
                Waiting
              </Badge>
              <span className="ml-2 text-xs text-base-300/30">No project in pipeline</span>
            </div>
          </div>
        </div>

        {/* Platforms */}
        <div className="mt-8 animate-fade-up" style={{ animationDelay: '120ms' }}>
          <p className="mb-3 text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
            Platforms
          </p>
          <div className="grid gap-4 sm:grid-cols-2">
            {PLATFORMS.map((p) => (
              <div
                key={p.id}
                className="card p-5 hover:border-white/[0.1] transition-colors cursor-pointer group"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.03] border border-white/[0.06] text-base-300/50 group-hover:text-accent-300 transition-colors">
                    <p.icon className="h-5 w-5" strokeWidth={1.8} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-sm font-semibold text-white">{p.label}</h3>
                    <p className="text-[11px] text-base-300/30 mt-0.5">{p.description}</p>
                  </div>
                  <Badge variant="neutral">Not configured</Badge>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty state */}
        <div className="mt-8 card p-8">
          <EmptyState
            icon={<Rocket className="h-6 w-6" strokeWidth={1.5} />}
            title="No project to release"
            description="Open a project from Forge and run verification before shipping to any platform."
          />
        </div>
      </div>
    </div>
  );
}
