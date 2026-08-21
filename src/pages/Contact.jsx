import { ArrowDown, ArrowUpRight, Building2, Check, HandCoins, MapPin, Rocket, Send, Users } from "lucide-react";
import { useState } from "react";

const channels = [
  {
    title: "Founders & Builders",
    icon: Rocket,
    description: "Apply for Venture Studio incubation, physical desk space, or seed funding.",
  },
  {
    title: "Institutional Partners",
    icon: Building2,
    description: "Partner on regional Innovation Cities, Centers of Excellence, and district-level economic zones.",
  },
  {
    title: "Investors & Angels",
    icon: HandCoins,
    description: "Gain direct access to deal flow across our 50 target innovation hubs.",
  },
];

const organizationTypes = ["Government", "Corporate", "Startup", "Investor", "Academic"];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    organizationType: "",
    region: "",
    focusSector: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((previous) => ({ ...previous, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#02050e] text-white overflow-x-hidden font-sans selection:bg-blue-500 selection:text-white">
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2200&q=90"
            alt="Connected teams collaborating across a shared workspace"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#02050e]/75" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#02050e] via-[#02050e]/75 to-[#02050e]/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-transparent to-[#02050e]/50" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto w-full px-6 md:px-10 pt-32">
          <div className="max-w-5xl">
            <div className="flex items-center gap-3 mb-8">
              <span className="w-8 h-px bg-blue-400" />
              <span className="text-[10px] text-blue-300 tracking-[0.35em] uppercase">Contact & Partnership</span>
            </div>
            <h1 className="text-5xl sm:text-6xl md:text-8xl lg:text-[110px] font-light tracking-[-0.06em] leading-[0.88]">
              Join the Connected
              <br />
              <span className="text-white/90 font-thin">Innovation</span>
              <br />
              <span className="text-slate-500">Network.</span>
            </h1>
            <p className="mt-9 max-w-xl text-sm md:text-base text-slate-300/80 leading-8 font-light">
              Whether you represent state governance, an investment fund, a university research lab, or a startup, connect with our studio nodes.
            </p>
            <a
              href="#engagement"
              className="mt-10 inline-flex items-center gap-3 px-5 py-3 rounded-full border border-white/20 bg-white/[0.04] backdrop-blur-md hover:bg-white/10 transition-all"
            >
              <span className="text-[10px] uppercase tracking-[0.2em]">Find your channel</span>
              <ArrowDown className="w-3.5 h-3.5" strokeWidth={1.2} />
            </a>
          </div>
        </div>
        <div className="absolute bottom-8 left-6 md:left-10 text-[9px] tracking-[0.3em] uppercase text-slate-500">Scroll to connect</div>
      </section>

      <section id="engagement" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#061126]">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
            <div>
              <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">01 — Engagement Channels</div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                Find your place
                <br />
                <span className="text-slate-500">in the network.</span>
              </h2>
            </div>
            <p className="max-w-sm text-xs md:text-sm text-slate-400 leading-7 font-light">
              Every kind of partner has a role in building connected innovation ecosystems across India.
            </p>
          </div>

          <div className="grid md:grid-cols-3 border-t border-white/10">
            {channels.map(({ title, icon: Icon, description }) => (
              <article key={title} className="group p-7 md:p-9 border-b md:border-b-0 md:border-r border-white/10 last:border-r-0">
                <Icon className="w-5 h-5 text-blue-400" strokeWidth={1.2} />
                <h3 className="mt-20 text-2xl md:text-3xl font-light">{title}</h3>
                <p className="mt-4 text-sm text-slate-400 leading-7 font-light">{description}</p>
                <ArrowUpRight className="mt-8 w-4 h-4 text-slate-600 group-hover:text-blue-400 transition-colors" strokeWidth={1.2} />
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact-form" className="relative py-32 md:py-44 px-6 md:px-10 bg-[#02050e]">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-14 lg:gap-20">
          <div className="lg:col-span-4">
            <div className="text-[9px] text-blue-400 tracking-[0.3em] uppercase mb-5">02 — Connect With Us</div>
            <div className="text-[120px] md:text-[160px] leading-none font-thin text-white/[0.035] select-none">02</div>
            <h2 className="mt-5 text-4xl md:text-5xl font-light tracking-tight leading-tight">
              Start a
              <br />
              <span className="text-slate-500">conversation.</span>
            </h2>
            <p className="mt-7 text-sm text-slate-400 leading-7 font-light">
              Tell us where you are working, what you are building, and how you want to connect with the network.
            </p>
            <div className="mt-10 flex items-center gap-4 text-xs text-slate-400">
              <div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center">
                <MapPin className="w-4 h-4 text-blue-400" strokeWidth={1.2} />
              </div>
              <span>Connect with our studio nodes across India.</span>
            </div>
          </div>

          <div className="lg:col-span-8">
            {submitted ? (
              <div className="min-h-[550px] border border-white/10 rounded-[30px] flex flex-col items-center justify-center text-center p-10">
                <div className="w-16 h-16 rounded-full border border-blue-400/30 bg-blue-500/10 flex items-center justify-center">
                  <Check className="w-6 h-6 text-blue-300" strokeWidth={1.2} />
                </div>
                <h3 className="mt-8 text-3xl md:text-4xl font-light">Thank you.</h3>
                <p className="mt-4 max-w-md text-sm text-slate-400 leading-7">Your details have been received. Our team will connect with you soon.</p>
                <button type="button" onClick={() => setSubmitted(false)} className="mt-8 text-[9px] uppercase tracking-[0.2em] text-blue-400 hover:text-white transition-colors">
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="border border-white/10 rounded-[30px] p-7 md:p-10 lg:p-12 bg-[#061126]/60">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <label htmlFor="name" className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3">Name</label>
                    <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required placeholder="Your name" className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="organizationType" className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3">Organization Type</label>
                    <select id="organizationType" name="organizationType" value={formData.organizationType} onChange={handleChange} required className="w-full bg-[#02050e] border-b border-white/15 py-4 text-sm text-white outline-none focus:border-blue-400 transition-colors">
                      <option value="">Select organization type</option>
                      {organizationTypes.map((type) => <option key={type} value={type}>{type}</option>)}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="region" className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3">State/Region</label>
                    <input id="region" name="region" type="text" value={formData.region} onChange={handleChange} required placeholder="State or region" className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors" />
                  </div>
                  <div>
                    <label htmlFor="focusSector" className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3">Focus Sector</label>
                    <input id="focusSector" name="focusSector" type="text" value={formData.focusSector} onChange={handleChange} required placeholder="Your focus sector" className="w-full bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors" />
                  </div>
                </div>
                <div className="mt-10">
                  <label htmlFor="message" className="block text-[9px] uppercase tracking-[0.2em] text-slate-500 mb-3">Message Area</label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={6} placeholder="Tell us how you would like to connect..." className="w-full resize-none bg-transparent border-b border-white/15 py-4 text-sm text-white placeholder:text-slate-700 outline-none focus:border-blue-400 transition-colors" />
                </div>
                <div className="mt-10 flex justify-end">
                  <button type="submit" className="group inline-flex items-center justify-center gap-4 px-7 py-4 bg-white text-[#02050e] rounded-full hover:bg-blue-400 transition-all">
                    <span className="text-[10px] uppercase tracking-[0.2em]">Connect with us</span>
                    <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" strokeWidth={1.5} />
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
