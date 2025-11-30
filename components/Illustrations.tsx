import React from 'react';

export const HoneycombPattern: React.FC<{ className?: string; color?: string }> = ({ 
  className = "", 
  color = "currentColor" 
}) => (
  <svg 
    viewBox="0 0 200 200" 
    xmlns="http://www.w3.org/2000/svg" 
    className={className}
    fill={color}
  >
    {/* Central Hex */}
    <path d="M100 65 L121.65 77.5 V102.5 L100 115 L78.35 102.5 V77.5 Z" opacity="0.9" />
    
    {/* Surrounding Ring */}
    <path d="M100 15 L121.65 27.5 V52.5 L100 65 L78.35 52.5 V27.5 Z" opacity="0.3" />
    <path d="M143.3 40 L164.95 52.5 V77.5 L143.3 90 L121.65 77.5 V52.5 Z" opacity="0.4" />
    <path d="M143.3 90 L164.95 102.5 V127.5 L143.3 140 L121.65 127.5 V102.5 Z" opacity="0.5" />
    <path d="M100 115 L121.65 127.5 V152.5 L100 165 L78.35 152.5 V127.5 Z" opacity="0.3" />
    <path d="M56.7 90 L78.35 102.5 V127.5 L56.7 140 L35.05 127.5 V102.5 Z" opacity="0.4" />
    <path d="M56.7 40 L78.35 52.5 V77.5 L56.7 90 L35.05 77.5 V52.5 Z" opacity="0.5" />
    
    {/* Outer Accents */}
    <path d="M100 -35 L121.65 -22.5 V2.5 L100 15 L78.35 2.5 V-22.5 Z" opacity="0.1" />
    <path d="M186.6 65 L208.25 77.5 V102.5 L186.6 115 L164.95 102.5 V77.5 Z" opacity="0.2" />
    <path d="M13.4 65 L35.05 77.5 V102.5 L13.4 115 L-8.25 102.5 V77.5 Z" opacity="0.2" />
  </svg>
);

export const LittleBee: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    {/* Filter for soft shadow */}
    <defs>
      <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="2" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    <g filter="url(#glow)">
        {/* Back Wing */}
        <path d="M60 40 C80 10 90 40 65 50" fill="#E2E8F0" fillOpacity="0.6" stroke="#94A3B8" strokeWidth="1" />
        
        {/* Body */}
        <ellipse cx="50" cy="55" rx="20" ry="28" fill="#FBBF24" stroke="#78350F" strokeWidth="2" />
        
        {/* Stripes - using arcs for 3D effect */}
        <path d="M34 45 Q50 50 66 45" stroke="#451A03" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M31 58 Q50 63 69 58" stroke="#451A03" strokeWidth="4" fill="none" strokeLinecap="round" />
        <path d="M36 70 Q50 75 64 70" stroke="#451A03" strokeWidth="4" fill="none" strokeLinecap="round" />

        {/* Front Wing */}
        <path d="M40 40 C20 10 10 40 35 50" fill="#F8FAFC" fillOpacity="0.8" stroke="#94A3B8" strokeWidth="1" />
        
        {/* Face */}
        <circle cx="43" cy="38" r="2.5" fill="#451A03" />
        <circle cx="57" cy="38" r="2.5" fill="#451A03" />
        <path d="M46 42 Q50 45 54 42" stroke="#451A03" strokeWidth="1.5" fill="none" strokeLinecap="round" />
        
        {/* Cheeks */}
        <circle cx="38" cy="42" r="2" fill="#F472B6" opacity="0.6" />
        <circle cx="62" cy="42" r="2" fill="#F472B6" opacity="0.6" />

        {/* Stinger */}
        <path d="M50 83 L53 90 L47 90 Z" fill="#451A03" />
        
        {/* Antennae */}
        <path d="M42 28 Q38 15 32 20" stroke="#451A03" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="20" r="1.5" fill="#451A03" />
        <path d="M58 28 Q62 15 68 20" stroke="#451A03" strokeWidth="1.5" fill="none" />
        <circle cx="68" cy="20" r="1.5" fill="#451A03" />
    </g>
  </svg>
);