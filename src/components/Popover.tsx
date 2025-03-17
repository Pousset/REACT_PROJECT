import React, { useEffect, useRef } from 'react';

interface PopoverProps {
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const popoverStyles: React.CSSProperties = {
  position: 'absolute',
  backgroundColor: 'white',
  border: '1px solid #ccc',
  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)',
  padding: '10px',
  zIndex: 1000,
};

const closeButtonStyles: React.CSSProperties = {
  float: 'right',
  backgroundColor: 'red',
  color: 'white',
  border: 'none',
  padding: '5px 10px',
  cursor: 'pointer',
};

const Popover: React.FC<PopoverProps> = ({ content, isVisible, onClose }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <div ref={popoverRef} style={popoverStyles}>
      <button onClick={onClose} style={closeButtonStyles}>Close</button>
      {content}
    </div>
  );
};

export default Popover;