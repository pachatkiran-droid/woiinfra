
import React, { useEffect, useState } from "react";
import {
  ArrowUpRight,
  ArrowDown,
  Compass,
  Ruler,
  Building2,
  Leaf,
  Layers3,
  Users,
  MapPin,
  Sparkles,
  Menu,
  X,
} from "lucide-react";

export default function ServicesPage() {
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeService, setActiveService] = useState(0);
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

  const services = [
    {
      number: "01",
      title: "Architecture",
      shortTitle: "Built for place.",
      icon: Building2,
      description:
        "We design residential, commercial and institutional architecture that responds to its surroundings, its people and its purpose.",
      detail:
        "From the first concept to the final construction detail, we develop architecture through careful study of proportion, material, light, movement and context.",
      image:
        "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1800&q=90",
      tags: [
        "Residential",
        "Commercial",
        "Institutional",
        "Hospitality",
      ],
    },
    {
      number: "02",
      title: "Interior Architecture",
      shortTitle: "Designed within.",
      icon: Layers3,
      description:
        "We create interiors where architecture, furniture, material, light and atmosphere come together as one coherent experience.",
      detail:
        "Every interior is developed as an extension of the architecture, creating spaces that feel intentional, tactile and connected to the people who use them.",
      image:
        "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1800&q=90",
      tags: [
        "Residential Interiors",
        "Hospitality",
        "Workspaces",
        "Retail",
      ],
    },
    {
      number: "03",
      title: "Master Planning",
      shortTitle: "Think beyond the building.",
      icon: Compass,
      description:
        "We shape larger environments by connecting architecture, landscape, movement, infrastructure and community.",
      detail:
        "Our planning approach considers how individual buildings work together to create a stronger, more connected and sustainable place.",
      image:
        "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=1800&q=90",
      tags: [
        "Site Planning",
        "Development",
        "Landscape",
        "Communities",
      ],
    },
    {
      number: "04",
      title: "Urban Design",
      shortTitle: "Shape the everyday.",
      icon: MapPin,
      description:
        "We design urban environments that improve how people move, meet, interact and experience the city.",
      detail:
        "From public spaces to mixed-use developments, we look at the city as a living system where architecture and human experience continuously interact.",
      image:
        "https://images.unsplash.com/photo-1518005020951-eccb494ad742?auto=format&fit=crop&w=1800&q=90",
      tags: [
        "Public Realm",
        "Mixed Use",
        "Urban Strategy",
        "Placemaking",
      ],
    },
  ];

  const process = [
    {
      number: "01",
      title: "Understand",
      icon: Compass,
      description:
        "We begin by understanding the brief, site, people, context and ambition behind the project.",
    },
    {
      number: "02",
      title: "Imagine",
      icon: Sparkles,
      description:
        "Ideas are developed through sketches, research, material studies and spatial exploration.",
    },
    {
      number: "03",
      title: "Develop",
      icon: Ruler,
      description:
        "The strongest idea is refined through design development, technical thinking and collaboration.",
    },
    {
      number: "04",
      title: "Realise",
      icon: Building2,
      description:
        "We carry the design forward with clarity, coordination and attention to the smallest detail.",
    },
  ];

  const capabilities = [
    "Concept Design",
    "Architectural Design",
    "Interior Architecture",
    "Master Planning",
    "Urban Design",
    "Landscape Integration",
    "3D Visualisation",
    "Design Development",
    "Technical Documentation",
    "Project Coordination",
    "Material Strategy",
    "Site Supervision",
  ];

  return (
    <div className="min-h-screen w-full bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

  


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1600607688969-a5bfcd646154?auto=format&fit=crop&w=2200&q=90"
            alt="Architecture"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.06) translate(
                ${mousePos.x * -8}px,
                ${mousePos.y * -8}px
              )`,
            }}
          />

          <div className="absolute inset-0 bg-[#02050e]/65" />

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

        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[160px]"
          style={{
            transform: `translate(
              ${mousePos.x * 40}px,
              ${mousePos.y * 40}px
            )`,
            left: "40%",
            top: "20%",
          }}
        />

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-28">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 mb-8">

              <span className="w-8 h-px bg-blue-400" />

              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">
                What We Do
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.05em] leading-[0.88]">

              Spaces

              <br />

              <span className="text-white/90 font-thin">
                designed
              </span>

              <br />

              <span className="text-slate-400">
                with purpose.
              </span>

            </h1>

            <p className="mt-9 max-w-xl text-sm md:text-base leading-relaxed text-slate-300/80 font-light">
              From individual spaces to entire environments, we design
              architecture that responds to people, place and time.
            </p>

            <div className="mt-10">

              <a
                href="#services"
                className="group inline-flex items-center gap-3 px-5 py-3 border border-white/20 rounded-full bg-white/[0.03] backdrop-blur-md hover:bg-white/10 transition-all"
              >

                <span className="text-[10px] uppercase tracking-[0.2em]">
                  Explore our services
                </span>

                <ArrowDown className="w-3.5 h-3.5 group-hover:translate-y-1 transition-transform" />

              </a>

            </div>

          </div>

          <div className="hidden lg:block absolute right-10 bottom-20">

            <div className="flex flex-col items-end gap-2 text-[9px] text-slate-500 tracking-[0.25em] uppercase">

              <span>12° 58' 34.2" N</span>
              <span>77° 35' 48.1" E</span>

              <span className="w-16 h-px bg-white/20 my-2" />

              <span>Services / 2026</span>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">
          Scroll to explore
        </div>

      </section>


      {/* =========================================================
          SERVICE INTRO
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
                  01 — Our Services
                </div>

                <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">
                  01
                </div>

              </div>

            </div>

            <div className="lg:col-span-8">

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">

                One design language.
                <br />

                <span className="text-slate-500">
                  Multiple scales.
                </span>

              </h2>

              <div className="mt-10 grid md:grid-cols-2 gap-8">

                <p className="text-sm md:text-base text-slate-400 leading-8 font-light">
                  Our practice moves seamlessly between architecture,
                  interiors, planning and urban environments. Regardless
                  of scale, the intention remains the same: create spaces
                  that feel considered, purposeful and enduring.
                </p>

                <p className="text-sm md:text-base text-slate-400 leading-8 font-light">
                  We bring together creative thinking, technical
                  precision and contextual understanding to turn ideas
                  into spaces that people can experience and remember.
                </p>

              </div>

              <div className="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                <span className="text-[10px] uppercase tracking-[0.25em] text-slate-500">
                  Architecture / Interiors / Urbanism
                </span>

                <span className="flex items-center gap-2 text-[10px] uppercase tracking-[0.2em] text-white">
                  Design with intention
                  <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                </span>

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

          <div className="max-w-2xl mb-20">

            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
              02 — Core Services
            </div>

            <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">

              From concept

              <br />

              <span className="text-slate-500">
                to experience.
              </span>

            </h2>

          </div>


          <div className="grid lg:grid-cols-12 gap-10">

            {/* SERVICE LIST */}

            <div className="lg:col-span-5">

              <div className="border-t border-white/10">

                {services.map((service, index) => {

                  const Icon = service.icon;
                  const active = activeService === index;

                  return (
                    <button
                      key={service.number}
                      onMouseEnter={() => setActiveService(index)}
                      onClick={() => setActiveService(index)}
                      className={`w-full text-left py-8 border-b border-white/10 flex items-center justify-between transition-all duration-300 ${
                        active
                          ? "text-white"
                          : "text-slate-600 hover:text-slate-300"
                      }`}
                    >

                      <div className="flex items-center gap-5">

                        <span className="text-[9px] font-mono">
                          {service.number}
                        </span>

                        <div>

                          <div className="text-xl md:text-2xl font-light">
                            {service.title}
                          </div>

                          <div
                            className={`mt-1 text-[9px] uppercase tracking-[0.18em] transition-all ${
                              active
                                ? "text-blue-400"
                                : "text-slate-700"
                            }`}
                          >
                            {service.shortTitle}
                          </div>

                        </div>

                      </div>

                      <Icon
                        className={`w-4 h-4 ${
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


            {/* SERVICE FEATURE */}

            <div className="lg:col-span-7">

              <div className="relative min-h-[540px] rounded-[32px] overflow-hidden border border-white/10">

                <img
                  src={services[activeService].image}
                  alt={services[activeService].title}
                  className="absolute inset-0 w-full h-full object-cover transition-all duration-700"
                />

                <div className="absolute inset-0 bg-[#02050e]/40" />

                <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/20 to-transparent" />

                <div className="absolute top-8 right-8 text-[100px] md:text-[140px] font-thin leading-none text-white/[0.06]">
                  {services[activeService].number}
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 md:p-12">

                  <div className="w-11 h-11 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center mb-7">

                    {React.createElement(
                      services[activeService].icon,
                      {
                        className: "w-4 h-4 text-blue-300",
                        strokeWidth: 1.2,
                      }
                    )}

                  </div>

                  <h3 className="text-3xl md:text-5xl font-light">
                    {services[activeService].title}
                  </h3>

                  <p className="mt-5 max-w-xl text-sm text-slate-300/80 leading-7 font-light">
                    {services[activeService].detail}
                  </p>

                  <div className="mt-7 flex flex-wrap gap-2">

                    {services[activeService].tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-2 rounded-full border border-white/10 bg-black/20 backdrop-blur-md text-[9px] uppercase tracking-[0.15em] text-slate-300"
                      >
                        {tag}
                      </span>
                    ))}

                  </div>

                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          SERVICE GRID
      ========================================================= */}

      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">

        <div className="max-w-7xl mx-auto">

          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">

            <div>

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                03 — Scope of Work
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight">

                Every detail

                <br />

                <span className="text-slate-500">
                  has a role.
                </span>

              </h2>

            </div>

            <p className="max-w-sm text-xs md:text-sm text-slate-400 leading-7 font-light">
              Our services are designed to work together, creating a
              continuous design process from the first idea through
              completion.
            </p>

          </div>


          <div className="grid md:grid-cols-2 gap-5">

            {services.map((service, index) => {

              const Icon = service.icon;

              return (
                <div
                  key={service.number}
                  onMouseEnter={() => setActiveService(index)}
                  className="group relative min-h-[380px] rounded-[30px] overflow-hidden border border-white/10 cursor-pointer"
                >

                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-45 group-hover:opacity-65 group-hover:scale-105 transition-all duration-700"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/40 to-transparent" />

                  <div className="absolute top-7 left-7 right-7 flex items-center justify-between">

                    <span className="text-[9px] tracking-[0.25em] text-white/50">
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

                    <div className="flex items-center gap-3 mb-5">

                      <Icon
                        className="w-4 h-4 text-blue-300"
                        strokeWidth={1.2}
                      />

                      <span className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                        Atelier Discipline
                      </span>

                    </div>

                    <h3 className="text-2xl md:text-3xl font-light">
                      {service.title}
                    </h3>

                    <p className="max-w-md mt-3 text-xs md:text-sm text-slate-300/70 leading-6">
                      {service.description}
                    </p>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          PROCESS
      ========================================================= */}

      <section
        id="process"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-12 mb-20">

            <div className="lg:col-span-7">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                04 — The Process
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">

                A clear path

                <br />

                <span className="text-slate-500">
                  from idea to reality.
                </span>

              </h2>

            </div>

            <div className="lg:col-span-5 flex items-end">

              <p className="text-sm text-slate-400 leading-7 font-light">
                Good design requires both imagination and discipline.
                Our process creates space for ideas while giving every
                project a clear direction.
              </p>

            </div>

          </div>


          <div className="grid md:grid-cols-2 lg:grid-cols-4 border-t border-white/10">

            {process.map((item) => {

              const Icon = item.icon;

              return (
                <div
                  key={item.number}
                  className="group p-7 md:p-8 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0"
                >

                  <div className="flex items-center justify-between">

                    <span className="text-[9px] text-slate-500 font-mono">
                      {item.number}
                    </span>

                    <Icon
                      className="w-4 h-4 text-blue-400 opacity-60 group-hover:opacity-100 transition-opacity"
                      strokeWidth={1.2}
                    />

                  </div>

                  <h3 className="mt-20 text-2xl font-light">
                    {item.title}
                  </h3>

                  <p className="mt-4 text-xs text-slate-400 leading-6 font-light">
                    {item.description}
                  </p>

                  <div className="mt-8 w-8 h-px bg-white/10 group-hover:w-16 group-hover:bg-blue-400 transition-all duration-500" />

                </div>
              );

            })}

          </div>

        </div>

      </section>


      {/* =========================================================
          CAPABILITIES
      ========================================================= */}

      <section
        id="capabilities"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e] overflow-hidden"
      >

        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/[0.06] blur-[170px]"
          style={{
            left: "60%",
            top: "30%",
            transform: `translate(
              ${mousePos.x * 40}px,
              ${mousePos.y * 40}px
            )`,
          }}
        />

        <div className="max-w-7xl mx-auto relative z-10">

          <div className="grid lg:grid-cols-12 gap-12">

            <div className="lg:col-span-5">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                05 — Capabilities
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">

                Everything

                <br />

                <span className="text-slate-500">
                  under one roof.
                </span>

              </h2>

              <p className="mt-8 max-w-md text-sm text-slate-400 leading-7 font-light">
                A multidisciplinary team allows us to maintain
                continuity from the earliest concept through the final
                stage of a project.
              </p>

            </div>


            <div className="lg:col-span-7">

              <div className="grid sm:grid-cols-2 border-t border-white/10">

                {capabilities.map((capability, index) => (

                  <div
                    key={capability}
                    className="group flex items-center justify-between py-6 border-b border-white/10 sm:even:border-l sm:even:pl-8"
                  >

                    <div className="flex items-center gap-4">

                      <span className="text-[9px] text-slate-600 font-mono">
                        {String(index + 1).padStart(2, "0")}
                      </span>

                      <span className="text-sm font-light text-slate-300 group-hover:text-white transition-colors">
                        {capability}
                      </span>

                    </div>

                    <ArrowUpRight
                      className="w-3.5 h-3.5 text-slate-700 group-hover:text-blue-400 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                      strokeWidth={1.2}
                    />

                  </div>

                ))}

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          PHILOSOPHY
      ========================================================= */}

      <section className="relative min-h-[75vh] flex items-center px-6 md:px-10 bg-[#061126] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.05]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="max-w-6xl mx-auto relative z-10 text-center">

          <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-10">
            06 — The Principle
          </div>

          <h2 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-light tracking-[-0.04em] leading-[1.05]">

            We don't design

            <br />

            <span className="text-slate-600">
              for the moment.
            </span>

            <br />

            <span className="text-white">
              We design for time.
            </span>

          </h2>

          <p className="max-w-2xl mx-auto mt-10 text-sm md:text-base text-slate-400 leading-8 font-light">
            Because the best spaces do not simply look good when they
            are finished. They become better through use, memory and
            time.
          </p>

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

          <div className="relative rounded-[38px] overflow-hidden border border-white/10 min-h-[500px] flex items-center">

            <img
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2200&q=90"
              alt="Interior architecture"
              className="absolute inset-0 w-full h-full object-cover"
            />

            <div className="absolute inset-0 bg-[#02050e]/70" />

            <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/60 to-transparent" />

            <div className="relative z-10 p-8 md:p-16 max-w-3xl">

              <div className="text-[9px] text-blue-300 tracking-[0.3em] uppercase mb-6">
                Start a Conversation
              </div>

              <h2 className="text-4xl md:text-6xl lg:text-7xl font-light tracking-tight leading-[1]">

                Have a space

                <br />

                <span className="text-slate-400">
                  in mind?
                </span>

              </h2>

              <p className="mt-6 text-sm text-slate-300/80 max-w-lg leading-7">
                Tell us about your project, your place and what you
                want it to become. We would love to hear the story
                behind it.
              </p>

              <a
                href="mailto:hello@atelier.com"
                className="mt-9 inline-flex group items-center gap-4 px-6 py-3.5 bg-white text-[#02050e] rounded-full hover:bg-blue-400 transition-all"
              >

                <span className="text-[10px] uppercase tracking-[0.2em]">
                  Start a Project
                </span>

                <ArrowUpRight
                  className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                />

              </a>

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

              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>

              <a href="#" className="hover:text-white transition-colors">
                LinkedIn
              </a>

              <a href="#" className="hover:text-white transition-colors">
                Privacy
              </a>

              <a href="#contact" className="hover:text-white transition-colors">
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
