import React, { useState, useMemo } from 'react';
import { 
  Gamepad2, 
  Globe, 
  Radio, 
  Cpu, 
  Layers, 
  ExternalLink, 
  Search, 
  ArrowUpRight,
  TrendingUp,
  Info
} from 'lucide-react';
import { ServiceItem, ServiceCategory } from '../types/portfolio';
import { SERVICES_CATALOG } from '../data/servicesData';
import { ServiceModal } from './ServiceModal';

export const FleetSection: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeModalService, setActiveModalService] = useState<ServiceItem | null>(null);

  const categories: { id: ServiceCategory; label: string; icon: React.ReactNode }[] = [
    { id: 'all', label: 'All Products (15+)', icon: <Layers className="w-3.5 h-3.5" /> },
    { id: 'discord-games', label: 'Discord Games (10+)', icon: <Gamepad2 className="w-3.5 h-3.5" /> },
    { id: 'web-platforms', label: 'Web Portals & Apps', icon: <Globe className="w-3.5 h-3.5" /> },
    { id: 'media-streaming', label: 'Media & 24/7 Audio', icon: <Radio className="w-3.5 h-3.5" /> },
    { id: 'infrastructure', label: 'Infrastructure & APIs', icon: <Cpu className="w-3.5 h-3.5" /> },
  ];

  const filteredServices = useMemo(() => {
    return SERVICES_CATALOG.filter((s) => {
      const matchesCategory = selectedCategory === 'all' || s.category === selectedCategory;
      const matchesSearch = 
        s.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.tagline.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.summary.toLowerCase().includes(searchQuery.toLowerCase()) ||
        s.techStack.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  return (
    <section id="services" className="py-16 sm:py-24 border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="flex items-center space-x-2 text-xs font-semibold tracking-wider uppercase text-indigo-400 mb-2">
            <span>Product Catalog</span>
            <span aria-hidden="true">·</span>
            <span>Cloudflare Multi-Account Fleet</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight" style={{ textWrap: 'balance' }}>
            Products, Platforms & Edge Microservices
          </h2>
          <p className="text-base text-slate-400 mt-3 leading-relaxed">
            Every product below has been conceptualized, architected, and deployed by Walusimbi Leon under SGSS Org. Designed to run at the edge with near-instant responsiveness and zero cold starts.
          </p>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          
          {/* Category Tabs */}
          <div className="flex items-center space-x-1.5 overflow-x-auto p-1 bg-slate-900/90 rounded-xl border border-slate-800 scrollbar-none">
            {categories.map((c) => {
              const isActive = selectedCategory === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => setSelectedCategory(c.id)}
                  className={`inline-flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap transition-all ${
                    isActive
                      ? 'bg-indigo-600 text-white shadow-sm'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                  }`}
                >
                  <span>{c.icon}</span>
                  <span>{c.label}</span>
                </button>
              );
            })}
          </div>

          {/* Search Box */}
          <div className="relative min-w-[240px]">
            <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Filter by title, feature, tech..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-slate-900 text-xs text-slate-200 placeholder-slate-500 rounded-xl pl-9 pr-3 py-2 border border-slate-800 focus:outline-none focus:border-indigo-500 transition-colors"
            />
          </div>

        </div>

        {/* Services Grid (Bento Style) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="flex flex-col justify-between bg-slate-900/70 hover:bg-slate-900 border border-slate-800 hover:border-indigo-500/40 rounded-2xl p-6 shadow-xl hover:shadow-indigo-500/5 transition-all group"
            >
              <div>
                {/* Unboxed Metadata Header */}
                <div className="flex items-center justify-between text-xs text-slate-400 mb-3">
                  <div className="flex items-center space-x-2">
                    <span className="capitalize font-medium">{service.category.replace('-', ' ')}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-mono text-[11px] text-slate-500">{service.runtime}</span>
                  </div>
                  {service.monthlyGrowth && (
                    <span className="inline-flex items-center text-[10px] font-bold text-amber-400 font-mono bg-amber-500/10 px-1.5 py-0.5 rounded">
                      <TrendingUp className="w-3 h-3 mr-0.5" />
                      {service.monthlyGrowth}
                    </span>
                  )}
                </div>

                {/* Title & Tagline */}
                <h3 
                  onClick={() => setActiveModalService(service)}
                  className="text-lg font-bold text-white group-hover:text-indigo-300 transition-colors cursor-pointer"
                >
                  {service.title}
                </h3>
                <p className="text-xs text-indigo-400 font-medium mt-1">
                  {service.tagline}
                </p>
                <p className="text-xs text-slate-400 mt-2.5 line-clamp-3 leading-relaxed">
                  {service.summary}
                </p>

                {/* Tech Stack Pills */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {service.techStack.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-800/80 text-slate-400 border border-slate-700/60"
                    >
                      {tech}
                    </span>
                  ))}
                  {service.techStack.length > 3 && (
                    <span className="text-[10px] text-slate-500 self-center">
                      +{service.techStack.length - 3} more
                    </span>
                  )}
                </div>
              </div>

              {/* Bottom Invocations & Action Bar */}
              <div className="pt-4 mt-6 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <div className="text-left">
                  <span className="text-[10px] uppercase font-semibold text-slate-500 block">30-Day Activity</span>
                  <span className="text-sm font-bold font-mono text-white tracking-tight">{service.invocations30d}</span>
                </div>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => setActiveModalService(service)}
                    className="px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
                  >
                    Details
                  </button>

                  {service.url && (
                    <a
                      href={service.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Launch live product"
                      className="p-1.5 rounded-lg text-indigo-400 hover:text-white hover:bg-indigo-600 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>

      {/* Modal Dialog */}
      <ServiceModal
        service={activeModalService}
        onClose={() => setActiveModalService(null)}
      />
    </section>
  );
};
