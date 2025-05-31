
import React from 'react';
import { Rocket } from 'lucide-react';

interface LaunchButtonProps {
  onClick: () => void;
  disabled: boolean;
}

const LaunchButton = ({ onClick, disabled }: LaunchButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
        flex items-center justify-center space-x-3 min-w-[200px]
        ${disabled 
          ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
          : 'glitter-border text-white hover:transform hover:scale-105 animate-pulse-glow'
        }
        group
      `}
    >
      <Rocket 
        size={24} 
        className={`
          transition-all duration-300
          ${disabled ? 'text-gray-500' : 'text-cyan-400 group-hover:animate-bounce'}
        `} 
      />
      <span className={`
        ${disabled 
          ? 'text-gray-500' 
          : 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400'
        }
      `}>
        Launch the Code
      </span>
      
      {!disabled && (
        <div className="absolute inset-0 rounded-xl animate-glitter opacity-50 pointer-events-none" />
      )}
    </button>
  );
};

export default LaunchButton;
