export type ServiceCategory = 'all' | 'discord-games' | 'web-platforms' | 'media-streaming' | 'infrastructure';

export interface ServiceItem {
  id: string;
  title: string;
  tagline: string;
  category: 'discord-games' | 'web-platforms' | 'media-streaming' | 'infrastructure';
  runtime: 'Cloudflare Worker' | 'Cloudflare Pages';
  invocations30d: string;
  monthlyGrowth?: string;
  reliability: string;
  url?: string;
  githubUrl?: string;
  summary: string;
  detailedNotes: string[];
  techStack: string[];
  featured: boolean;
}

export interface ExecutiveMetric {
  value: string;
  label: string;
  context: string;
}
