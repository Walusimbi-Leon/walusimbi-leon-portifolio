import React from 'react';
import { BarChart3, ExternalLink, ArrowRight, TrendingUp, ShieldCheck, Zap } from 'lucide-react';

export const TelemetrySection: React.FC = () => {
  return (
    <section id="telemetry" className="py-16 sm:py-24 border-t border-slate-800/80 relative overflow-hidden">
      
      {/* Background Graphic */}
      <div className="absolute inset-0 opacity-15 pointer-events-none">
        <img
          src="/network-banner.jpg"
          alt="Global Edge Infrastructure"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#07090e] via-[#07090e]/80 to-[#07090e]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Spotlight Card */}
        <div className="bg-gradient-to-br from-indigo-950/40 via-slate-900/90 to-purple-950/30 border border-indigo-500/30 rounded-3xl p-8 sm:p-12 shadow-2xl">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-indigo-400">
                <BarChart3 className="w-4 h-4" />
                <span>Real-Time Performance Intelligence</span>
                <span aria-hidden="true">·</span>
                <span>SGSS Telemetry</span>
              </div>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
                Inspect Live Fleet Performance on SGSS Statistics
              </h2>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
                Transparency and operational rigor are fundamental to how we run SGSS Org. Our dedicated telemetry console monitors every Cloudflare Worker and Pages deployment in real time—tracking 24h, 7d, and 30d request trajectories, error rates, and trending products.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 block">Logged Requests</span>
                  <span className="text-lg font-bold font-mono text-white mt-0.5 block">480,486+</span>
                  <span className="text-[10px] text-emerald-400 font-mono">+28.4% monthly</span>
                </div>
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 block">Surging Product</span>
                  <span className="text-xs sm:text-sm font-bold text-amber-300 mt-1 block truncate">Bible Songs</span>
                  <span className="text-[10px] text-amber-400 font-mono">+536.1% weekly</span>
                </div>
                <div className="p-3 bg-slate-900/80 border border-slate-800 rounded-xl col-span-2 sm:col-span-1">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 block">Fleet Reliability</span>
                  <span className="text-lg font-bold font-mono text-emerald-400 mt-0.5 block">100.00%</span>
                  <span className="text-[10px] text-slate-400 font-mono">0 runtime errors</span>
                </div>
              </div>

              <div className="pt-3">
                <a
                  href="https://sgss-statistics.pages.dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center px-6 py-3 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-xl shadow-indigo-600/30 transition-all group"
                >
                  <span>Launch Live Telemetry Dashboard</span>
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Right Column: Visual Preview Card */}
            <div className="lg:col-span-5">
              <div className="bg-slate-950/80 border border-slate-800 rounded-2xl p-6 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-slate-800/80 text-xs">
                  <span className="font-bold text-white">Cloudflare Edge Overview</span>
                  <span className="text-emerald-400 font-mono text-[11px] font-semibold">Live Feed Verified</span>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="flex justify-between items-center py-1 border-b border-slate-900">
                    <span className="text-slate-400">1. Stickman Rumble</span>
                    <span className="font-mono text-white font-semibold">142,004 reqs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-900">
                    <span className="text-slate-400">2. Islamic Trivia</span>
                    <span className="font-mono text-white font-semibold">90,116 reqs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-900">
                    <span className="text-slate-400">3. English Trivia</span>
                    <span className="font-mono text-white font-semibold">74,758 reqs</span>
                  </div>
                  <div className="flex justify-between items-center py-1 border-b border-slate-900">
                    <span className="text-slate-400">4. Trivia Rumble Elite</span>
                    <span className="font-mono text-white font-semibold">72,132 reqs</span>
                  </div>
                  <div className="flex justify-between items-center py-1">
                    <span className="text-slate-400">5. Bible Trivia</span>
                    <span className="font-mono text-white font-semibold">60,234 reqs</span>
                  </div>
                </div>

                <div className="pt-2">
                  <a
                    href="https://sgss-statistics.pages.dev"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full inline-flex items-center justify-center px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-800 transition-colors"
                  >
                    <span>View All 22 Services on Dashboard</span>
                    <ArrowRight className="w-3.5 h-3.5 ml-1.5" />
                  </a>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
