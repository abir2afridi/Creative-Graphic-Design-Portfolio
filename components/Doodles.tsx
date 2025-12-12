import React from 'react';

export const ArrowLoop: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10,50 C10,20 40,10 60,30 C80,50 50,80 30,70 C20,65 80,20 90,10" />
    <path d="M85,15 L90,10 L82,5" />
  </svg>
);

export const SquiggleUnderline: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 200 20" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
    <path d="M5,10 Q20,18 35,10 T65,10 T95,10 T125,10 T155,10 T185,10" />
  </svg>
);

export const CircleHighlight: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 50" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M10,25 C10,10 30,5 50,5 C80,5 90,20 90,25 C90,40 70,45 50,45 C20,45 10,35 10,25 Z" strokeDasharray="5,5"/>
  </svg>
);

export const PaperPlane: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 2L11 13" />
    <path d="M22 2L15 22L11 13L2 9L22 2Z" />
  </svg>
);

export const StarDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>
);

export const SpringDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 20" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
    <path d="M0,10 Q5,0 10,10 T20,10 T30,10 T40,10 T50,10 T60,10 T70,10 T80,10 T90,10 T100,10" />
  </svg>
);

export const CrownDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 100 60" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M10,50 L90,50 L90,20 L70,40 L50,10 L30,40 L10,20 Z" />
    <circle cx="10" cy="20" r="3" fill="currentColor" />
    <circle cx="50" cy="10" r="3" fill="currentColor" />
    <circle cx="90" cy="20" r="3" fill="currentColor" />
  </svg>
);

export const BulbDoodle: React.FC<{ className?: string }> = ({ className }) => (
  <svg viewBox="0 0 60 80" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20,50 C10,40 10,20 30,20 C50,20 50,40 40,50 L37,55 L23,55 L20,50" />
    <path d="M23,55 L23,65 L37,65 L37,55" />
    <path d="M27,65 L27,70 L33,70 L33,65" />
    <line x1="30" y1="15" x2="30" y2="5" />
    <line x1="15" y1="20" x2="7" y2="12" />
    <line x1="45" y1="20" x2="53" y2="12" />
  </svg>
);

export const CrossDoodle: React.FC<{ className?: string }> = ({ className }) => (
   <svg viewBox="0 0 20 20" className={className} fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round">
     <path d="M5,5 L15,15 M15,5 L5,15" />
   </svg>
);

export const CurlyArrow: React.FC<{ className?: string; flip?: boolean }> = ({ className, flip }) => (
  <svg viewBox="0 0 100 100" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" style={{ transform: flip ? 'scaleX(-1)' : undefined }}>
    <path d="M20,80 Q50,20 80,40" />
    <path d="M75,35 L80,40 L75,45" />
  </svg>
);