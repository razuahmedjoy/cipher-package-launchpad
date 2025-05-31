import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface StatusMessageProps {
  message: string;
  variant?: 'success' | 'error';
}

const StatusMessage = ({ message, variant = 'error' }: StatusMessageProps) => {
  const isSuccess = variant === 'success';
  
  return (
    <div className={`flex items-center justify-center space-x-3 p-2 rounded-xl ${isSuccess ? 'bg-green-900/20 border-2 border-green-500' : 'bg-red-900/20 border-2 border-red-500'} animate-pulse mt-4`}>
      {isSuccess ? (
        <CheckCircle size={24} className="text-green-500" />
      ) : (
        <AlertTriangle size={24} className="text-red-500" />
      )}
      <span className={`${isSuccess ? 'text-green-500' : 'text-red-500'} font-bold text-lg`}>{message}</span>
    </div>
  );
};

export default StatusMessage;
