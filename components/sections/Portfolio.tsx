import React, { useState, useEffect } from 'react';
import { StarDoodle, SpringDoodle, CrossDoodle, CurlyArrow } from '../Doodles';
import { X, ZoomIn } from 'lucide-react';
import { Reveal } from '../Reveal';

interface ProjectData {
  id: number;
  title: string;
  category: 'Branding' | 'Print' | 'Digital' | 'Other';
  description: string;
  fullDescription: string;
  tags: string[];
  images: string[];
}

const projects: ProjectData[] = [
  {
    id: 1,
    title: "Flyer & Poster Design",
    category: 'Print',
    description: "Creating eye-catching visuals that communicate messages effectively. From minimalist layouts to vibrant, bold compositions.",
    fullDescription: "This collection showcases a variety of flyer and poster designs created for diverse clients. The goal was to capture the essence of each event or brand while maintaining readability and visual impact. Techniques involve advanced photo manipulation, custom typography, and vibrant color theory to ensure the designs stand out in both digital and print formats.",
    tags: ["Branding", "Print Media", "Event Promo"],
    images: [
      "https://images.unsplash.com/photo-1572947650440-e8a97ef053b2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1558655146-d09347e0b7a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1557683316-973673baf926?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1626785774573-4b7993143d2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Business Card Design",
    category: 'Branding',
    description: "Striking business cards that leave a lasting impression. Mixing functionality with creativity.",
    fullDescription: "A business card is often the first tangible impression of a brand. This project series focuses on creating unique, tactile, and memorable business cards. Whether using clean minimalism, luxury foil finishes, or playful illustrations, each card is tailored to reflect the professional identity of the client perfectly.",
    tags: ["Stationery", "Identity", "Print"],
    images: [
      "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1611162617474-5b21e879e113?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1634152962476-4b8a00e1915c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Social Media Branding",
    category: 'Digital',
    description: "Cohesive and engaging social media kits that boost online presence and engagement.",
    fullDescription: "In the digital age, a strong social media presence is non-negotiable. This project involved creating comprehensive social media kits including profile pictures, banners, highlight covers, and post templates. The designs prioritize consistency, brand recognition, and engagement optimization.",
    tags: ["Social Media", "Digital", "Marketing"],
    images: [
      "https://images.unsplash.com/photo-1611162616475-46b635cb6868?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
       "https://images.unsplash.com/photo-1611926653458-09294b3142bf?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
    ]
  }
];

const PortfolioItem: React.FC<{ 
  project: ProjectData;
  alignRight?: boolean;
  onOpen: (project: ProjectData) => void;
}> = ({ project, alignRight = false, onOpen }) => {
  return (
    <Reveal>
      <div className={`flex flex-col ${alignRight ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-16 mb-40 items-center group`}>
        
        {/* Content Side - Sticky Note Style */}
        <div className="w-full lg:w-5/12 relative z-10">
          <h3 
            className="font-display text-4xl sm:text-5xl mb-6 text-white leading-tight drop-shadow-md cursor-pointer hover:text-brand-yellow transition-colors relative inline-block" 
            onClick={() => onOpen(project)}
          >
            {project.title}
            <SpringDoodle className="w-24 h-4 text-brand-yellow absolute -bottom-2 right-0" />
          </h3>
          
          <div 
            className="bg-[#fdfbf7] p-8 relative shadow-xl transform transition-transform duration-300 group-hover:-translate-y-2 group-hover:rotate-1 cursor-pointer"
            style={{ clipPath: 'polygon(0% 0%, 100% 0%, 100% 98%, 98% 100%, 0% 100%)' }} // Subtle dog-ear
            onClick={() => onOpen(project)}
          >
              {/* Washi Tape Effect */}
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm shadow-sm rotate-2 border-l border-r border-white/40"></div>
              
              <p className="font-hand text-xl text-brand-dark leading-relaxed mb-6">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, i) => (
                      <span key={i} className="px-3 py-1 bg-brand-blue/10 text-brand-blue border border-brand-blue/20 rounded-full text-xs font-bold uppercase tracking-wider">
                          {tag}
                      </span>
                  ))}
              </div>
              
              <div className="flex items-center text-brand-blue font-display uppercase tracking-widest text-sm border-t border-dashed border-gray-300 pt-4 group-hover:text-brand-dark">
                See More <ZoomIn size={16} className="ml-2 transform group-hover:scale-125 transition-transform" />
              </div>
          </div>
        </div>

        {/* Images Side - Scattered Photos Stack */}
        <div 
          className="w-full lg:w-7/12 relative cursor-pointer h-[400px] flex items-center justify-center"
          onClick={() => onOpen(project)}
        >
           {/* Background Decor */}
           <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-white/5 rounded-full blur-3xl -z-10`}></div>

           {/* Stacked Images */}
           <div className="relative w-full max-w-lg h-64 sm:h-80 perspective-1000">
              {project.images.slice(0, 3).map((img, idx) => {
                // Calculate subtle random-ish rotations based on index
                const rotate = idx === 0 ? '-3deg' : idx === 1 ? '4deg' : '-2deg';
                const translateX = idx === 0 ? '0' : idx === 1 ? '20px' : '-20px';
                const translateY = idx === 0 ? '0' : idx === 1 ? '10px' : '-10px';
                const zIndex = 3 - idx;

                return (
                   <div 
                      key={idx} 
                      className="absolute inset-0 transition-all duration-500 ease-out group-hover:scale-105"
                      style={{ 
                        zIndex,
                        transform: `rotate(${rotate}) translate(${translateX}, ${translateY})`,
                      }}
                   >
                     {/* Photo Frame Styling */}
                     <div className={`
                        bg-white p-2 sm:p-3 shadow-xl h-full w-full transform transition-transform duration-500
                        ${idx !== 0 ? 'group-hover:translate-x-12 group-hover:rotate-6' : 'group-hover:-rotate-3'}
                     `}>
                        <div className="w-full h-full overflow-hidden bg-gray-100 relative">
                           <img src={img} alt="" className="w-full h-full object-cover" />
                           <div className="absolute inset-0 bg-brand-blue/10 mix-blend-multiply opacity-0 group-hover:opacity-100 transition-opacity"></div>
                        </div>
                     </div>
                   </div>
                );
              })}
           </div>
           
           <div className={`absolute -bottom-10 ${alignRight ? '-left-10' : '-right-10'} text-brand-yellow hidden sm:block`}>
              <StarDoodle className="w-20 h-20 animate-spin-slow" />
           </div>
        </div>
      </div>
    </Reveal>
  );
};

const ProjectModal: React.FC<{ project: ProjectData; onClose: () => void }> = ({ project, onClose }) => {
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = 'unset'; };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6">
      <div className="absolute inset-0 bg-brand-dark/95 backdrop-blur-md" onClick={onClose}></div>
      
      <div className="bg-brand-paper w-full max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl relative flex flex-col animate-in fade-in zoom-in-95 duration-300 border-[6px] border-white">
        
        {/* Modal Header */}
        <div className="bg-brand-blue p-6 flex justify-between items-center sticky top-0 z-20 shadow-md">
           <h2 className="font-display text-2xl sm:text-4xl text-white tracking-wide">{project.title}</h2>
           <button onClick={onClose} className="bg-white/10 hover:bg-white/20 text-white p-2 rounded-full transition-colors">
             <X size={28} />
           </button>
        </div>

        <div className="flex-1 overflow-y-auto custom-scrollbar">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-0 min-h-full">
            
            {/* Sidebar / Info */}
            <div className="md:col-span-4 bg-[#f4f1ea] p-8 border-r-2 border-dashed border-gray-300">
               <div className="mb-8">
                 <h4 className="font-display text-brand-blue text-xl mb-2 uppercase">Client Brief</h4>
                 <p className="font-hand text-lg text-slate-700 leading-relaxed">{project.fullDescription}</p>
               </div>
               
               <div className="mb-8">
                 <h4 className="font-display text-brand-blue text-xl mb-3 uppercase">Tags</h4>
                 <div className="flex flex-wrap gap-2">
                   {project.tags.map(t => (
                     <span key={t} className="px-3 py-1 bg-white border border-gray-300 rounded-md text-sm font-bold text-gray-600 shadow-sm">{t}</span>
                   ))}
                 </div>
               </div>
            </div>

            {/* Gallery */}
            <div className="md:col-span-8 p-8 bg-white">
               <div className="space-y-8">
                 {project.images.map((img, i) => (
                   <div key={i} className="group relative">
                      <div className="absolute -inset-1 bg-brand-yellow/30 rotate-1 rounded-xl group-hover:rotate-0 transition-transform"></div>
                      <img src={img} alt="" className="relative rounded-lg shadow-md w-full" />
                   </div>
                 ))}
               </div>
               <div className="mt-16 text-center">
                  <button onClick={onClose} className="font-display text-brand-blue text-lg hover:underline decoration-brand-yellow decoration-4 underline-offset-4">Back to Projects</button>
               </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

const Portfolio: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<ProjectData | null>(null);
  const [filter, setFilter] = useState<'All' | 'Branding' | 'Print' | 'Digital'>('All');

  const filteredProjects = filter === 'All' 
    ? projects 
    : projects.filter(p => p.category === filter || p.tags.includes(filter));

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto relative min-h-screen">
      
      {/* Header */}
      <Reveal>
        <div className="text-center mb-16 relative z-10">
          <CrossDoodle className="absolute top-0 left-10 md:left-40 w-8 h-8 text-brand-yellow animate-spin-slow" />
          <h2 className="font-display text-6xl sm:text-7xl text-white relative inline-block drop-shadow-lg">
              MY PROJECTS
              <div className="absolute -top-10 -right-10 text-brand-yellow animate-bounce hidden md:block">
                <StarDoodle className="w-16 h-16" />
              </div>
          </h2>
          <p className="font-hand text-white/80 text-xl mt-4 max-w-xl mx-auto">
            A collection of pixels, vectors, and creative dreams brought to life.
          </p>
        </div>
      </Reveal>

      {/* Filter Bar */}
      <Reveal delay={0.2}>
        <div className="flex justify-center flex-wrap gap-4 mb-20 relative z-20">
           
           {/* Doodle pointing to filters */}
           <div className="absolute -top-12 -left-4 hidden md:block">
               <CurlyArrow className="w-16 h-16 text-white/40 rotate-180 scale-x-[-1]" />
           </div>

           {['All', 'Branding', 'Print', 'Digital'].map((cat) => (
             <button
               key={cat}
               onClick={() => setFilter(cat as any)}
               className={`
                 font-display text-lg px-6 py-2 rounded-full border-2 transition-all duration-300 transform hover:-translate-y-1
                 ${filter === cat 
                   ? 'bg-brand-yellow border-brand-yellow text-brand-blue rotate-2 shadow-lg scale-110' 
                   : 'bg-transparent border-white/30 text-white hover:bg-white/10 hover:border-white'}
               `}
             >
               {cat}
             </button>
           ))}
        </div>
      </Reveal>

      {/* Projects List */}
      <div className="space-y-12">
        {filteredProjects.map((proj, idx) => (
          <PortfolioItem 
            key={proj.id}
            project={proj}
            alignRight={idx % 2 !== 0}
            onOpen={setSelectedProject}
          />
        ))}
      </div>
      
      {filteredProjects.length === 0 && (
         <div className="text-center text-white/50 font-hand text-2xl py-20">
           No projects found in this category yet!
         </div>
      )}

       {/* Logo Gallery Section */}
       <div className="mt-32 relative">
         <Reveal delay={0.3}>
           <div className="absolute inset-0 bg-brand-dark/30 -skew-y-2 transform scale-105 rounded-3xl -z-10"></div>
           <div className="bg-white/10 rounded-3xl p-8 sm:p-12 border border-white/20 backdrop-blur-md shadow-2xl">
              <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-6">
                  <div>
                     <h3 className="font-display text-4xl text-white mb-2">Logo Collection</h3>
                     <p className="font-hand text-brand-yellow text-xl">Minimalist. Iconic. Timeless.</p>
                  </div>
                  <div className="hidden md:flex gap-2">
                     <div className="w-3 h-3 rounded-full bg-red-400"></div>
                     <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                     <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
                  {[1,2,3,4,5,6,7,8,9,10].map((i) => (
                      <div key={i} className="group aspect-square bg-white rounded-xl shadow-lg flex items-center justify-center p-6 relative overflow-hidden transition-all duration-300 hover:scale-110 hover:z-10 hover:rotate-2">
                          <div className="absolute top-0 left-0 w-full h-1 bg-gray-100 group-hover:bg-brand-yellow transition-colors"></div>
                          <img 
                            src={`https://picsum.photos/seed/${i * 45}/200/200`} 
                            alt="Logo" 
                            className="w-full h-full object-contain filter grayscale group-hover:grayscale-0 transition-all duration-500 opacity-80 group-hover:opacity-100" 
                          />
                      </div>
                  ))}
              </div>
           </div>
         </Reveal>
       </div>

       {/* Modal */}
       {selectedProject && (
         <ProjectModal 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
         />
       )}

    </section>
  );
};

export default Portfolio;