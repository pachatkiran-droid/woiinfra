import { ArrowDown, ArrowUpRight, Globe2, Network, Sparkles } from "lucide-react";

const metrics = [
  ["1.46B+", "Population"],
  ["28 + 8", "States & Union Territories"],
  ["US$4T+", "GDP"],
  ["970M+", "Internet Users"],
  ["26,000 Cr+", "UPI Transactions"],
];

const nodes = [
  "Population (Demographic Dividend)",
  "States & Union Territories (Decentralized Growth)",
  "UPI Transactions (Fintech Scale)",
  "GCCs (Global Capability Centres)",
  "Renewable Energy",
  "Merchandise Exports",
  "GDP (Macroeconomic Expansion)",
  "Internet Users (Digital Penetration)",
  "Startup Ecosystem",
  "National Highways (Physical Connectivity)",
  "Rail Network",
  "Digital India (Digital Public Infrastructure)",
];

const phases = [
  ["1947", "Nation Building", "Foundational infrastructure, industrial institutions, constitutional framework, state building."],
  ["1991", "Economic Liberalisation", "Market deregulation, global trade opening, private sector growth, modern financial systems."],
  ["2015", "Digital Transformation", "Digital public infrastructure (UPI, Aadhaar, India Stack), hyper-connected telecom, digital governance, fintech explosion."],
  ["2025", "Global Growth Engine", "Hub of manufacturing, GCC expansion, global AI & deep tech contributions, massive renewable energy capacity."],
  ["2036", "The Next Chapter", "Next-generation industrial regions, sovereign compute/quantum infrastructure, full ecosystem integration, global economic & technological leadership."],
];

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=90" alt="Ultra-modern urban skyline with futuristic architectural hubs" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-[#02050e]/72" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/40" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8"><span className="w-8 h-px bg-blue-400" /><span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">Woi Infra</span></div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.05em] leading-[0.88]">
              Building India&apos;s Future
              <br /><span className="text-white/90 font-thin">One Ecosystem</span>
              <br /><span className="text-slate-400">at a Time.</span>
            </h1>
            <p className="mt-9 max-w-2xl text-sm md:text-base leading-8 text-slate-300/80 font-light">
              India&apos;s next decade will not be shaped by a single industry, technology or policy. It will be defined by how effectively the nation strengthens the ecosystems behind its most important priorities. Agriculture, manufacturing, healthcare, clean energy, water, advanced technologies and many more will all play a vital role in India&apos;s journey towards becoming a globally competitive and inclusive economy. Each presents a unique opportunity. Each faces unique challenges. And each requires stronger collaboration across government, industry, academia, research, capital and communities.
            </p>
            <blockquote className="mt-8 max-w-xl border-l border-blue-400 pl-5 text-lg md:text-xl font-light italic text-white/90">&quot;The future of India will be built one ecosystem at a time.&quot;</blockquote>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#ecosystems" className="group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all"><span className="text-[10px] uppercase tracking-[0.2em]">Explore Venture Studios</span><ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" /></a>
              <a href="#trajectory" className="inline-flex items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors">View Capital Fund<ArrowUpRight className="w-3.5 h-3.5 text-blue-400" /></a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">Scroll to explore</div>
      </section>

      <section id="ecosystems" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">01 — Macro Indicators</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">India By<br /><span className="text-slate-500">The Numbers.</span></h2>
            <div className="relative mt-12 min-h-[300px] rounded-[30px] overflow-hidden border border-white/10">
              <img src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&fit=crop&w=1400&q=90" alt="Connected map nodes representing India's growth ecosystem" className="absolute inset-0 w-full h-full object-cover opacity-50" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/30 to-transparent" />
              <div className="absolute bottom-6 left-6 flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-blue-300"><Globe2 className="w-4 h-4" strokeWidth={1.2} />Growth ecosystem nodes</div>
            </div>
          </div>
          <div className="lg:col-span-7">
            <div className="grid grid-cols-2 md:grid-cols-3 border-t border-white/10">
              {metrics.map(([value, label]) => <div key={label} className="py-7 pr-5 border-b border-r border-white/10"><div className="text-2xl md:text-4xl font-thin">{value}</div><div className="mt-3 text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</div></div>)}
            </div>
            <div className="mt-12"><div className="text-[9px] text-blue-400 uppercase tracking-[0.25em] mb-6">Pillars of India&apos;s Growth Ecosystem</div><div className="grid sm:grid-cols-2 gap-2">{nodes.map((node, index) => <div key={node} className="flex items-start gap-3 p-3 border border-white/10 bg-white/[0.02] text-xs text-slate-300"><span className="text-[9px] text-blue-400 font-mono">{String(index + 1).padStart(2, "0")}</span><span>{node}</span></div>)}</div></div>
            <p className="mt-10 pt-6 border-t border-white/10 text-[9px] text-slate-500 leading-6 uppercase tracking-[0.08em]">Sources: Economic Survey of India 2025–26 • IMF World Economic Outlook (2025) • NPCI - UPI Product Statistics 2026–27</p>
          </div>
        </div>
      </section>

      <section id="trajectory" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e] overflow-hidden">
        <div className="absolute right-0 top-0 w-1/2 h-full opacity-20"><img src="https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=1600&q=85" alt="Abstract continuous growth trajectory" className="w-full h-full object-cover" /><div className="absolute inset-0 bg-gradient-to-r from-[#02050e] to-transparent" /></div>
        <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-5"><div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">02 — Macro Overview</div><h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">The Evolution<br /><span className="text-slate-500">of Indian Growth.</span></h2><p className="mt-10 text-sm md:text-base text-slate-400 leading-8 font-light">India stands at one of the most defining moments in its modern history. Home to the world&apos;s largest population, one of the youngest workforces, a rapidly expanding economy, and globally recognised digital public infrastructure, the country is reshaping its role on the world stage. From manufacturing and artificial intelligence to space, infrastructure and entrepreneurship, India is building momentum across multiple fronts. The next decade will not simply determine how fast India grows. It will determine how India transforms its scale, talent and ambition into lasting global leadership.</p></div>
          <div className="lg:col-span-7"><div className="mb-8 text-[10px] uppercase tracking-[0.2em] text-blue-400">From Nation Building to Global Leadership</div><div className="border-t border-white/10">{phases.map(([year, title, description], index) => <article key={year} className="py-7 border-b border-white/10 grid grid-cols-[72px_1fr] md:grid-cols-[100px_1fr_32px] gap-5 items-start"><span className="text-2xl md:text-4xl font-thin text-blue-400">{year}</span><div><h3 className="text-xl md:text-2xl font-light text-slate-200">{title}</h3><p className="mt-2 text-xs md:text-sm leading-6 text-slate-400">{description}</p></div><span className="hidden md:block text-[9px] text-slate-600 font-mono">0{index + 1}</span></article>)}</div><div className="mt-10 flex items-center gap-3 text-[10px] uppercase tracking-[0.2em] text-slate-500"><Sparkles className="w-4 h-4 text-blue-400" strokeWidth={1.2} />Scale, talent, and ambition connected</div></div>
        </div>
      </section>
    </main>
  );
}
