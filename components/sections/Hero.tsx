import React, { useEffect, useState, useRef } from 'react';
import { ArrowLoop, StarDoodle, SpringDoodle } from '../Doodles';
import { Mouse } from 'lucide-react';

const Hero: React.FC = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [noteIndex, setNoteIndex] = useState(0);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const [btnPos, setBtnPos] = useState({ x: 0, y: 0 });

  const notes = [
    "Psst! I make things look good.",
    "Pixel perfect, always.",
    "Let's make some magic!",
    "Design is my superpower.",
    "Coffee in one hand, mouse in other."
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Calculate normalized mouse position (-10 to 10 scale for subtle movement)
      setMousePos({
        x: (e.clientX / window.innerWidth - 0.5) * 20,
        y: (e.clientY / window.innerHeight - 0.5) * 20,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Magnetic Button Logic
  const handleButtonMove = (e: React.MouseEvent) => {
    if (buttonRef.current) {
      const rect = buttonRef.current.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;
      // Stronger pull on hover
      setBtnPos({ x: x * 0.25, y: y * 0.25 });
    }
  };

  const handleButtonLeave = () => {
    setBtnPos({ x: 0, y: 0 });
  };

  const scrollToPortfolio = () => {
    const element = document.getElementById('portfolio');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const toggleNote = () => {
    setNoteIndex((prev) => (prev + 1) % notes.length);
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative p-6 sm:p-12 overflow-hidden pt-24 bg-brand-blue selection:bg-brand-yellow selection:text-brand-dark">
      
      {/* Noise Texture Overlay for Paper Feel */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.04] z-[1] mix-blend-overlay"
           style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")` }}>
      </div>

      {/* Dynamic Background Patterns (Parallax) */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
         {/* Large blurred blobs */}
         <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-dark/20 rounded-full blur-3xl animate-pulse" 
              style={{ transform: `translate(${mousePos.x * -1.5}px, ${mousePos.y * -1.5}px)` }}></div>
         <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-yellow/10 rounded-full blur-3xl"
              style={{ transform: `translate(${mousePos.x * 1.5}px, ${mousePos.y * 1.5}px)` }}></div>
         
         {/* Floating Doodles with Parallax */}
         <StarDoodle className="absolute top-1/4 left-10 w-12 h-12 text-brand-yellow/40 animate-spin-slow" 
                     style={{ transform: `translate(${mousePos.x * -4}px, ${mousePos.y * -4}px)` }} />
         <SpringDoodle className="absolute bottom-1/4 right-20 w-32 h-8 text-white/20 rotate-12" 
                       style={{ transform: `translate(${mousePos.x * 3}px, ${mousePos.y * 3}px)` }} />
         
         <div className="absolute top-32 right-1/3 w-4 h-4 rounded-full bg-brand-yellow/60" 
              style={{ transform: `translate(${mousePos.x * 5}px, ${mousePos.y * 5}px)` }}></div>
         <div className="absolute bottom-20 left-1/3 w-6 h-6 border-2 border-white/30 rounded-full"
              style={{ transform: `translate(${mousePos.x * -3}px, ${mousePos.y * -3}px)` }}></div>
      </div>

      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-12 items-center relative z-10">
        
        {/* Left Content (Text) */}
        <div className="order-2 md:order-1 md:col-span-7 flex flex-col items-start relative">
          
          {/* Quirky Note - Interactive */}
          <div className="relative mb-10 ml-2 group cursor-pointer"
               onClick={toggleNote}
               style={{ transform: `translate(${mousePos.x * 0.3}px, ${mousePos.y * 0.3}px)` }}>
             <div className="font-hand text-brand-dark text-lg sm:text-xl -rotate-3 bg-brand-yellow px-6 py-2 rounded-tl-xl rounded-tr-xl rounded-br-xl border-2 border-brand-dark shadow-[4px_4px_0px_0px_rgba(0,0,0,0.2)] hover:-translate-y-1 hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,0.2)] transition-all select-none active:scale-95">
                {notes[noteIndex]}
             </div>
             <ArrowLoop className="w-16 h-16 absolute -bottom-12 -left-8 text-white rotate-12 opacity-90 group-hover:rotate-45 transition-transform duration-500" />
          </div>

          {/* Animated SVG Title */}
          <h1 className="relative w-full max-w-[850px] select-none mb-6" aria-label="Portfolio">
            <span className="sr-only">PORTFOLIO</span>
            <svg viewBox="0 0 500 220" className="w-full h-auto drop-shadow-2xl overflow-visible">
               <defs>
                 <filter id="sketchy-hero">
                    <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="3" result="noise" />
                    <feDisplacementMap in="SourceGraphic" in2="noise" scale="2" />
                 </filter>
                 <style>
                   {`
                     .hero-text {
                       font-family: 'Anton', sans-serif;
                       font-size: 130px;
                       stroke-width: 2.5px;
                       stroke-linecap: round;
                       stroke-linejoin: round;
                       paint-order: stroke;
                       stroke-dasharray: 1200;
                       stroke-dashoffset: 1200;
                       animation: drawHero 2s cubic-bezier(0.25, 1, 0.5, 1) forwards, fillHero 0.5s ease-in-out 1.8s forwards;
                     }
                     .hero-text-2 {
                        animation-delay: 0.3s, 2s;
                     }
                     @keyframes drawHero { to { stroke-dashoffset: 0; } }
                     @keyframes fillHero { from { fill-opacity: 0; } to { fill-opacity: 1; } }
                   `}
                 </style>
               </defs>
               
               <text x="0" y="110" className="hero-text" fill="white" stroke="white" fillOpacity="0" filter="url(#sketchy-hero)">PORT</text>
               <text x="0" y="210" className="hero-text hero-text-2" fill="#FFD700" stroke="#FFD700" fillOpacity="0" filter="url(#sketchy-hero)">FOLIO</text>
               
               <path d="M10,225 Q250,240 480,220" fill="none" stroke="white" strokeWidth="4" strokeLinecap="round" className="animate-pulse opacity-40" />
            </svg>
          </h1>
          
          {/* Subtitle / Badge with Float Animation */}
          <div className="flex flex-wrap items-center gap-6 mb-12">
             <div className="animate-float" style={{ animationDelay: '0s' }}>
                <div className="bg-white text-brand-blue px-6 py-3 rounded-full font-display text-xl sm:text-2xl uppercase tracking-wider transform -rotate-2 border-4 border-brand-blue shadow-[5px_5px_0px_0px_#FFD700] hover:rotate-0 hover:scale-105 transition-all cursor-default">
                  Graphic Designer
                </div>
             </div>
             <span className="hidden sm:inline-block font-hand text-3xl text-white/50 animate-pulse">&</span>
             <div className="animate-float" style={{ animationDelay: '1s' }}>
                <div className="bg-brand-dark text-white px-6 py-3 rounded-full font-display text-xl sm:text-2xl uppercase tracking-wider transform rotate-1 border-4 border-white/20 hover:rotate-0 hover:scale-105 transition-all cursor-default">
                  Illustrator
                </div>
             </div>
          </div>

          {/* Magnetic CTA Section */}
          <div className="relative ml-4 sm:ml-10">
             <button 
               ref={buttonRef}
               onClick={scrollToPortfolio}
               onMouseMove={handleButtonMove}
               onMouseLeave={handleButtonLeave}
               style={{ transform: `translate(${btnPos.x}px, ${btnPos.y}px)` }}
               className="group relative inline-flex items-center gap-4 bg-brand-yellow text-brand-dark px-10 py-5 rounded-2xl font-display text-2xl tracking-wide shadow-xl hover:shadow-2xl transition-transform ease-out duration-100 overflow-hidden active:scale-95"
             >
               <span className="relative z-10">EXPLORE WORK</span>
               <div className="relative z-10 bg-brand-dark/10 p-2 rounded-full group-hover:bg-brand-dark group-hover:text-brand-yellow transition-colors">
                 <svg className="w-6 h-6 transform group-hover:rotate-90 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
               </div>
             </button>
             
             <p className="absolute -right-32 top-1/2 -translate-y-1/2 font-hand text-white text-xl rotate-3 hidden sm:block opacity-0 animate-[fade-in_0.5s_ease-out_1s_forwards]">
               <span className="block mb-2 text-3xl">👈</span> 
               Start Here!
             </p>
          </div>
        </div>

        {/* Right Content (Illustration/Avatar) */}
        <div className="order-1 md:order-2 md:col-span-5 flex justify-center relative perspective-1000">
          <div className="relative w-full max-w-[400px] aspect-square"
               style={{ transform: `rotateY(${mousePos.x * 0.5}deg) rotateX(${-mousePos.y * 0.5}deg)` }}>
             
             {/* Text Bubble - Persistent and Animated */}
             <div className="absolute -top-12 -right-8 z-30 animate-float"
                  style={{ transform: `translate(${mousePos.x * -0.3}px, ${mousePos.y * -0.3}px)` }}>
                <div className="bg-white text-brand-blue font-hand text-xl p-6 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-4 border-brand-blue shadow-2xl relative">
                  Hello! 👋 <br/> Welcome to my <br/> creative universe!
                  <div className="absolute -bottom-[22px] -left-[2px] w-6 h-6 bg-white border-l-4 border-b-4 border-brand-blue transform skew-x-12"></div>
                </div>
             </div>

             {/* Main Image Container */}
             <div className="w-full h-full relative group">
                <div className="absolute inset-0 border-[4px] border-dashed border-white/40 rounded-full animate-[spin_10s_linear_infinite]"></div>
                
                {/* Image Frame */}
                <div className="absolute inset-4 rounded-full border-[10px] border-brand-yellow overflow-hidden shadow-2xl bg-brand-paper transform transition-transform duration-500 group-hover:scale-[1.02] rotate-3 group-hover:rotate-0">
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                      alt="Avatar" 
                      className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-700 ease-out scale-110 group-hover:scale-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-brand-blue/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 mix-blend-overlay"></div>
                </div>
             </div>
             
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div 
         className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce opacity-40 hover:opacity-100 transition-opacity cursor-pointer text-white z-20"
         onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
         <span className="font-display text-xs tracking-widest uppercase">Scroll</span>
         <Mouse size={24} />
      </div>

    </section>
  );
};

export default Hero;