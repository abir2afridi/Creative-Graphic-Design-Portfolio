import React from 'react';
import { ArrowLoop } from '../Doodles';

const Hero: React.FC = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative p-6 sm:p-12 overflow-hidden pt-24">
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
        
        {/* Left Content (Text) - Spans 7 cols */}
        <div className="order-2 md:order-1 relative z-10 md:col-span-7 flex flex-col items-start">
          <div className="relative mb-6 ml-4">
             <div className="font-hand text-white text-xl sm:text-2xl -rotate-6 bg-brand-dark/30 px-4 py-2 rounded-lg border border-white/20 backdrop-blur-sm">
                Wait until the end. I'll tell you how to contact me.
             </div>
             <ArrowLoop className="w-12 h-12 absolute -bottom-10 left-8 text-white rotate-45 opacity-80" />
          </div>

          <h1 className="font-display text-[6rem] sm:text-[9rem] md:text-[10rem] text-white leading-[0.85] tracking-tight drop-shadow-xl select-none">
            PORT
            <br />
            <span className="text-brand-yellow">FOLIO</span>
          </h1>
          
          <div className="mt-8 bg-white text-brand-blue px-6 py-3 rounded-full font-display text-xl sm:text-2xl uppercase tracking-wider transform -rotate-2 border-4 border-brand-blue shadow-[4px_4px_0px_0px_#FFD700]">
            Graphic Designer & Illustrator
          </div>

          <div className="mt-12 relative hidden lg:block ml-20">
             <p className="font-hand text-white text-2xl rotate-3">
               Let's see what I can do!
               <svg className="w-16 h-16 absolute -top-6 -right-16 animate-bounce" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                 <path d="M12 5v14M19 12l-7 7-7-7" strokeLinecap="round" strokeLinejoin="round"/>
               </svg>
             </p>
          </div>
        </div>

        {/* Right Content (Illustration) - Spans 5 cols */}
        <div className="order-1 md:order-2 md:col-span-5 flex justify-center relative">
          <div className="relative w-full max-w-md aspect-square">
             {/* Text Bubble */}
             <div className="absolute -top-4 -right-4 z-20 animate-float">
                <div className="bg-white text-brand-blue font-hand text-lg p-4 rounded-tl-2xl rounded-tr-2xl rounded-br-2xl border-4 border-brand-blue shadow-lg">
                  Hello! <br/> Welcome to my <br/> creative space!
                </div>
             </div>

             {/* Main Image Container */}
             <div className="w-full h-full rounded-full border-[12px] border-brand-yellow overflow-hidden relative shadow-2xl bg-white rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
                  alt="Avatar" 
                  className="w-full h-full object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-500"
                />
             </div>
             
             {/* Background Decoration */}
             <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border-2 border-white/20 rounded-full -z-10 animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;