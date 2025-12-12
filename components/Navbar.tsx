import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrolled, setScrolled] = useState(false);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = ['hero', 'about', 'skills', 'portfolio', 'contact'];
      // Find the section that is currently most visible
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the section top is near the top of the viewport (with some offset)
          if (rect.top <= window.innerHeight / 3 && rect.bottom >= window.innerHeight / 3) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 px-4 sm:px-8 transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}
      >
        <div 
          className={`
            max-w-7xl mx-auto rounded-full px-6 py-3 flex justify-between items-center transition-all duration-300
            ${scrolled || isOpen 
              ? 'bg-brand-dark/80 backdrop-blur-xl border-white/10 shadow-lg' 
              : 'bg-white/10 backdrop-blur-md border-white/20 shadow-sm'}
            border-2
          `}
        >
          {/* Logo */}
          <div 
            className="font-display text-2xl text-white tracking-wider cursor-pointer select-none group relative z-50 flex items-center"
            onClick={() => scrollTo('hero')}
          >
            CHAMODYA
            <span className="text-brand-yellow text-4xl leading-none ml-1 transform transition-transform group-hover:rotate-12 group-hover:scale-125 block pb-2">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex gap-2 items-center">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`
                  font-hand text-lg px-4 py-1 rounded-full transition-all duration-300 relative group
                  ${activeSection === item.id 
                    ? 'text-brand-blue bg-white font-bold transform -rotate-1 scale-105 shadow-md' 
                    : 'text-white hover:text-brand-yellow hover:bg-white/10'}
                `}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Mobile Nav Toggle */}
          <div className="md:hidden z-50">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`p-2 transition-colors duration-300 ${isOpen ? 'text-brand-yellow' : 'text-white hover:text-brand-yellow'}`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`
          fixed inset-0 z-40 bg-brand-blue/95 backdrop-blur-2xl flex flex-col justify-center items-center
          transition-all duration-500 ease-in-out md:hidden
          ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'}
        `}
      >
        {/* Decorative Background Circles */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-brand-yellow/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-48 h-48 bg-white/10 rounded-full blur-3xl animate-float"></div>

        <div className="flex flex-col gap-8 text-center relative z-10">
          {navItems.map((item, idx) => (
             <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`
                font-display text-5xl text-white hover:text-brand-yellow transition-all duration-300 transform
                ${isOpen ? 'translate-y-0 opacity-100' : '-translate-y-10 opacity-0'}
              `}
              style={{ transitionDelay: `${150 + idx * 100}ms` }}
             >
               <span className="relative group">
                 {item.label}
                 <span className="absolute -bottom-2 left-0 w-0 h-1 bg-brand-yellow transition-all duration-300 group-hover:w-full"></span>
               </span>
             </button>
          ))}
        </div>
        
        <div className="absolute bottom-8 text-white/40 font-hand text-sm">
          Designed with <span className="text-brand-yellow">♥</span> by Gemini
        </div>
      </div>
    </>
  );
};

export default Navbar;