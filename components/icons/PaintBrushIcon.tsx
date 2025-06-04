import React from 'react';
import { IconProps } from '../../types';

const PaintBrushIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 19.5L5.25 12l7.5-7.5 7.5 7.5-7.5 7.5z" /> {/* Placeholder, will replace with a better brush */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M7.5 21a4.5 4.5 0 01-4.5-4.5V15M7.5 21h9M7.5 21v-6M16.5 16.5V6a1.5 1.5 0 00-1.5-1.5h-6A1.5 1.5 0 007.5 6v10.5m9 0L12 21m4.5-4.5H7.5" />
    {/* Simpler Paint Brush Icon */}
    <path strokeLinecap="round" strokeLinejoin="round" d="M9.53 16.122a3 3 0 00-4.242 0c-1.172 1.172-1.172 3.071 0 4.242.996.996 2.607.996 3.603 0l.738-.738c.55-.55.55-1.442 0-1.992l-1.016-1.016zm.707-7.071l2.121-2.121A3 3 0 009.53 5.05L5.05 9.53a3 3 0 000 4.242l2.121 2.121" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 21v-4.5A1.5 1.5 0 0013.5 15h-3A1.5 1.5 0 009 16.5V21m6-15H9a2 2 0 00-2 2v4a2 2 0 002 2h6a2 2 0 002-2V8a2 2 0 00-2-2z" />
  </svg>
);

export default PaintBrushIcon;