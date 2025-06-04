import React from 'react';
import { IconProps } from '../../types';

const TreeIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V12M12 12C10.8954 12 10 11.1046 10 10C10 8.89543 10.8954 8 12 8C13.1046 8 14 8.89543 14 10C14 11.1046 13.1046 12 12 12ZM12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M8 16h8m-4 0v5" />
    {/* A simpler path representing a tree more clearly */}
     <path strokeLinecap="round" strokeLinejoin="round" d="M12 3l4 4h-2v4h-4V7H8l4-4z m0 8v10m-3-3h6" />
  </svg>
);

export default TreeIcon;