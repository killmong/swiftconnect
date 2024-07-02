'use client'
import { ReactNode, useState } from 'react';
interface TooltipProps {
  message: string;
  children: ReactNode;
}

const Tooltip: React.FC<TooltipProps> = ({ message, children }) => {
  const [showTooltip, setShowTooltip] = useState(false);

  return (
    <div className="relative flex items-center"
         onMouseEnter={() => setShowTooltip(true)}
         onMouseLeave={() => setShowTooltip(false)}>
      {children}
      {showTooltip && (
        <div className="absolute bottom-full mb-2 w-max bg-gray-700 text-white text-sm rounded px-2 py-1">
          {message}
        </div>
      )}
    </div>
  );
};

export default Tooltip;
