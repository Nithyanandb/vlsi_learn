import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
}

const clamp = (value: number, min: number, max: number) => Math.max(min, Math.min(max, value));

const DynamicBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const onResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', onResize);

    // Particle field
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const particleCount = prefersReducedMotion ? 0 : clamp(Math.floor((width * height) / 60000), 18, 60);
    const particles: Particle[] = Array.from({ length: particleCount }).map(() => ({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.4,
      vy: (Math.random() - 0.5) * 0.4,
      radius: Math.random() * 1.5 + 0.5,
    }));

    let hueOffset = Math.random() * 360;

    const drawBackgroundGradient = () => {
      const gradient = ctx.createLinearGradient(0, 0, width, height);
      const h1 = (hueOffset + 200) % 360;
      const h2 = (hueOffset + 260) % 360;
      gradient.addColorStop(0, `hsla(${h1}, 85%, 55%, 0.12)`);
      gradient.addColorStop(1, `hsla(${h2}, 85%, 55%, 0.12)`);
      ctx.fillStyle = gradient;
      ctx.fillRect(0, 0, width, height);
    };

    const drawParticles = () => {
      ctx.save();
      ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0 || p.x > width) p.vx *= -1;
        if (p.y < 0 || p.y > height) p.vy *= -1;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }

      // Soft connections
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const p1 = particles[i];
          const p2 = particles[j];
          const dx = p1.x - p2.x;
          const dy = p1.y - p2.y;
          const dist = Math.hypot(dx, dy);
          if (dist < 130) {
            ctx.strokeStyle = `rgba(255,255,255,${(1 - dist / 130) * 0.15})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(p1.x, p1.y);
            ctx.lineTo(p2.x, p2.y);
            ctx.stroke();
          }
        }
      }
      ctx.restore();
    };

    const loop = () => {
      ctx.clearRect(0, 0, width, height);
      drawBackgroundGradient();

      // Glow blobs
      const blobCount = 3;
      for (let i = 0; i < blobCount; i++) {
        const t = (Date.now() / 4000 + i / blobCount) % 1;
        const x = (0.15 + 0.7 * t) * width;
        const y = (0.3 + 0.3 * Math.sin((t + i) * Math.PI * 2)) * height;
        const radius = Math.max(width, height) * 0.25;
        const radial = ctx.createRadialGradient(x, y, 0, x, y, radius);
        const hue = (hueOffset + i * 40) % 360;
        radial.addColorStop(0, `hsla(${hue}, 85%, 60%, 0.18)`);
        radial.addColorStop(1, 'hsla(0, 0%, 100%, 0)');
        ctx.fillStyle = radial;
        ctx.beginPath();
        ctx.arc(x, y, radius, 0, Math.PI * 2);
        ctx.fill();
      }

      drawParticles();
      hueOffset = (hueOffset + 0.08) % 360;
      animationRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 -z-10 pointer-events-none select-none"
      aria-hidden
    />
  );
};

export default DynamicBackground;


