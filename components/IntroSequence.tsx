'use client';

import React, { useEffect, useRef, useState, useCallback } from 'react';
import { motion, useScroll, useTransform } from 'motion/react';
import {
  ChevronDown,
  Sparkles,
  ShieldAlert,
  ScanLine,
  ArrowRight,
  Compass,
  CheckCircle2,
  Lock,
  Flame,
} from 'lucide-react';

interface IntroSequenceProps {
  onComplete: () => void;
}

export default function IntroSequence({ onComplete }: IntroSequenceProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [splineLoaded, setSplineLoaded] = useState(false);
  const [currentSceneIndex, setCurrentSceneIndex] = useState(0);

  // Scroll to top on mount
  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    }
  }, []);

  // Track scroll progression through 400vh
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end end'],
  });

  // Track active scene for dot indicators
  useEffect(() => {
    const unsubscribe = scrollYProgress.on('change', (latest) => {
      if (latest < 0.2) {
        setCurrentSceneIndex(0);
      } else if (latest < 0.5) {
        setCurrentSceneIndex(1);
      } else if (latest < 0.8) {
        setCurrentSceneIndex(2);
      } else {
        setCurrentSceneIndex(3);
      }
    });
    return () => unsubscribe();
  }, [scrollYProgress]);

  // Load Spline Web Component runtime safely on browser
  useEffect(() => {
    let isMounted = true;

    if (typeof window !== 'undefined' && customElements.get('spline-viewer')) {
      const timer = setTimeout(() => {
        if (isMounted) setSplineLoaded(true);
      }, 0);
      return () => {
        isMounted = false;
        clearTimeout(timer);
      };
    }

    const script = document.createElement('script');
    script.type = 'module';
    script.src = 'https://unpkg.com/@splinetool/viewer@1.9.72/build/spline-viewer.js';
    script.async = true;
    script.onload = () => {
      if (isMounted) setSplineLoaded(true);
    };
    script.onerror = () => {
      console.warn('Spline CDN script note: using 3D particle canvas fallback.');
    };
    document.head.appendChild(script);

    return () => {
      isMounted = false;
    };
  }, []);

  // 3D Canvas Visualizer
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 70;
    const particles: Array<{
      x: number;
      y: number;
      z: number;
      vx: number;
      vy: number;
      vz: number;
      color: string;
      size: number;
    }> = [];

    const colors = ['#10B981', '#34D399', '#3B82F6', '#6EE7B7', '#059669'];

    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);
      const radius = 180 + Math.random() * 120;
      particles.push({
        x: radius * Math.sin(phi) * Math.cos(theta),
        y: radius * Math.sin(phi) * Math.sin(theta),
        z: radius * Math.cos(phi),
        vx: (Math.random() - 0.5) * 0.4,
        vy: (Math.random() - 0.5) * 0.4,
        vz: (Math.random() - 0.5) * 0.4,
        color: colors[i % colors.length],
        size: Math.random() * 2.5 + 1.2,
      });
    }

    let angleX = 0;
    let angleY = 0;

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      const fov = 400;
      const cx = width / 2;
      const cy = height / 2;

      angleX += 0.003;
      angleY += 0.005;

      const cosX = Math.cos(angleX);
      const sinX = Math.sin(angleX);
      const cosY = Math.cos(angleY);
      const sinY = Math.sin(angleY);

      particles.forEach((p) => {
        const x1 = p.x * cosY - p.z * sinY;
        const z1 = p.z * cosY + p.x * sinY;

        const y1 = p.y * cosX - z1 * sinX;
        const z2 = z1 * cosX + p.y * sinX;

        const scale = fov / (fov + z2 + 350);
        const px = cx + x1 * scale;
        const py = cy + y1 * scale;
        const alpha = Math.max(0.1, Math.min(1, (z2 + 250) / 450));

        ctx.save();
        ctx.beginPath();
        ctx.arc(px, py, p.size * scale, 0, Math.PI * 2);
        ctx.fillStyle = p.color;
        ctx.globalAlpha = alpha * 0.8;
        ctx.shadowBlur = 12;
        ctx.shadowColor = p.color;
        ctx.fill();
        ctx.restore();
      });

      ctx.save();
      ctx.strokeStyle = 'rgba(16, 185, 129, 0.15)';
      ctx.lineWidth = 1.5;
      ctx.beginPath();
      ctx.ellipse(cx, cy, 220, 90, angleX * 0.8, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(59, 130, 246, 0.12)';
      ctx.beginPath();
      ctx.ellipse(cx, cy, 240, 110, -angleY * 0.7, 0, Math.PI * 2);
      ctx.stroke();
      ctx.restore();

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Scroll Transforms
  const scene1Opacity = useTransform(scrollYProgress, [0, 0.16, 0.28], [1, 1, 0]);
  const scene1Scale = useTransform(scrollYProgress, [0, 0.28], [1, 0.94]);
  const scene1Y = useTransform(scrollYProgress, [0, 0.28], [0, -50]);

  const scene2Opacity = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.38, 0.48],
    [0, 1, 1, 0]
  );
  const scene2X = useTransform(
    scrollYProgress,
    [0.18, 0.28, 0.38, 0.48],
    [-40, 0, 0, -40]
  );
  const scene2Scale = useTransform(scrollYProgress, [0.18, 0.33, 0.48], [0.94, 1, 0.94]);

  const scene3Opacity = useTransform(
    scrollYProgress,
    [0.51, 0.61, 0.72, 0.82],
    [0, 1, 1, 0]
  );
  const scene3X = useTransform(
    scrollYProgress,
    [0.51, 0.61, 0.72, 0.82],
    [40, 0, 0, 40]
  );
  const scene3Scale = useTransform(scrollYProgress, [0.51, 0.66, 0.82], [0.94, 1, 0.94]);

  const scene4Opacity = useTransform(scrollYProgress, [0.75, 0.88, 1], [0, 1, 1]);
  const scene4Scale = useTransform(scrollYProgress, [0.75, 0.88, 1], [0.92, 1, 1]);
  const scene4Y = useTransform(scrollYProgress, [0.75, 0.88, 1], [40, 0, 0]);

  const backgroundScale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.15, 1.05]);
  const backgroundOpacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0.85, 1, 1, 0.9]);

  const scrollToScene = useCallback((sceneIndex: number) => {
    if (typeof window === 'undefined') return;
    const vh = window.innerHeight;
    window.scrollTo({
      top: sceneIndex * vh,
      behavior: 'smooth',
    });
  }, []);

  return (
    <div
      ref={containerRef}
      id="intro-sequence-container"
      className="relative w-full h-[400vh] bg-black text-white selection:bg-emerald-500 selection:text-black font-sans"
    >
      {/* Top Fixed Header with Brand & Skip Button */}
      <nav
        id="intro-top-nav"
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/40 border-b border-white/10"
      >
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
            <Compass className="w-4 h-4" />
          </div>
          <div>
            <span className="font-extrabold tracking-tight text-white text-sm md:text-base block leading-none">
              CLEAN FUEL
            </span>
            <span className="text-[10px] uppercase font-bold text-neutral-500 tracking-widest">
              Macro Discovery Engine
            </span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            id="skip-intro-btn"
            onClick={onComplete}
            className="group flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all active:scale-95 cursor-pointer backdrop-blur-lg"
          >
            <span>Skip to Map</span>
            <ArrowRight className="w-3.5 h-3.5 text-neutral-400 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all" />
          </button>
        </div>
      </nav>

      {/* Right-Side Scene Navigation Dots */}
      <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden md:flex flex-col gap-3">
        {[
          { label: 'The Hook', index: 0 },
          { label: 'Veto Engine', index: 1 },
          { label: 'AI Scanner', index: 2 },
          { label: 'Launch', index: 3 },
        ].map((scene) => (
          <button
            key={scene.index}
            onClick={() => scrollToScene(scene.index)}
            aria-label={`Jump to ${scene.label}`}
            className="group relative flex items-center justify-end p-1.5 cursor-pointer"
          >
            <span className="absolute right-7 px-2.5 py-1 rounded-md bg-neutral-900/90 border border-neutral-800 text-[11px] font-bold text-neutral-300 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none shadow-lg">
              {scene.label}
            </span>
            <span
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentSceneIndex === scene.index
                  ? 'bg-emerald-400 scale-125 ring-4 ring-emerald-500/20'
                  : 'bg-neutral-600 hover:bg-neutral-400'
              }`}
            />
          </button>
        ))}
      </div>

      {/* FIXED FULL-SCREEN 3D BACKGROUND */}
      <div className="fixed inset-0 z-0 overflow-hidden flex items-center justify-center pointer-events-none">
        <motion.div
          style={{
            scale: backgroundScale,
            opacity: backgroundOpacity,
          }}
          className="relative w-full h-full flex items-center justify-center"
        >
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-600/15 rounded-full blur-[140px] pointer-events-none" />
          <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/15 rounded-full blur-[130px] pointer-events-none" />

          <canvas
            ref={canvasRef}
            className="absolute inset-0 w-full h-full pointer-events-none z-0"
          />

          <div className="relative w-full h-full pointer-events-auto flex items-center justify-center z-10">
            {splineLoaded &&
              React.createElement('spline-viewer', {
                url: 'https://prod.spline.design/6Wq1Q7YGyM-iab9i/scene.splinecode',
                'mouse-tracking': 'true',
                'loading-anim-type': 'spinner-small-dark',
                style: {
                  width: '100%',
                  height: '100%',
                  position: 'absolute',
                  inset: 0,
                  opacity: 0.9,
                },
              })}
          </div>

          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-black/80 pointer-events-none z-20" />
        </motion.div>
      </div>

      {/* FOREGROUND SECTIONS */}
      <div className="relative z-10 w-full">
        {/* SCENE 1: THE HOOK */}
        <section
          id="intro-scene-1"
          className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 text-center"
        >
          <motion.div
            style={{
              opacity: scene1Opacity,
              scale: scene1Scale,
              y: scene1Y,
            }}
            className="max-w-4xl mx-auto space-y-6 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-400 text-xs md:text-sm font-bold tracking-wide backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
              <span>Next-Gen Nutrition Intelligence</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05]">
              Stop guessing what&apos;s in your food.
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-400 max-w-2xl leading-relaxed">
              The first local map built for your exact macros and hard vetoes.
            </p>
          </motion.div>

          <motion.div
            style={{ opacity: scene1Opacity }}
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
            onClick={() => scrollToScene(1)}
            className="absolute bottom-10 flex flex-col items-center gap-2 text-neutral-500 cursor-pointer"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-neutral-400 hover:text-emerald-400 transition-colors">
              Scroll to explore ↓
            </span>
            <ChevronDown className="w-5 h-5 text-emerald-400" />
          </motion.div>
        </section>

        {/* SCENE 2: THE VETO ENGINE */}
        <section
          id="intro-scene-2"
          className="h-screen w-full flex items-center justify-start px-8 sm:px-16 md:px-24 lg:px-32 text-left"
        >
          <motion.div
            style={{
              opacity: scene2Opacity,
              x: scene2X,
              scale: scene2Scale,
            }}
            className="max-w-2xl space-y-6"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-500/10 border border-red-500/30 text-red-400 text-xs md:text-sm font-bold tracking-wider uppercase">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>Zero Compromise Engine</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[1.05]">
              Set your Hard No&apos;s.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-400 leading-relaxed">
              Gluten-free? Keto? Seed-oil-free? If it doesn&apos;t fit your profile, we hide it from
              your map. <span className="text-white font-bold">Period.</span>
            </p>

            <div className="pt-3 flex flex-wrap gap-2.5">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs md:text-sm font-bold shadow-lg">
                <Lock className="w-3.5 h-3.5 text-emerald-400" />
                <span>Zero Seed Oils (Canola / Soy)</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs md:text-sm font-bold shadow-lg">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Strict Celiac Gluten-Free</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-neutral-900/90 border border-neutral-800 text-neutral-300 text-xs md:text-sm font-bold shadow-lg">
                <Flame className="w-3.5 h-3.5 text-blue-400" />
                <span>100% Grass-Fed &amp; Wild</span>
              </div>
            </div>
          </motion.div>
        </section>

        {/* SCENE 3: THE AI SCANNER */}
        <section
          id="intro-scene-3"
          className="h-screen w-full flex items-center justify-end px-8 sm:px-16 md:px-24 lg:px-32 text-right"
        >
          <motion.div
            style={{
              opacity: scene3Opacity,
              x: scene3X,
              scale: scene3Scale,
            }}
            className="max-w-2xl space-y-6 flex flex-col items-end"
          >
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs md:text-sm font-bold tracking-wider uppercase">
              <ScanLine className="w-4 h-4 text-blue-400" />
              <span>Multi-Modal AI Vision</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tighter text-white leading-[1.05]">
              We read the menus so you don&apos;t have to.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-400 leading-relaxed">
              Our AI scans local independent restaurants, reads the messy PDFs, and calculates the
              exact macros of every dish.
            </p>

            <div className="p-4 rounded-2xl bg-neutral-950/80 border border-neutral-800 text-left w-full max-w-md shadow-2xl backdrop-blur-xl space-y-2">
              <div className="flex items-center justify-between text-xs text-neutral-400 border-b border-neutral-800 pb-2">
                <span className="font-mono text-emerald-400 font-bold">OCR ANALYSIS COMPLETE</span>
                <span className="text-[10px] uppercase font-bold text-neutral-500">Confidence: 99.8%</span>
              </div>
              <div className="flex justify-between items-center text-sm font-bold text-white pt-1">
                <span>Grass-Fed Flank Steak Plate</span>
                <span className="text-emerald-400">46g Protein</span>
              </div>
              <p className="text-xs text-neutral-400 italic">
                &ldquo;Cooking medium verified: Grass-fed tallow. Zero industrial vegetable oils.&rdquo;
              </p>
            </div>
          </motion.div>
        </section>

        {/* SCENE 4: THE HANDOFF */}
        <section
          id="intro-scene-4"
          className="h-screen w-full flex flex-col items-center justify-center px-6 md:px-12 text-center"
        >
          <motion.div
            style={{
              opacity: scene4Opacity,
              scale: scene4Scale,
              y: scene4Y,
            }}
            className="max-w-3xl mx-auto space-y-8 flex flex-col items-center"
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs md:text-sm font-bold tracking-wide">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>Ready for Exploration</span>
            </div>

            <h2 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter text-white leading-[1.05]">
              Your city, filtered for fuel.
            </h2>

            <p className="text-lg sm:text-xl md:text-2xl font-medium text-neutral-400 max-w-xl leading-relaxed">
              Explore restaurants ranked by macro precision, clean fats, and verified ingredients.
            </p>

            <div className="pt-4">
              <motion.button
                id="launch-map-cta"
                onClick={onComplete}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.96 }}
                className="group relative inline-flex items-center gap-3 px-8 sm:px-10 py-4 sm:py-5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black font-black text-base sm:text-lg md:text-xl shadow-[0_0_50px_rgba(16,185,129,0.5)] transition-all cursor-pointer overflow-hidden"
              >
                <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none" />
                <span>Launch the Map</span>
                <ArrowRight className="w-5 h-5 md:w-6 md:h-6 text-black group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>

            <p className="text-xs text-neutral-500 font-medium">
              Free • Interactive Bento Grid • Real-time Macros
            </p>
          </motion.div>
        </section>
      </div>
    </div>
  );
}
