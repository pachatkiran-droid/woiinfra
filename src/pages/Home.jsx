import { ArrowDown, ArrowUpRight, Building2, Leaf, MapPin } from "lucide-react";

const metrics = [
  ["1.46B+", "Population"],
  ["US$4T+", "GDP"],
  ["970M+", "Internet Users"],
  ["26,000 Cr+", "UPI Transactions"],
  ["₹10,000 Cr", "Venture Capital Fund"],
  ["1.5L+ sq ft", "Startup Park"],
];

const lenses = [
  {
    number: "01",
    title: "By Geography",
    icon: MapPin,
    description:
      "Tailored venture ecosystems for Kerala, Karnataka, Tamil Nadu, Maharashtra, Gujarat, and North East India.",
    tags: ["Kerala", "Karnataka", "Tamil Nadu", "Maharashtra", "Gujarat", "North East India"],
  },
  {
    number: "02",
    title: "By Industry",
    icon: Building2,
    description:
      "Deep support across AI Innovation, Healthcare, Industry 4.0, Renewable Energy, Precision Farming, and Tourism.",
    tags: ["AI Innovation", "Healthcare", "Industry 4.0", "Renewable Energy", "Precision Farming", "Tourism"],
  },
  {
    number: "03",
    title: "By Social Cause",
    icon: Leaf,
    description:
      "Focused initiatives for Women Entrepreneurship, Youth Innovation, Rural Development, and Tribal Communities.",
    tags: ["Women Entrepreneurship", "Youth Innovation", "Rural Development", "Tribal Communities"],
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=90"
            alt="India's connected infrastructure and built environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#02050e]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-blue-400" />
              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">Woi Infra</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.05em] leading-[0.88]">
              Building India&apos;s Future
              <br />
              <span className="text-white/90 font-thin">One Ecosystem</span>
              <br />
              <span className="text-slate-400">at a Time.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/80 font-light">
              Connecting physical assets, capital, and innovation across every state, sector, and cause.
            </p>
            <div className="mt-10 flex flex-wrap items-center gap-4">
              <a href="#venture-studios" className="group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all">
                <span className="text-[10px] uppercase tracking-[0.2em]">Explore Venture Studios</span>
                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>
              <a href="#capital-fund" className="inline-flex items-center gap-3 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-slate-300 hover:text-white transition-colors">
                View Capital Fund
                <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
              </a>
            </div>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">Scroll to explore</div>
      </section>

      <section id="capital-fund" className="relative py-8 px-6 md:px-10 bg-[#061126] border-y border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
          {metrics.map(([value, label]) => (
            <div key={label} className="py-6 pr-5 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0">
              <div className="text-xl md:text-2xl font-light text-white">{value}</div>
              <div className="mt-2 text-[9px] uppercase tracking-[0.16em] text-slate-500">{label}</div>
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">01 — Our Mission</div>
            <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">01</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              Integrating India&apos;s
              <br />
              <span className="text-slate-500">growth ecosystem.</span>
            </h2>
            <p className="mt-10 max-w-3xl text-sm md:text-base text-slate-400 leading-8 font-light">
              India stands at one of the most defining moments in modern history. The challenge isn&apos;t simply building more infrastructure—it&apos;s integrating existing institutions, governments, industry leaders, universities, and capital to accelerate national growth.
            </p>
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Assets / Capital / Innovation</span>
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">One ecosystem at a time <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" /></span>
            </div>
          </div>
        </div>
      </section>

      <section id="venture-studios" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">02 — Venture Studio Model</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              Three lenses.
              <br />
              <span className="text-slate-500">One national vision.</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 border-t border-white/10">
            {lenses.map(({ number, title, icon: Icon, description, tags }) => (
              <article key={number} className="group p-7 md:p-9 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0">
                <div className="flex items-center justify-between">
                  <span className="text-[9px] text-slate-500 font-mono">{number}</span>
                  <Icon className="w-4 h-4 text-blue-400 opacity-70 group-hover:opacity-100 transition-opacity" strokeWidth={1.2} />
                </div>
                <h3 className="mt-20 text-2xl md:text-3xl font-light">{title}</h3>
                <p className="mt-4 text-sm text-slate-400 leading-7 font-light">{description}</p>
                <div className="mt-8 flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <span key={tag} className="px-3 py-2 rounded-full border border-white/10 bg-white/[0.03] text-[9px] uppercase tracking-[0.12em] text-slate-400">{tag}</span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
