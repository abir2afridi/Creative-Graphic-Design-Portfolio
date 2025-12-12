import React, { useState, useEffect } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Linkedin, Dribbble, Instagram, Loader2, ArrowUp, Clock, MapPin } from 'lucide-react';
import { PaperPlane, SpringDoodle, StarDoodle, ArrowLoop, SquiggleUnderline, CircleHighlight } from '../Doodles';
import { Reveal } from '../Reveal';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [time, setTime] = useState('');

  // Clock Logic (Sri Lanka Time)
  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const options: Intl.DateTimeFormatOptions = { 
        timeZone: 'Asia/Colombo', 
        hour: 'numeric', 
        minute: 'numeric', 
        hour12: true 
      };
      setTime(now.toLocaleTimeString('en-US', options));
    };
    updateTime();
    const interval = setInterval(updateTime, 60000); // Update every minute
    return () => clearInterval(interval);
  }, []);

  const copyToClipboard = (text: string, type: string) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(null), 2000);
  };

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSending(true);
    
    // Simulate sending delay for UX
    setTimeout(() => {
        const subject = `Portfolio Inquiry from ${formState.name}`;
        const body = `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`;
        window.location.href = `mailto:tchama333@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
        setIsSending(false);
        setIsSent(true);
        setFormState({ name: '', email: '', message: '' });
    }, 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const platforms = [
    { name: 'Fiverr', url: 'https://www.fiverr.com/chamodya', color: 'text-[#1DBF73]', bg: 'bg-[#1DBF73]/10', border: 'border-[#1DBF73]' },
    { name: 'Kwork', url: 'https://kwork.com/user/chamodya', color: 'text-[#FFA800]', bg: 'bg-[#FFA800]/10', border: 'border-[#FFA800]' },
    { name: 'Freelancer', url: 'https://www.freelancer.com/u/chamodya', color: 'text-[#29B2FE]', bg: 'bg-[#29B2FE]/10', border: 'border-[#29B2FE]' },
  ];

  const socials = [
    { icon: <Linkedin size={22} />, url: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
    { icon: <Dribbble size={22} />, url: '#', label: 'Dribbble', color: 'hover:bg-[#ea4c89]' },
    { icon: <Instagram size={22} />, url: '#', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
  ];

  return (
    <footer className="bg-brand-dark py-24 px-4 sm:px-6 relative overflow-hidden text-white min-h-screen flex flex-col justify-center">
       {/* Background Decoration */}
       <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-blue rounded-full filter blur-[150px] opacity-30 animate-pulse"></div>
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-brand-yellow rounded-full filter blur-[120px] opacity-10"></div>
          {/* Coffee Ring Stain */}
          <div className="absolute bottom-20 right-10 w-48 h-48 border-8 border-[#3f2e18] opacity-10 rounded-full" style={{ borderRadius: '45% 55% 40% 60% / 50% 40% 60% 50%' }}></div>
       </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <Reveal>
          <div className="text-center mb-16 sm:mb-24 relative">
             <h2 className="font-display text-[3.5rem] sm:text-[7rem] leading-[0.9] mb-4 relative inline-block select-none drop-shadow-2xl">
               <span className="text-white">LET'S</span> <span className="text-brand-yellow relative inline-block">
                 CREATE
                 <SquiggleUnderline className="absolute -bottom-2 sm:-bottom-4 left-0 w-full h-4 sm:h-8 text-brand-blue" />
               </span>
             </h2>
             <p className="font-hand text-lg sm:text-2xl text-white/70 max-w-2xl mx-auto mt-6">
               Do you have a project in mind? Let's turn your ideas into visual reality.
             </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left: Notebook Form */}
          <div className="lg:col-span-7 relative pl-8 sm:pl-12 pt-2 perspective-1000 group">
             <Reveal delay={0.2}>
               {/* Notebook Body */}
               <div className="bg-[#fffefb] text-brand-dark rounded-r-3xl rounded-l-md shadow-[10px_10px_0px_0px_rgba(0,0,0,0.2)] relative min-h-[500px] transform transition-transform duration-500 hover:rotate-1 origin-center">
                  
                  {/* Spiral Binding Visuals */}
                  <div className="absolute left-[-20px] sm:left-[-25px] top-0 bottom-0 w-10 sm:w-12 flex flex-col justify-evenly py-8 z-20 pointer-events-none">
                     {[...Array(8)].map((_, i) => (
                       <div key={i} className="relative w-full h-12">
                          {/* Hole */}
                          <div className="absolute left-4 w-4 h-4 bg-[#2a2a2a] rounded-full shadow-inner"></div>
                          {/* Ring */}
                          <div className="absolute left-[-10px] top-1 w-12 h-6 border-4 border-gray-400 rounded-[50%] transform -rotate-12 bg-transparent shadow-[0_2px_1px_rgba(0,0,0,0.1)]"></div>
                       </div>
                     ))}
                  </div>

                  {/* Content Area */}
                  <div className="p-8 sm:p-12 relative overflow-hidden">
                    {/* Lined Paper Background */}
                    <div className="absolute inset-0 pointer-events-none opacity-20" 
                         style={{ backgroundImage: 'linear-gradient(#008CBA 1px, transparent 1px)', backgroundSize: '100% 40px', marginTop: '40px' }}>
                    </div>

                    {!isSent ? (
                      <div className="relative z-10 animate-in fade-in duration-500">
                        <div className="mb-8 flex items-end gap-3">
                           <h3 className="font-display text-4xl text-brand-blue uppercase tracking-wide">Sketch Your Idea</h3>
                           <SpringDoodle className="w-16 h-6 text-brand-yellow mb-2" />
                        </div>

                        <form onSubmit={handleSend} className="space-y-8">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                                <div className="group/input">
                                    <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block group-focus-within/input:text-brand-blue transition-colors">Name</label>
                                    <input 
                                        type="text" 
                                        required
                                        value={formState.name}
                                        onChange={e => setFormState({...formState, name: e.target.value})}
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-2 font-hand text-xl text-brand-dark focus:border-brand-blue focus:outline-none transition-colors placeholder-gray-300"
                                        placeholder="Who are you?"
                                    />
                                </div>
                                <div className="group/input">
                                    <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block group-focus-within/input:text-brand-blue transition-colors">Email</label>
                                    <input 
                                        type="email" 
                                        required
                                        value={formState.email}
                                        onChange={e => setFormState({...formState, email: e.target.value})}
                                        className="w-full bg-transparent border-b-2 border-gray-200 py-2 font-hand text-xl text-brand-dark focus:border-brand-blue focus:outline-none transition-colors placeholder-gray-300"
                                        placeholder="How do I reach you?"
                                    />
                                </div>
                            </div>
                            
                            <div className="group/input">
                                <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block group-focus-within/input:text-brand-blue transition-colors">Message</label>
                                <textarea 
                                    required
                                    rows={4}
                                    value={formState.message}
                                    onChange={e => setFormState({...formState, message: e.target.value})}
                                    className="w-full bg-transparent border-b-2 border-gray-200 py-2 font-hand text-xl text-brand-dark focus:border-brand-blue focus:outline-none transition-colors resize-none leading-relaxed placeholder-gray-300"
                                    placeholder="Tell me about your project..."
                                />
                            </div>

                            <div className="pt-4 flex justify-end">
                                <button 
                                    type="submit" 
                                    disabled={isSending}
                                    className="group relative px-8 py-3 bg-brand-yellow text-brand-dark font-display text-xl tracking-wider rounded-lg transform -rotate-2 hover:rotate-0 hover:scale-105 transition-all shadow-md hover:shadow-lg disabled:opacity-70 disabled:cursor-not-allowed disabled:transform-none"
                                >
                                    {isSending ? (
                                        <span className="flex items-center gap-2"><Loader2 className="animate-spin" size={20}/> Sending...</span>
                                    ) : (
                                        <span className="flex items-center gap-2">Send It <PaperPlane className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></span>
                                    )}
                                </button>
                            </div>
                        </form>
                      </div>
                    ) : (
                      <div className="flex flex-col items-center justify-center h-full min-h-[400px] text-center p-8 animate-in zoom-in-50 duration-500">
                          <div className="relative mb-6">
                               <CircleHighlight className="absolute -inset-4 text-brand-yellow animate-pulse" />
                               <Check size={64} className="text-brand-blue relative z-10" />
                          </div>
                          <h3 className="font-display text-4xl text-brand-dark mb-4">You're Awesome!</h3>
                          <p className="font-hand text-xl text-gray-500 mb-8 max-w-sm mx-auto leading-relaxed">
                              I've received your message. I'll sharpen my pencils and get back to you soon!
                          </p>
                          <button 
                            onClick={() => setIsSent(false)} 
                            className="text-gray-400 hover:text-brand-blue font-display uppercase tracking-widest text-sm transition-colors flex items-center gap-2"
                          >
                            <ArrowLoop className="w-5 h-5 rotate-180" /> Send Another
                          </button>
                      </div>
                    )}
                  </div>
               </div>
             </Reveal>
          </div>

          {/* Right: Desk Items (Info) */}
          <div className="lg:col-span-5 flex flex-col gap-8 lg:pl-8">
             
             <Reveal delay={0.4}>
               {/* Sticky Note: Availability & Time */}
               <div className="bg-[#fff9c4] text-brand-dark p-6 shadow-lg transform rotate-2 hover:rotate-0 transition-transform duration-300 relative group">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-yellow-400/30 backdrop-blur-sm -rotate-1"></div>
                  
                  <div className="flex justify-between items-start mb-4 border-b border-brand-dark/10 pb-4">
                     <div>
                        <h4 className="font-display text-2xl">Status</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                          </span>
                          <span className="font-hand font-bold text-sm text-green-700">Open for Work</span>
                        </div>
                     </div>
                     <div className="text-right">
                        <div className="flex items-center gap-1 text-brand-dark/50 justify-end">
                          <MapPin size={14} />
                          <span className="text-xs font-bold uppercase tracking-wider">Sri Lanka</span>
                        </div>
                        <div className="flex items-center gap-2 mt-1 justify-end" title="Current local time">
                          <Clock size={16} className="text-brand-blue" />
                          <span className="font-mono font-bold text-lg">{time}</span>
                        </div>
                     </div>
                  </div>

                  <div className="space-y-3">
                     <div 
                       className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer transition-colors group/link"
                       onClick={() => copyToClipboard('tchama333@gmail.com', 'email')}
                     >
                        <div className="bg-brand-blue text-white p-2 rounded-md group-hover/link:scale-110 transition-transform"><Mail size={18} /></div>
                        <span className="font-hand text-lg flex-1">tchama333@gmail.com</span>
                        {copied === 'email' ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-gray-400 opacity-0 group-hover/link:opacity-100" />}
                     </div>
                     <div 
                       className="flex items-center gap-3 p-2 hover:bg-black/5 rounded-lg cursor-pointer transition-colors group/link"
                       onClick={() => copyToClipboard('+94779767548', 'phone')}
                     >
                        <div className="bg-brand-blue text-white p-2 rounded-md group-hover/link:scale-110 transition-transform"><Phone size={18} /></div>
                        <span className="font-hand text-lg flex-1">+94 77 976 7548</span>
                        {copied === 'phone' ? <Check size={18} className="text-green-600" /> : <Copy size={18} className="text-gray-400 opacity-0 group-hover/link:opacity-100" />}
                     </div>
                  </div>

                  {/* Social Stickers */}
                  <div className="mt-6 flex justify-center gap-3 pt-4 border-t border-brand-dark/10">
                     {socials.map((s, i) => (
                        <a key={i} href={s.url} className={`p-2.5 rounded-full bg-white text-brand-dark shadow-sm transition-all hover:-translate-y-1 hover:shadow-md ${s.color} hover:text-white`}>
                          {s.icon}
                        </a>
                     ))}
                  </div>
               </div>
             </Reveal>

             <Reveal delay={0.6}>
               {/* Platform Badges */}
               <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                  {platforms.map((p, idx) => (
                     <a 
                       key={idx}
                       href={p.url}
                       target="_blank"
                       rel="noopener noreferrer"
                       className={`
                         group flex items-center justify-between p-4 bg-white rounded-xl shadow-lg 
                         transform transition-all duration-300 hover:scale-[1.02] border-2 border-transparent
                         ${idx % 2 === 0 ? '-rotate-1 hover:rotate-0' : 'rotate-1 hover:rotate-0'}
                         ${p.border}
                       `}
                     >
                        <div className="flex items-center gap-3">
                           <div className={`w-3 h-3 rounded-full ${p.color.replace('text-', 'bg-')}`}></div>
                           <span className="font-display text-xl text-brand-dark">{p.name}</span>
                        </div>
                        <div className={`p-2 rounded-full ${p.bg} ${p.color} opacity-0 group-hover:opacity-100 transition-opacity`}>
                           <ArrowUpRight size={20} />
                        </div>
                     </a>
                  ))}
               </div>
             </Reveal>

          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6">
           <div className="text-left">
              <div className="font-display text-2xl text-white tracking-widest">CHAMODYA</div>
              <p className="font-hand text-white/40 text-sm mt-1">
                © {new Date().getFullYear()} All Rights Reserved.
              </p>
           </div>
           
           <button 
             onClick={scrollToTop}
             className="group flex items-center gap-2 px-6 py-3 rounded-full bg-brand-dark border-2 border-white/20 hover:border-brand-yellow hover:text-brand-yellow text-white transition-all duration-300"
           >
             <span className="font-display uppercase tracking-widest text-sm">Back to Top</span>
             <ArrowUp size={16} className="group-hover:-translate-y-1 transition-transform" />
           </button>
        </div>

      </div>
    </footer>
  );
};

export default Contact;