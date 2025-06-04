
import React from 'react';
import { IconProps } from '../../types';

const ChatBubbleOvalLeftEllipsisIcon: React.FC<IconProps> = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    fill="none" 
    viewBox="0 0 24 24" 
    strokeWidth={1.5} 
    stroke="currentColor" 
    className={`w-6 h-6 ${className}`}
  >
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3.697-3.697C12.056 15.26 10.52 15 9 15s-3.056.26-4.5.75L1.207 19.041V15.95c-.34-.02-.68-.045-1.02-.072A2.103 2.103 0 010 13.794V9.507c0-.97.616-1.813 1.5-2.097C2.753 7.14 4.28 7 6 7h2.864c.354 0 .708.024 1.05.071.342.047.682.103 1.016.168.328.062.65.133.968.214.32.082.632.173.936.272.302.097.596.206.882.325.282.117.554.249.816.397m0 0V12.5A2.25 2.25 0 0018 10.25h-2.25m-1.5 0V11a.75.75 0 00.75.75h.75a.75.75 0 00.75-.75V9.75M9 11.25h1.5m-1.5 0a1.5 1.5 0 01-1.5-1.5V8.25m1.5 1.5V15" />
  </svg>
);

export default ChatBubbleOvalLeftEllipsisIcon;
