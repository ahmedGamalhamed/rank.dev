//@ts-nocheck
'use client';
import React, { useEffect, useRef } from 'react';
import TagIcon from './svgIcons/TagIcon';
import './joinButton.css';
import Link from 'next/link';

export default function JoinButton() {
  const prevPos = useRef({ x: 0, y: 0 });
  const vector = useRef({ x: 0, y: 0 });
  const translate = useRef({ x: 0, y: 0 });
  const buttonRef = useRef<null | HTMLDivElement>(null);
  useEffect(() => {
    const handleMove = (e: any) => {
      const { clientX, clientY } = e;
      vector.current = {
        x: clientX - prevPos.current.x,
        y: clientY - prevPos.current.y,
      };
      prevPos.current = { x: clientX, y: clientY };
    };

    // document.addEventListener('mousemove', handleMove);
    return () => document.removeEventListener('mousemove', handleMove);
  }, []);
  return (
    <div
      style={{ padding: '30px' }}
      onMouseMove={() => {
        translate.current.x += vector.current.x;
        translate.current.y += vector.current.y;
        let translateX = translate.current.x * 3;
        let translateY = translate.current.y * 3;
        buttonRef.current?.style.setProperty('--x', translateX + 'px');
        buttonRef.current?.style.setProperty('--y', translateY + 'px');
        setTimeout(() => {
          const rect = buttonRef.current?.getClientRects()[0];
          if (!rect || translate.current.x == 0 || translate.current.y == 0)
            return;
          const { left, top, bottom, right } = rect;
          if (
            left < 0 ||
            right > screen.availWidth ||
            top < 0 ||
            bottom > screen.availHeight
          ) {
            translate.current = {
              x: 0,
              y: 0,
            };
            buttonRef.current.style.scale = 0;
            buttonRef.current.style.setProperty('--x', 0 + 'px');
            buttonRef.current.style.setProperty('--y', 0 + 'px');

            setTimeout(() => {
              buttonRef.current.style.scale = 1;
            }, 100);
          }
        }, 500);
      }}
      className="target"
      ref={buttonRef}
    >
      <Link className="px-10 py-3 mx-auto" href="/rooms">
        <span
          className={`shadow-lg transform hover:scale-110 transition ease-in duration-300 active:scale-100 bg-gradient-to-l from-10% from-[#4e059d] via-[74%] via-[#40b7ff] to-[100%] to-[#5046e5] bg-[#5046e5] flex gap-3 rounded-3xl font-medium text-xl py-2 px-10 text-center text-white`}
        >
          <TagIcon />
          Join Now
        </span>
      </Link>
    </div>
  );
}
