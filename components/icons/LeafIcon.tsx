
import React from 'react';
import { IconProps } from '../../types';

const LeafIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21.75c2.468 0 4.5-2.032 4.5-4.5s-2.032-4.5-4.5-4.5S7.5 14.782 7.5 17.25s2.032 4.5 4.5 4.5zm0 0V6.75m0 0A4.5 4.5 0 007.5 11.25h9A4.5 4.5 0 0012 6.75zM5.25 9.75A2.25 2.25 0 003 12v1.5a2.25 2.25 0 002.25 2.25h.75m12-3.75h.75a2.25 2.25 0 012.25 2.25V12a2.25 2.25 0 01-2.25 2.25h-.75" />
  </svg>
);

export default LeafIcon;