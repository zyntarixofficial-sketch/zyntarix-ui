import { useState } from 'react';
import {
  File,
  Folder,
  FolderOpen,
  Search,
  Play,
  Terminal,
  Bot,
  Eye,
  Database,
  ScrollText,
  TestTube,
  FileCode,
  ChevronRight,
  ChevronDown,
  Plus,
  Hammer,
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { EmptyState } from '@/components/ui/EmptyState';

type Tab = 'files' | 'code' | 'preview' | 'database' | 'logs' | 'agents' | 'tests';

const TABS: { id: Tab; label: string; icon: typeof File }[] = [
  { id: 'files', label: 'Files', icon: File },
  { id: 'code', label: 'Code', icon: FileCode },
  { id: 'preview', label: 'Preview', icon: Eye },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'logs', label: 'Logs', icon: ScrollText },
  { id: 'agents', label: 'Agents', icon: Bot },
  { id: 'tests', label: 'Tests', icon: TestTube },
];

export function Forge() {
  const [tab, setTab] = useState<Tab>('files');
  const [fileTreeOpen, setFileTreeOpen] = useState(true);

  return (
    <div className="flex h-full flex-col">
      {/* Tab bar */}
      <div className="flex items-center gap-1 px-3 h-11 border-b border-white/[0.05] bg-base-950/40 overflow-x-auto no-scrollbar">
        {TABS.map((t) => (
          <button
            key={t.id}
            onClick={() => setTab(t.id)}
            className={cn(
              'flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-xs font-medium transition-all whitespace-nowrap',
              tab === t.id
                ? 'bg-white/[0.06] text-white border border-white/[0.08]'
                : 'text-base-300/40 hover:text-base-300/70 hover:bg-white/[0.03] border border-transparent',
            )}
          >
            <t.icon className="h-3.5 w-3.5" strokeWidth={1.8} />
            {t.label}
          </button>
        ))}
      </div>

      {/* IDE layout */}
      <div className="flex-1 flex min-h-0">
        {/* Left: file explorer */}
        <div className="hidden md:flex w-[220px] shrink-0 flex-col border-r border-white/[0.05] bg-base-950/30">
          <div className="flex items-center justify-between px-3 h-9 border-b border-white/[0.04]">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
              Explorer
            </span>
            <button className="btn-icon h-6 w-6" aria-label="New file">
              <Plus className="h-3.5 w-3.5" />
            </button>
          </div>
          <div className="flex-1 overflow-y-auto p-2">
            <button
              onClick={() => setFileTreeOpen((v) => !v)}
              className="flex items-center gap-1 w-full rounded-lg px-1.5 py-1 text-xs text-base-300/50 hover:bg-white/[0.03] hover:text-white transition-colors"
            >
              {fileTreeOpen ? (
                <ChevronDown className="h-3 w-3" />
              ) : (
                <ChevronRight className="h-3 w-3" />
              )}
              <FolderOpen className="h-3.5 w-3.5 text-accent-300/60" strokeWidth={1.8} />
              <span className="font-medium">project</span>
            </button>
            {fileTreeOpen && (
              <div className="ml-3 mt-0.5 border-l border-white/[0.04] pl-2 space-y-0.5">
                <div className="flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-xs text-base-300/30 hover:bg-white/[0.02]">
                  <Folder className="h-3.5 w-3.5 text-base-300/30" strokeWidth={1.8} />
                  src
                </div>
                <div className="flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-xs text-base-300/30 hover:bg-white/[0.02]">
                  <Folder className="h-3.5 w-3.5 text-base-300/30" strokeWidth={1.8} />
                  public
                </div>
                <div className="flex items-center gap-1.5 rounded-lg px-1.5 py-1 text-xs text-base-300/30 hover:bg-white/[0.02]">
                  <File className="h-3.5 w-3.5 text-base-300/30" strokeWidth={1.8} />
                  package.json
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Center: editor / preview / empty state */}
        <div className="flex-1 flex flex-col min-w-0">
          <div className="flex-1 flex items-center justify-center p-6">
            <EmptyState
              icon={<Hammer className="h-6 w-6" strokeWidth={1.5} />}
              title="No project open"
              description="Start a build from Nexa or open a project to see files, code, and live preview here."
            />
          </div>
        </div>

        {/* Right: agent activity / preview panel */}
        <div className="hidden xl:flex w-[260px] shrink-0 flex-col border-l border-white/[0.05] bg-base-950/30">
          <div className="flex items-center gap-2 px-3 h-9 border-b border-white/[0.04]">
            <Bot className="h-3.5 w-3.5 text-accent-300/60" strokeWidth={1.8} />
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
              Agent Activity
            </span>
          </div>
          <div className="flex-1 overflow-y-auto p-3">
            <div className="flex flex-col items-center justify-center py-12 text-center">
              <Bot className="h-5 w-5 text-base-300/20" strokeWidth={1.5} />
              <p className="mt-2 text-xs text-base-300/30">No active agents</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom: terminal / logs */}
      <div className="h-[140px] shrink-0 border-t border-white/[0.05] bg-base-950/50 flex flex-col">
        <div className="flex items-center gap-3 px-3 h-9 border-b border-white/[0.04]">
          <Terminal className="h-3.5 w-3.5 text-base-300/40" strokeWidth={1.8} />
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-base-300/30">
            Terminal
          </span>
          <div className="flex-1" />
          <button className="btn-icon h-6 w-6" aria-label="Clear terminal">
            <Play className="h-3 w-3" />
          </button>
        </div>
        <div className="flex-1 overflow-y-auto p-3 font-mono text-xs text-base-300/30">
          <p className="text-base-300/20">$ Waiting for build to start…</p>
        </div>
      </div>
    </div>
  );
}
