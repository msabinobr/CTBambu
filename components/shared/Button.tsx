
import React from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  href?: string;
  disabled?: boolean; // Added disabled prop
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  type = 'button',
  variant = 'primary',
  className = '',
  href,
  disabled = false, // Default to false
}) => {
  const baseStyle = 'px-8 py-3 font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-opacity-75 transition-colors duration-300 ease-in-out text-lg';
  
  let variantStyle = '';
  switch (variant) {
    case 'primary':
      variantStyle = 'bg-accent text-primary hover:bg-yellow-400 focus:ring-yellow-500';
      break;
    case 'secondary':
      variantStyle = 'bg-primary text-white hover:bg-green-700 focus:ring-green-600';
      break;
    case 'outline':
      variantStyle = 'bg-transparent border-2 border-primary text-primary hover:bg-primary hover:text-white focus:ring-primary';
      break;
  }

  const disabledStyle = disabled ? 'opacity-50 cursor-not-allowed' : '';

  if (href && !disabled) { // Link should not be disabled in the same way a button is, but ensure href is not rendered if button is meant to be "disabled"
    return (
      <a
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className={`${baseStyle} ${variantStyle} ${className} ${disabledStyle} inline-block text-center`}
        aria-disabled={disabled} // Add aria-disabled for accessibility
        onClick={disabled ? (e) => e.preventDefault() : undefined} // Prevent navigation if disabled
      >
        {children}
      </a>
    );
  }
  
  // If href is provided but button is disabled, render it as a disabled-looking span or similar non-interactive element
  if (href && disabled) {
    return (
      <span
        className={`${baseStyle} ${variantStyle} ${className} ${disabledStyle} inline-block text-center`}
        aria-disabled="true"
      >
        {children}
      </span>
    );
  }


  return (
    <button
      type={type}
      onClick={onClick}
      className={`${baseStyle} ${variantStyle} ${className} ${disabledStyle}`}
      disabled={disabled} // Apply disabled attribute
    >
      {children}
    </button>
  );
};

export default Button;
