import React from 'react';

type Props = {
  children: React.ReactNode;
};

const CircleIcon = ({ children }: Props) => {
  return (
    <div className="relative w-16 h-16 mb-4 flex items-center justify-center">
      <div className="absolute w-full h-full rounded-full bg-gradient-to-tl from-0% from-[#4e059d]  to-[#5046e5]"></div>
      <svg
        viewBox="0 0 64 64"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <circle
          cx="32"
          cy="32"
          r="32"
          fill="transparent" // Make the circle transparent to show the gradient background
        ></circle>
      </svg>
      {children}
    </div>
  );
};

export default CircleIcon;
