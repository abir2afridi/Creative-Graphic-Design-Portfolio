import React from 'react';
import { CircleHighlight } from '../Doodles';

const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-blue relative">
      {/* Divider */}
      <div className="absolute top-0 left-0 w-full h-4 bg-repeat-x opacity-20" style={{ backgroundImage: 'linear-gradient(90deg, white 50%, transparent 50%)', backgroundSize: '40px 4px' }}></div>

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-12 items-center bg-brand-dark/20 p-8 rounded-3xl border-4 border-dashed border-white/30 backdrop-blur-sm">
          
          {/* Photo */}
          <div className="w-full md:w-1/3 flex flex-col items-center">
             <div className="w-48 h-48 sm:w-60 sm:h-60 bg-white p-2 shadow-xl rotate-[-3deg] transform hover:rotate-0 transition-transform duration-300">
               <img src="https://picsum.photos/id/65/600/600" alt="Profile" className="w-full h-full object-cover" />
             </div>
             <div className="mt-4 text-center">
                <h3 className="font-display text-xl text-brand-yellow tracking-wide">Chamodya Thilakarathna</h3>
                <p className="font-hand text-white text-sm">Freelance Graphic Designer</p>
                <p className="font-hand text-white text-xs opacity-70">Sri Lanka</p>
             </div>
          </div>

          {/* Text */}
          <div className="w-full md:w-2/3">
             <div className="relative inline-block mb-6">
                <h2 className="font-display text-5xl sm:text-6xl text-white">ABOUT ME</h2>
                <CircleHighlight className="absolute -top-4 -right-8 w-16 h-16 text-brand-yellow animate-pulse" />
             </div>
             
             <div className="font-hand text-white text-lg sm:text-xl leading-relaxed space-y-6">
                <p>
                  With over 5 years of experience, I'm a dedicated graphic designer passionate about creating visually stunning designs that resonate with audiences. My expertise extends beyond graphic design to marketing strategies. Thanks to my BBA (Hons) in Marketing.
                </p>
                <p>
                  I'm constantly seeking to expand my skill set and stay updated with the latest industry trends. My goal is to become a leading expert in graphic design, delivering innovative and impactful solutions for every project.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;