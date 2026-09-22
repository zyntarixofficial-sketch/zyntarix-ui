import { FolderKanban, Plus, Search } from 'lucide-react';
import { EmptyState } from '@/components/ui/EmptyState';
import type { PageId } from '@/types';

interface ProjectsProps {
  onNavigate: (page: PageId) => void;
}

export function Projects({ onNavigate }: ProjectsProps) {
  return (
    <div className="h-full overflow-y-auto">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between animate-fade-up">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-accent-500/10 border border-accent-500/20">
              <FolderKanban className="h-5 w-5 text-accent-300" strokeWidth={1.8} />
            </div>
            <div>
              <h1 className="font-display text-xl font-semibold text-white">Projects</h1>
              <p className="text-sm text-base-300/40">Your software builds</p>
            </div>
          </div>
          <button onClick={() => onNavigate('nexa')} className="btn-primary">
            <Plus className="h-4 w-4" />
            New Project
          </button>
        </div>

        {/* Search */}
        <div className="mt-6 relative animate-fade-up" style={{ animationDelay: '60ms' }}>
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-300/30" strokeWidth={1.8} />
          <input type="text" placeholder="Search projects…" className="input pl-9" />
        </div>

        {/* Empty state */}
        <div className="mt-8 card p-12 animate-fade-up" style={{ animationDelay: '120ms' }}>
          <EmptyState
            icon={<FolderKanban className="h-6 w-6" strokeWidth={1.5} />}
            title="No projects yet"
            description="Start a new build from Nexa to create your first project. It will appear here once initialized."
            action={
              <button onClick={() => onNavigate('nexa')} className="btn-primary">
                Start Building
              </button>
            }
          />
        </div>
      </div>
    </div>
  );
}
