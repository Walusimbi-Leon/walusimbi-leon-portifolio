import React from 'react';
import { ExternalLink, BarChart3, Heart, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenStats?: () => void;
}

export const Navbar: React.FC<NavbarProps> = () => {
  return (
    <header className="sticky top-0 z-40 bg-[#07090e]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 gap-8">
          
          {/* Zone 1: Single text wordmark with subtle executive title */}
          <a href="#" className="flex items-baseline space-x-2 shrink-0 group">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
              Walusimbi Leon
            </span>
            <span className="text-xs text-slate-400 hidden sm:inline font-medium">
              · Founder & CEO, SGSS Org
            </span>
          </a>

          {/* Zone 2: 4-5 concise single-line nav links */}
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium text-slate-400">
            <a href="#services" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Fleet & Services
            </a>
            <a href="#telemetry" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Live Telemetry
            </a>
            <a href="#philosophy" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Leadership & Vision
            </a>
            <a href="#contact" className="hover:text-white transition-colors whitespace-nowrap shrink-0">
              Contact
            </a>
          </nav>

          {/* Zone 3: Primary action button + donation link */}
          <div className="flex items-center space-x-3 shrink-0">
            <a
              href="https://sgss-statistics.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold text-slate-200 bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-indigo-500/50 transition-all shadow-sm"
            >
              <BarChart3 className="w-3.5 h-3.5 mr-1.5 text-indigo-400" />
              <span className="hidden sm:inline">SGSS Statistics</span>
              <span className="sm:hidden">Stats</span>
              <ExternalLink className="w-3 h-3 ml-1 opacity-70" />
            </a>

            <a
              href="https://donate-to-sgss.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-3.5 py-1.5 rounded-lg text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md shadow-rose-500/20 transition-all"
            >
              <Heart className="w-3.5 h-3.5 mr-1.5 fill-white/80" />
              <span>Support Fleet</span>
            </a>
          </div>

        </div>
      </div>
    </header>
  );
};
