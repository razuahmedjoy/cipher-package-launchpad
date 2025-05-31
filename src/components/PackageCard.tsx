import React from 'react';
import { Package } from 'lucide-react';

interface PackageCardProps {
  packageName: string;
  isSelected: boolean;
  onSelect: () => void;
  price: number;
  bonus: number;
  icon: React.ReactNode;
}

const PackageCard = ({ packageName, isSelected, onSelect, price, bonus, icon }: PackageCardProps) => {
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
      <div className='absolute top-0 right-0 w-full'>
        <div className='flex w-full justify-between px-4 py-2'>
          <div className='flex items-center gap-2'>
            <p className='text-sm text-gray-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>{price}$</p>
          </div>
          <div className='flex items-center gap-2'>
            <p className='text-sm text-gray-400 font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500'>+{bonus}$</p>
          </div>

        </div>

      </div>
      <div className="flex flex-col items-center space-y-2">
        <div className={`
          p-3 rounded-full transition-all duration-300
          ${isSelected 
            ? 'bg-cyan-400 shadow-lg shadow-cyan-400/30' 
            : 'bg-gray-700 group-hover:bg-gray-600'
          }
        `}>
          {icon}
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
