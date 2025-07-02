import React, { useEffect, useRef } from 'react';

const InteractiveBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const lightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (lightRef.current) {
        const x = (e.clientX / window.innerWidth) * 100;
        const y = (e.clientY / window.innerHeight) * 100;
        
        lightRef.current.style.background = `radial-gradient(600px circle at ${x}% ${y}%, rgba(59, 130, 246, 0.6), rgba(147, 51, 234, 0.4), transparent 40%)`;
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div ref={containerRef} className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Base gradient background - green to purple */}
      <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/20 via-purple-900/30 to-pink-500/20" />
      
      {/* Interactive bright blue light following mouse */}
      <div
        ref={lightRef}
        className="absolute inset-0 transition-all duration-300 ease-out"
      />
      
      {/* Additional gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-tr from-emerald-400/10 via-transparent to-purple-500/10" />
    </div>
  );
};

export default InteractiveBackground;