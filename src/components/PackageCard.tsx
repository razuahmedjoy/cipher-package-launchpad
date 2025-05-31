
import React from 'react';
import { Package } from 'lucide-react';

interface PackageCardProps {
  packageName: string;
  isSelected: boolean;
  onSelect: () => void;
}

const PackageCard = ({ packageName, isSelected, onSelect }: PackageCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`
        relative cursor-pointer transition-all duration-300 rounded-xl p-6
        ${isSelected 
          ? 'glitter-border animate-pulse-glow transform scale-105' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 hover:border-cyan-400'
        }
        hover:transform hover:scale-105 hover:shadow-2xl
      `}
    >
      <div className="flex flex-col items-center space-y-4">
        <div className={`
          p-4 rounded-full transition-all duration-300
          ${isSelected 
            ? 'bg-gradient-to-r from-cyan-400 to-purple-400 animate-pulse' 
            : 'bg-gray-700 group-hover:bg-gray-600'
          }
        `}>
          <Package 
            size={32} 
            className={`
              transition-all duration-300
              ${isSelected ? 'text-black' : 'text-cyan-400'}
            `} 
          />
        </div>
        
        <h3 className={`
          text-xl font-bold transition-all duration-300
          ${isSelected 
            ? 'text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-400' 
            : 'text-gray-300'
          }
        `}>
          {packageName}
        </h3>
        
        {isSelected && (
          <div className="absolute inset-0 rounded-xl animate-glitter pointer-events-none" />
        )}
      </div>
    </div>
  );
};

export default PackageCard;
