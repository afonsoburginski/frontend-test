import React from 'react';

interface ProgressBarProps {
  value: number;
}

const ProgressBar: React.FC<ProgressBarProps> = ({ value }) => {
  return (
    <div className="relative h-1 bg-gray-200 rounded-full overflow-hidden mt-3">
      <div className="absolute left-0 top-0 h-full bg-tremor-brand transition-all duration-500 ease-in-out" style={{ width: `${value}%` }} />
      <div className="absolute left-0 top-0 h-full bg-transparent border-t-2 border-b-2 border-tremor-brand rounded-full" />
    </div>
  );
}

export default ProgressBar;