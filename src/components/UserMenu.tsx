import React, { useState, useEffect, useRef } from "react";
import Login from "./Login";
import Signup from "./Signup";

interface PopoverProps {
  content: React.ReactNode;
  isVisible: boolean;
  onClose: () => void;
}

const popoverStyles: React.CSSProperties = {
  position: "absolute",
  backgroundColor: "white",
  border: "1px solid #ccc",
  boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  padding: "10px",
  zIndex: 1000,
  borderRadius: "8px",
};

const overlayStyles: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100%",
  height: "100%",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 999,
};

const closeButtonStyles: React.CSSProperties = {
  float: "right",
  backgroundColor: "red",
  color: "white",
  border: "none",
  padding: "5px 10px",
  cursor: "pointer",
};

const Popover: React.FC<PopoverProps> = ({ content, isVisible, onClose }) => {
  const popoverRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        popoverRef.current &&
        !popoverRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isVisible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isVisible, onClose]);

  if (!isVisible) return null;

  return (
    <>
      <div style={overlayStyles} />
      <div ref={popoverRef} style={popoverStyles}>
        <button onClick={onClose} style={closeButtonStyles}>
          Close
        </button>
        {content}
      </div>
    </>
  );
};

const UserMenu: React.FC = () => {
  const [isPopoverOpen, setIsPopoverOpen] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleUserIconClick = () => {
    setIsPopoverOpen(!isPopoverOpen);
  };

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignup(false);
    setIsPopoverOpen(true);
  };

  const handleSignupClick = () => {
    setShowSignup(true);
    setShowLogin(false);
    setIsPopoverOpen(true);
  };

  const handleClosePopover = () => {
    setShowLogin(false);
    setShowSignup(false);
    setIsPopoverOpen(false);
  };

  return (
    <div style={{ position: "relative" }}>
      <button style={styles.userButton} onClick={handleUserIconClick}>
        👤
      </button>
      {isPopoverOpen && (
        <Popover
          content={
            showLogin ? (
              <Login />
            ) : showSignup ? (
              <Signup />
            ) : (
              <div>
                <button style={styles.popoverButton} onClick={handleLoginClick}>
                  Connexion
                </button>
                <button
                  style={styles.popoverButton}
                  onClick={handleSignupClick}
                >
                  Inscription
                </button>
              </div>
            )
          }
          isVisible={isPopoverOpen}
          onClose={handleClosePopover}
        />
      )}
    </div>
  );
};

const styles = {
  userButton: {
    padding: "8px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "50%",
    cursor: "pointer",
    fontSize: "20px",
  },
  popoverContent: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    padding: "10px",
  },
  popoverButton: {
    padding: "8px 16px",
    backgroundColor: "#007bff",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
  },
};

export default UserMenu;
