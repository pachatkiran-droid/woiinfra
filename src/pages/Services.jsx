import { useState } from "react";
import { 
  Building2, 
  Cpu, 
  HandCoins, 
  Lightbulb, 
  Users, 
  ArrowUpRight, 
  ShieldCheck, 
  Layers, 
  TrendingUp 
} from "lucide-react";

const stages = [
  {
    number: "01",
    tag: "Initiation",
    title: "Startup Café",
    icon: Users,
    function: "Casual networking, first contact, and founder mentorship",
    target: "Early ideators & mentors",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    tag: "Incubation",
    title: "Startup Park",
    icon: Building2,
    function: "Co-working environments, community building, and workspace hubs",
    target: "Early-to-growth teams",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    tag: "Execution",
    title: "Incubator Café",
    icon: Lightbulb,
    function: "Operational support, hands-on prototyping, and execution guidance",
    target: "Active builders",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    tag: "Liquidity",
    title: "Investor Café",
    icon: HandCoins,
    function: "Dedicated deal-flow rooms, private pitching, and angel matching",
    target: "HNIs, angels & VCs",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "05",
    tag: "Frontier",
    title: "Robotics & Quantum Hubs",
    icon: Cpu,
    function: "Hardware manufacturing facilities and frontier country-grade compute",
    target: "Deep tech & R&D",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
  },
];

const sectors = [
  "Mobility", "Health", "Agriculture", "Robotics", "Logistics", "Deep Compute"
];

