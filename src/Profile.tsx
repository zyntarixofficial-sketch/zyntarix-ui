import { useState } from 'react';
import {
  User,
  CreditCard,
  Coins,
  BarChart3,
  History,
  CalendarDays,
  Settings,
  LifeBuoy,
  ChevronRight,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { EmptyState } from '@/components/ui/EmptyState';

type Section =
  | 'account'
  | 'plan'
  | 'credits'
  | 'usage'
  | 'history'
  | 'stack'
  | 'settings'
  | 'support';

const SECTIONS: { id: Section; label: string; icon: typeof User }[] = [
  { id: 'account', label: 'Account', icon: User },
  { id: 'plan', label: 'Plan', icon: CreditCard },
  { id: 'credits', label: 'Credits', icon: Coins },
  { id: 'usage', label: 'Usage', icon: BarChart3 },
  { id: 'history', label: 'Credit History', icon: History },
  { id: 'stack', label: '7-Day Stack', icon: CalendarDays },
  { id: 'settings', label: 'Settings', icon: Settings },
  { id: 'support', label: 'Support', icon: LifeBuoy },
];

export function Profile() {
  const [section, setSection] = useState<Section>('account');

  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        <div className="animate-fade-up">
          <h1 className="font-display text-xl font-semibold text-white">Profile & Settings</h1>
          <p className="text-sm text-base-300/40 mt-1">Manage your account, plan, and preferences.</p>
        </div>

        <div className="mt-6 flex flex-col lg:flex-row gap-6 animate-fade-up" style={{ animationDelay: '60ms' }}>
          {/* Section nav */}
          <div className="lg:w-[220px] shrink-0">
            <nav className="flex lg:flex-col gap-1 overflow-x-auto no-scrollbar lg:overflow-visible">
              {SECTIONS.map((s) => (
                <button
                  key={s.id}
                  onClick={() => setSection(s.id)}
                  className={cn(
                    'nav-item w-full shrink-0',
                    section === s.id && 'nav-item-active',
                  )}
                >
                  <s.icon className="h-[18px] w-[18px] shrink-0" strokeWidth={1.8} />
                  <span className="whitespace-nowrap">{s.label}</span>
                </button>
              ))}
            </nav>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <div className="card p-6 lg:p-8">
              <div className="flex items-center gap-2 mb-1">
                <h2 className="font-display text-lg font-semibold text-white">
                  {SECTIONS.find((s) => s.id === section)?.label}
                </h2>
              </div>

              {section === 'account' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Your account information.</p>
                  <div className="space-y-4">
                    {['Name', 'Email', 'Avatar'].map((field) => (
                      <div key={field}>
                        <label className="text-xs font-medium text-base-300/50">{field}</label>
                        <div className="mt-1.5 input flex items-center">
                          <span className="text-base-300/30 text-sm">Not available</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {section === 'plan' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Your current subscription plan.</p>
                  <EmptyState
                    icon={<CreditCard className="h-6 w-6" strokeWidth={1.5} />}
                    title="No active plan"
                    description="Choose a plan to unlock builds, verification and shipping."
                  />
                </>
              )}

              {section === 'credits' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Your credit balance and usage.</p>
                  <div className="grid grid-cols-2 gap-4">
                    {['Available', 'Used'].map((label) => (
                      <div key={label} className="rounded-xl border border-white/[0.06] bg-white/[0.02] p-4">
                        <p className="text-xs text-base-300/40">{label}</p>
                        <p className="mt-1 text-2xl font-display font-semibold text-base-300/30">—</p>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {section === 'usage' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Usage metrics across your workspace.</p>
                  <EmptyState
                    icon={<BarChart3 className="h-6 w-6" strokeWidth={1.5} />}
                    title="No usage data"
                    description="Usage will appear here once you start building."
                  />
                </>
              )}

              {section === 'history' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Recent credit transactions.</p>
                  <EmptyState
                    icon={<History className="h-6 w-6" strokeWidth={1.5} />}
                    title="No transactions"
                    description="Credit history will appear here once available."
                  />
                </>
              )}

              {section === 'stack' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Your technology stack over the last 7 days.</p>
                  <EmptyState
                    icon={<CalendarDays className="h-6 w-6" strokeWidth={1.5} />}
                    title="No stack data"
                    description="Your build stack will be summarized here."
                  />
                </>
              )}

              {section === 'settings' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Workspace and preference settings.</p>
                  <div className="space-y-3">
                    {['Theme', 'Notifications', 'Language'].map((label) => (
                      <div key={label} className="flex items-center justify-between rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3">
                        <span className="text-sm text-base-300/70">{label}</span>
                        <span className="text-xs text-base-300/30">Default</span>
                      </div>
                    ))}
                  </div>
                </>
              )}

              {section === 'support' && (
                <>
                  <p className="text-sm text-base-300/40 mb-6">Get help with Zyntarix.</p>
                  <div className="space-y-3">
                    {['Documentation', 'Contact Support', 'Report an Issue'].map((label) => (
                      <button
                        key={label}
                        className="flex items-center justify-between w-full rounded-xl border border-white/[0.06] bg-white/[0.02] px-4 py-3 hover:bg-white/[0.04] transition-colors group"
                      >
                        <span className="text-sm text-base-300/70">{label}</span>
                        <ChevronRight className="h-4 w-4 text-base-300/30 group-hover:translate-x-0.5 transition-transform" />
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
