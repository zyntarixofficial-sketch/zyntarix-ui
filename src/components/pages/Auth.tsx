import { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Eye, EyeOff } from 'lucide-react';
import { Logo } from '@/components/layout/nav-config';

interface AuthProps {
  onAuthSuccess: () => void;
}

export function Auth({ onAuthSuccess }: AuthProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAuthSuccess();
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-base-950 relative overflow-hidden px-4 safe-top">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-30" />
      <div className="pointer-events-none absolute inset-0 radial-glow" />

      {/* Auth card */}
      <div className="relative w-full max-w-[400px] animate-fade-up">
        <div className="glass-strong rounded-2xl p-7 sm:p-8 shadow-panel">
          {/* Logo */}
          <div className="flex flex-col items-center mb-7">
            <Logo size={32} />
            <h1 className="mt-4 font-display text-xl font-semibold text-white tracking-tight">
              Zyntarix
            </h1>
            <p className="text-[11px] text-base-300/40 mt-0.5 tracking-wide">
              AI Software Factory
            </p>
          </div>

          {/* Mode toggle */}
          <div className="flex gap-1 p-1 rounded-xl bg-white/[0.03] border border-white/[0.06] mb-6">
            <button
              onClick={() => setMode('signin')}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                mode === 'signin'
                  ? 'bg-white/[0.06] text-white'
                  : 'text-base-300/40 hover:text-base-300/70'
              }`}
            >
              Sign In
            </button>
            <button
              onClick={() => setMode('signup')}
              className={`flex-1 rounded-lg py-2 text-sm font-medium transition-all ${
                mode === 'signup'
                  ? 'bg-white/[0.06] text-white'
                  : 'text-base-300/40 hover:text-base-300/70'
              }`}
            >
              Sign Up
            </button>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {mode === 'signup' && (
              <div>
                <label className="block text-xs font-medium text-base-300/50 mb-1.5">
                  Name
                </label>
                <div className="relative">
                  <User
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-300/30"
                    strokeWidth={1.8}
                  />
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Your name"
                    className="input pl-10"
                  />
                </div>
              </div>
            )}
            <div>
              <label className="block text-xs font-medium text-base-300/50 mb-1.5">
                Email
              </label>
              <div className="relative">
                <Mail
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-300/30"
                  strokeWidth={1.8}
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="input pl-10"
                />
              </div>
            </div>
            <div>
              <label className="block text-xs font-medium text-base-300/50 mb-1.5">
                Password
              </label>
              <div className="relative">
                <Lock
                  className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-base-300/30"
                  strokeWidth={1.8}
                />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="input pl-10 pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-base-300/30 hover:text-base-300/60 transition-colors"
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            {mode === 'signin' && (
              <div className="flex justify-end">
                <button
                  type="button"
                  className="text-xs text-base-300/40 hover:text-base-300/60 transition-colors"
                >
                  Forgot password?
                </button>
              </div>
            )}

            <button type="submit" className="btn-primary w-full py-2.5">
              {mode === 'signin' ? 'Sign In' : 'Create Account'}
              <ArrowRight className="h-4 w-4" />
            </button>
          </form>

          {/* Footer */}
          <p className="mt-6 text-center text-xs text-base-300/30">
            {mode === 'signin' ? (
              <>
                Don't have an account?{' '}
                <button
                  onClick={() => setMode('signup')}
                  className="text-accent-300/60 hover:text-accent-300 transition-colors font-medium"
                >
                  Sign up
                </button>
              </>
            ) : (
              <>
                Already have an account?{' '}
                <button
                  onClick={() => setMode('signin')}
                  className="text-accent-300/60 hover:text-accent-300 transition-colors font-medium"
                >
                  Sign in
                </button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
