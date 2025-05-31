import React, { useState } from 'react';
import PackageCard from '../components/PackageCard';
import LaunchButton from '../components/LaunchButton';
import StatusMessage from '../components/StatusMessage';
import { Package, Star, Shield } from 'lucide-react';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const packages = [
    {
      name: 'Package 1',
      price: 550,
      bonus: 200,
      icon: <Package size={20} />,
    },
    {
      name: 'Package 2',
      price: 1600,
      bonus: 500,
      icon: <Star size={20} />,
    },
    {
      name: 'Package 3',
      price: 3600,
      bonus: 1000,
      icon: <Shield size={20} />,
    },
  ];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setStatus(null);
  };

  const handleLaunchCode = () => {
    if (selectedPackage && !isLoading) {
      setIsLoading(true);
      setStatus(null);

      setTimeout(() => {
        setIsLoading(false);
        setStatus('Server loaded');
      }, 3000);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-2">
          <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
            Rug Rader ViP
          </h1>
          {/* Status Message */}
          {status && (
            <div className="flex justify-center">
              <StatusMessage message={status} />
            </div>
          )}

        </div>

        {/* Package Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map(({ name, price, bonus, icon }) => (
            <PackageCard
              key={name}
              packageName={name}
              isSelected={selectedPackage === name}
              onSelect={() => handlePackageSelect(name)}
              price={price}
              bonus={bonus}
              icon={icon}
            />
          ))}
        </div>

        {/* Launch Button */}
        <div className="flex justify-center">
          <LaunchButton
            onClick={handleLaunchCode}
            disabled={!selectedPackage}
            isLoading={isLoading}
          />
        </div>


        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-blue-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
