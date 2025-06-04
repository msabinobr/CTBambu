
import React from 'react';
import { IconProps } from '../../types';

const WrenchScrewdriverIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.528-1.036.926-2.186.926-3.349A4.5 4.5 0 0012.59 3.582c-1.585-.533-3.24.074-4.242 1.076S6.893 7.67 7.426 9.255a4.5 4.5 0 003.994 3.994c1.163 0 2.313-.398 3.349-.926l3.03-2.496M11.42 15.17L15.17 11.42" />
  </svg>
);

export default WrenchScrewdriverIcon;