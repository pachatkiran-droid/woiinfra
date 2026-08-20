import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  Menu, 
  Grid, 
  Play, 
  ChevronLeft, 
  ChevronRight, 
  Star, 
  Shield, 
  Zap, 
  Trophy, 
  Sparkles, 
  Smartphone, 
  Flame, 
  Compass,
  ArrowUpRight,
  Volume2,
  VolumeX,
  Swords,
  Radio,
  Gamepad2,
  Layers,
  Crown,
  Share2,
  Crosshair,
  TrendingUp,
  Cpu,
  Terminal,
  Activity
} from 'lucide-react';

export default function GameLandingPage() {
  // --- PRESERVED STATE ---
  const [activeSlide, setActiveSlide] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const [isVideoMuted, setIsVideoMuted] = useState(true);
  const videoRef = useRef(null);

  // --- INTERACTIVE & PARALLAX STATES ---
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [activeTab, setActiveTab] = useState('assault');
  const [votedTeam, setVotedTeam] = useState(null);
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const [liveVotes, setLiveVotes] = useState({ titans: 64, tokyo: 36 });
  const [activePill, setActivePill] = useState('All');

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      setMousePos({
        x: (e.clientX / innerWidth - 0.5) * 2,
        y: (e.clientY / innerHeight - 0.5) * 2,
      });
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.defaultMuted = true;
      videoRef.current.muted = true;
      videoRef.current.play().catch(error => {
        console.warn("Autoplay was prevented by browser policy:", error);
      });
    }
  }, []);

  const toggleAudio = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isVideoMuted;
      setIsVideoMuted(!isVideoMuted);
    }
  };

  const handleVote = (team) => {
    if (votedTeam) return;
    setVotedTeam(team);
    if (team === 'titans') {
      setLiveVotes(prev => ({ ...prev, titans: prev.titans + 1 }));
    } else {
      setLiveVotes(prev => ({ ...prev, tokyo: prev.tokyo + 1 }));
    }
  };

  const heroCards = [
    { 
      title: 'Fortnite', 
      sub: 'Battle Royale', 
      rating: '4.8', 
      color: 'from-blue-600 to-black', 
      tag: 'ACTION', 
      icon: '🥷' 
    },
    { 
      title: 'Super Mario', 
      sub: 'Odyssey Quest', 
      rating: '4.9', 
      color: 'from-blue-700 to-black', 
      tag: 'ADVENTURE', 
      icon: '🍄' 
    },
    { 
      title: 'Cyber Pulse', 
      sub: 'Star Allies', 
      rating: '4.7', 
      color: 'from-blue-500 via-blue-700 to-black', 
      tag: 'ARCADE', 
      icon: '👾', 
      featured: true 
    },
    { 
      title: 'Monster Hunt', 
      sub: 'Legends Arceus', 
      rating: '4.6', 
      color: 'from-blue-800 to-black', 
      tag: 'RPG', 
      icon: '🦖' 
    },
    { 
      title: 'Splatoon Pro', 
      sub: 'Multiplayer 3', 
      rating: '4.9', 
      color: 'from-blue-900 to-black', 
      tag: 'COMPETITIVE', 
      icon: '🦑' 
    },
  ];

  const supercellGames = [
    {
      id: 1,
      name: 'Brawl Stars',
      publisher: 'Supercell',
      genre: 'Action',
      cardBg: 'bg-gradient-to-b from-blue-600 to-blue-900',
      tagColor: 'text-blue-200',
      popoutImg: '🐻'
    },
    {
      id: 2,
      name: 'Clash Royale',
      publisher: 'Supercell',
      genre: 'Strategy',
      cardBg: 'bg-gradient-to-b from-blue-700 to-black',
      tagColor: 'text-blue-300',
      popoutImg: '🛡️'
    },
    {
      id: 3,
      name: 'Clash of Clans',
      publisher: 'Supercell',
      genre: 'Strategy',
      cardBg: 'bg-gradient-to-b from-slate-900 to-black',
      tagColor: 'text-blue-400',
      popoutImg: '⚔️'
    },
    {
      id: 4,
      name: 'Boom Beach',
      publisher: 'Supercell',
      genre: 'Tactical',
      cardBg: 'bg-gradient-to-b from-blue-800 to-slate-950',
      tagColor: 'text-blue-200',
      popoutImg: '🚀'
    }
  ];

  const interactiveSquadCards = [
    {
      id: 'assault',
      name: 'Vanguard Cyber-Unit',
      role: 'Damage & Heavy Assault',
      bgGlow: 'from-blue-500/20 via-blue-800/10 to-transparent',
      statPower: 98,
      statDefense: 72,
      statAgility: 88,
      icon: '⚡',
      badge: 'Tier S+ Unit'
    },
    {
      id: 'phantom',
      name: 'Shadow Infiltrator',
      role: 'Stealth & Electronic Recon',
      bgGlow: 'from-blue-400/20 via-blue-900/10 to-transparent',
      statPower: 85,
      statDefense: 60,
      statAgility: 99,
      icon: '🔮',
      badge: 'Ghost Class'
    },
    {
      id: 'titan',
      name: 'Aegis Bastion Mech',
      role: 'Fortification & EMP Shielding',
      bgGlow: 'from-white/10 via-blue-600/10 to-transparent',
      statPower: 80,
      statDefense: 100,
      statAgility: 54,
      icon: '🛡️',
      badge: 'Unbreakable'
    }
  ];

  return (
    <div className="w-full min-h-screen bg-black text-white font-light tracking-wide selection:bg-blue-500 selection:text-white antialiased overflow-x-hidden">
      
      {/* =========================================================
          SECTION 1: HERO (Black / Blue / White)
          ========================================================= */}
      <section className="relative min-h-screen w-full bg-black text-white flex flex-col justify-between p-4 md:p-8 lg:p-10 overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 w-full h-full z-0 overflow-hidden">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1542751371-adc38448a05e?w=1600&auto=format&fit=crop&q=80"
            className="absolute top-1/2 left-1/2 min-w-full min-h-full -translate-x-1/2 -translate-y-1/2 object-cover filter brightness-[0.35] contrast-125"
          >
            <source 
              src="https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/TearsOfSteel.mp4" 
              type="video/mp4" 
            />
          </video>
          
          <div className="absolute inset-0 bg-gradient-to-b from-black via-black/60 to-black z-[1]" />
          <div className="absolute inset-0 bg-[radial-gradient(#2563eb_1px,transparent_1px)] [background-size:28px_28px] opacity-20 z-[2]" />
          <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-blue-600/20 blur-[150px] rounded-full pointer-events-none z-[2]" />
        </div>

        <div className="absolute top-28 left-6 md:left-12 z-20 hidden md:block">
          <div className="flex items-center gap-2 bg-black/60 border border-blue-500/30 px-3.5 py-1.5 rounded-2xl backdrop-blur-md shadow-xl">
            <span className="text-sm">🏹</span>
            <span className="text-[11px] font-normal text-blue-300 tracking-widest uppercase">+250 XP</span>
          </div>
        </div>

        <div className="absolute top-44 right-6 md:right-12 z-20 hidden md:block">
          <div className="flex items-center gap-2 bg-black/60 border border-blue-500/30 px-3.5 py-1.5 rounded-2xl backdrop-blur-md shadow-xl">
            <span className="text-sm">🐉</span>
            <span className="text-[11px] font-normal text-blue-300 tracking-widest uppercase">Rank S+</span>
          </div>
        </div>

        <div className="absolute bottom-6 right-6 z-30 flex items-center">
          <button
            onClick={toggleAudio}
            className="flex items-center gap-2 bg-black/70 hover:bg-black border border-white/15 px-3.5 py-1.5 rounded-full text-xs font-light text-white backdrop-blur-md transition-all tracking-wider cursor-pointer"
          >
            {isVideoMuted ? <VolumeX className="w-3.5 h-3.5 text-blue-400 stroke-[1.5]" /> : <Volume2 className="w-3.5 h-3.5 text-white stroke-[1.5]" />}
            <span>{isVideoMuted ? 'Unmute BG' : 'Mute BG'}</span>
          </button>
        </div>

        <div className="relative z-20 text-center max-w-3xl mx-auto my-auto pt-8">
          <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-500/30 px-4 py-1 rounded-full text-[10px] md:text-[11px] font-light text-blue-200 tracking-[0.2em] uppercase mb-4 backdrop-blur-md shadow-lg">
            <Sparkles className="w-3 h-3 text-blue-400 stroke-[1.5]" /> 3 Months — Free Ultimate Pass
          </div>
          <h1 className="text-5xl md:text-7xl font-light tracking-tight text-white leading-tight drop-shadow-2xl">
            Fun Games <br />
            <span className="font-thin bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-200 to-blue-500">
              Next-Gen Console
            </span>
          </h1>
          <p className="text-slate-300 text-xs md:text-sm font-light mt-4 max-w-lg mx-auto leading-relaxed drop-shadow tracking-wide">
            Explore our hand-picked showcase of top-tier mobile & console titles crafted for pure joy.
          </p>
        </div>

        <div className="relative z-20 w-full max-w-6xl mx-auto flex items-end justify-center pt-8 pb-0 overflow-visible">
          <div className="flex items-end justify-center -space-x-6 sm:-space-x-8 md:-space-x-12 overflow-visible px-4">
            {heroCards.map((card, idx) => {
              const isCenter = card.featured;
              return (
                <div
                  key={idx}
                  className={`relative transition-all duration-300 transform hover:-translate-y-6 hover:z-40 cursor-pointer rounded-[28px] p-4 sm:p-5 shadow-2xl flex flex-col justify-between border border-white/10
                    ${card.color} bg-gradient-to-b
                    ${isCenter 
                      ? 'w-56 h-80 sm:w-64 sm:h-92 md:w-72 md:h-96 -translate-y-6 z-30 ring-1 ring-blue-400/40 shadow-[0_20px_50px_rgba(37,99,235,0.35)]' 
                      : 'w-44 h-64 sm:w-48 sm:h-72 md:w-56 md:h-80 opacity-90 hover:opacity-100 z-10'
                    }
                  `}
                >
                  <div className="flex items-center justify-between text-white">
                    <span className="text-[9px] uppercase tracking-[0.2em] font-light bg-black/40 px-2.5 py-0.5 rounded-md backdrop-blur-sm border border-white/10">
                      {card.tag}
                    </span>
                    <div className="flex items-center gap-1 bg-black/40 px-2 py-0.5 rounded-full text-[11px] font-light backdrop-blur-md border border-white/10">
                      <Star className="w-3 h-3 fill-white text-white stroke-[1]" />
                      <span className="tracking-tight">{card.rating}</span>
                    </div>
                  </div>

                  <div className="my-auto flex items-center justify-center">
                    <div className="text-5xl sm:text-6xl md:text-7xl drop-shadow-[0_15px_20px_rgba(0,0,0,0.6)]">
                      {card.icon}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-lg sm:text-xl font-normal text-white leading-none tracking-wide">{card.title}</h3>
                    <p className="text-blue-200/80 text-xs font-light mt-1 tracking-wider">{card.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* =========================================================
          SECTION 2: SUPERCELL SHOWCASE (White Theme with Black & Blue Accents)
          ========================================================= */}
      <section className="relative min-h-screen w-full bg-gradient-to-b from-black via-blue-950 to-black py-16 px-4 md:px-12 flex items-center justify-center border-b border-white/10">
        <div className="w-full max-w-7xl bg-white text-black rounded-[40px] shadow-[0_30px_90px_rgba(0,0,0,0.5)] p-6 md:p-12 relative overflow-hidden flex flex-col justify-between">
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-10 border-b border-slate-200">
            <div className="flex items-center gap-8">
              <div className="leading-tight">
                <span className="font-light text-xl tracking-[0.25em] uppercase block text-black">SUPER</span>
                <span className="font-thin text-xl tracking-[0.25em] uppercase block text-blue-600 -mt-1">CELL</span>
              </div>
              <h2 className="text-2xl font-light text-black tracking-wide">Games</h2>
            </div>

            <div className="flex items-center gap-4 w-full sm:w-auto">
              <div className="relative flex-1 sm:w-64 bg-slate-100 border border-slate-300 rounded-2xl flex items-center px-4 py-2.5">
                <Search className="w-4 h-4 text-slate-500 mr-2 stroke-[1.5]" />
                <input 
                  type="text" 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  placeholder="Search games..." 
                  className="bg-transparent border-none outline-none text-xs w-full text-black placeholder-slate-400 font-light tracking-wide"
                />
              </div>
              <button className="flex items-center gap-2 text-xs font-normal text-white bg-black hover:bg-blue-600 px-4 py-2.5 rounded-2xl transition-colors tracking-wider">
                Menu <Grid className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-12 pt-10">
            {supercellGames.map((game) => (
              <div 
                key={game.id}
                className="group relative cursor-pointer pt-12 flex flex-col justify-end"
              >
                <div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 text-6xl md:text-7xl transition-transform duration-300 group-hover:-translate-y-4 drop-shadow-[0_12px_12px_rgba(0,0,0,0.3)]">
                  {game.popoutImg}
                </div>

                <div className={`${game.cardBg} rounded-[28px] p-6 pt-16 text-white shadow-xl group-hover:shadow-2xl transition-all duration-300 transform group-hover:scale-[1.02] flex flex-col justify-between min-h-[220px] border border-white/10`}>
                  <div>
                    <h4 className="text-xl font-normal tracking-wide">{game.name}</h4>
                    <p className="text-xs text-blue-200/80 font-light mt-0.5 tracking-wider">{game.publisher}</p>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <span className={`text-[10px] font-normal uppercase tracking-[0.2em] ${game.tagColor}`}>
                      {game.genre}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                      <ArrowUpRight className="w-3.5 h-3.5 text-white stroke-[1.5]" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between pt-6 border-t border-slate-200 text-xs font-light text-slate-600 tracking-wider">
            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-600 transition-colors">Facebook</a>
              <a href="#" className="hover:text-blue-600 transition-colors">YouTube</a>
              <a href="#" className="hover:text-blue-600 transition-colors">Discord</a>
            </div>

            <div className="flex items-center gap-4 font-normal text-black">
              <button 
                onClick={() => setActiveSlide(prev => Math.max(1, prev - 1))}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                <ChevronLeft className="w-3.5 h-3.5 stroke-[1.5]" /> Prev
              </button>
              <button 
                onClick={() => setActiveSlide(prev => prev + 1)}
                className="flex items-center gap-1 hover:text-blue-600 transition-colors"
              >
                Next <ChevronRight className="w-3.5 h-3.5 stroke-[1.5]" />
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 3: ESPORTS STADIUM (Deep Black, White, Blue Highlights)
          ========================================================= */}
      <section className="relative min-h-screen w-full bg-black text-white py-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-b border-white/10">
        
        {/* PARALLAX GLOW BACKGROUND */}
        <div 
          className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-blue-600/15 rounded-full blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${mousePos.x * 40}px, ${mousePos.y * 40}px)` }}
        />
        <div 
          className="absolute -bottom-40 -right-40 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[160px] pointer-events-none transition-transform duration-700 ease-out"
          style={{ transform: `translate(${-mousePos.x * 40}px, ${-mousePos.y * 40}px)` }}
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          {/* Header with Live Signal Indicator */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1 rounded-full mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
                </span>
                <span className="text-[9px] font-normal tracking-[0.25em] text-blue-300 uppercase">
                  Arena Live Radar // Channel 01
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-tight">
                Championship <br />
                <span className="font-thin bg-clip-text text-transparent bg-gradient-to-r from-white via-blue-300 to-blue-600">
                  Clash of Titans
                </span>
              </h2>
            </div>
            
            {/* Quick Interactive Filtering Pills */}
            <div className="flex items-center gap-2 bg-white/[0.04] p-1.5 rounded-2xl border border-white/10 backdrop-blur-xl">
              {['All', 'Grand Finals', 'Highlights', 'VOD Vault'].map((pill) => (
                <button
                  key={pill}
                  onClick={() => setActivePill(pill)}
                  className={`px-4 py-1.5 rounded-xl text-xs font-light tracking-wider transition-all ${
                    activePill === pill
                      ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/40'
                      : 'text-slate-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {pill}
                </button>
              ))}
            </div>
          </div>

          {/* Interactive Match Center & Voting Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* Stage Left (8 Cols) */}
            <div className="lg:col-span-8 group relative rounded-3xl overflow-hidden border border-white/10 bg-gradient-to-b from-blue-950/20 via-black to-black p-6 md:p-8 flex flex-col justify-between shadow-[0_20px_60px_rgba(0,0,0,0.8)] backdrop-blur-2xl">
              <div className="absolute top-0 right-0 p-8 opacity-5 font-thin text-8xl pointer-events-none select-none text-white">
                01
              </div>

              {/* Match Header Bar */}
              <div className="flex items-center justify-between z-10 border-b border-white/10 pb-4">
                <div className="flex items-center gap-3">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-400 animate-pulse" />
                  <span className="text-[11px] font-mono font-light text-slate-300 tracking-wider">FEED #09 // 4K HDR</span>
                </div>
                <div className="flex items-center gap-2 bg-blue-500/10 border border-blue-500/20 text-blue-300 px-3 py-0.5 rounded-full text-[11px] font-mono font-light">
                  <Activity className="w-3 h-3 stroke-[1.5]" /> 38.4 MS PING
                </div>
              </div>

              {/* Face-off Stage */}
              <div className="my-10 z-10">
                <div className="grid grid-cols-1 sm:grid-cols-7 gap-4 items-center text-center">
                  
                  {/* Team 1 */}
                  <div className="sm:col-span-3 bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
                    <div className="text-4xl mb-2">⚡</div>
                    <h4 className="text-lg font-normal text-white tracking-wide">Nordic Titans</h4>
                    <p className="text-[11px] text-blue-400 font-mono font-light mt-1 tracking-wider">WIN STREAK: 14</p>
                    <button
                      onClick={() => handleVote('titans')}
                      className={`mt-4 w-full py-2 rounded-xl text-[11px] font-light tracking-widest uppercase transition-all ${
                        votedTeam === 'titans' 
                          ? 'bg-blue-600 text-white font-normal shadow-lg shadow-blue-600/40' 
                          : 'bg-white/5 hover:bg-blue-600/20 text-white border border-white/5'
                      }`}
                    >
                      {votedTeam === 'titans' ? '✓ Voted MVP' : 'Vote Prediction'}
                    </button>
                  </div>

                  {/* VS Emblem */}
                  <div className="sm:col-span-1 flex flex-col items-center justify-center">
                    <span className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center font-light text-white text-xs shadow-xl border border-white/20">
                      VS
                    </span>
                    <span className="text-[9px] text-slate-400 font-mono font-light tracking-widest uppercase mt-2">BO5 Round</span>
                  </div>

                  {/* Team 2 */}
                  <div className="sm:col-span-3 bg-white/[0.03] p-6 rounded-2xl border border-white/10 hover:border-blue-500/40 transition-all">
                    <div className="text-4xl mb-2">🐉</div>
                    <h4 className="text-lg font-normal text-white tracking-wide">Tokyo Drift</h4>
                    <p className="text-[11px] text-blue-300 font-mono font-light mt-1 tracking-wider">WIN STREAK: 09</p>
                    <button
                      onClick={() => handleVote('tokyo')}
                      className={`mt-4 w-full py-2 rounded-xl text-[11px] font-light tracking-widest uppercase transition-all ${
                        votedTeam === 'tokyo' 
                          ? 'bg-white text-black font-normal shadow-lg shadow-white/20' 
                          : 'bg-white/5 hover:bg-white/15 text-white border border-white/5'
                      }`}
                    >
                      {votedTeam === 'tokyo' ? '✓ Voted MVP' : 'Vote Prediction'}
                    </button>
                  </div>

                </div>

                {/* Real-time Crowd Vote Distribution Bar */}
                <div className="mt-8">
                  <div className="flex justify-between text-[11px] font-mono font-light mb-2 tracking-wider">
                    <span className="text-blue-400">NORDIC TITANS: {liveVotes.titans}%</span>
                    <span className="text-white">TOKYO DRIFT: {liveVotes.tokyo}%</span>
                  </div>
                  <div className="w-full h-2 bg-black/60 rounded-full overflow-hidden flex border border-white/10 p-0.5">
                    <div 
                      className="h-full bg-blue-600 rounded-full transition-all duration-500" 
                      style={{ width: `${liveVotes.titans}%` }}
                    />
                    <div 
                      className="h-full bg-white rounded-full transition-all duration-500" 
                      style={{ width: `${liveVotes.tokyo}%` }}
                    />
                  </div>
                </div>
              </div>

              {/* Match Footer */}
              <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-t border-white/10 text-xs font-light text-slate-400 tracking-wide">
                <div className="flex items-center gap-2">
                  <Flame className="w-3.5 h-3.5 text-blue-400 stroke-[1.5]" />
                  <span>Pool Bounty: <strong className="text-white font-mono font-normal tracking-normal">$500,000 USD</strong></span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Multi-Angle View</span>
                  <span className="hover:text-blue-400 cursor-pointer transition-colors">Tactical Map</span>
                </div>
              </div>
            </div>

            {/* Hall of Fame (4 Cols) */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-6">
              
              {/* Leaderboard */}
              <div className="bg-white/[0.02] border border-white/10 rounded-3xl p-6 backdrop-blur-xl relative overflow-hidden flex-1">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-sm font-normal flex items-center gap-2 tracking-widest uppercase">
                    <Trophy className="w-3.5 h-3.5 text-blue-400 stroke-[1.5]" /> Leaderboard
                  </h4>
                  <span className="text-[9px] font-mono font-light text-blue-400 uppercase tracking-widest">Live Sync</span>
                </div>

                <div className="space-y-3">
                  {[
                    { rank: '#1', name: 'AetherBlade', score: '18,940 XP', kda: '4.8', color: 'text-blue-400' },
                    { rank: '#2', name: 'ZeroKunoichi', score: '16,720 XP', kda: '4.2', color: 'text-white' },
                    { rank: '#3', name: 'NexusOverload', score: '15,400 XP', kda: '3.9', color: 'text-slate-300' },
                    { rank: '#4', name: 'Vortex_Sniper', score: '14,180 XP', kda: '3.6', color: 'text-slate-400' }
                  ].map((player, i) => (
                    <div 
                      key={i}
                      className="group flex items-center justify-between p-3 rounded-2xl bg-white/[0.03] hover:bg-blue-600/20 border border-white/5 hover:border-blue-500/30 transition-all cursor-pointer"
                    >
                      <div className="flex items-center gap-3">
                        <span className={`font-mono text-xs font-light ${player.color}`}>{player.rank}</span>
                        <div>
                          <p className="text-xs font-normal text-white group-hover:text-blue-300 transition-colors tracking-wide">{player.name}</p>
                          <span className="text-[9px] text-slate-400 font-mono font-light">KDA: {player.kda}</span>
                        </div>
                      </div>
                      <span className="text-xs font-mono font-light text-blue-300 tracking-tight">{player.score}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Callout */}
              <div className="relative rounded-3xl bg-gradient-to-r from-blue-700 to-black p-6 text-white overflow-hidden shadow-xl group border border-white/10">
                <div className="absolute -right-6 -bottom-6 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl group-hover:scale-150 transition-transform" />
                <div className="relative z-10">
                  <span className="text-[9px] font-light uppercase tracking-[0.25em] bg-black/40 px-3 py-1 rounded-md border border-white/10">
                    Drops Enabled
                  </span>
                  <h4 className="text-lg font-light mt-2 tracking-wide">Connect Twitch & Claim Skin</h4>
                  <p className="text-xs font-light text-blue-100/80 mt-1 tracking-wide">Watch for 15 mins to unlock the Cyber Katana asset.</p>
                  <button className="mt-4 px-4 py-2 bg-white text-black hover:bg-blue-100 rounded-xl text-xs font-normal tracking-widest uppercase transition-all shadow">
                    Sync Account
                  </button>
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 4: SQUAD LOADOUT ARCHIVE (Black, Blue, White)
          ========================================================= */}
      <section className="relative min-h-screen w-full bg-[#030712] text-white py-24 px-6 md:px-12 flex flex-col justify-center overflow-hidden border-b border-white/10">
        
        <div className="absolute inset-0 bg-[radial-gradient(#1e3a8a_1px,transparent_1px)] [background-size:32px_32px] opacity-20 pointer-events-none" />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 bg-blue-950/60 border border-blue-500/30 px-3.5 py-1 rounded-full mb-3 text-blue-300 text-xs font-light uppercase tracking-[0.2em]">
              <Crosshair className="w-3.5 h-3.5 stroke-[1.5]" /> Deck & Loadout Archive
            </div>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight text-white mt-2">
              Build Your Squad Deck
            </h2>
            <p className="text-slate-300 font-light text-xs md:text-sm mt-3 tracking-wide leading-relaxed">
              Explore tactical archetypes, inspect combat stats in real-time, and customize battle synergies.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {interactiveSquadCards.map((unit) => {
              const isActive = activeTab === unit.id;
              return (
                <div
                  key={unit.id}
                  onMouseEnter={() => setActiveTab(unit.id)}
                  className={`group relative rounded-[32px] p-8 border transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between min-h-[460px]
                    ${isActive 
                      ? 'bg-gradient-to-b from-blue-950/40 via-black to-black border-blue-500/60 shadow-[0_20px_50px_rgba(37,99,235,0.2)] -translate-y-4' 
                      : 'bg-white/[0.02] border-white/10 hover:border-white/20'
                    }
                  `}
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${unit.bgGlow} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

                  <div className="relative z-10 flex items-center justify-between">
                    <span className="text-[10px] font-mono font-light uppercase tracking-widest text-blue-300 bg-blue-950/80 border border-blue-800/40 px-3 py-0.5 rounded-full">
                      {unit.badge}
                    </span>
                    <span className="text-3xl filter drop-shadow-[0_10px_10px_rgba(0,0,0,0.5)] transform group-hover:scale-110 transition-transform duration-300">
                      {unit.icon}
                    </span>
                  </div>

                  <div className="relative z-10 my-6">
                    <h3 className="text-xl font-normal text-white group-hover:text-blue-300 transition-colors tracking-wide">
                      {unit.name}
                    </h3>
                    <p className="text-xs font-light text-slate-400 mt-1 tracking-wider">
                      {unit.role}
                    </p>
                  </div>

                  {/* Minimal Monochrome/Blue Stat Bars */}
                  <div className="relative z-10 space-y-4 pt-6 border-t border-white/10">
                    <div>
                      <div className="flex justify-between text-xs font-mono font-light mb-1">
                        <span className="text-slate-300">Combat Power</span>
                        <span className="text-blue-400 font-normal">{unit.statPower}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-500 rounded-full transition-all duration-700" 
                          style={{ width: `${unit.statPower}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-light mb-1">
                        <span className="text-slate-300">Armor / Defense</span>
                        <span className="text-white font-normal">{unit.statDefense}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-white rounded-full transition-all duration-700" 
                          style={{ width: `${unit.statDefense}%` }}
                        />
                      </div>
                    </div>

                    <div>
                      <div className="flex justify-between text-xs font-mono font-light mb-1">
                        <span className="text-slate-300">Hyper-Agility</span>
                        <span className="text-blue-300 font-normal">{unit.statAgility}%</span>
                      </div>
                      <div className="h-1 w-full bg-white/10 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-400 rounded-full transition-all duration-700" 
                          style={{ width: `${unit.statAgility}%` }}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="relative z-10 mt-6 pt-4 flex items-center justify-between">
                    <span className="text-xs font-light tracking-wider text-blue-400 group-hover:underline">Equip Unit</span>
                    <div className="w-7 h-7 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      <ArrowUpRight className="w-3.5 h-3.5 stroke-[1.5]" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* =========================================================
          SECTION 5: COMMUNITY MATRIX & FOOTER (Black / Blue / White)
          ========================================================= */}
      <section className="relative w-full bg-black text-white pt-24 pb-12 px-6 md:px-12 border-t border-white/10 overflow-hidden">
        
        <div 
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[180px] pointer-events-none" 
        />

        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            
            {/* Box 1 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                  <Shield className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-normal text-white tracking-wide">Private Squad Havens</h4>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed tracking-wide">
                  Lock in encrypted channels, share card decks, and practice scrims with custom bot parameters.
                </p>
              </div>
              <span className="text-xs font-light text-blue-400 tracking-wider mt-4 block cursor-pointer hover:underline">
                Create Squad Portal →
              </span>
            </div>

            {/* Box 2 */}
            <div className="p-8 rounded-3xl bg-gradient-to-br from-blue-900/30 to-black border border-blue-500/30 backdrop-blur-xl flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-white/10 text-white flex items-center justify-center mb-4 border border-white/10">
                  <Smartphone className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-normal text-white tracking-wide">Universal Cross-Sync</h4>
                <p className="text-xs text-blue-100/80 font-light mt-2 leading-relaxed tracking-wide">
                  Auto-sync loadouts between your iOS, Android, macOS, and Windows gaming rigs instantly.
                </p>
              </div>
              <span className="text-xs font-light text-white tracking-wider mt-4 block cursor-pointer hover:underline">
                Download Client Hub →
              </span>
            </div>

            {/* Box 3 */}
            <div className="p-8 rounded-3xl bg-white/[0.02] border border-white/10 backdrop-blur-xl hover:border-blue-500/40 transition-all flex flex-col justify-between min-h-[260px]">
              <div>
                <div className="w-10 h-10 rounded-2xl bg-blue-600/20 text-blue-400 flex items-center justify-center mb-4 border border-blue-500/20">
                  <Terminal className="w-5 h-5 stroke-[1.5]" />
                </div>
                <h4 className="text-lg font-normal text-white tracking-wide">Season Patch Notes</h4>
                <p className="text-xs text-slate-400 font-light mt-2 leading-relaxed tracking-wide">
                  Real-time damage balance numbers, upcoming champion roadmaps, and engine optimizations.
                </p>
              </div>
              <span className="text-xs font-light text-blue-400 tracking-wider mt-4 block cursor-pointer hover:underline">
                Read v4.2 Changelog →
              </span>
            </div>

          </div>

          {/* Master CTA Banner */}
          <div className="relative rounded-[36px] bg-gradient-to-r from-blue-900/60 via-blue-950/80 to-black border border-white/10 p-8 md:p-14 overflow-hidden shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8 mb-20 backdrop-blur-xl">
            <div className="relative z-10 max-w-xl text-center md:text-left">
              <span className="text-[10px] font-light uppercase tracking-[0.25em] text-blue-300 bg-black/40 border border-white/10 px-3 py-1 rounded-md">
                Ready to Ascend?
              </span>
              <h3 className="text-3xl md:text-4xl font-light text-white mt-3 leading-snug">
                Join over 12 million active squad leaders.
              </h3>
              <p className="text-xs md:text-sm text-blue-100/70 font-light mt-3 tracking-wide">
                Download the launcher now and unlock the Season 5 Founder Pass immediately.
              </p>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="px-7 py-3.5 bg-white text-black rounded-2xl font-normal text-xs uppercase tracking-widest hover:bg-blue-50 hover:scale-105 transition-all shadow-xl text-center">
                Download Client
              </button>
              <button className="px-7 py-3.5 bg-black/50 hover:bg-black/80 border border-white/20 text-white rounded-2xl font-light text-xs uppercase tracking-widest transition-all text-center">
                Launch Web Arena
              </button>
            </div>
          </div>

          {/* Footer */}
          <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/10 text-xs font-light text-slate-400 gap-6 tracking-wide">
            <div className="flex items-center gap-3">
              <span className="font-light text-sm text-white tracking-[0.2em] uppercase">Cyber//Deck</span>
              <span className="text-slate-700">|</span>
              <span className="text-slate-500">© 2026 Ultimate Gaming Matrix. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-6">
              <a href="#" className="hover:text-blue-400 transition-colors">Privacy Protocol</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Anti-Cheat Engine</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Terms of Combat</a>
              <a href="#" className="hover:text-blue-400 transition-colors">Server Status</a>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}