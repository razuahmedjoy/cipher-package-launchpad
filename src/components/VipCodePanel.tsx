import React from 'react';
import { Check, Copy } from 'lucide-react';

export interface VipEntry {
  code: string;
  tier: 'Pro' | 'Premium';
}

interface VipCodePanelProps {
  current: VipEntry;
  recent: VipEntry[];
  onCopy: (text: string) => void;
}

const VipCodePanel = ({ current, recent, onCopy }: VipCodePanelProps) => {
  return (
    <div className="space-y-4 w-full">
      <div className="text-center">
        <h3 className="text-gray-200 font-semibold">Your VIP Code</h3>
      </div>

      <div className="rounded-2xl border border-emerald-500/40 bg-emerald-500/10 p-3">
        <div className="flex items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Check size={18} className="text-emerald-400" />
            <span className="text-emerald-300 font-bold tracking-wider">{current.code}</span>
          </div>
          <button
            onClick={() => onCopy(current.code)}
            className="p-2 rounded-lg hover:bg-white/10 text-gray-300"
            aria-label="Copy code"
          >
            <Copy size={18} />
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="text-white/90 font-semibold">Recent Codes</h4>
        <div className="space-y-2">
          {recent.length === 0 && (
            <div className="text-center text-gray-400 text-sm">Generate your first VIP code!</div>
          )}
          {recent.map((item, idx) => (
            <div key={`${item.code}-${idx}`} className="flex items-center justify-between rounded-xl bg-white/5 border border-white/10 px-4 py-3">
              <div>
                <div className="text-cyan-300 font-semibold tracking-wider">{item.code}</div>
                <div className="text-gray-400 text-sm">{item.tier}</div>
              </div>
              <button
                onClick={() => onCopy(item.code)}
                className="p-2 rounded-lg hover:bg-white/10 text-gray-300"
                aria-label={`Copy ${item.code}`}
              >
                <Copy size={18} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VipCodePanel;
