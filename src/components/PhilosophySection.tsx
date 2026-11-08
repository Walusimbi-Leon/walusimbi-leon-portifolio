import React from 'react';
import { ShieldCheck, Cpu, Globe, Users, Heart, Layers } from 'lucide-react';

export const PhilosophySection: React.FC = () => {
  const pillars = [
    {
      title: "Serverless V8 Edge Execution",
      description: "Traditional VPS architectures suffer from cold starts and idle cost drag. By compiling services to lightweight V8 isolates on Cloudflare Workers, our applications boot in sub-milliseconds with infinite burst capacity."
    },
    {
      title: "Multi-Account Segregation",
      description: "SGSS operates across three segregated Cloudflare accounts to partition gaming bot traffic, digital media streaming, and production web portals. This guarantees high availability and zero single-point-of-failure risks."
    },
    {
      title: "Community-Centric Accessibility",
      description: "Our Discord games and educational trivia bots are 100% free for community servers worldwide. From youth study groups to global gaming guilds, we build software that fosters connection and joy."
    },
    {
      title: "Transparent Telemetry & Reliability",
      description: "We don't hide system status behind vague claims. We publish our live request counts, growth rates, and error metrics openly at sgss-statistics.pages.dev for users, partners, and investors."
    }
  ];

  return (
    <section id="philosophy" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Founder Bio */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-indigo-400">
              <span>Leadership Profile</span>
              <span aria-hidden="true">·</span>
              <span>SGSS Org</span>
            </div>

            <h2 className="text-3xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
              About Walusimbi Leon & SGSS Org
            </h2>

            <p className="text-sm text-slate-300 leading-relaxed">
              Walusimbi Leon is a software architect, systems engineer, and the Founder & Chief Executive Officer of SGSS Org. 
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Founded as an autonomous innovation organization, SGSS Org serves as the parent holding entity governing all microservices, Discord bots, web applications, and digital media channels developed under the SGSS banner.
            </p>

            <p className="text-sm text-slate-400 leading-relaxed">
              Walusimbi's work focuses on pushing the boundaries of edge serverless compute—proving that a lean, modern software team can deliver hundreds of thousands of daily experiences with zero infrastructure maintenance bottlenecks and 100.00% uptime.
            </p>

            <div className="pt-2">
              <a
                href="https://github.com/Walusimbi-Leon"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center text-xs font-semibold text-indigo-400 hover:text-indigo-300"
              >
                <span>Visit GitHub Profile (@Walusimbi-Leon)</span>
                <span className="ml-1">→</span>
              </a>
            </div>
          </div>

          {/* Right Column: Architectural Pillars */}
          <div className="lg:col-span-7">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {pillars.map((p, idx) => (
                <div
                  key={idx}
                  className="bg-slate-900/60 border border-slate-800 rounded-2xl p-5 hover:border-slate-700 transition-colors"
                >
                  <span className="text-xs font-mono text-indigo-400 block mb-2 font-bold">
                    0{idx + 1}.
                  </span>
                  <h3 className="text-sm font-bold text-white mb-2">{p.title}</h3>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
