import React from 'react';
import { ChevronDown, MapPin, Sparkles } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hero: React.FC = () => {
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="profile"
      className="relative min-h-screen flex items-center justify-center bg-neutral-950 text-white overflow-hidden pt-20"
    >
      {/* Background Image with Fixed/Parallax Effect */}
      <div className="absolute inset-0 z-0">
        <img
          src={PERSONAL_INFO.profileBg}
          alt={PERSONAL_INFO.name}
          className="w-full h-full object-cover object-center filter brightness-[0.7] contrast-[1.05]"
          onError={(e) => {
            // Fallback if local photo failed
            const target = e.target as HTMLImageElement;
            target.src = 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=1600&q=80';
          }}
        />
        {/* Dark Vignette & Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-black/60" />
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-black/20 to-black/80" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-blue-600/30 border border-blue-400/40 backdrop-blur-md text-blue-200 text-sm font-semibold tracking-wide shadow-lg">
          <Sparkles className="w-4 h-4 text-blue-400 animate-pulse" />
          <span>Nepal • Creative Technology Explorer</span>
        </div>

        <h1 className="text-5xl sm:text-7xl md:text-8xl font-black tracking-tight text-white drop-shadow-[0_10px_10px_rgba(0,0,0,0.8)]">
          {PERSONAL_INFO.name}
        </h1>

        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-neutral-200 tracking-wide drop-shadow-[0_4px_6px_rgba(0,0,0,0.8)] italic">
          "{PERSONAL_INFO.title}"
        </p>

        <p className="max-w-2xl mx-auto text-base sm:text-lg text-neutral-300 font-normal leading-relaxed drop-shadow-md">
          {PERSONAL_INFO.bio}
        </p>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            onClick={scrollToAbout}
            className="w-full sm:w-auto px-8 py-4 bg-red-600 hover:bg-red-700 text-white font-extrabold rounded-full text-base tracking-wider uppercase shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <span>Explore Profile</span>
            <ChevronDown className="w-5 h-5 animate-bounce" />
          </button>
          <a
            href="#visited"
            className="w-full sm:w-auto px-8 py-4 bg-white/10 hover:bg-white/20 text-white font-extrabold rounded-full text-base tracking-wider uppercase border border-white/30 backdrop-blur-md shadow-xl transition-all duration-300 hover:scale-105 active:scale-95 flex items-center justify-center space-x-2"
          >
            <MapPin className="w-5 h-5 text-red-400" />
            <span>Visited Places</span>
          </a>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden sm:block">
        <button
          onClick={scrollToAbout}
          className="text-neutral-400 hover:text-white transition-colors p-2"
          aria-label="Scroll down"
        >
          <ChevronDown className="w-8 h-8 animate-bounce" />
        </button>
      </div>
    </section>
  );
};
