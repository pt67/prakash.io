import React from 'react';
import { Globe, MapPin, Navigation, User } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-black text-neutral-100 px-6 sm:px-12 relative border-t border-white/10">
      <div className="max-w-5xl mx-auto">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-red-600/20 text-red-400 text-xs font-bold uppercase tracking-widest border border-red-500/30">
            <User className="w-3.5 h-3.5" />
            <span>Personal Roots</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black uppercase tracking-tight text-white">
            About me
          </h2>
          <div className="w-24 h-1 bg-red-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Country Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 text-center space-y-4 hover:border-red-500/50 transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-red-600/20 border border-red-500/30 flex items-center justify-center text-red-500 group-hover:scale-110 group-hover:bg-red-600 group-hover:text-white transition-all duration-300">
              <Globe className="w-8 h-8" />
            </div>
            <div className="text-sm uppercase tracking-widest text-neutral-400 font-semibold">
              Country
            </div>
            <div className="text-3xl font-extrabold text-white group-hover:text-red-400 transition-colors">
              {PERSONAL_INFO.country}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Federal Democratic Republic of Nepal - home of Mount Everest and rich cultural heritage.
            </p>
          </div>

          {/* Zone Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 text-center space-y-4 hover:border-blue-500/50 transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-blue-600/20 border border-blue-500/30 flex items-center justify-center text-blue-500 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
              <Navigation className="w-8 h-8" />
            </div>
            <div className="text-sm uppercase tracking-widest text-neutral-400 font-semibold">
              Zone
            </div>
            <div className="text-3xl font-extrabold text-white group-hover:text-blue-400 transition-colors">
              {PERSONAL_INFO.zone}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Historic Lumbini Zone, sacred birthplace of Lord Buddha and rich agricultural landscape.
            </p>
          </div>

          {/* District Card */}
          <div className="bg-neutral-900/90 border border-neutral-800 rounded-2xl p-8 text-center space-y-4 hover:border-yellow-500/50 transition-all duration-300 shadow-xl group">
            <div className="w-16 h-16 mx-auto rounded-2xl bg-yellow-600/20 border border-yellow-500/30 flex items-center justify-center text-yellow-500 group-hover:scale-110 group-hover:bg-yellow-600 group-hover:text-white transition-all duration-300">
              <MapPin className="w-8 h-8" />
            </div>
            <div className="text-sm uppercase tracking-widest text-neutral-400 font-semibold">
              District
            </div>
            <div className="text-3xl font-extrabold text-white group-hover:text-yellow-400 transition-colors">
              {PERSONAL_INFO.district}
            </div>
            <p className="text-xs text-neutral-400 leading-relaxed">
              Nawalparasi District in Western Nepal, nestled along the fertile plains and Narayani River.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