export default function ServicesPage() {
  const [activeStage, setActiveStage] = useState(0);

  return (
    <main className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white antialiased">
      
      {/* Background Micro-Grid */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-20 z-10"
        style={{
          backgroundImage: `linear-gradient(to right, #1e293b 1px, transparent 1px), linear-gradient(to bottom, #1e293b 1px, transparent 1px)`,
          backgroundSize: '4rem 4rem'
        }}
      />

      {/* Hero Section: Centered & Architectural with YouTube Video BG */}
      <section className="relative min-h-[90vh] flex flex-col justify-between px-6 md:px-12 pt-24 pb-12 border-b border-white/10 overflow-hidden">
        
        {/* Background YouTube Video Wrapper */}
        <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0">
          <iframe
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[180vw] h-[180vh] min-w-[100%] min-h-[100%] object-cover scale-125 opacity-30"
            src="https://www.youtube-nocookie.com/embed/ahy5o5nT4oI?autoplay=1&mute=1&controls=0&loop=1&playlist=ahy5o5nT4oI&showinfo=0&rel=0&modestbranding=1&playsinline=1"
            title="Hero Background Video"
            allow="autoplay; encrypted-media"
          />
          {/* Overlay Gradients for Depth & Legibility */}
          <div className="absolute inset-0 bg-[#02050e]/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-7xl mx-auto w-full flex-1 flex flex-col justify-center items-center text-center">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-blue-500/20 bg-blue-500/5 backdrop-blur-md text-blue-300 text-[10px] tracking-[0.25em] uppercase mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-pulse" />
            Infrastructure Protocol 2026
          </div>

          <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight max-w-5xl leading-[1.05]">
            Physical & Digital Engine for <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Sovereign Scale</span>.
          </h1>

          <p className="mt-8 max-w-2xl text-slate-400 text-sm md:text-base font-light leading-relaxed">
            An interconnected continuum from early ideation spaces and prototyping labs to institutional capital deployment.
          </p>

          <div className="mt-10 flex flex-wrap gap-4 justify-center">
            <a 
              href="#ecosystem-matrix"
              className="px-6 py-3.5 rounded-none bg-blue-500 hover:bg-blue-400 text-[#02050e] font-medium text-xs tracking-[0.15em] uppercase transition-colors"
            >
              Examine Matrix
            </a>
            <a 
              href="#capital"
              className="px-6 py-3.5 rounded-none border border-white/15 bg-white/[0.02] hover:bg-white/[0.06] text-white text-xs tracking-[0.15em] uppercase transition-colors"
            >
              Capital Fund
            </a>
          </div>
        </div>

        {/* Global Metric Strips */}
        <div className="relative z-10 max-w-7xl mx-auto w-full grid grid-cols-2 md:grid-cols-4 gap-6 pt-12 border-t border-white/5 text-left">
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Deployment Span</div>
            <div className="text-xl font-light mt-1 text-slate-200">5 Distinct Hubs</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Fund Liquidity</div>
            <div className="text-xl font-light mt-1 text-slate-200">₹10,000 Cr Allocated</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Target Horizon</div>
            <div className="text-xl font-light mt-1 text-slate-200">2026 — 2030</div>
          </div>
          <div>
            <div className="text-[10px] uppercase tracking-widest text-slate-500">Sectors Covered</div>
            <div className="text-xl font-light mt-1 text-slate-200">DeepTech & R&D</div>
          </div>
        </div>
      </section>

      {/* Matrix Section: Split Terminal + Card Slider Mood */}
      <section id="ecosystem-matrix" className="relative py-28 px-6 md:px-12 bg-[#030914] border-b border-white/10 z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 pb-6 border-b border-white/10 gap-6">
            <div>
              <div className="text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-2">Stage Registry</div>
              <h2 className="text-3xl md:text-5xl font-light tracking-tight">The 5-Stage Network Grid</h2>
            </div>
            <p className="text-xs md:text-sm text-slate-400 font-light max-w-sm">
              Each unit operates as an autonomous operational node feeding into higher complexity stages.
            </p>
          </div>

          {/* Tabular Strip Controls */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-2 mb-8">
            {stages.map((st, idx) => (
              <button
                key={st.number}
                type="button"
                onClick={() => setActiveStage(idx)}
                className={`text-left p-4 border transition-all ${
                  activeStage === idx 
                    ? "border-blue-400/60 bg-blue-500/10 text-white" 
                    : "border-white/5 bg-white/[0.01] text-slate-500 hover:text-slate-300 hover:border-white/15"
                }`}
              >
                <div className="text-[10px] font-mono mb-2 flex justify-between">
                  <span>{st.number}</span>
                  <span className="uppercase text-[8px] tracking-widest text-blue-400">{st.tag}</span>
                </div>
                <div className="text-sm font-normal truncate">{st.title}</div>
              </button>
            ))}
          </div>

          {/* Interactive Dynamic Display Panel */}
          <div className="grid lg:grid-cols-12 border border-white/10 bg-[#02050e] overflow-hidden">
            
            {/* Visual Screen */}
            <div className="lg:col-span-7 relative min-h-[380px] lg:min-h-[480px]">
              <img 
                src={stages[activeStage].image} 
                alt={stages[activeStage].title}
                className="absolute inset-0 w-full h-full object-cover object-center grayscale contrast-125"
              />
              <div className="absolute inset-0 bg-blue-950/40 mix-blend-multiply" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-transparent" />
              
              <div className="absolute top-6 left-6 inline-flex items-center gap-2 px-3 py-1 bg-black/70 backdrop-blur-md border border-white/10 text-[9px] uppercase tracking-widest text-blue-300">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                Active Node: {stages[activeStage].number}
              </div>
            </div>

            {/* Spec Sheet Column */}
            <div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/10">
              <div>
                <div className="flex items-center gap-3 text-blue-400 mb-6">
                  {(() => {
                    const CurrentIcon = stages[activeStage].icon;
                    return <CurrentIcon className="w-5 h-5" />;
                  })()}
                  <span className="text-[10px] tracking-[0.2em] uppercase font-mono">{stages[activeStage].tag} Environment</span>
                </div>

                <h3 className="text-2xl md:text-3xl font-light">{stages[activeStage].title}</h3>

                <div className="mt-8 space-y-6">
                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Operational Mandate</span>
                    <p className="text-sm font-light text-slate-300 leading-relaxed">{stages[activeStage].function}</p>
                  </div>

                  <div>
                    <span className="text-[10px] uppercase tracking-widest text-slate-500 block mb-1">Target Cohort</span>
                    <div className="text-sm font-light text-blue-200">{stages[activeStage].target}</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/10 flex items-center justify-between">
                <span className="text-[10px] font-mono text-slate-500">INDEX: 0{activeStage + 1} / 05</span>
                <button 
                  type="button"
                  onClick={() => setActiveStage((activeStage + 1) % stages.length)}
                  className="inline-flex items-center gap-1.5 text-xs text-slate-300 hover:text-white uppercase tracking-wider transition-colors"
                >
                  Next Node <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </button>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Capital & Deep Tech Architecture */}
      <section id="capital" className="relative py-28 px-6 md:px-12 bg-[#02050e] z-10">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Header / Metric Display */}
            <div className="lg:col-span-5">
              <div className="text-[10px] tracking-[0.3em] uppercase text-blue-400 mb-3">Capital Allocation</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight">₹10,000 Cr</h2>
              <p className="text-slate-400 text-sm mt-3 font-light">Dedicated Growth Fund (2026–2030)</p>

              <div className="mt-8 p-6 border border-white/10 bg-white/[0.01]">
                <div className="flex items-center gap-3 text-white mb-2">
                  <ShieldCheck className="w-4 h-4 text-blue-400" />
                  <span className="text-xs uppercase tracking-widest">Sovereign Conviction</span>
                </div>
                <p className="text-xs text-slate-400 font-light leading-relaxed">
                  Eliminating early-stage capital scarcity by providing direct equity runways for deep-tech, compute-heavy, and high-capex domains.
                </p>
              </div>
            </div>

            {/* Targeted Deployment Grid */}
            <div className="lg:col-span-7">
              <div className="text-[10px] tracking-[0.2em] uppercase text-slate-500 mb-6">Target Sector Priority</div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {sectors.map((sec, i) => (
                  <div key={sec} className="p-4 border border-white/10 bg-[#061126]/40 flex flex-col justify-between h-28">
                    <span className="text-[9px] font-mono text-slate-600">SECT_0{i+1}</span>
                    <span className="text-sm font-light text-slate-200">{sec}</span>
                  </div>
                ))}
              </div>

              <div className="mt-8 grid sm:grid-cols-2 gap-4">
                <div className="p-5 border border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                    <Layers className="w-3.5 h-3.5 text-blue-400" />
                    <span>Hardware Validation</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Direct access to rapid assembly facilities, validation pipelines, and manufacturing units.
                  </p>
                </div>
                <div className="p-5 border border-white/5 bg-white/[0.01]">
                  <div className="flex items-center gap-2 text-xs text-slate-300 mb-2">
                    <TrendingUp className="w-3.5 h-3.5 text-blue-400" />
                    <span>Follow-On Syndication</span>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed font-light">
                    Guaranteed bridge rounds for teams hitting milestones within the ecosystem matrix.
                  </p>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* Architectural Technical Footer */}
      <footer className="border-t border-white/10 px-6 md:px-12 py-8 bg-[#010309] text-[10px] tracking-[0.2em] uppercase text-slate-500 z-10 relative">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-500" />
            <span>Infrastructure Ecosystem © 2026</span>
          </div>
          <div className="flex gap-8 text-slate-400 font-mono">
            <span>Lat: 12.9716° N</span>
            <span>Long: 77.5946° E</span>
          </div>
        </div>
      </footer>

    </main>
  );
}