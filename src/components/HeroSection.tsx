import React from 'react';
import { ArrowRight, BarChart2, ShieldCheck, Globe, Zap, ExternalLink } from 'lucide-react';
import { EXECUTIVE_METRICS } from '../data/servicesData';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative pt-8 pb-16 lg:pt-14 lg:pb-20 overflow-hidden">
      
      {/* Background ambient light */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* 2-Column Split Hero */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Typographic Hierarchy */}
          <div className="lg:col-span-7 space-y-6">
            
            {/* Unboxed Kicker */}
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-indigo-400">
              <span>Executive Profile</span>
              <span aria-hidden="true">·</span>
              <span>Cloudflare Edge Fleet</span>
              <span aria-hidden="true">·</span>
              <span>SGSS Org</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white leading-[1.15]" style={{ textWrap: 'balance' }}>
              Walusimbi Leon
              <span className="block text-2xl sm:text-3xl lg:text-3xl font-semibold text-slate-400 mt-2">
                Founder & Chief Executive Officer, <span className="text-white">SGSS Org</span>
              </span>
            </h1>

            {/* Subtitle / Lead Paragraph */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
              Architecting high-concurrency microservices, viral Discord gaming bots, 24/7 web radio networks, and serverless developer infrastructure powered by Cloudflare Workers and Pages.
            </p>

            {/* Secondary Philosophy Note */}
            <p className="text-sm text-slate-400 leading-relaxed border-l-2 border-indigo-500/60 pl-4 py-1">
              "SGSS Org serves as the parent company and operational umbrella for our entire software ecosystem. We engineer fault-tolerant, zero-downtime experiences that deliver instant delight to hundreds of thousands of users worldwide."
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a
                href="#services"
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-lg shadow-indigo-600/25 transition-all group"
              >
                <span>Explore Products & Fleet</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="https://sgss-statistics.pages.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-5 py-2.5 rounded-xl text-sm font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 transition-all"
              >
                <BarChart2 className="w-4 h-4 mr-2 text-indigo-400" />
                <span>View Live Telemetry (480k+ Reqs)</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5 opacity-70" />
              </a>
            </div>

          </div>

          {/* Right Column: Executive Portrait */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="relative rounded-2xl overflow-hidden border border-slate-700/80 shadow-2xl bg-slate-900 group">
                <img
                  src="/ceo-portrait.jpg"
                  alt="Walusimbi Leon — Founder & Chief Executive Officer of SGSS Org"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto aspect-square object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent pointer-events-none" />
                
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-xs font-semibold text-white">Walusimbi Leon</div>
                  <div className="text-[11px] text-slate-300 font-medium">Founder & CEO, SGSS Org</div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Full-width 4-Column KPI Metric Strip below hero */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mt-14 pt-10 border-t border-slate-800/80">
          {EXECUTIVE_METRICS.map((m, idx) => (
            <div 
              key={idx}
              className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/30 transition-all"
            >
              <span className="text-2xl sm:text-3xl font-extrabold text-white font-mono tracking-tight block">
                {m.value}
              </span>
              <span className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1 block">
                {m.label}
              </span>
              <span className="text-xs text-slate-400 mt-1 block">
                {m.context}
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
