import React from 'react';
import { Heart } from 'lucide-react';
import { PERSONAL_INFO } from '../data/portfolioData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-12 px-6 border-t border-neutral-800 text-center">
      <div className="max-w-5xl mx-auto space-y-4">
        <p className="text-base font-semibold text-neutral-300 flex items-center justify-center space-x-1.5 flex-wrap">
          <span>Designed By</span>
          <a
            href={PERSONAL_INFO.facebookUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-red-500 hover:text-red-400 underline underline-offset-4 font-bold transition-colors"
          >
            {PERSONAL_INFO.name}
          </a>
        </p>

        <p className="text-xs text-neutral-500 font-medium">
          © {new Date().getFullYear()} {PERSONAL_INFO.name}. All rights reserved. Nepal.
        </p>
      </div>
    </footer>
  );
};
