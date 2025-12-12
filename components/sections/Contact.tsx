import React, { useState } from 'react';
import { Mail, Phone, ArrowUpRight, Copy, Check, Send, Linkedin, Dribbble, Instagram, Loader2 } from 'lucide-react';
import { PaperPlane, SpringDoodle, StarDoodle } from '../Doodles';

const Contact: React.FC = () => {
  const [copied, setCopied] = useState<string | null>(null);
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [isSending, setIsSending] = useState(false);

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
        setFormState({ name: '', email: '', message: '' });
    }, 1500);
  };

  const platforms = [
    { name: 'Fiverr', url: 'https://www.fiverr.com/chamodya', color: 'text-[#1DBF73]' },
    { name: 'Kwork', url: 'https://kwork.com/user/chamodya', color: 'text-[#FFA800]' },
    { name: 'Freelancer', url: 'https://www.freelancer.com/u/chamodya', color: 'text-[#29B2FE]' },
  ];

  const socials = [
    { icon: <Linkedin size={20} />, url: '#', label: 'LinkedIn', color: 'hover:bg-[#0077b5]' },
    { icon: <Dribbble size={20} />, url: '#', label: 'Dribbble', color: 'hover:bg-[#ea4c89]' },
    { icon: <Instagram size={20} />, url: '#', label: 'Instagram', color: 'hover:bg-[#e4405f]' },
  ];

  return (
    <footer className="bg-brand-dark py-24 px-6 relative overflow-hidden text-white min-h-screen flex flex-col justify-center">
       {/* Background Elements */}
       <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-10 w-96 h-96 bg-brand-blue rounded-full filter blur-[120px] opacity-20"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-brand-yellow rounded-full filter blur-[100px] opacity-10"></div>
          <PaperPlane className="absolute top-20 left-[10%] w-24 h-24 text-white/5 rotate-12 animate-float" />
       </div>

      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16 relative">
           <h2 className="font-display text-[4rem] sm:text-[7rem] leading-[0.9] mb-4 relative inline-block select-none drop-shadow-2xl">
             <span className="text-white">LET'S</span> <span className="text-brand-yellow">TALK</span>
             <StarDoodle className="absolute -top-6 -right-12 w-16 h-16 text-brand-yellow animate-spin-slow hidden sm:block" />
           </h2>
           <p className="font-hand text-xl sm:text-2xl text-white/70 max-w-xl mx-auto mt-4">
             Have a project in mind or just want to say hi? <br/> I'm always open to new ideas and opportunities.
           </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          {/* Left: Contact Form (Paper Style) */}
          <div className="lg:col-span-7 relative group">
             {/* Backing paper effect */}
             <div className="absolute inset-0 bg-white/5 rounded-[2rem] transform -rotate-1 scale-[1.02]"></div>
             
             <div className="bg-[#fdfbf7] text-brand-dark p-8 sm:p-10 rounded-[2rem] relative shadow-2xl overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-brand-blue via-brand-yellow to-brand-blue opacity-50"></div>
                
                <h3 className="font-display text-3xl mb-8 flex items-center gap-3">
                    <span className="bg-brand-blue text-white w-10 h-10 rounded-full flex items-center justify-center text-lg">1</span>
                    Send a Message
                </h3>

                <form onSubmit={handleSend} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        <div className="group/input">
                            <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block">Your Name</label>
                            <input 
                                type="text" 
                                required
                                value={formState.name}
                                onChange={e => setFormState({...formState, name: e.target.value})}
                                placeholder="John Doe"
                                className="w-full bg-transparent border-b-2 border-gray-200 py-3 font-hand text-xl focus:border-brand-blue focus:outline-none transition-colors placeholder-gray-300"
                            />
                        </div>
                        <div className="group/input">
                            <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block">Your Email</label>
                            <input 
                                type="email" 
                                required
                                value={formState.email}
                                onChange={e => setFormState({...formState, email: e.target.value})}
                                placeholder="john@example.com"
                                className="w-full bg-transparent border-b-2 border-gray-200 py-3 font-hand text-xl focus:border-brand-blue focus:outline-none transition-colors placeholder-gray-300"
                            />
                        </div>
                    </div>
                    
                    <div className="group/input">
                        <label className="font-bold text-xs uppercase tracking-widest text-gray-400 mb-1 block">Project Details</label>
                        <textarea 
                            required
                            rows={4}
                            value={formState.message}
                            onChange={e => setFormState({...formState, message: e.target.value})}
                            placeholder="Tell me about your project, timeline, and budget..."
                            className="w-full bg-transparent border-b-2 border-gray-200 py-3 font-hand text-xl focus:border-brand-blue focus:outline-none transition-colors resize-none placeholder-gray-300"
                        />
                    </div>

                    <div className="pt-4 flex justify-end">
                        <button 
                            type="submit" 
                            disabled={isSending}
                            className="bg-brand-dark text-white px-8 py-4 rounded-xl font-display text-xl tracking-wider hover:bg-brand-blue transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                            {isSending ? (
                                <>Sending <Loader2 className="animate-spin" /></>
                            ) : (
                                <>Send Message <Send size={20} className="-rotate-12 mb-1" /></>
                            )}
                        </button>
                    </div>
                </form>
             </div>
          </div>

          {/* Right: Info Hub */}
          <div className="lg:col-span-5 flex flex-col gap-6">
             
             {/* Contact Details Card */}
             <div className="bg-white/10 backdrop-blur-md border border-white/10 p-8 rounded-[2rem] hover:bg-white/15 transition-colors">
                <h3 className="font-display text-2xl text-white mb-6 flex items-center gap-3">
                    <span className="bg-brand-yellow text-brand-dark w-10 h-10 rounded-full flex items-center justify-center text-lg">2</span>
                    Contact Info
                </h3>
                
                <div className="space-y-4">
                    <div className="bg-brand-dark/30 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-brand-dark/50 transition-colors border border-white/5" onClick={() => copyToClipboard('tchama333@gmail.com', 'email')}>
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-blue/20 p-2.5 rounded-lg text-brand-blue">
                                <Mail size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-widest">Email</p>
                                <p className="font-hand text-lg text-white">tchama333@gmail.com</p>
                            </div>
                        </div>
                        <div className="text-white/30 group-hover:text-white transition-colors">
                             {copied === 'email' ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                        </div>
                    </div>

                    <div className="bg-brand-dark/30 p-4 rounded-xl flex items-center justify-between group cursor-pointer hover:bg-brand-dark/50 transition-colors border border-white/5" onClick={() => copyToClipboard('+94779767548', 'phone')}>
                        <div className="flex items-center gap-4">
                            <div className="bg-brand-blue/20 p-2.5 rounded-lg text-brand-blue">
                                <Phone size={20} />
                            </div>
                            <div>
                                <p className="text-xs text-white/40 uppercase tracking-widest">WhatsApp</p>
                                <p className="font-hand text-lg text-white">+94 77 976 7548</p>
                            </div>
                        </div>
                        <div className="text-white/30 group-hover:text-white transition-colors">
                             {copied === 'phone' ? <Check size={18} className="text-green-400" /> : <Copy size={18} />}
                        </div>
                    </div>
                </div>

                {/* Social Row */}
                <div className="mt-8 pt-6 border-t border-white/10 flex gap-3">
                    {socials.map((social, idx) => (
                        <a 
                            key={idx} 
                            href={social.url} 
                            className={`flex-1 h-12 flex items-center justify-center bg-white/5 rounded-lg text-white/60 hover:text-white transition-all hover:scale-105 ${social.color}`}
                            title={social.label}
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
             </div>

             {/* Platforms Grid */}
             <div className="bg-brand-yellow rounded-[2rem] p-6 text-brand-dark shadow-xl relative overflow-hidden group">
                 <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/20 rounded-full blur-xl group-hover:scale-150 transition-transform duration-700"></div>
                 
                 <h3 className="font-display text-2xl mb-4 relative z-10">Hire Me On</h3>
                 <div className="grid grid-cols-1 gap-3 relative z-10">
                    {platforms.map((p) => (
                        <a 
                            key={p.name} 
                            href={p.url} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="bg-white/90 p-4 rounded-xl flex items-center justify-between hover:scale-[1.02] transition-transform shadow-sm hover:shadow-md"
                        >
                            <span className={`font-display text-lg tracking-wide ${p.color}`}>{p.name}</span>
                            <ArrowUpRight size={18} className="text-gray-400" />
                        </a>
                    ))}
                 </div>
             </div>

          </div>

        </div>

        {/* Footer Bottom */}
        <div className="mt-24 text-center border-t border-white/10 pt-8 flex flex-col items-center">
           <SpringDoodle className="w-32 h-6 text-white/20 mb-6" />
           <p className="font-hand text-white/40 text-sm">
             © {new Date().getFullYear()} Chamodya Thilakarathna. Design & Code with ❤️.
           </p>
        </div>

      </div>
    </footer>
  );
};

export default Contact;