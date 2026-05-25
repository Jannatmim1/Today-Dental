import React, { useState, useRef, useEffect } from 'react';
import { Sparkles } from 'lucide-react';

interface BeforeAfterSliderProps {
  beforeImg: string;
  afterImg: string;
  title: string;
  description: string;
}

export default function BeforeAfterSlider({ beforeImg, afterImg, title, description }: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50); // percentage (0 to 100)
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging) {
      handleMove(e.clientX);
    }
  };

  useEffect(() => {
    const handleMouseUp = () => setIsDragging(false);
    window.addEventListener('mouseup', handleMouseUp);
    window.addEventListener('touchend', handleMouseUp);
    return () => {
      window.removeEventListener('mouseup', handleMouseUp);
      window.removeEventListener('touchend', handleMouseUp);
    };
  }, []);

  return (
    <div className="bg-white rounded-3xl p-8 border border-slate-100 luxury-shadow flex flex-col lg:flex-row gap-8 items-center">
      <div className="w-full lg:w-1/2 flex flex-col justify-center">
        <div className="inline-flex items-center gap-2 bg-light-accent text-primary font-semibold text-xs py-1.5 px-3 rounded-full mb-4 w-fit">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Patient Smile Transformation</span>
        </div>
        <h3 className="font-display font-bold text-2xl lg:text-3xl text-text-dark leading-tight mb-4">
          {title}
        </h3>
        <p className="text-text-muted text-base leading-relaxed mb-6">
          {description}
        </p>
        <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-text-muted">Original State</span>
            <p className="text-text-dark font-medium text-sm mt-1">Discolored, minor overlap & uneven dental margins.</p>
          </div>
          <div>
            <span className="text-xs font-mono uppercase tracking-wider text-primary">Transformed State</span>
            <p className="text-primary font-semibold text-sm mt-1">Stain-free, symmetrically aligned, radiant finish.</p>
          </div>
        </div>
      </div>

      <div 
        id="slider-container"
        ref={containerRef}
        className="w-full lg:w-1/2 relative h-[320px] rounded-2xl overflow-hidden select-none cursor-ew-resize border border-slate-100 shadow-inner"
        onMouseDown={() => setIsDragging(true)}
        onTouchStart={() => setIsDragging(true)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Background) */}
        <img 
          src={afterImg} 
          alt="After treatment smile" 
          className="absolute inset-0 w-full h-full object-cover pointer-events-none"
          referrerPolicy="no-referrer"
        />
        <div className="absolute right-4 bottom-4 bg-primary text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-md z-10">
          AFTER
        </div>

        {/* Before Image (Foreground, clipped) */}
        <div 
          className="absolute inset-0 pointer-events-none overflow-hidden" 
          style={{ width: `${sliderPosition}%` }}
        >
          <img 
            src={beforeImg} 
            alt="Before treatment smile" 
            className="absolute inset-0 w-full h-full object-cover max-w-none pointer-events-none"
            style={{ width: containerRef.current?.getBoundingClientRect().width }}
            referrerPolicy="no-referrer"
          />
          <div className="absolute left-4 bottom-4 bg-slate-800/80 text-white text-xs font-medium px-2.5 py-1 rounded-full shadow-md z-10">
            BEFORE
          </div>
        </div>

        {/* Slider Handle Divider Line */}
        <div 
          className="absolute top-0 bottom-0 w-1 bg-white cursor-ew-resize z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-9 h-9 rounded-full bg-primary border-4 border-white shadow-xl flex items-center justify-center">
            <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M8 9l-4 4 4 4m8-8l4 4-4 4" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
