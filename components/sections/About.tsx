import React from 'react';
import { CircleHighlight, CrownDoodle, CrossDoodle, StarDoodle } from '../Doodles';
import { Reveal } from '../Reveal';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-blue relative overflow-hidden">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, white 50%, transparent 50%)', backgroundSize: '40px 4px' }}></div>
      
      {/* Background Doodles */}
      <CrossDoodle className="absolute top-20 left-10 w-8 h-8 text-white/10 rotate-12" />
      <CrossDoodle className="absolute bottom-20 right-10 w-12 h-12 text-white/10 -rotate-12" />
      <StarDoodle className="absolute top-1/2 right-20 w-16 h-16 text-white/5 animate-spin-slow" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col md:flex-row gap-12 items-center bg-brand-dark/20 p-8 rounded-3xl border-4 border-dashed border-white/30 backdrop-blur-sm transform hover:scale-[1.01] transition-transform duration-500">
          
          {/* Photo */}
          <div className="w-full md:w-1/3 flex flex-col items-center relative group">
             <Reveal delay={0}>
               <div className="relative flex flex-col items-center">
                 {/* Crown Doodle */}
                 <div className="absolute -top-14 -left-10 z-20 transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-6">
                    <CrownDoodle className="w-24 h-24 text-brand-yellow" />
                 </div>

                 <div className="w-48 h-48 sm:w-60 sm:h-60 bg-white p-2 shadow-xl rotate-[-3deg] transform group-hover:rotate-0 transition-transform duration-300 relative z-10">
                   <img src="https://picsum.photos/id/65/600/600" alt="Profile" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" />
                 </div>
                 
                 <div className="mt-6 text-center">
                    <h3 className="font-display text-2xl text-brand-yellow tracking-wide">Chamodya Thilakarathna</h3>
                    <p className="font-hand text-white text-lg">Freelance Graphic Designer</p>
                    <div className="flex items-center justify-center gap-2 mt-2 opacity-70">
                       <div className="w-2 h-2 rounded-full bg-red-400"></div>
                       <p className="font-hand text-white text-xs">Sri Lanka</p>
                    </div>
                 </div>
               </div>
             </Reveal>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
             <Reveal delay={0.2}>
               <div className="relative inline-block mb-8">
                  <h2 className="font-display text-5xl sm:text-6xl text-white relative z-10">ABOUT ME</h2>
                  <CircleHighlight className="absolute -top-6 -right-10 w-24 h-24 text-brand-yellow animate-pulse" />
                  <CrossDoodle className="absolute -bottom-4 -left-6 w-6 h-6 text-white/40" />
               </div>
               
               <div className="font-hand text-white text-lg sm:text-xl leading-relaxed space-y-6 relative">
                  <div className="absolute -left-6 top-0 w-1 h-full bg-white/10 rounded-full"></div>
                  <p>
                    With over 5 years of experience, I'm a dedicated graphic designer passionate about creating visually stunning designs that resonate with audiences. My expertise extends beyond graphic design to marketing strategies. Thanks to my BBA (Hons) in Marketing.
                  </p>
                  <p>
                    I'm constantly seeking to expand my skill set and stay updated with the latest industry trends. My goal is to become a leading expert in graphic design, delivering innovative and impactful solutions for every project.
                  </p>
               </div>
             </Reveal>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;