import { ServiceItem, ExecutiveMetric } from '../types/portfolio';

export const EXECUTIVE_METRICS: ExecutiveMetric[] = [
  {
    value: "480,000+",
    label: "Monthly Edge Invocations",
    context: "Across all active microservices on Cloudflare"
  },
  {
    value: "22",
    label: "Production Deployments",
    context: "Spanning 3 enterprise Cloudflare accounts"
  },
  {
    value: "100.00%",
    label: "Platform Reliability",
    context: "Zero critical runtime exceptions across global fleet"
  },
  {
    value: "330+",
    label: "Global Edge PoPs",
    context: "Sub-15ms worldwide latency on Cloudflare"
  }
];

export const SERVICES_CATALOG: ServiceItem[] = [
  {
    id: "stickman-rumble",
    title: "Stickman Rumble",
    tagline: "High-adrenaline multiplayer combat engine for Discord",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "142,004",
    reliability: "100%",
    url: "https://stickman-rumble.walusimbileon1.workers.dev",
    summary: "The flagship Discord gaming bot in the SGSS ecosystem, delivering real-time interactive physics-inspired fighter battles directly inside server channels.",
    detailedNotes: [
      "Engineered on Cloudflare Workers utilizing fast-executing V8 isolates for sub-millisecond game state updates.",
      "Handles over 140,000 player interactions monthly with 0% downtime and zero persistent server overhead.",
      "Features rich equipment progression, combo mechanics, custom player avatars, and cross-server tournament brackets.",
      "Fully integrated with Discord Interaction Webhooks and ephemeral ephemeral response queues."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Discord API", "V8 Isolates", "Webhooks"],
    featured: true
  },
  {
    id: "sgss-statistics",
    title: "SGSS Telemetry & Usage Dashboard",
    tagline: "Live real-time operational analytics for all SGSS products",
    category: "web-platforms",
    runtime: "Cloudflare Pages",
    invocations30d: "Live Engine",
    reliability: "100%",
    url: "https://sgss-statistics.pages.dev",
    githubUrl: "https://github.com/Walusimbi-Leon/sgss-statistics",
    summary: "Centralized executive intelligence platform tracking 480k+ edge requests, surge velocity, and infrastructure health across all SGSS services and Cloudflare accounts.",
    detailedNotes: [
      "Connects to Cloudflare GraphQL Analytics API for multi-account telemetry aggregation without manual data entry.",
      "Offers 24h, 7d, 30d, and all-time traffic analytics with interactive SVG trajectory curves and surge alerts.",
      "Dedicated Investor Mode presenting platform scale, unit economics, and instant executive briefing exports.",
      "Directly links to live services and donation workflows to power sustainable ecosystem growth."
    ],
    techStack: ["React 19", "Cloudflare Pages", "GraphQL Analytics", "Tailwind CSS", "TypeScript"],
    featured: true
  },
  {
    id: "bible-songs",
    title: "Bible Songs 24/7 Live Stream",
    tagline: "Continuous global web radio & uplifting scripture audio",
    category: "media-streaming",
    runtime: "Cloudflare Worker",
    invocations30d: "14,608",
    monthlyGrowth: "+536.1% this week",
    reliability: "100%",
    url: "https://bible-songs.walusimbileon1.workers.dev",
    githubUrl: "https://github.com/Walusimbi-Leon/biblesongs",
    summary: "Global 24/7 web radio player and audio streaming service delivering continuous hymns, scripture readings, and musical medleys with surging listener adoption.",
    detailedNotes: [
      "Experienced exponential +536.1% weekly traffic surge as community listenership expanded globally.",
      "Designed with an ultra-lightweight edge streaming buffer delivering uninterrupted audio on mobile and desktop browsers.",
      "Features modern track identification, scripture reference overlays, and instant 'Support Developer' integration.",
      "Optimized for low-bandwidth cellular environments across emerging markets."
    ],
    techStack: ["Cloudflare Workers", "Web Audio API", "Edge Caching", "Tailwind CSS", "HTML5 Audio"],
    featured: true
  },
  {
    id: "islamic-trivia",
    title: "Islamic Trivia Engine",
    tagline: "Comprehensive religious and historical quiz bot on Discord",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "90,116",
    reliability: "100%",
    url: "https://islamic-trivia.walusimbileon1.workers.dev",
    summary: "High-volume community education bot serving over 90,000 monthly challenges covering Islamic history, Quranic context, and scholarly milestones.",
    detailedNotes: [
      "Serves thousands of active Discord guilds with verified multi-lingual quiz questions and timed community battles.",
      "Maintains persistent server leaderboards and streak tracking without traditional database latency.",
      "Features interactive Discord button components for lightning-fast answer verification.",
      "Built with strict content moderation and scholarly cross-referencing."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Discord Interactions", "Edge Key-Value"],
    featured: true
  },
  {
    id: "english-trivia",
    title: "English Trivia Bot",
    tagline: "Dynamic vocabulary, idiom, and literary challenges",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "74,758",
    reliability: "100%",
    url: "https://english-trivia.walusimbileon1.workers.dev",
    summary: "Educational language battle bot engaging over 74,000 monthly interactions across educational servers, language learners, and general gaming communities.",
    detailedNotes: [
      "Extensive question bank covering etymology, advanced grammar, literature, and idiom interpretations.",
      "Adaptive difficulty scaling that adjusts to group performance in real-time.",
      "Zero-downtime serverless architecture handling high concurrency during peak server hours."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Discord API"],
    featured: false
  },
  {
    id: "trivia-rumble-elite",
    title: "Trivia Rumble Elite",
    tagline: "Tournament-grade multi-category competitive trivia",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "72,132",
    reliability: "100%",
    url: "https://trivia-rumble-elite.walusimbileon1.workers.dev",
    summary: "Fast-paced tournament trivia platform running high-speed survival rounds across science, pop culture, geography, and sports.",
    detailedNotes: [
      "72,000+ monthly invocations with rapid-fire countdown timers and sudden-death elimination rounds.",
      "Engineered for high-volume Discord events, community game nights, and clan competitions.",
      "Automated award badges and customizable round lengths."
    ],
    techStack: ["Cloudflare Workers", "Serverless Architecture", "Discord Interactions"],
    featured: false
  },
  {
    id: "bible-trivia",
    title: "Bible Trivia Bot",
    tagline: "Scripture mastery and biblical narrative challenges",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "60,234",
    reliability: "100%",
    url: "https://bible-trivia.walusimbileon1.workers.dev",
    summary: "Dedicated faith-based trivia bot with 60,000+ monthly invocations challenging players on Biblical books, prophets, parables, and apostolic journeys.",
    detailedNotes: [
      "Curated library of over 10,000 verified scripture questions with chapter/verse citation popups.",
      "Widely adopted by youth ministry Discord servers and Bible study communities worldwide.",
      "Stateless worker execution ensuring zero cold-start delay for players."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Discord API"],
    featured: false
  },
  {
    id: "donate-to-sgss",
    title: "Donate to SGSS Portal",
    tagline: "Automated payment and community support infrastructure",
    category: "web-platforms",
    runtime: "Cloudflare Pages",
    invocations30d: "Active Gateway",
    reliability: "100%",
    url: "https://donate-to-sgss.pages.dev",
    githubUrl: "https://github.com/sgss-5/donate-to-sgss",
    summary: "Dedicated institutional and community financial checkout platform supporting SGSS's free open infrastructure through Paystack with full 3D-Secure card verification.",
    detailedNotes: [
      "Engineered with client-side popups and redirect fallbacks for 100% successful 3DS bank OTP authorization.",
      "Enables supporters worldwide to contribute to serverless compute, Discord bot capacity, and community audio bandwidth.",
      "Includes real-time donation tier calculation, donor perks, and verified security headers."
    ],
    techStack: ["React 19", "Paystack API", "Cloudflare Pages", "Tailwind CSS"],
    featured: true
  },
  {
    id: "dice-arena",
    title: "Dice Arena",
    tagline: "Provably fair multiplayer dice battles and mini-games",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "12,681",
    reliability: "100%",
    url: "https://dice-arena.walusimbileon1.workers.dev",
    summary: "Virtual casino-style social dice rolling bot with cryptographic random number generation and interactive Discord button bets.",
    detailedNotes: [
      "Over 12,000 monthly games featuring Craps, High-Low, and duel roll-offs.",
      "Cryptographically secure randomness executed at the edge."
    ],
    techStack: ["Cloudflare Workers", "Web Crypto API", "Discord Webhooks"],
    featured: false
  },
  {
    id: "memory-cascade",
    title: "Memory Cascade",
    tagline: "Sequence memory and cognitive pattern challenge bot",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "8,681",
    reliability: "100%",
    url: "https://memory-cascade.walusimbileon1.workers.dev",
    summary: "Visual and sequence memory puzzle bot testing player reaction speed and cognitive recall under increasing difficulty.",
    detailedNotes: [
      "Dynamic emoji pattern generators with escalating round complexity.",
      "Sub-second state verification on Cloudflare Workers."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Discord API"],
    featured: false
  },
  {
    id: "brick-breaker",
    title: "Brick Breaker Edge",
    tagline: "Retro arcade paddle mechanics adapted for chat channels",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "2,176",
    reliability: "100%",
    url: "https://brick-breaker.walusimbileon1.workers.dev",
    summary: "Recreation of classic breakout arcade physics operating over asynchronous Discord interaction components.",
    detailedNotes: [
      "Novel approach to frame-by-frame text rendering and ball collision physics.",
      "Custom level generators and boss bricks."
    ],
    techStack: ["Cloudflare Workers", "Discord UI Elements"],
    featured: false
  },
  {
    id: "bluff-dice",
    title: "Bluff Dice",
    tagline: "Social deception and psychological bluffing engine",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "1,704",
    reliability: "100%",
    url: "https://bluff-dice.walusimbileon1.workers.dev",
    summary: "Liar's Dice multiplayer adaptation for Discord voice and text groups with hidden dice cups and challenge calls.",
    detailedNotes: [
      "Ephemeral message state keeping each player's roll private until reveals.",
      "Turn-based matchmaking queue supporting up to 8 concurrent players per table."
    ],
    techStack: ["Cloudflare Workers", "Discord Ephemeral Messages"],
    featured: false
  },
  {
    id: "quran-trivia",
    title: "Quran Trivia",
    tagline: "Focused Surah recitation and thematic study quizzes",
    category: "discord-games",
    runtime: "Cloudflare Worker",
    invocations30d: "1,509",
    reliability: "100%",
    url: "https://quran-trivia.walusimbileon1.workers.dev",
    summary: "Specialized quiz bot for Quranic studies, verse memorization checks, and Islamic historical chronology.",
    detailedNotes: [
      "Curated verse references with Arabic script and English contextual translations.",
      "Zero-latency edge delivery worldwide."
    ],
    techStack: ["Cloudflare Workers", "TypeScript", "Unicode Typography"],
    featured: false
  },
  {
    id: "gitalia-vault",
    title: "GitAlia Vault",
    tagline: "Unified token, credential, and multi-cloud secret manager",
    category: "infrastructure",
    runtime: "Cloudflare Pages",
    invocations30d: "Mission Critical",
    reliability: "100%",
    summary: "The internal nerve center of SGSS Org: securely holding, encrypting, and synchronizing GitHub PATs, Cloudflare API tokens, and deployment credentials across all organizational accounts.",
    detailedNotes: [
      "Guarantees strict credential segregation to prevent cross-account token pollution or accidental key overrides.",
      "Zero-knowledge client-side storage architecture with rapid multi-account switching.",
      "Powers autonomous CI/CD pipelines, repository syncing, and Cloudflare deployments."
    ],
    techStack: ["React 19", "Web Crypto API", "Cloudflare Pages", "TypeScript"],
    featured: true
  },
  {
    id: "edge-gateway",
    title: "SGSS Edge Routing Gateway",
    tagline: "Global reverse proxy and traffic management layer",
    category: "infrastructure",
    runtime: "Cloudflare Worker",
    invocations30d: "Fleet-wide",
    reliability: "100%",
    summary: "The backbone traffic router ensuring optimal sub-request caching, security header enforcement, and low-latency API delivery across 330+ Cloudflare edge nodes.",
    detailedNotes: [
      "Applies automated strict TLS, HSTS, CORS, and frame protection headers across all services.",
      "Performs edge routing and health checks to ensure 100.00% uptime for community players."
    ],
    techStack: ["Cloudflare Workers", "V8 Isolates", "HTTP/3 & QUIC"],
    featured: false
  }
];
