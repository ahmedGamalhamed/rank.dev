import React from 'react';

export default function Logo() {
  return (
    <div className="w-96 h-96 relative overflow-hidden">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        className="absolute top-[-40px]"
        version="1.1"
        viewBox="0 15 150 150"
      >
        <polygon
          className="fill-[#318cd3]"
          points="76.848,58.714 102.469,58.714 139.091,101.972 102.469,145.23 76.848,145.23 113.469,101.972"
        ></polygon>
        <polygon
          className="fill-[#55007c]"
          points="68.956,58.714 43.335,58.714 6.713,101.972 43.335,145.23 68.956,145.23 32.335,101.972"
        ></polygon>
        <polygon
          className="fill-[#8612ad]"
          points="43.335,58.714 68.956,58.714 19.727,117.344 6.713,101.972"
        ></polygon>
        <polygon
          className="fill-[#70bde8]"
          points="76.848,145.23 126.11,86.638 139.091,101.972 102.469,145.23"
        ></polygon>
        <polygon
          className="fill-white"
          points="102.477,58.714 69.151,145.23 43.548,145.23 76.875,58.714"
        ></polygon>
        <polygon
          className="opacity-50 fill-[#8612ad]"
          points="102.477,58.714 69.151,145.23 43.548,145.23 76.875,58.714"
        ></polygon>
      </svg>
    </div>
  );
}
