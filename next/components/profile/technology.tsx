import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus } from '@fortawesome/free-solid-svg-icons';

const TechTag = ({ text, onDelete, isEditMode }) => (
  <div
    style={{
      background: '#4F46E5',
      borderRadius: '8px',
      display: 'inline-flex',
      alignItems: 'center',
      padding: '3px 9px',
      margin: '2px'
    }}
  >
    <span style={{ color: 'white', marginRight: '5px' }}>{text}</span>
    {isEditMode && onDelete && (
      <FontAwesomeIcon
        icon={faMinus}
        className="cursor-pointer"
        style={{ color: 'white' }}
        onClick={onDelete}
      />
    )}
  </div>
);

export default TechTag;
