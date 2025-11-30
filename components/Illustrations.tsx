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

export const HoneyPot: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 100" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="potGradient" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78350F" />
        <stop offset="50%" stopColor="#92400E" />
        <stop offset="100%" stopColor="#78350F" />
      </linearGradient>
      <linearGradient id="honeyGradient" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#FCD34D" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
       <filter id="dripGlow" x="-20%" y="-20%" width="140%" height="140%">
        <feGaussianBlur stdDeviation="1" result="blur" />
        <feComposite in="SourceGraphic" in2="blur" operator="over" />
      </filter>
    </defs>

    {/* Pot Body */}
    <path d="M20 35 C 20 20, 80 20, 80 35 L 85 70 C 90 95, 10 95, 15 70 Z" fill="url(#potGradient)" />
    
    {/* Pot Rim */}
    <ellipse cx="50" cy="35" rx="30" ry="8" fill="#5D2809" />
    
    {/* Honey Inside */}
    <ellipse cx="50" cy="36" rx="26" ry="6" fill="#FBBF24" />

    {/* Honey Drip */}
    <path d="M70 38 Q 75 45 72 55 Q 70 65 72 75 Q 75 80 70 80 Q 65 75 68 65 Q 70 55 65 45" fill="url(#honeyGradient)" filter="url(#dripGlow)" />
    
    {/* Shine */}
    <ellipse cx="35" cy="50" rx="5" ry="10" fill="white" opacity="0.1" transform="rotate(-15 35 50)" />
  </svg>
);

export const DnaStrand: React.FC<{ className?: string }> = ({ className = "" }) => (
  <svg 
    viewBox="0 0 100 200" 
    className={className}
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="dnaStrand1" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#3B82F6" />
        <stop offset="100%" stopColor="#8B5CF6" />
      </linearGradient>
      <linearGradient id="dnaStrand2" x1="0%" y1="0%" x2="0%" y2="100%">
        <stop offset="0%" stopColor="#EF4444" />
        <stop offset="100%" stopColor="#F59E0B" />
      </linearGradient>
    </defs>

    {/* Rungs */}
    <g strokeWidth="2" strokeLinecap="round" opacity="0.6">
        <line x1="30" y1="20" x2="70" y2="20" stroke="#CBD5E1" />
        <line x1="30" y1="40" x2="70" y2="40" stroke="#CBD5E1" />
        <line x1="30" y1="60" x2="70" y2="60" stroke="#CBD5E1" />
        <line x1="30" y1="80" x2="70" y2="80" stroke="#CBD5E1" />
        <line x1="30" y1="100" x2="70" y2="100" stroke="#CBD5E1" />
        <line x1="30" y1="120" x2="70" y2="120" stroke="#CBD5E1" />
        <line x1="30" y1="140" x2="70" y2="140" stroke="#CBD5E1" />
        <line x1="30" y1="160" x2="70" y2="160" stroke="#CBD5E1" />
        <line x1="30" y1="180" x2="70" y2="180" stroke="#CBD5E1" />
    </g>

    {/* Strand 1 (Sine Wave) */}
    <path 
      d="M30 0 Q 70 25 30 50 T 30 100 T 30 150 T 30 200" 
      fill="none" 
      stroke="url(#dnaStrand1)" 
      strokeWidth="4" 
    />
    
    {/* Strand 2 (Cosine Wave essentially) */}
    <path 
      d="M70 0 Q 30 25 70 50 T 70 100 T 70 150 T 70 200" 
      fill="none" 
      stroke="url(#dnaStrand2)" 
      strokeWidth="4" 
    />

    {/* Nodes */}
    <circle cx="30" cy="50" r="3" fill="#3B82F6" />
    <circle cx="70" cy="50" r="3" fill="#EF4444" />
    <circle cx="30" cy="100" r="3" fill="#8B5CF6" />
    <circle cx="70" cy="100" r="3" fill="#F59E0B" />
    <circle cx="30" cy="150" r="3" fill="#3B82F6" />
    <circle cx="70" cy="150" r="3" fill="#EF4444" />
  </svg>
);