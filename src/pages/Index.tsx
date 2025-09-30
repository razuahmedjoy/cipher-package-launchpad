import React, { useEffect, useState } from 'react';
import PackageCard from '../components/PackageCard';
import LaunchButton from '../components/LaunchButton';
import StatusMessage from '../components/StatusMessage';
import VipCodePanel, { VipEntry } from '../components/VipCodePanel';
import OverloadPanel from '../components/OverloadPanel';
import { Package, Star, Shield, Zap, Activity, ShieldCheck, Award } from 'lucide-react';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [vipCurrent, setVipCurrent] = useState<VipEntry | null>(null);
  const [vipRecent, setVipRecent] = useState<VipEntry[]>([]);

  type Pkg = {
    name: string;
    label: string;
    price: number;
    bonus: number;
    icon: React.ReactNode;
    badge?: string;
  };

  const packages: Pkg[] = [
    {
      name: 'Package 1',
      label: 'Starter',
      price: 550,
      bonus: 200,
      icon: <Package size={20} />,
    },
    {
      name: 'Package 2',
      label: 'Pro',
      price: 1600,
      bonus: 500,
      icon: <Star size={20} />,
      badge: 'POPULAR',
    },
    {
      name: 'Package 3',
      label: 'Premium',
      price: 3600,
      bonus: 1000,
      icon: <Shield size={20} />,
    },
  ];

  // Random initial state: Starter, Pro, or none
  useEffect(() => {
    const roll = Math.random();
    if (roll < 1 / 3) {
      setSelectedPackage('Package 1');
    } else if (roll < 2 / 3) {
      setSelectedPackage('Package 2');
    } else {
      setSelectedPackage(null);
    }
    setStatus(null);
    setVipCurrent(null);
  }, []);

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setStatus(null);
    setVipCurrent(null);
  };

  const handleLaunchCode = () => {
    if (selectedPackage && !isLoading) {
      setIsLoading(true);
      setStatus(null);

      setTimeout(() => {
        setIsLoading(false);
        if (selectedPackage === 'Package 1') {
          setVipCurrent(null);
          setStatus('Server loaded');
        } else {
          const randomNum = Math.floor(1000 + Math.random() * 9000); // Generates a 4-digit number
          const isPro = selectedPackage === 'Package 2';
          const code = isPro
            ? `RUG-PRO-${randomNum}`
            : `RUG-PREMIUM-${randomNum}`;
          const entry: VipEntry = { code, tier: isPro ? 'Pro' : 'Premium' };
          setVipCurrent(entry);
          setVipRecent((prev) => [entry, ...prev].slice(0, 5));
          setStatus(code);
        }
      }, 2000);
    }
  };

  const stats = [
    { label: 'Today', value: '100+', icon: <Activity size={14} className="text-cyan-400" /> },
    { label: 'Uptime', value: '99.9%', icon: <ShieldCheck size={14} className="text-green-400" /> },
    { label: 'Success', value: '95%+', icon: <Award size={14} className="text-orange-400" /> },
  ];

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch {
      console.error('Failed to copy to clipboard');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-950 to-gray-900 flex flex-col items-center px-4 py-6">
      <div className="w-full max-w-md space-y-6">
        {/* Header */}
        <div className="text-center space-y-1">
          <div className="mx-auto w-11 h-11 rounded-full bg-amber-500/15 border border-amber-400/30 flex items-center justify-center">
            <Zap size={22} className="text-amber-400" />
          </div>
          <h1 className="text-2xl font-extrabold text-white">RugRader VIP</h1>
          <p className="text-sm text-gray-400">Generate exclusive VIP codes For your next Rug</p>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-1">
          {stats.map(({ label, value, icon }) => (
            <div key={label} className="rounded-xl bg-white/5 border border-white/10 p-3 text-center">
              <div className="flex items-center justify-center gap-1">
                {icon}
              </div>
              <div className="mt-1 text-base font-semibold text-white">{value}</div>

              <div className="flex items-center justify-center gap-1 text-xs text-gray-400">
                <span>{label}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Choose Package */}
        <div>
          <h2 className="text-white/90 font-semibold text-base mb-3">Choose Package</h2>
          <div className="space-y-4">
            {packages.map(({ name, label, price, bonus, icon, badge }) => (
              <PackageCard
                key={name}
                packageName={name}
                label={label}
                isSelected={selectedPackage === name}
                onSelect={() => handlePackageSelect(name)}
                price={price}
                bonus={bonus}
                icon={icon}
                badge={badge}
              />
            ))}
          </div>
        </div>

        {/* CTA */}
        <div>
          <LaunchButton
            onClick={handleLaunchCode}
            disabled={!selectedPackage}
            isLoading={isLoading}
          />
        </div>

        {/* Status / VIP / Overload */}
        {vipCurrent ? (
          <VipCodePanel current={vipCurrent} recent={vipRecent} onCopy={handleCopy} />
        ) : selectedPackage === 'Package 1' && status ? (
          <OverloadPanel />
        ) : (
          status && (
            <StatusMessage
              message={status}
              variant={selectedPackage === 'Package 1' ? 'error' : 'success'}
            />
          )
        )}
      </div>
    </div>
  );
};

export default Index;
