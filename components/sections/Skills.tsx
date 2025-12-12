import React from 'react';
import { ArrowLoop, BulbDoodle, CrossDoodle, CurlyArrow } from '../Doodles';
import { Reveal } from '../Reveal';

const services = [
  "Logo Design", "Flyer Design", "Poster Design", "Brochure Design", 
  "Social Media Post Design", "Business Card Design", "Motion poster design"
];

const tools = [
  { name: "Ai", label: "Illustrator", color: "#FF9A00", bg: "#330000" },
  { name: "Ps", label: "Photoshop", color: "#31A8FF", bg: "#001E36" },
  { name: "Pr", label: "Premiere", color: "#9999FF", bg: "#330033" },
  { name: "Ae", label: "After Effects", color: "#D291FF", bg: "#00005B" },
  { name: "Id", label: "InDesign", color: "#FF3366", bg: "#2D0010" }
];

const Skills: React.FC = () => {
  return (
    <section className="py-20 px-6 relative bg-brand-paper/5">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left Column: What I Do / Use */}
        <div className="relative">
          <Reveal delay={0}>
            <div className="bg-white text-brand-blue p-8 sm:p-12 rounded-3xl relative shadow-2xl transform rotate-1 hover:rotate-0 transition-transform duration-500">
              <div className="absolute -top-4 -left-4 w-full h-full bg-brand-yellow rounded-3xl -z-10 border-4 border-white"></div>
              
              {/* Bulb Doodle for Ideas */}
              <div className="absolute -top-12 -right-8 animate-[wiggle_4s_ease-in-out_infinite]">
                 <BulbDoodle className="w-20 h-24 text-brand-dark" />
              </div>

              <div className="relative mb-8 text-center sm:text-left border-b-4 border-brand-blue pb-4">
                <h2 className="font-display text-5xl sm:text-6xl leading-none">
                  WHAT I DO<br/>
                  <span className="text-brand-dark opacity-50">&</span> WHAT I USE
                </h2>
              </div>

              <div className="flex flex-col md:flex-row gap-8">
                <ul className="font-hand text-xl space-y-2 list-none w-full md:w-1/2">
                  {services.map((s, i) => (
                    <li key={i} className="flex items-center group cursor-default">
                      <span className="text-brand-yellow mr-2 text-2xl group-hover:scale-150 transition-transform">•</span> 
                      <span className="group-hover:translate-x-1 transition-transform">{s}</span>
                    </li>
                  ))}
                </ul>

                {/* Software Icons Grid */}
                <div className="w-full md:w-1/2 grid grid-cols-2 gap-3 content-start">
                   {tools.map((t, i) => (
                     <div key={i} className="flex items-center gap-2 bg-gray-100 p-2 rounded-lg hover:bg-gray-200 transition-colors group cursor-default border border-transparent hover:border-gray-300">
                       <div 
                          className="w-10 h-10 flex items-center justify-center font-bold text-sm rounded border-2 border-white shadow-sm group-hover:scale-110 transition-transform" 
                          style={{ backgroundColor: t.bg, color: t.color }}
                       >
                         {t.name}
                       </div>
                       <span className="font-display text-sm tracking-wide text-gray-600 group-hover:text-gray-900">{t.label}</span>
                     </div>
                   ))}
                </div>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right Column: CTA */}
        <div className="flex flex-col justify-center items-center text-center relative z-10 group">
           <Reveal delay={0.2}>
             {/* Decorative Crosses */}
             <CrossDoodle className="absolute top-0 right-10 w-8 h-8 text-brand-yellow opacity-50 animate-pulse" />
             <CrossDoodle className="absolute bottom-10 left-10 w-6 h-6 text-white opacity-30" />

             <div className="relative">
               <h2 className="font-display text-6xl sm:text-8xl text-white leading-tight drop-shadow-md relative z-10">
                 LET'S <br/>
                 <span className="text-brand-yellow inline-block transform group-hover:scale-110 transition-transform duration-300">CREATE</span> <br/>
                 MAGIC
               </h2>
               
               {/* Arrow pointing to text */}
               <div className="absolute -top-10 -left-20 hidden sm:block">
                  <CurlyArrow className="w-24 h-24 text-white/40 rotate-[30deg]" />
               </div>
             </div>
             
             <div className="mt-8 relative">
                <svg width="200" height="60" viewBox="0 0 200 60" className="text-white">
                  <path d="M10,30 Q50,5 90,30 T170,30" fill="none" stroke="currentColor" strokeWidth="4" strokeDasharray="10,5" className="animate-pulse" />
                  <path d="M160,25 L170,30 L160,35" fill="none" stroke="currentColor" strokeWidth="4" />
                </svg>
             </div>
           </Reveal>
        </div>

      </div>
    </section>
  );
};

export default Skills;