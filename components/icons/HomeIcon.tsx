import React from 'react';
import { IconProps } from '../../types';

const HomeIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955a.75.75 0 011.06 0l8.954 8.955M6.75 19.5V12m10.5 7.5V12M12 2.25v2.25m0 0H9m3 0h3m-3 5.25V12m0 7.5V12m0 0H9.75M12 12h2.25m-4.5 0H9m3 3.75H9m3 0h3m-3 3.75H9m3 0h3" />
    {/* A simpler path for a home icon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3M9 21V11l3-3 3 3v10" />
  </svg>
);

export default HomeIcon;