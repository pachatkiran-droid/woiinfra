import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const FunkyHeroPage = () => {
  const containerRef = useRef(null);
  const videoWrapperRef = useRef(null);
  const titleRef = useRef(null);
  const spanRef = useRef(null);
  const cardsRef = useRef([]);

  useGSAP(
    () => {
      const heroTl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "bottom bottom",
          scrub: 1.2,
        },
      });

      heroTl
        .to(spanRef.current, {
          x: 60,
          color: "#ccff00",
          duration: 2,
        }, 0)
        .to(titleRef.current, {
          scale: 0.8,
          opacity: 0.2,
          y: -80,
          duration: 2,
        }, 0)
        .to(videoWrapperRef.current, {
          scale: 0.85,
          borderRadius: "40px",
          boxShadow: "0px 30px 80px rgba(0,0,0,0.85)",
          duration: 3,
        }, 0.5);

      gsap.from(cardsRef.current, {
        scrollTrigger: {
          trigger: ".showcase-section",
          start: "top 75%",
        },
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out",
      });
    },
    { scope: containerRef }
  );

  const services = [
    {
      tag: "01 / Dynamic",
      title: "Camera Tracking & VFX",
      desc: "Seamless spatial integration, rotoscoping, and high-impact visual disruption.",
    },
    {
      tag: "02 / Narrative",
      title: "Rhythmic Editing",
      desc: "Frame-accurate pacing, stylized motion ramps, and auditory sync engineered to captivate.",
    },
    {
      tag: "03 / Aesthetic",
      title: "Moody Color Grading",
      desc: "High-contrast cinematic palettes and nuanced split toning for a distinctive identity.",
    },
  ];

  return (
    <div className="funky-page-root">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@400;600&family=Syne:wght@700;800&display=swap');

        .funky-page-root {
          --bg: #0b0b0f;
          --accent: #ccff00;
          --pink: #ff2a85;
          --text: #f4f4f6;
          background-color: var(--bg);
          color: var(--text);
          font-family: 'Space Grotesk', sans-serif;
          overflow-x: hidden;
          width: 100%;
        }

        .funky-nav {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          padding: 1.5rem 3rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          z-index: 100;
          mix-blend-mode: difference;
        }

        .funky-logo {
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.5rem;
          letter-spacing: -1px;
          color: #fff;
        }

        .funky-cta-btn {
          background: var(--accent);
          color: #000;
          padding: 0.6rem 1.4rem;
          font-weight: 700;
          border-radius: 99px;
          text-decoration: none;
          text-transform: uppercase;
          font-size: 0.85rem;
          transition: transform 0.2s ease;
        }

        .funky-cta-btn:hover {
          transform: scale(1.08) rotate(-2deg);
        }

        .hero-container {
          position: relative;
          height: 250vh;
        }

        .hero-sticky {
          position: sticky;
          top: 0;
          height: 100vh;
          width: 100%;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }

        .video-wrapper {
          position: absolute;
          width: 100vw;
          height: 100vh;
          top: 0;
          left: 0;
          z-index: 1;
          overflow: hidden;
          transform-origin: center center;
        }

        .video-wrapper iframe {
          width: 100vw;
          height: 56.25vw;
          min-height: 100vh;
          min-width: 177.77vh;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          pointer-events: none;
          filter: brightness(0.6) contrast(1.1);
          border: none;
        }

        .hero-content {
          position: relative;
          z-index: 2;
          text-align: center;
          pointer-events: none;
        }

        .hero-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(3.5rem, 11vw, 9.5rem);
          font-weight: 800;
          line-height: 0.85;
          text-transform: uppercase;
          letter-spacing: -0.04em;
        }

        .hero-title span {
          display: block;
          color: transparent;
          -webkit-text-stroke: 2px var(--accent);
        }

        .hero-subtitle {
          margin-top: 2rem;
          font-size: clamp(0.9rem, 1.5vw, 1.3rem);
          letter-spacing: 0.15em;
          text-transform: uppercase;
        }

        .marquee {
          background: var(--accent);
          color: #000;
          padding: 1.2rem 0;
          overflow: hidden;
          white-space: nowrap;
          transform: rotate(-1.5deg) scale(1.05);
          z-index: 10;
          position: relative;
        }

        .marquee-track {
          display: inline-block;
          font-family: 'Syne', sans-serif;
          font-weight: 800;
          font-size: 1.8rem;
          text-transform: uppercase;
          animation: funkyMarquee 16s linear infinite;
        }

        @keyframes funkyMarquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .showcase-section {
          padding: 10rem 3rem;
          max-width: 1300px;
          margin: 0 auto;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(2.5rem, 5vw, 4rem);
          letter-spacing: -2px;
        }

        .grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 2rem;
          margin-top: 3.5rem;
        }

        .card {
          background: #14141d;
          border: 1px solid #232330;
          border-radius: 20px;
          padding: 2.2rem;
          transition: border-color 0.3s ease;
        }

        .card:hover {
          border-color: var(--pink);
        }

        .card-tag {
          font-size: 0.8rem;
          color: var(--accent);
          text-transform: uppercase;
          font-weight: 600;
          letter-spacing: 0.1em;
        }

        .card h3 {
          font-family: 'Syne', sans-serif;
          font-size: 1.8rem;
          margin: 1rem 0;
        }

        .card p {
          color: #9d9db3;
          line-height: 1.6;
        }
      `}</style>

      {/* Fixed Navigation */}
  

      {/* Sticky Hero Section */}
      <div className="hero-container" ref={containerRef}>
        <div className="hero-sticky">
          <div className="video-wrapper" ref={videoWrapperRef}>
            <iframe
              src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1&controls=0&loop=1&playlist=dQw4w9WgXcQ&playsinline=1"
              title="Hero Background Video"
              allow="autoplay; encrypted-media"
            />
          </div>

          <div className="hero-content">
            <h1 className="hero-title" ref={titleRef}>
              VISUAL
              <span ref={spanRef}>DISRUPTION</span>
            </h1>
            <p className="hero-subtitle">Scroll To Experience</p>
          </div>
        </div>
      </div>

      {/* Kinetic Marquee */}
      <div className="marquee">
        <div className="marquee-track">
          CINEMATIC DIRECTION • MOTION DESIGN • VISUAL EFFECTS • 3D COMPOSITING • CREATIVE EDITING • CINEMATIC DIRECTION • MOTION DESIGN • VISUAL EFFECTS • 
        </div>
      </div>

      {/* Content Grid */}
      <section className="showcase-section">
        <h2 className="section-title">FEATURED DISCIPLINES</h2>
        <div className="grid">
          {services.map((item, idx) => (
            <div
              key={idx}
              className="card"
              ref={(el) => (cardsRef.current[idx] = el)}
            >
              <span className="card-tag">{item.tag}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default FunkyHeroPage;