import React from 'react';
import { IconProps } from '../../types';

const PaletteIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    {/* Simplified Palette Icon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6H8.25A2.25 2.25 0 006 8.25v7.5A2.25 2.25 0 008.25 18h7.5A2.25 2.25 0 0018 15.75V8.25A2.25 2.25 0 0015.75 6z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 9.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM12 9.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM15 9.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01zM9 12.75a.75.75 0 01.75-.75h.01a.75.75 0 01.75.75v.01a.75.75 0 01-.75.75h-.01a.75.75 0 01-.75-.75v-.01z" />
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 17.25c-3.036 0-5.5-2.464-5.5-5.5S8.964 6.25 12 6.25s5.5 2.464 5.5 5.5-2.464 5.5-5.5 5.5z"/>
     <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 15.375a.375.375 0 01.375-.375h.01a.375.375 0 01.375.375v.01a.375.375 0 01-.375.375H10.125a.375.375 0 01-.375-.375v-.01z"/>
     <path strokeLinecap="round" strokeLinejoin="round" d="M13.875 15.375a.375.375 0 01.375-.375h.01a.375.375 0 01.375.375v.01a.375.375 0 01-.375.375h-.01a.375.375 0 01-.375-.375v-.01z"/>
     <path strokeLinecap="round" strokeLinejoin="round" d="M11.813 13.125a.375.375 0 01.375-.375h.01a.375.375 0 01.375.375v.01a.375.375 0 01-.375.375h-.01a.375.375 0 01-.375-.375v-.01z"/>
     <path strokeLinecap="round" strokeLinejoin="round" d="M18.375 10.5a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z"/>
  </svg>
);

export default PaletteIcon;