import React from 'react';
import CircleIcon from './CircleIcon';

export default function SpeedIcon() {
  return (
    <CircleIcon>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 20 20"
        aria-hidden="true"
        className="absolute z-10 left-0 right-0 m-auto bottom-0 top-0 stroke-current text-purple-100"
        height="32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
          clip-rule="evenodd"
        ></path>
      </svg>
    </CircleIcon>
  );
}
