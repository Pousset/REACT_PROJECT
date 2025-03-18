import React, { useState } from "react";
import Popover from "./Popover";
import Login from "./Login";
import Signup from "./Signup";

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
          onClose={() => setIsPopoverOpen(false)}
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
