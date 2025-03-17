import React from 'react';

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

const Popover: React.FC<PopoverProps> = ({ content, isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div style={popoverStyles}>
      <button onClick={onClose} style={{ float: 'right' }}>Close</button>
      {content}
    </div>
  );
};

export default Popover;