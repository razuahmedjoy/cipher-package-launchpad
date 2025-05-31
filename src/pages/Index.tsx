
import React, { useState } from 'react';
import PackageCard from '../components/PackageCard';
import LaunchButton from '../components/LaunchButton';
import StatusMessage from '../components/StatusMessage';

const Index = () => {
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);
  const [status, setStatus] = useState<string | null>(null);

  const packages = ['Package 1', 'Package 2', 'Package 3'];

  const handlePackageSelect = (packageName: string) => {
    setSelectedPackage(packageName);
    setStatus(null);
  };

  const handleLaunchCode = () => {
    if (selectedPackage) {
      setStatus('Server loaded');
    }
  };

  return (
    <div className="min-h-screen crypto-bg flex flex-col items-center justify-center p-8">
      <div className="max-w-4xl w-full space-y-12">
        {/* Header */}
        <div className="text-center space-y-4">
          <h1 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 animate-pulse-glow">
            Crypto Package Launcher
          </h1>
          <p className="text-xl text-gray-400">
            Select your preferred package and launch the code
          </p>
        </div>

        {/* Package Selection */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {packages.map((packageName) => (
            <PackageCard
              key={packageName}
              packageName={packageName}
              isSelected={selectedPackage === packageName}
              onSelect={() => handlePackageSelect(packageName)}
            />
          ))}
        </div>

        {/* Launch Button */}
        <div className="flex justify-center">
          <LaunchButton
            onClick={handleLaunchCode}
            disabled={!selectedPackage}
          />
        </div>

        {/* Status Message */}
        {status && (
          <div className="flex justify-center">
            <StatusMessage message={status} />
          </div>
        )}

        {/* Background Effects */}
        <div className="fixed inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-cyan-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute top-3/4 right-1/4 w-64 h-64 bg-purple-400/5 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-1/4 left-1/2 w-64 h-64 bg-pink-400/5 rounded-full blur-3xl animate-pulse" />
        </div>
      </div>
    </div>
  );
};

export default Index;
