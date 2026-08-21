import React, { useEffect, useState } from "react";
import {
  ArrowDown,
  ArrowUpRight,
  Building2,
  Check,
  Compass,
  Mail,
  MapPin,
  Menu,
  Phone,
  Send,
  X,
} from "lucide-react";

export default function ContactPage() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [mobileMenu, setMobileMenu] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    message: "",
  });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setMousePos({
        x: (event.clientX / width - 0.5) * 2,
        y: (event.clientY / height - 0.5) * 2,
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 4000);
  };

  return (
    <main className="min-h-screen bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">

      {/* =========================================================
          NAVIGATION
      ========================================================= */}

 


      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-screen flex items-center overflow-hidden">

        {/* BACKGROUND */}

        <div className="absolute inset-0">

          <img
            src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=2200&q=90"
            alt="Modern architecture"
            className="absolute inset-0 w-full h-full object-cover"
            style={{
              transform: `scale(1.06) translate(${mousePos.x * -7}px, ${
                mousePos.y * -7
              }px)`,
            }}
          />

          <div className="absolute inset-0 bg-[#02050e]/75" />

          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/75 to-[#02050e]/20" />

          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/50" />

          {/* GRID */}

          <div
            className="absolute inset-0 opacity-[0.06]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
              backgroundSize: "80px 80px",
            }}
          />

        </div>

        {/* GLOW */}

        <div
          className="absolute w-[600px] h-[600px] rounded-full bg-blue-600/10 blur-[170px]"
          style={{
            left: "45%",
            top: "20%",
            transform: `translate(${mousePos.x * 35}px, ${
              mousePos.y * 35
            }px)`,
          }}
        />

        {/* CONTENT */}

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32">

          <div className="max-w-5xl">

            <div className="flex items-center gap-3 mb-8">

              <span className="w-8 h-px bg-blue-400" />

              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">
                Start a Conversation
              </span>

            </div>

            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.06em] leading-[0.88]">

              Let's create

              <br />

              <span className="text-white/90">
                something
              </span>

              <br />

              <span className="text-slate-500">
                meaningful.
              </span>

            </h1>

            <p className="mt-9 max-w-xl text-sm md:text-base text-slate-300/80 leading-8 font-light">
              Whether you are planning a new home, a commercial
              environment or a larger development, tell us where you
              are starting and where you want to go.
            </p>

            <a
              href="#contact-form"
              className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md hover:bg-white/10 transition-all"
            >

              <span className="text-[10px] uppercase tracking-[0.2em]">
                Begin your project
              </span>

              <ArrowDown
                className="w-3.5 h-3.5"
                strokeWidth={1.2}
              />

            </a>

          </div>

          {/* COORDINATES */}

          <div className="hidden lg:block absolute right-10 bottom-20">

            <div className="flex flex-col items-end gap-2 text-[9px] text-slate-500 tracking-[0.25em] uppercase">

              <span>12° 58' 34.2" N</span>

              <span>77° 35' 48.1" E</span>

              <span className="w-16 h-px bg-white/20 my-2" />

              <span>Contact / 2026</span>

            </div>

          </div>

        </div>

        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">
          Scroll to connect
        </div>

      </section>


      {/* =========================================================
          CONTACT INTRO
      ========================================================= */}

      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                01 — Contact
              </div>

              <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">
                01
              </div>

            </div>

            {/* RIGHT */}

            <div className="lg:col-span-8">

              <h2 className="text-3xl md:text-5xl lg:text-6xl font-light tracking-tight leading-[1.05]">

                Every project

                <br />

                <span className="text-slate-500">
                  starts with a conversation.
                </span>

              </h2>

              <p className="mt-9 max-w-2xl text-sm md:text-base text-slate-400 leading-8 font-light">
                We believe the first conversation is as important as
                the first sketch. Share your ideas, ambitions, site
                information or simply tell us what you have in mind.
                We will take it from there.
              </p>

              <div className="mt-14 grid sm:grid-cols-2 gap-5">

                {/* EMAIL */}

                <a
                  href="mailto:hello@atelier.com"
                  className="group p-6 border border-white/10 rounded-2xl hover:border-blue-400/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >

                  <Mail
                    className="w-5 h-5 text-blue-400"
                    strokeWidth={1.2}
                  />

                  <div className="mt-8 text-[9px] uppercase tracking-[0.25em] text-slate-500">
                    Email
                  </div>

                  <div className="mt-2 text-sm text-white">
                    hello@atelier.com
                  </div>

                  <ArrowUpRight className="mt-6 w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />

                </a>

                {/* PHONE */}

                <a
                  href="tel:+919876543210"
                  className="group p-6 border border-white/10 rounded-2xl hover:border-blue-400/30 bg-white/[0.02] hover:bg-white/[0.04] transition-all"
                >

                  <Phone
                    className="w-5 h-5 text-blue-400"
                    strokeWidth={1.2}
                  />

                  <div className="mt-8 text-[9px] uppercase tracking-[0.25em] text-slate-500">
                    Phone
                  </div>

                  <div className="mt-2 text-sm text-white">
                    +91 98765 43210
                  </div>

                  <ArrowUpRight className="mt-6 w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" />

                </a>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          CONTACT FORM
      ========================================================= */}

      <section
        id="contact-form"
        className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]"
      >

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-14 lg:gap-20">

            {/* LEFT */}

            <div className="lg:col-span-4">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                02 — Your Project
              </div>

              <h2 className="text-4xl md:text-5xl font-light tracking-tight leading-tight">

                Tell us

                <br />

                <span className="text-slate-500">
                  about it.
                </span>

              </h2>

              <p className="mt-7 text-sm text-slate-400 leading-7 font-light">
                A few details are enough to begin. You don't need to
                have everything figured out before reaching out.
              </p>

              <div className="mt-12 space-y-5">

                <div className="flex gap-4">

                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Compass
                      className="w-4 h-4 text-blue-400"
                      strokeWidth={1.2}
                    />
                  </div>

                  <div>
                    <div className="text-xs text-white">
                      New projects
                    </div>

                    <div className="mt-1 text-[11px] text-slate-500">
                      Residential, commercial & development
                    </div>
                  </div>

                </div>

                <div className="flex gap-4">

                  <div className="w-9 h-9 rounded-full border border-white/10 flex items-center justify-center shrink-0">
                    <Building2
                      className="w-4 h-4 text-blue-400"
                      strokeWidth={1.2}
                    />
                  </div>

                  <div>
                    <div className="text-xs text-white">
                      Existing spaces
                    </div>

                    <div className="mt-1 text-[11px] text-slate-500">
                      Renovation, interiors & transformation
                    </div>
                  </div>

                </div>

              </div>

            </div>


            {/* FORM */}

            <div className="lg:col-span-8">

              {submitted ? (

                <div className="min-h-[550px] border border-white/10 rounded-[30px] flex flex-col items-center justify-center text-center p-10">

                  <div className="w-16 h-16 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">

                    <Check
                      className="w-6 h-6 text-blue-300"
                      strokeWidth={1.2}
                    />

                  </div>

                  <h3 className="mt-8 text-3xl md:text-4xl font-light">
                    Thank you.
                  </h3>

                  <p className="mt-4 max-w-md text-sm text-slate-400 leading-7">
                    Your project details have been received. We will
                    get back to you soon.
                  </p>

                  <button
                    type="button"
                    onClick={() => setSubmitted(false)}
                    className="mt-8 text-[9px] uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors"
                  >
                    Send another message
                  </button>

                </div>

              ) : (

                <form
                  onSubmit={handleSubmit}
                  className="border border-white/10 rounded-[30px] p-7 md:p-10 lg:p-12 bg-[#02050e]/40"
                >

                  <div className="grid md:grid-cols-2 gap-8">

                    {/* NAME */}

                    <div>

                      <label
                        htmlFor="name"
                        className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3"
                      >
                        Your Name
                      </label>

                      <input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        placeholder="John Doe"
                        className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors"
                      />

                    </div>

                    {/* EMAIL */}

                    <div>

                      <label
                        htmlFor="email"
                        className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3"
                      >
                        Email Address
                      </label>

                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        placeholder="john@example.com"
                        className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors"
                      />

                    </div>

                    {/* PHONE */}

                    <div>

                      <label
                        htmlFor="phone"
                        className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3"
                      >
                        Phone
                      </label>

                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+91 98765 43210"
                        className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors"
                      />

                    </div>

                    {/* PROJECT TYPE */}

                    <div>

                      <label
                        htmlFor="projectType"
                        className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3"
                      >
                        Project Type
                      </label>

                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        required
                        className="w-full bg-[#02050e] border-b border-white/15 py-4 text-sm text-white outline-none focus:border-blue-400 transition-colors"
                      >

                        <option value="">
                          Select project type
                        </option>

                        <option value="Residential">
                          Residential
                        </option>

                        <option value="Commercial">
                          Commercial
                        </option>

                        <option value="Interior">
                          Interior
                        </option>

                        <option value="Hospitality">
                          Hospitality
                        </option>

                        <option value="Master Planning">
                          Master Planning
                        </option>

                        <option value="Urban Design">
                          Urban Design
                        </option>

                        <option value="Other">
                          Other
                        </option>

                      </select>

                    </div>

                  </div>

                  {/* MESSAGE */}

                  <div className="mt-10">

                    <label
                      htmlFor="message"
                      className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3"
                    >
                      Tell us about your project
                    </label>

                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us about the site, project, location, scope or anything else you would like us to know..."
                      className="w-full resize-none bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors"
                    />

                  </div>

                  {/* SUBMIT */}

                  <div className="mt-10 flex flex-col sm:flex-row sm:items-center justify-between gap-6">

                    <p className="text-[9px] text-slate-600 uppercase tracking-[0.15em] max-w-xs leading-5">
                      We respect your privacy and only use your
                      information to respond to your enquiry.
                    </p>

                    <button
                      type="submit"
                      className="group inline-flex items-center justify-center gap-4 px-7 py-4 bg-white text-[#02050e] rounded-full hover:bg-blue-400 transition-all"
                    >

                      <span className="text-[10px] uppercase tracking-[0.2em]">
                        Send Enquiry
                      </span>

                      <Send
                        className="w-4 h-4 group-hover:translate-x-1 transition-transform"
                        strokeWidth={1.5}
                      />

                    </button>

                  </div>

                </form>

              )}

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          LOCATION
      ========================================================= */}

      <section className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">

        <div className="max-w-7xl mx-auto">

          <div className="grid lg:grid-cols-12 gap-12">

            {/* TEXT */}

            <div className="lg:col-span-5">

              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">
                03 — Studio
              </div>

              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">

                Come

                <br />

                <span className="text-slate-500">
                  find us.
                </span>

              </h2>

              <p className="mt-8 max-w-md text-sm text-slate-400 leading-7">
                Our studio is a place for conversations, sketches,
                material samples and ideas. If you are nearby, we would
                be happy to meet.
              </p>

              <div className="mt-10 flex gap-4">

                <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                  <MapPin
                    className="w-4 h-4 text-blue-400"
                    strokeWidth={1.2}
                  />
                </div>

                <div>

                  <div className="text-xs text-white">
                    Atelier Architecture Studio
                  </div>

                  <div className="mt-1 text-xs text-slate-500 leading-6">
                    Bengaluru, Karnataka
                    <br />
                    India
                  </div>

                </div>

              </div>

              <a
                href="https://maps.google.com/?q=Bengaluru,Karnataka,India"
                target="_blank"
                rel="noreferrer"
                className="mt-8 inline-flex items-center gap-3 text-[9px] uppercase tracking-[0.2em] text-white hover:text-blue-400 transition-colors"
              >

                Open in Maps

                <ArrowUpRight
                  className="w-3.5 h-3.5"
                  strokeWidth={1.2}
                />

              </a>

            </div>


            {/* MAP VISUAL */}

            <div className="lg:col-span-7">

              <div className="relative min-h-[450px] rounded-[30px] overflow-hidden border border-white/10 bg-[#061126]">

                {/* GRID */}

                <div
                  className="absolute inset-0 opacity-[0.08]"
                  style={{
                    backgroundImage:
                      "linear-gradient(rgba(255,255,255,.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.5) 1px, transparent 1px)",
                    backgroundSize: "55px 55px",
                  }}
                />

                {/* MAP LINES */}

                <div className="absolute left-[10%] top-[30%] w-[80%] h-px bg-white/10 rotate-[18deg]" />

                <div className="absolute left-[5%] top-[55%] w-[90%] h-px bg-white/10 rotate-[-12deg]" />

                <div className="absolute left-[35%] top-[5%] w-px h-[90%] bg-white/10 rotate-[20deg]" />

                <div className="absolute left-[65%] top-[10%] w-px h-[85%] bg-white/10 rotate-[-14deg]" />

                {/* PIN */}

                <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">

                  <div className="relative flex items-center justify-center">

                    <div className="absolute w-32 h-32 rounded-full border border-blue-400/10 animate-ping" />

                    <div className="absolute w-20 h-20 rounded-full border border-blue-400/20" />

                    <div className="w-12 h-12 rounded-full bg-blue-500/20 border border-blue-400/40 backdrop-blur-md flex items-center justify-center">

                      <MapPin
                        className="w-5 h-5 text-blue-300"
                        strokeWidth={1.2}
                      />

                    </div>

                  </div>

                  <div className="absolute top-16 left-1/2 -translate-x-1/2 whitespace-nowrap text-center">

                    <div className="text-[9px] uppercase tracking-[0.2em] text-white">
                      Atelier Studio
                    </div>

                    <div className="mt-1 text-[8px] text-slate-500 uppercase tracking-[0.15em]">
                      Bengaluru / India
                    </div>

                  </div>

                </div>

                {/* COORDINATES */}

                <div className="absolute top-6 left-6 text-[8px] text-slate-600 tracking-[0.2em] uppercase">
                  12° 58' N
                </div>

                <div className="absolute bottom-6 right-6 text-[8px] text-slate-600 tracking-[0.2em] uppercase">
                  77° 35' E
                </div>

              </div>

            </div>

          </div>

        </div>

      </section>


      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="relative min-h-[70vh] flex items-center justify-center px-6 md:px-10 bg-[#061126] overflow-hidden">

        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.6) 1px, transparent 1px)",
            backgroundSize: "100px 100px",
          }}
        />

        <div className="relative z-10 text-center max-w-5xl">

          <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-10">
            04 — Your Next Space
          </div>

          <h2 className="text-5xl sm:text-6xl md:text-8xl lg:text-[100px] font-light tracking-[-0.05em] leading-[0.95]">

            Have an idea?

            <br />

            <span className="text-slate-500">
              Let's build it.
            </span>

          </h2>

          <p className="max-w-xl mx-auto mt-9 text-sm md:text-base text-slate-400 leading-8">
            Great projects begin with simple conversations. Tell us
            what you are imagining and let us explore what it could
            become together.
          </p>

          <a
            href="#contact-form"
            className="mt-10 inline-flex items-center gap-4 px-7 py-4 bg-white text-[#02050e] rounded-full hover:bg-blue-400 transition-all"
          >

            <span className="text-[10px] uppercase tracking-[0.2em]">
              Start a Project
            </span>

            <ArrowUpRight
              className="w-4 h-4"
              strokeWidth={1.2}
            />

          </a>

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
                href="/"
                className="hover:text-white transition-colors"
              >
                Home
              </a>

              <a
                href="/services"
                className="hover:text-white transition-colors"
              >
                Services
              </a>

              <a
                href="/about"
                className="hover:text-white transition-colors"
              >
                About
              </a>

              <a
                href="/contact"
                className="text-white"
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

    </main>
  );
}