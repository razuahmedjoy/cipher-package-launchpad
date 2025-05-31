
import React from 'react';
import { AlertTriangle } from 'lucide-react';

interface StatusMessageProps {
  message: string;
}

const StatusMessage = ({ message }: StatusMessageProps) => {
  return (
    <div className="flex items-center justify-center space-x-3 p-2 rounded-xl bg-red-900/20 border-2 border-red-500 animate-pulse mt-4">
      <AlertTriangle size={24} className="text-red-500" />
      <span className="text-red-500 font-bold text-lg">{message}</span>
    </div>
  );
};

export default StatusMessage;
