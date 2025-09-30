import React from 'react';
import { AlertTriangle, CheckCircle } from 'lucide-react';

interface StatusMessageProps {
  message: string;
  variant?: 'success' | 'error';
}

const StatusMessage = ({ message, variant = 'error' }: StatusMessageProps) => {
  const isSuccess = variant === 'success';
  
  return (
    <div className={`w-full flex items-center justify-center space-x-3 px-4 py-3 rounded-2xl ${isSuccess ? 'bg-green-900/20 border-2 border-green-500' : 'bg-red-900/20 border-2 border-red-500'} mt-4`}>
      {isSuccess ? (
        <CheckCircle size={22} className="text-green-500" />
      ) : (
        <AlertTriangle size={22} className="text-red-500" />
      )}
      <span className={`${isSuccess ? 'text-green-500' : 'text-red-500'} font-semibold text-base`}>{message}</span>
    </div>
  );
};

export default StatusMessage;
