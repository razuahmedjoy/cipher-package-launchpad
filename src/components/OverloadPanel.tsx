import React from 'react';
import { AlertTriangle, Lightbulb } from 'lucide-react';

const OverloadPanel = () => {
    return (
        <div className="w-full space-y-3">
            <div className="rounded-2xl border border-red-500/50 bg-red-900/20 p-4">
                <div className="flex items-center justify-center gap-2">
                    <AlertTriangle size={18} className="text-red-400" />
                    <span className="text-red-300 font-semibold">Server Overloaded</span>
                </div>
                <p className="mt-1 text-sm text-red-200/90 text-center  ">Server capacity exceeded. Please try again.</p>
                <div className="rounded-lg border border-red-500/40 bg-red-900/50 p-2 mt-2 flex items-center gap-1">

                    <Lightbulb size={18} className="text-amber-300 inline" />
                    <span className="text-xs text-red-200/90">Upgrade to Pro or Premium for better server access!</span>

                </div>
            </div>


        </div>
    );
};

export default OverloadPanel;
