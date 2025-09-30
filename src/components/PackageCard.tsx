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

const GoldStar = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" aria-hidden="true" className="shrink-0 drop-shadow-[0_0_6px_rgb(255, 240, 25)]">
    <defs>
      <linearGradient id="goldGradient" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="#e6f871" />
        <stop offset="55%" stopColor="#f0ff68" />
        <stop offset="100%" stopColor="#edff78" />
      </linearGradient>
    </defs>
    <path
      d="M12 2.75l2.9 5.88 6.49.94-4.7 4.58 1.11 6.48-5.8-3.05-5.8 3.05 1.11-6.48-4.7-4.58 6.49-.94L12 2.75z"
      fill="url(#goldGradient)"
    />
  </svg>
);

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
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full text-[10px] font-semibold tracking-wide bg-gradient-to-r from-yellow-300 via-amber-400 to-orange-500 text-gray-900 shadow-[0_6px_16px_rgba(245,158,11,0.55)] ring-1 ring-amber-400/60 flex items-center gap-1">
          <GoldStar />
          <span>{badge}</span>
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
