import React from 'react';
import CircleIcon from './CircleIcon';

export default function VideoIcon() {
  return (
    <CircleIcon>
      <svg
        stroke="currentColor"
        fill="currentColor"
        stroke-width="0"
        viewBox="0 0 576 512"
        aria-hidden="true"
        className="absolute z-10 left-0 right-0 m-auto bottom-0 top-0 stroke-current text-purple-100"
        height="32"
        width="32"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 128C0 92.7 28.7 64 64 64H320c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128zM559.1 99.8c10.4 5.6 16.9 16.4 16.9 28.2V384c0 11.8-6.5 22.6-16.9 28.2s-23 5-32.9-1.6l-96-64L416 337.1V320 192 174.9l14.2-9.5 96-64c9.8-6.5 22.4-7.2 32.9-1.6z" />
      </svg>
    </CircleIcon>
  );
}
