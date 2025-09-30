import React from 'react';

interface PackageCardProps {
  packageName: string;
  label?: string;
  isSelected: boolean;
  onSelect: () => void;
  price: number;
  bonus: number;
  icon: React.ReactNode;
  badge?: string;
}

const PackageCard = ({ packageName, label, isSelected, onSelect, price, bonus, icon, badge }: PackageCardProps) => {
  return (
    <div
      onClick={onSelect}
      className={`
        relative cursor-pointer transition-all duration-300 rounded-2xl p-4
        flex items-center justify-between gap-3
        ${isSelected 
          ? 'bg-white/5 border border-cyan-400 shadow-lg shadow-cyan-400/20' 
          : 'bg-white/5 border border-white/10 hover:border-cyan-400 hover:bg-white/10 opacity-90 hover:opacity-100'
        }
      `}
    >
      {badge && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-amber-500/20 text-amber-300 border border-amber-400/40">
          {badge}
        </div>
      )}

      <div className="flex items-center gap-3">
        <div className={`p-3 rounded-full ${isSelected ? 'bg-cyan-500 text-gray-900' : 'bg-gray-700 text-gray-200'}`}>
          {icon}
        </div>
        <div className="flex flex-col">
          <h3 className={`text-base font-semibold ${isSelected ? 'text-white' : 'text-gray-200'}`}>
            {label || packageName}
          </h3>
        </div>
      </div>

      <div className="text-right">
        <div className="text-cyan-400 font-bold text-lg">${price}</div>
        <div className="text-green-400 text-sm">+${bonus}</div>
      </div>
    </div>
  );
};

export default PackageCard;
