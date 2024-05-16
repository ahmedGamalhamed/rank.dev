'use client';
import React, { useEffect, useRef } from 'react';
import TagIcon from './svgIcons/TagIcon';
import './joinButton.css';

export default function JoinButton() {
  const prevPos = useRef({ x: 0, y: 0 });
  const vector = useRef({ x: 0, y: 0 });
  const translate = useRef({ x: 0, y: 0 });
  const buttonRef = useRef<any>(null);
  useEffect(() => {
    const handleMove = (e: any) => {
      const { clientX, clientY } = e;
      vector.current = {
        x: clientX - prevPos.current.x,
        y: clientY - prevPos.current.y,
      };
      prevPos.current = { x: clientX, y: clientY };
    };

    document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <div
      style={{ padding: '50px' }}
      onMouseMove={() => {
        translate.current.x += vector.current.x;
        translate.current.y += vector.current.y;
        buttonRef.current.style.setProperty(
          '--x',
          translate.current.x * 2 + 'px'
        );
        buttonRef.current.style.setProperty(
          '--y',
          translate.current.y * 2 + 'px'
        );
      }}
      className="target"
      ref={buttonRef}
    >
      <a className="px-10 py-3 mx-auto" href="#">
        <button
          className={`shadow-lg transform hover:scale-110 transition ease-in duration-300 active:scale-100 bg-gradient-to-l from-10% from-[#4e059d] via-[74%] via-[#40b7ff] to-[100%] to-[#5046e5] bg-[#5046e5] flex gap-3 rounded-3xl font-medium text-xl py-2 px-10 text-center text-white`}
        >
          <TagIcon />
          Join Now
        </button>
      </a>
    </div>
  );
}
