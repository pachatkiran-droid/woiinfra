import { ArrowDown, ArrowUpRight, Building2, Cpu, HandCoins, Lightbulb, Rocket, Users } from "lucide-react";
import { useState } from "react";

const stages = [
  {
    number: "01",
    title: "Startup Café",
    icon: Users,
    function: "Casual networking, first contact, and founder mentorship",
    target: "Early ideators & mentors",
    image: "https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "02",
    title: "Startup Park",
    icon: Building2,
    function: "Co-working environments, community building, and workspace hubs",
    target: "Early-to-growth teams",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "03",
    title: "Incubator Café",
    icon: Lightbulb,
    function: "Operational support, hands-on prototyping, and execution guidance",
    target: "Active builders",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "04",
    title: "Investor Café",
    icon: HandCoins,
    function: "Dedicated deal-flow rooms, private pitching, and angel matching",
    target: "HNIs, angels & VCs",
    image: "https://images.unsplash.com/photo-1556761175-b413da4baf72?auto=format&fit=crop&w=1800&q=90",
  },
  {
    number: "05",
    title: "Robotics & Quantum Hubs",
    icon: Cpu,
    function: "Hardware manufacturing facilities and frontier country-grade compute",
    target: "Deep tech & R&D",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1800&q=90",
  },
];

export default function ServicesPage() {
  const [activeStage, setActiveStage] = useState(0);
  const stage = stages[activeStage];
  const StageIcon = stage.icon;

  return (
    <main className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&fit=crop&w=2200&q=90"
            alt="Teams building India's future infrastructure"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#02050e]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/75 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/40" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-blue-400" />
              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">Services & Ecosystem</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.05em] leading-[0.88]">
              Physical & Digital
              <br />
              <span className="text-white/90 font-thin">Infrastructure</span>
              <br />
              <span className="text-slate-400">for builders.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/80 font-light">
              A stage-by-stage ecosystem connecting first contact, operational support, frontier technology, and capital.
            </p>
            <a
              href="#infrastructure"
              className="mt-10 group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Explore the ecosystem</span>
              <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">Scroll to explore</div>
      </section>

      <section id="infrastructure" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-20">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">01 — Physical & Digital Infrastructure</div>
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              Every stage of the journey.
              <br />
              <span className="text-slate-500">One connected platform.</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-12 gap-10">
            <div className="lg:col-span-5">
              <div className="border-t border-white/10">
                {stages.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeStage === index;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onMouseEnter={() => setActiveStage(index)}
                      onFocus={() => setActiveStage(index)}
                      onClick={() => setActiveStage(index)}
                      className={`w-full text-left py-7 border-b border-white/10 flex items-center justify-between transition-all duration-300 ${
                        isActive ? "text-white" : "text-slate-600 hover:text-slate-300"
                      }`}
                    >
                      <div className="flex items-center gap-5">
                        <span className="text-[9px] font-mono">{item.number}</span>
                        <div>
                          <div className="text-xl md:text-2xl font-light">{item.title}</div>
                          <div className={`mt-1 text-[9px] uppercase tracking-[0.18em] ${isActive ? "text-blue-400" : "text-slate-700"}`}>
                            {item.target}
                          </div>
                        </div>
                      </div>
                      <Icon className={isActive ? "w-4 h-4 text-blue-400" : "w-4 h-4 text-slate-700"} strokeWidth={1.2} />
                    </button>
                  );
                })}
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative min-h-[540px] rounded-[32px] overflow-hidden border border-white/10">
                <img src={stage.image} alt={stage.title} className="absolute inset-0 w-full h-full object-cover transition-all duration-700" />
                <div className="absolute inset-0 bg-[#02050e]/50" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/20 to-transparent" />
                <div className="absolute top-8 right-8 text-[100px] md:text-[140px] font-thin leading-none text-white/[0.06]">{stage.number}</div>
                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">
                  <div className="w-11 h-11 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-7">
                    <StageIcon className="w-4 h-4 text-blue-300" strokeWidth={1.2} />
                  </div>
                  <h3 className="text-3xl md:text-5xl font-light">{stage.title}</h3>
                  <p className="mt-5 max-w-xl text-sm text-slate-300/80 leading-7 font-light">{stage.function}</p>
                  <div className="mt-7 inline-flex px-3 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[9px] uppercase tracking-[0.15em] text-slate-300">
                    {stage.target}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 overflow-x-auto border-t border-white/10">
            <table className="w-full min-w-[720px] text-left">
              <thead>
                <tr className="text-[9px] uppercase tracking-[0.2em] text-blue-400">
                  <th className="py-5 pr-6 font-normal">Facility Type</th>
                  <th className="py-5 pr-6 font-normal">Core Function</th>
                  <th className="py-5 font-normal">Target Group</th>
                </tr>
              </thead>
              <tbody>
                {stages.map((item) => (
                  <tr key={item.title} className="border-t border-white/10 text-xs md:text-sm text-slate-300">
                    <td className="py-5 pr-6 font-light text-white">{item.title}</td>
                    <td className="py-5 pr-6 leading-6 text-slate-400">{item.function}</td>
                    <td className="py-5 text-slate-400">{item.target}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section id="capital-fund" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">02 — Financial Backing</div>
            <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">₹</div>
          </div>
          <div className="lg:col-span-8">
            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              ₹10,000 Cr
              <br />
              <span className="text-slate-500">Capital Fund.</span>
            </h2>
            <div className="mt-10 grid md:grid-cols-2 gap-8">
              <div>
                <div className="text-[9px] text-blue-400 uppercase tracking-[0.25em]">Strategic Focus</div>
                <p className="mt-4 text-sm md:text-base text-slate-400 leading-8 font-light">
                  High-conviction backing for Mobility, Health, Agriculture, Robotics, and Logistics.
                </p>
              </div>
              <div>
                <div className="text-[9px] text-blue-400 uppercase tracking-[0.25em]">Phased Deployment (2026–2030)</div>
                <p className="mt-4 text-sm md:text-base text-slate-400 leading-8 font-light">
                  Direct capital deployment designed to eliminate the primary bottleneck for founders: reliable early-stage capital.
                </p>
              </div>
            </div>
            <div className="mt-16 pt-8 border-t border-white/10 flex items-center justify-between gap-6">
              <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">Capital / Conviction / Continuity</span>
              <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">Backing the builders <Rocket className="w-3.5 h-3.5 text-blue-400" /></span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
