import { ArrowDown, ArrowUpRight, Building2, Leaf, Landmark, Sparkles } from "lucide-react";
import { useState } from "react";

const milestones = [
  {
    year: "1947",
    title: "Nation Building",
    icon: Landmark,
    description:
      "Establishing fundamental sovereignty, institutions, and basic production capacity.",
  },
  {
    year: "1991",
    title: "Economic Liberalisation",
    icon: Building2,
    description:
      "Opening global markets, modernizing trade, and expanding private enterprise.",
  },
  {
    year: "2015",
    title: "Digital Transformation",
    icon: Sparkles,
    description:
      "Deploying digital public infrastructure and mobile connectivity at national scale.",
  },
  {
    year: "2025",
    title: "Global Growth Engine",
    icon: Leaf,
    description:
      "Leading emerging economies through renewable power, manufacturing, and AI.",
  },
  {
    year: "2036",
    title: "The Next Chapter",
    icon: ArrowUpRight,
    description:
      "Translating scale, demographic dividend, and talent into enduring global supremacy.",
  },
];

export default function AboutUsPage() {
  const [activeMilestone, setActiveMilestone] = useState(0);
  const active = milestones[activeMilestone];
  const ActiveIcon = active.icon;

  return (
    <main className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=2200&q=90"
            alt="India's connected infrastructure and built environment"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#02050e]/70" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/70 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/40" />
          <div
            className="absolute inset-0 opacity-[0.07]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-blue-400" />
              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">About Woi Infra</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.05em] leading-[0.88]">
              From Nation Building
              <br />
              <span className="text-white/90 font-thin">to Global</span>
              <br />
              <span className="text-slate-400">Leadership.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/80 font-light">
              India&apos;s journey from foundational nation building to becoming a global growth engine.
            </p>
            <a
              href="#timeline"
              className="mt-10 group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Explore the timeline</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">Scroll to explore</div>
      </section>

      <section id="timeline" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">01 — Timeline</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              Five milestones.
              <br />
              <span className="text-slate-500">One accelerating nation.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="border-t border-white/10">
                {milestones.map((milestone, index) => {
                  const Icon = milestone.icon;
                  const isActive = activeMilestone === index;

                  return (
                    <button
                      key={milestone.year}
                      type="button"
                      onMouseEnter={() => setActiveMilestone(index)}
                      onFocus={() => setActiveMilestone(index)}
                      onClick={() => setActiveMilestone(index)}
                      className={`w-full text-left py-7 border-b border-white/10 flex items-center justify-between transition-all duration-300 ${
                        isActive ? "text-white" : "text-slate-600 hover:text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[10px] font-mono">{milestone.year}</span>
                        <span className="text-xl md:text-2xl font-light">{milestone.title}</span>
                      </div>
                      <Icon className={isActive ? "w-4 h-4 text-blue-400" : "w-4 h-4 text-slate-700"} strokeWidth={1.2} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative min-h-[400px] rounded-[32px] overflow-hidden border border-white/10 bg-[#071225]">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#071225] to-[#02050e]" />
                <div className="absolute top-6 right-8 text-[100px] md:text-[140px] font-thin leading-none text-white/[0.05]">{active.year}</div>
                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">
                  <div className="relative z-10">
                    <div className="w-10 h-10 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-6">
                      <ActiveIcon className="w-4 h-4 text-blue-300" strokeWidth={1.2} />
                    </div>
                    <div className="text-[10px] text-blue-300 uppercase tracking-[0.25em]">{active.year}</div>
                    <h3 className="mt-3 text-3xl md:text-4xl font-light">{active.title}</h3>
                    <p className="mt-4 max-w-xl text-sm text-slate-300/80 leading-7 font-light">{active.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="thesis" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">02 — Our Thesis</div>
            <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">02</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">
              Connecting what
              <br />
              <span className="text-slate-500">already exists.</span>
            </h2>
            <p className="mt-10 max-w-3xl text-sm md:text-base text-slate-400 leading-8 font-light">
              Physical assets like roads, ports, and rail networks are expanding at record pace. However, building assets is easier than connecting ecosystems. WOI India acts as the integration layer—linking public infrastructure with private innovation, research hubs, and early-stage capital.
            </p>
            <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Infrastructure / Innovation / Capital</span>
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">The integration layer <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" /></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
