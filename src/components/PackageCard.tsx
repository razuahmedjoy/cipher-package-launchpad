
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
        relative cursor-pointer transition-all duration-300 rounded-lg p-4
        ${isSelected 
          ? 'bg-gradient-to-br from-gray-700 to-gray-800 border-2 border-cyan-400 shadow-lg shadow-cyan-400/20' 
          : 'bg-gradient-to-br from-gray-800 to-gray-900 border-2 border-gray-600 hover:border-cyan-400'
        }
        hover:transform hover:scale-105 hover:shadow-xl
      `}
    >
      <div className="flex flex-col items-center space-y-3">
        <div className={`
          p-3 rounded-full transition-all duration-300
          ${isSelected 
            ? 'bg-cyan-400 shadow-lg shadow-cyan-400/30' 
            : 'bg-gray-700 group-hover:bg-gray-600'
          }
        `}>
          <Package 
            size={20} 
            className={`
              transition-all duration-300
              ${isSelected ? 'text-gray-900' : 'text-cyan-400'}
            `} 
          />
        </div>
        
        <h3 className={`
          text-lg font-bold transition-all duration-300
          ${isSelected 
            ? 'text-cyan-400' 
            : 'text-gray-300'
          }
        `}>
          {packageName}
        </h3>
      </div>
    </div>
  );
};

export default PackageCard;
