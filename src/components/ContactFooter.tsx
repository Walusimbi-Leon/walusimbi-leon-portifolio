import React from 'react';
import { Heart, ExternalLink, Github, Mail, BarChart3 } from 'lucide-react';

export const ContactFooter: React.FC = () => {
  return (
    <footer id="contact" className="border-t border-slate-800/80 bg-slate-950/70 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Contact & Introduction Card */}
        <div className="bg-gradient-to-r from-slate-900 via-slate-900 to-indigo-950/40 border border-slate-800 rounded-3xl p-8 sm:p-12 mb-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-semibold uppercase tracking-wider text-indigo-400">Direct Introduction</span>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              Let's Connect & Collaborate
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed">
              Whether you are an investor, institutional partner, open-source contributor, or server community manager interested in integrating SGSS services—reach out directly to Walusimbi Leon.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              href="mailto:walusimbileon1@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all"
            >
              <Mail className="w-4 h-4 mr-2" />
              <span>walusimbileon1@gmail.com</span>
            </a>

            <a
              href="https://donate-to-sgss.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-xs font-semibold text-white bg-gradient-to-r from-rose-500 to-pink-600 hover:from-rose-600 hover:to-pink-700 shadow-md shadow-rose-500/20 transition-all"
            >
              <Heart className="w-4 h-4 mr-2 fill-white/80" />
              <span>Support SGSS Org</span>
            </a>
          </div>
        </div>

        {/* Footer Navigation & Credits */}
        <div className="flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4 pt-4 border-t border-slate-900">
          <div className="flex items-center space-x-2">
            <span className="font-bold text-slate-300">Walusimbi Leon</span>
            <span>·</span>
            <span>Founder & CEO, SGSS Org</span>
            <span>·</span>
            <span>All rights reserved</span>
          </div>

          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Walusimbi-Leon"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <Github className="w-3.5 h-3.5" />
              <span>GitHub</span>
            </a>
            <a
              href="https://sgss-statistics.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-white transition-colors flex items-center space-x-1"
            >
              <BarChart3 className="w-3.5 h-3.5" />
              <span>SGSS Statistics</span>
            </a>
            <a
              href="https://donate-to-sgss.pages.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-slate-400 hover:text-rose-400 transition-colors flex items-center space-x-1"
            >
              <Heart className="w-3.5 h-3.5" />
              <span>Donations</span>
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
