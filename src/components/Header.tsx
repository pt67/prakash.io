import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { NAV_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-4 sm:px-12 py-4 ${
        isScrolled
          ? 'bg-black/90 backdrop-blur-md shadow-2xl border-b border-white/10'
          : 'bg-gradient-to-b from-black/80 via-black/40 to-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a
          href="#profile"
          onClick={(e) => handleNavClick(e, '#profile')}
          className="text-2xl font-black tracking-tight text-white transition-transform hover:scale-105"
        >
          <span className="text-blue-500 font-extrabold drop-shadow-[0_2px_2px_rgba(255,255,255,0.8)]">P</span>
          <span className="drop-shadow-[0_2px_2px_rgba(0,0,0,0.8)]">rakash blog</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-2">
          <ul className="flex items-center space-x-1 sm:space-x-4">
            {NAV_ITEMS.map((item) => (
              <li key={item.label}>
                <a
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="px-4 py-2 rounded-full text-sm font-bold uppercase tracking-wider text-white/90 hover:text-white hover:bg-white/10 transition-all duration-200"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Button ("Browse / Menu" from original script.js) */}
        <div className="md:hidden">
          <button
            id="browse"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="flex items-center space-x-1 bg-red-600 hover:bg-red-700 text-white font-bold px-4 py-2 rounded-lg text-sm shadow-md transition-all active:scale-95"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? (
              <>
                <X className="w-4 h-4" />
                <span>Exit</span>
              </>
            ) : (
              <>
                <Menu className="w-4 h-4" />
                <span>Menu</span>
              </>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown / Overlay */}
      {mobileMenuOpen && (
        <div className="md:hidden fixed inset-x-0 top-[68px] bg-red-600/95 backdrop-blur-md border-b border-red-500 p-6 shadow-2xl transition-all duration-300">
          <div className="flex flex-col space-y-3 max-w-md mx-auto">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.label}
                href={item.href}
                onClick={(e) => handleNavClick(e, item.href)}
                className="text-center py-3 text-lg font-extrabold uppercase tracking-widest text-white hover:bg-white/20 rounded-xl transition-all"
              >
                {item.label}
              </a>
            ))}
            <button
              id="exit"
              onClick={() => setMobileMenuOpen(false)}
              className="mt-4 w-full py-2.5 bg-black/40 hover:bg-black/60 text-white font-bold rounded-xl text-center transition-all flex items-center justify-center space-x-2"
            >
              <X className="w-4 h-4" />
              <span>Exit Menu</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
