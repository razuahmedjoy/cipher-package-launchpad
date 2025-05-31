
import React from 'react';
import { Rocket, Loader2 } from 'lucide-react';

interface LaunchButtonProps {
  onClick: () => void;
  disabled: boolean;
  isLoading: boolean;
}

const LaunchButton = ({ onClick, disabled, isLoading }: LaunchButtonProps) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || isLoading}
      className={`
        relative px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300
        flex items-center justify-center space-x-3 min-w-[200px]
        ${disabled || isLoading
          ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:transform hover:scale-105 shadow-lg shadow-cyan-500/30'
        }
        group
      `}
    >
      {isLoading ? (
        <Loader2 size={24} className="animate-spin text-gray-500" />
      ) : (
        <Rocket 
          size={24} 
          className={`
            transition-all duration-300
            ${disabled ? 'text-gray-500' : 'text-white group-hover:animate-bounce'}
          `} 
        />
      )}
      <span>
        {isLoading ? 'Loading...' : 'Launch the Code'}
      </span>
    </button>
  );
};

export default LaunchButton;
