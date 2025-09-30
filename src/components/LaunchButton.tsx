
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
        relative w-full px-5 py-4 rounded-2xl font-bold text-base md:text-lg transition-all duration-300
        flex items-center justify-center space-x-3
        ${disabled || isLoading
          ? 'bg-gray-700 text-gray-500 cursor-not-allowed' 
          : 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white hover:from-cyan-400 hover:to-blue-500 hover:transform hover:scale-[1.01] shadow-lg shadow-cyan-500/30'
        }
        group
      `}
    >
      {isLoading ? (
        <Loader2 size={22} className="animate-spin text-gray-300" />
      ) : (
        <Rocket 
          size={22} 
          className={`
            transition-all duration-300
            ${disabled ? 'text-gray-500' : 'text-white group-hover:animate-bounce'}
          `} 
        />
      )}
      <span>
        {isLoading ? 'Loading...' : 'Generate VIP Code'}
      </span>
    </button>
  );
};

export default LaunchButton;
