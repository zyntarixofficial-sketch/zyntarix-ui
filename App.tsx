import { useState, useCallback } from 'react';
import { Sidebar } from '@/components/layout/Sidebar';
import { TopBar } from '@/components/layout/TopBar';
import { MobileNavPanel, MobileBottomNav } from '@/components/layout/MobileNav';
import { ZynAssistant } from '@/components/ZynAssistant';
import { ZTransition } from '@/components/ZTransition';
import { Auth } from '@/components/pages/Auth';
import { Dashboard } from '@/components/pages/Dashboard';
import { Nexa } from '@/components/pages/Nexa';
import { Projects } from '@/components/pages/Projects';
import { Forge } from '@/components/pages/Forge';
import { Test } from '@/components/pages/Test';
import { Ship } from '@/components/pages/Ship';
import { Profile } from '@/components/pages/Profile';
import type { PageId } from '@/types';

type AppState = 'auth' | 'transition' | 'app';

function App() {
  const [appState, setAppState] = useState<AppState>('auth');
  const [page, setPage] = useState<PageId>('dashboard');
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const [zynOpen, setZynOpen] = useState(false);

  const handleAuthSuccess = useCallback(() => {
    setAppState('transition');
  }, []);

  const handleTransitionComplete = useCallback(() => {
    setAppState('app');
  }, []);

  const navigate = (p: PageId) => {
    setPage(p);
  };

  const renderPage = () => {
    switch (page) {
      case 'dashboard':
        return <Dashboard onNavigate={navigate} />;
      case 'nexa':
        return <Nexa />;
      case 'projects':
        return <Projects onNavigate={navigate} />;
      case 'forge':
        return <Forge />;
      case 'test':
        return <Test />;
      case 'ship':
        return <Ship />;
      case 'profile':
        return <Profile />;
      default:
        return <Dashboard onNavigate={navigate} />;
    }
  };

  if (appState === 'auth') {
    return <Auth onAuthSuccess={handleAuthSuccess} />;
  }

  if (appState === 'transition') {
    return <ZTransition onComplete={handleTransitionComplete} />;
  }

  const fullHeightPages: PageId[] = ['nexa', 'forge'];
  const isFullHeight = fullHeightPages.includes(page);

  return (
    <div className="flex h-screen overflow-hidden bg-base-950 animate-fade-in">
      <Sidebar current={page} onNavigate={navigate} />

      <MobileNavPanel
        open={mobileNavOpen}
        current={page}
        onClose={() => setMobileNavOpen(false)}
        onNavigate={navigate}
      />

      <div className="flex-1 flex flex-col min-w-0">
        <TopBar current={page} onOpenMobileNav={() => setMobileNavOpen(true)} />
        <main
          className={
            isFullHeight
              ? 'flex-1 min-h-0 overflow-hidden'
              : 'flex-1 min-h-0 overflow-y-auto'
          }
        >
          {renderPage()}
        </main>
      </div>

      <MobileBottomNav
        current={page}
        onNavigate={navigate}
        onOpenMenu={() => setMobileNavOpen(true)}
      />

      <ZynAssistant open={zynOpen} onToggle={() => setZynOpen((v) => !v)} />
    </div>
  );
}

export default App;
