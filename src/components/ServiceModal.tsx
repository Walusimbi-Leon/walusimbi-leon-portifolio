import React from 'react';
import { X, ExternalLink, ShieldCheck, Zap, Layers, Cpu, Github, CheckCircle2 } from 'lucide-react';
import { ServiceItem } from '../types/portfolio';

interface ServiceModalProps {
  service: ServiceItem | null;
  onClose: () => void;
}

export const ServiceModal: React.FC<ServiceModalProps> = ({ service, onClose }) => {
  if (!service) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-sm animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-2xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-800 bg-slate-950/60">
          <div>
            <div className="flex items-center space-x-2 text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-1">
              <span>{service.category.replace('-', ' ')}</span>
              <span aria-hidden="true">·</span>
              <span>{service.runtime}</span>
            </div>
            <h3 className="text-xl font-bold text-white tracking-tight">{service.title}</h3>
            <p className="text-xs text-slate-400 mt-0.5">{service.tagline}</p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 overflow-y-auto space-y-6">
          
          {/* Quick Metrics Bar */}
          <div className="grid grid-cols-3 gap-3 bg-slate-950/50 border border-slate-800 rounded-xl p-3 text-center">
            <div>
              <span className="text-[10px] uppercase font-semibold text-slate-500 block">30d Invocations</span>
              <span className="text-base sm:text-lg font-bold font-mono text-white mt-0.5 block">{service.invocations30d}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-slate-500 block">Reliability</span>
              <span className="text-base sm:text-lg font-bold font-mono text-emerald-400 mt-0.5 block">{service.reliability}</span>
            </div>
            <div>
              <span className="text-[10px] uppercase font-semibold text-slate-500 block">Platform</span>
              <span className="text-xs sm:text-sm font-semibold text-indigo-300 mt-1 block">{service.runtime}</span>
            </div>
          </div>

          {/* Detailed Summary */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Executive Overview</h4>
            <p className="text-sm text-slate-300 leading-relaxed">
              {service.summary}
            </p>
          </div>

          {/* Architectural Notes */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Technical Implementation & Architecture</h4>
            <ul className="space-y-2">
              {service.detailedNotes.map((note, idx) => (
                <li key={idx} className="flex items-start text-xs sm:text-sm text-slate-400 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-indigo-400 mr-2 shrink-0 mt-0.5" />
                  <span>{note}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div>
            <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">Technologies & Protocols</h4>
            <div className="flex flex-wrap gap-1.5">
              {service.techStack.map((tech) => (
                <span 
                  key={tech}
                  className="px-2.5 py-1 rounded-lg text-xs font-medium bg-slate-800 text-slate-300 border border-slate-700/80"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

        </div>

        {/* Footer Actions */}
        <div className="flex items-center justify-between p-4 px-6 border-t border-slate-800 bg-slate-950/60">
          <span className="text-xs text-slate-500 font-mono">
            SGSS Ecosystem Deployment
          </span>
          <div className="flex items-center space-x-3">
            {service.githubUrl && (
              <a
                href={service.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-1.5 rounded-lg text-xs font-medium text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 transition-colors"
              >
                <Github className="w-3.5 h-3.5 mr-1.5" />
                <span>GitHub</span>
              </a>
            )}
            {service.url && (
              <a
                href={service.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 rounded-xl text-xs font-semibold text-white bg-indigo-600 hover:bg-indigo-500 shadow-md shadow-indigo-600/30 transition-all"
              >
                <span>Launch Live Service</span>
                <ExternalLink className="w-3.5 h-3.5 ml-1.5" />
              </a>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
