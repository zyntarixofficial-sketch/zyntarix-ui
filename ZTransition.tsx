import { useEffect, useRef } from 'react';

const Z_PATH = 'M14,16 L86,16 L86,28 L34,72 L86,72 L86,84 L14,84 L14,72 L66,28 L14,28 Z';

const LAYERS = [
  { z: -20, fill: '#06070d', opacity: 0.25 },
  { z: -16, fill: '#0a0c14', opacity: 0.35 },
  { z: -12, fill: '#0c1020', opacity: 0.45 },
  { z: -8, fill: '#101630', opacity: 0.55 },
  { z: -5, fill: '#162042', opacity: 0.65 },
  { z: -3, fill: '#1d2a55', opacity: 0.75 },
  { z: -1, fill: '#26366b', opacity: 0.85 },
  { z: 0, fill: 'url(#z-metallic-t)', opacity: 1 },
];

interface ZTransitionProps {
  onComplete: () => void;
}

export function ZTransition({ onComplete }: ZTransitionProps) {
  const reducedMotion = useRef(
    typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches,
  ).current;

  useEffect(() => {
    const duration = reducedMotion ? 800 : 1900;
    const timer = setTimeout(onComplete, duration);
    return () => clearTimeout(timer);
  }, [onComplete, reducedMotion]);

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-base-950 z-transition-overlay"
      role="status"
      aria-label="Entering Zyntarix"
    >
      {/* Background effects */}
      <div className="pointer-events-none absolute inset-0 grid-bg opacity-20" />
      <div className="pointer-events-none absolute inset-0 radial-glow opacity-50" />

      {/* Ambient glow behind Z */}
      <div className="pointer-events-none absolute flex items-center justify-center">
        <div className="h-40 w-40 rounded-full bg-accent-500/20 blur-[80px] animate-pulse-soft" />
      </div>

      {/* 3D Z Stage */}
      <div className="relative z-3d-stage">
        <div className={reducedMotion ? 'z-3d-scene-reduced' : 'z-3d-scene'}>
          {/* SVG gradient definitions */}
          <svg width="0" height="0" className="absolute" aria-hidden="true">
            <defs>
              <linearGradient id="z-metallic-t" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#1a1f3a" />
                <stop offset="20%" stopColor="#3a4068" />
                <stop offset="42%" stopColor="#6d4dff" />
                <stop offset="55%" stopColor="#a892ff" />
                <stop offset="72%" stopColor="#5a35f0" />
                <stop offset="100%" stopColor="#1a1f3a" />
              </linearGradient>
              <linearGradient id="z-gloss-t" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="rgba(255,255,255,0.4)" />
                <stop offset="45%" stopColor="rgba(255,255,255,0)" />
                <stop offset="100%" stopColor="rgba(255,255,255,0.08)" />
              </linearGradient>
            </defs>
          </svg>

          {/* Depth layers */}
          {LAYERS.map((layer, i) => (
            <div
              key={i}
              className="z-3d-layer"
              style={{
                transform: `translateZ(${layer.z}px)`,
                opacity: layer.opacity,
              }}
            >
              <svg width="120" height="120" viewBox="0 0 100 100" className="z-svg">
                <path d={Z_PATH} fill={layer.fill} />
              </svg>
            </div>
          ))}

          {/* Gloss overlay (front) */}
          <div className="z-3d-layer" style={{ transform: 'translateZ(2px)' }}>
            <svg width="120" height="120" viewBox="0 0 100 100" className="z-svg">
              <path d={Z_PATH} fill="url(#z-gloss-t)" />
            </svg>
          </div>

          {/* Edge highlight */}
          <div className="z-3d-layer" style={{ transform: 'translateZ(1px)' }}>
            <svg width="120" height="120" viewBox="0 0 100 100" className="z-svg">
              <path d={Z_PATH} fill="none" stroke="rgba(168,146,255,0.25)" strokeWidth="0.5" />
            </svg>
          </div>
        </div>
      </div>

      {/* Brand text */}
      <div className="absolute bottom-[15%] flex flex-col items-center gap-1 z-transition-text">
        <p className="font-display text-sm font-semibold tracking-[0.3em] text-base-300/40 uppercase">
          Zyntarix
        </p>
        <p className="text-[10px] tracking-[0.2em] text-base-300/20 uppercase">
          AI Software Factory
        </p>
      </div>
    </div>
  );
}
