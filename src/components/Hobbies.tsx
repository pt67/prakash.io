import React from 'react';
import { Gamepad2, Code2, BookOpen, Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Hobbies: React.FC = () => {
  return (
    <section
      id="hobbies"
      className="py-24 bg-gradient-to-br from-red-600 via-amber-500 to-yellow-500 text-white px-6 sm:px-12 relative overflow-hidden shadow-2xl"
    >
      {/* Decorative Background Patterns */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent)]" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center space-y-4 mb-12">
          <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-white text-xs font-black uppercase tracking-widest border border-white/30">
            <Heart className="w-4 h-4 text-red-200 fill-red-200" />
            <span>Passions & Interests</span>
          </div>
          <h2 className="text-4xl sm:text-6xl font-black uppercase tracking-tight drop-shadow-md">
            My Hobbies
          </h2>
          <div className="w-24 h-1.5 bg-white mx-auto rounded-full shadow-md" />
        </div>

        {/* Main Banner Quote */}
        <div className="bg-black/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 sm:p-12 text-center max-w-3xl mx-auto shadow-2xl mb-12">
          <p className="text-xl sm:text-2xl md:text-3xl font-bold leading-relaxed text-white drop-shadow-sm italic">
            "{PERSONAL_INFO.hobbiesText}"
          </p>
        </div>

        {/* Interactive Hobby Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* PC Gaming */}
          <div className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center space-y-3 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Gamepad2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-wide">PC Gaming</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Playing immersive PC games for relaxation, strategy, and entertainment.
            </p>
          </div>

          {/* Programming Languages */}
          <div className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center space-y-3 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Code2 className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-wide">Coding & Testing</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Testing and implementing new programming concepts for pure enjoyment.
            </p>
          </div>

          {/* Reading Articles */}
          <div className="bg-black/25 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center space-y-3 hover:bg-black/40 transition-all duration-300 hover:-translate-y-1 shadow-lg">
            <div className="w-14 h-14 mx-auto rounded-xl bg-white/20 flex items-center justify-center text-white">
              <BookOpen className="w-8 h-8" />
            </div>
            <h3 className="text-xl font-extrabold uppercase tracking-wide">Article Reading</h3>
            <p className="text-sm text-white/90 leading-relaxed">
              Reading tech articles, tech news, and insightful blogs is my favorite pastime.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
