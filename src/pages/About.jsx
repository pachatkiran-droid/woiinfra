import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Plus,
  Minus,
  MapPin,
  Building2,
  Compass,
  Layers3,
  Leaf,
  Users,
  Ruler,
  Menu,
  X,
} from "lucide-react";

export default function AboutUsPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activePrinciple, setActivePrinciple] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);

    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;

      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    window.addEventListener("mousemove", handleMouseMove, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const principles = [
    {
      number: "01",
      title: "Context",
      icon: Compass,
      description:
        "Every project begins with understanding its place. We study landscape, culture, climate and context before defining form.",
    },
    {
      number: "02",
      title: "Precision",
      icon: Ruler,
      description:
        "Architecture is built through decisions. We refine proportion, material, light and detail until every element feels intentional.",
    },
    {
      number: "03",
      title: "Purpose",
      icon: Building2,
      description:
        "We design spaces around the people who inhabit them — balancing beauty, function and long-term value.",
    },
    {
      number: "04",
      title: "Responsibility",
      icon: Leaf,
      description:
        "We believe architecture should respond intelligently to its environment and remain relevant long after completion.",
    },
  ];

  const services = [
    {
      number: "01",
      title: "Architecture",
      description:
        "Residential, commercial and institutional architecture shaped around people, place and purpose.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "02",
      title: "Interior Architecture",
      description:
        "Interior environments where material, light, proportion and movement work as one.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "03",
      title: "Master Planning",
      description:
        "Strategic planning that connects buildings, landscapes, circulation and communities.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1400&q=85",
    },
    {
      number: "04",
      title: "Urban Design",
      description:
        "Creating environments that improve how people experience and interact with the city.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1400&q=85",
    },
  ];

  const stats = [
    {
      value: "18+",
      label: "Years of Practice",
    },
    {
      value: "240+",
      label: "Projects Delivered",
    },
    {
      value: "12",
      label: "Cities Reached",
    },
    {
      value: "06",
      label: "Design Disciplines",
    },
  ];

  const team = [
    {
      name: "Ar. Daniel Morgan",
      role: "Founding Principal",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ar. Elena Hart",
      role: "Design Director",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=900&q=85",
    },
    {
      name: "Ar. Marcus Lee",
      role: "Project Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=85",
    },
  ];

  return (
    <div className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* =========================================================
          GLOBAL NAVIGATION
      ========================================================= */}

  


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* Architectural Image */}
        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=2200&q=90"
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.05) translate(
                ${mousePos.x * -8}px,
                ${mousePos.y * -8}px
              )`,
            }}
          />

          <div className="absolute inset-0 bg-[#02050e]/65" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/65 to-transparent" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/40" />

          {/* Subtle Grid */}
          <div
            className="absolute inset-0 opacity-[0.08]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.4) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.4) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />
        </div>

        {/* Blue Ambient Glow */}
        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px]"
          style={{
            transform: `translate(
              ${mousePos.x * 40}px,
              ${mousePos.y * 40}px
            )`,
            left: "35%",
            top: "20%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">

          <div className="max-w-4xl">

            <div className="flex items-center gap-3 mb-8">

              <span className="w-8 h-px bg-blue-400" />

              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">
                About the Studio
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.04em] leading-[0.9]">

              We shape

              <br />

              <span className="font-thin text-white/90">
                spaces
              </span>

              <br />

              <span className="text-slate-400">
                that endure.
              </span>

            </h1>

            <p className="mt-8 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/80 font-light">
              We are an architecture and design practice creating
              environments where context, material and human experience
              come together with clarity.
            </p>

            <div className="mt-10 flex items-center gap-4">

              <a
                href="#about"
                className="group flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all"
              >
                <span className="text-[10px] uppercase tracking-[0.2em]">
                  Discover the Studio
                </span>

                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />
              </a>

            </div>

          </div>

          {/* Side Coordinates */}

          <div className="hidden lg:block absolute right-10 bottom-20">

            <div className="flex flex-col items-end gap-2 text-[9px] text-slate-500 tracking-[0.25em] uppercase">

              <span>12° 58' 34.2" N</span>
              <span>77° 35' 48.1" E</span>

              <span className="w-16 h-px bg-white/20 my-2" />

              <span>Studio / 2026</span>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">
          Scroll to explore
        </div>

      </section>


      {/* =========================================================
          INTRODUCTION
      ========================================================= */}

      <section
        id="about"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">

            <div className="lg:col-span-4">

              <div className="sticky top-32">

                <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                  01 — The Studio
                </div>

                <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">
                  01
                </div>

              </div>

            </div>

            <div className="lg:col-span-8">

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">

                Architecture is not simply
                <span className="text-slate-500">
                  {" "}about buildings.
                </span>

              </h2>

              <div className="mt-10 grid md:grid-cols-2 gap-8">

                <p className="text-sm md:text-base text-slate-400 leading-8 font-light">
                  It is about the relationship between people and
                  place. Our work explores how thoughtful architecture
                  can influence the way people live, work, connect and
                  experience their surroundings.
                </p>

                <p className="text-sm md:text-base text-slate-400 leading-8 font-light">
                  From the first line on paper to the final detail on
                  site, we approach every project with curiosity,
                  discipline and an unwavering respect for context.
                </p>

              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Architecture / Interiors / Urbanism
                </span>

                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">
                  Established 2008
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </span>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          NUMBERS
      ========================================================= */}

      <section className="relative py-20 px-6 md:px-10 bg-[#061126] border-y border-white/10 overflow-hidden">

        <div
          className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[300px] rounded-full bg-blue-600/10 blur-[150px]"
        />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">

            {stats.map((stat, index) => (

              <div
                key={index}
                className="px-5 md:px-10 py-5"
              >

                <div className="text-4xl md:text-6xl font-thin tracking-tight">
                  {stat.value}
                </div>

                <div className="mt-3 text-[9px] md:text-[10px] text-slate-500 uppercase tracking-[0.22em]">
                  {stat.label}
                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          APPROACH
      ========================================================= */}

      <section
        id="approach"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="max-w-2xl mb-20">

            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
              02 — Our Approach
            </div>

            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
              Designed with
              <br />
              <span className="text-slate-500">
                intention.
              </span>
            </h2>

          </div>

          <div className="grid lg:grid-cols-12 gap-10">

            {/* Principle Navigation */}

            <div className="lg:col-span-5">

              <div className="border-t border-white/10">

                {principles.map((item, index) => {

                  const Icon = item.icon;
                  const active = activePrinciple === index;

                  return (

                    <button
                      key={item.number}
                      onMouseEnter={() => setActivePrinciple(index)}
                      onClick={() => setActivePrinciple(index)}
                      className={`w-full text-left py-7 border-b border-white/10 flex items-center justify-between transition-all duration-300 ${
                        active
                          ? "text-white"
                          : "text-slate-600 hover:text-slate-300"
                      }`}
                    >

                      <div className="flex items-center gap-5">

                        <span className="text-[9px] font-mono">
                          {item.number}
                        </span>

                        <span className="text-xl md:text-2xl font-light">
                          {item.title}
                        </span>

                      </div>

                      <Icon
                        className={`w-4 h-4 transition-all ${
                          active
                            ? "text-blue-400"
                            : "text-slate-700"
                        }`}
                        strokeWidth={1.2}
                      />

                    </button>

                  );

                })}

              </div>

            </div>


            {/* Principle Detail */}

            <div className="lg:col-span-7">

              <div className="relative min-h-[400px] rounded-[32px] overflow-hidden border border-white/10 bg-[#071225]">

                <div className="absolute inset-0">

                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1600&q=85"
                    alt="Architectural detail"
                    className="w-full h-full object-cover opacity-45"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/30 to-transparent" />

                </div>

                <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end">

                  <div className="text-[100px] md:text-[140px] font-thin leading-none text-white/[0.05] absolute top-6 right-8">
                    {principles[activePrinciple].number}
                  </div>

                  <div className="relative z-10">

                    <div className="w-10 h-10 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-6">

                      {React.createElement(
                        principles[activePrinciple].icon,
                        {
                          className: "w-4 h-4 text-blue-300",
                          strokeWidth: 1.2,
                        }
                      )}

                    </div>

                    <h3 className="text-3xl md:text-4xl font-light">
                      {principles[activePrinciple].title}
                    </h3>

                    <p className="mt-4 max-w-xl text-sm text-slate-300/80 leading-7 font-light">
                      {principles[activePrinciple].description}
                    </p>

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICES
      ========================================================= */}

      <section
        id="services"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

            <div>

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                03 — What We Do
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                Disciplines
                <br />
                <span className="text-slate-500">
                  without boundaries.
                </span>
              </h2>

            </div>

            <p className="max-w-sm text-xs md:text-sm text-slate-400 leading-7 font-light">
              A multidisciplinary approach allows us to move between
              scales, disciplines and ideas while maintaining one
              consistent design language.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {services.map((service) => (

              <div
                key={service.number}
                className="group relative min-h-[430px] md:min-h-[520px] rounded-[30px] overflow-hidden border border-white/10 cursor-pointer"
              >

                <img
                  src={service.image}
                  alt={service.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[20%] opacity-65 group-hover:scale-105 group-hover:opacity-80 transition-all duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/20 to-transparent" />

                <div className="absolute inset-0 bg-blue-900/10 group-hover:bg-blue-900/0 transition-all duration-500" />

                <div className="absolute top-7 left-7 right-7 flex items-center justify-between">

                  <span className="text-[9px] tracking-[0.25em] text-white/60">
                    {service.number}
                  </span>

                  <div className="w-9 h-9 rounded-full border border-white/20 bg-black/20 backdrop-blur-md flex items-center justify-center group-hover:bg-white group-hover:text-[#02050e] transition-all">

                    <ArrowUpRight
                      className="w-3.5 h-3.5"
                      strokeWidth={1.2}
                    />

                  </div>

                </div>

                <div className="absolute bottom-0 left-0 right-0 p-7 md:p-9">

                  <h3 className="text-2xl md:text-3xl font-light">
                    {service.title}
                  </h3>

                  <p className="max-w-md mt-3 text-xs md:text-sm text-slate-300/75 leading-6">
                    {service.description}
                  </p>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          MANIFESTO
      ========================================================= */}

      <section className="relative min-h-[80vh] flex items-center px-6 md:px-10 bg-[#02050e] overflow-hidden">

        <div
          className="absolute w-[700px] h-[700px] rounded-full bg-blue-600/[0.07] blur-[180px]"
          style={{
            left: "50%",
            top: "50%",
            transform: `translate(
              calc(-50% + ${mousePos.x * 50}px),
              calc(-50% + ${mousePos.y * 50}px)
            )`,
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-10">
            04 — Our Philosophy
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1.05]">

            Good architecture
            <br />

            <span className="text-slate-600">
              disappears into
            </span>

            <br />

            <span className="text-white">
              experience.
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-sm md:text-base text-slate-400 leading-8 font-light">
            We are interested in buildings that do more than occupy
            space. Buildings that create atmosphere, encourage
            connection and become part of the identity of a place.
          </p>

        </div>

      </section>


      {/* =========================================================
          TEAM
      ========================================================= */}

      <section
        id="team"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-10 mb-16">

            <div className="lg:col-span-7">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                05 — The Studio
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight">
                A collective of
                <br />
                <span className="text-slate-500">
                  curious minds.
                </span>
              </h2>

            </div>

            <div className="lg:col-span-5 flex items-end">

              <p className="text-sm text-slate-400 leading-7 font-light">
                Architects, designers, strategists and makers working
                together across disciplines to create meaningful
                environments.
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-3 gap-5">

            {team.map((person) => (

              <div
                key={person.name}
                className="group"
              >

                <div className="relative aspect-[4/5] rounded-[28px] overflow-hidden border border-white/10">

                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-transparent opacity-80" />

                  <div className="absolute bottom-5 left-5 right-5 flex justify-between items-end">

                    <div>

                      <h3 className="text-lg font-light">
                        {person.name}
                      </h3>

                      <p className="text-[9px] text-slate-400 uppercase tracking-[0.2em] mt-1">
                        {person.role}
                      </p>

                    </div>

                    <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center">

                      <ArrowUpRight
                        className="w-3.5 h-3.5"
                        strokeWidth={1.2}
                      />

                    </div>

                  </div>

                </div>

              </div>

            ))}

          </div>

        </div>

      </section>


      {/* =========================================================
          CTA
      ========================================================= */}

      <section
        id="contact"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="relative rounded-[38px] overflow-hidden border border-white/10 min-h-[480px] flex items-center">

            <img
              src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2000&q=90"
              alt="Architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#02050e]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/50 to-transparent" />

            <div className="relative z-10 p-8 md:p-16 max-w-3xl">

              <div className="text-[9px] text-blue-300 tracking-[0.3em] uppercase mb-6">
                Start a Conversation
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1]">
                Let's create
                <br />
                <span className="text-slate-400">
                  something lasting.
                </span>
              </h2>

              <p className="mt-6 text-sm text-slate-300/80 max-w-lg leading-7">
                Have a project, idea or place that needs to be
                reimagined? Tell us about it.
              </p>

              <button className="mt-9 group flex items-center gap-4 px-6 py-3.5 bg-white text-[#02050e] rounded-full hover:bg-blue-400 transition-all">

                <span className="text-[10px] uppercase tracking-[0.2em]">
                  Start a Project
                </span>

                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />

              </button>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FOOTER
      ========================================================= */}

      <footer className="bg-[#02050e] border-t border-white/10 px-6 md:px-10 py-10">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">

            <div>

              <div className="text-sm tracking-[0.25em] uppercase font-light">
                Atelier
              </div>

              <p className="text-[9px] text-slate-600 uppercase tracking-[0.25em] mt-2">
                Architecture & Design
              </p>

            </div>

            <div className="flex flex-wrap gap-6 text-[9px] uppercase tracking-[0.2em] text-slate-500">

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Instagram
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                LinkedIn
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Privacy
              </a>

              <a
                href="#"
                className="hover:text-white transition-colors"
              >
                Contact
              </a>

            </div>

          </div>

          <div className="mt-8 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between gap-3 text-[9px] text-slate-600 tracking-wider">

            <span>
              © 2026 Atelier Architecture Studio
            </span>

            <span>
              Built with intention.
            </span>

          </div>

        </div>

      </footer>

    </div>
  );
}