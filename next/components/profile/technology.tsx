import React from 'react';

const TechTag = ({ text }: { text: string }) => (
  <div
    style={{
      background: '#4F46E5',
      borderRadius: '8px',
      display: 'inline-block',
      padding: '3px 9px',
    }}
  >
    {text}
  </div>
);

export default TechTag;
