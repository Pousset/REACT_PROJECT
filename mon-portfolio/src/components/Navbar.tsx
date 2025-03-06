import { Link, useLocation } from "react-router-dom";
import React from "react";

function Navbar() {
  const location = useLocation();

  // Function to check if the route is active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    <div style={styles.navbarWrapper as React.CSSProperties}>
      <nav style={styles.navbar as React.CSSProperties}>
        <div style={styles.navLinks as React.CSSProperties}>
          <Link
            className={`nav-link ${isActive("/") ? "active" : ""}`}
            to="/"
            style={
              {
                ...styles.navLink,
                ...(isActive("/") ? styles.activeLink : {}),
              } as React.CSSProperties
            }
          >
            Home
          </Link>
          <Link
            className={`nav-link ${isActive("/about") ? "active" : ""}`}
            to="/about"
            style={
              {
                ...styles.navLink,
                ...(isActive("/about") ? styles.activeLink : {}),
              } as React.CSSProperties
            }
          >
            About
          </Link>

          <Link
            className={`nav-link ${isActive("/projects") ? "active" : ""}`}
            to="/projects"
            style={
              {
                ...styles.navLink,
                ...(isActive("/projects") ? styles.activeLink : {}),
              } as React.CSSProperties
            }
          >
            Projects
          </Link>
          <Link
            className={`nav-link ${isActive("/resume") ? "active" : ""}`}
            to="/resume"
            style={
              {
                ...styles.navLink,
                ...(isActive("/contact") ? styles.activeLink : {}),
              } as React.CSSProperties
            }
          >
            Contact
          </Link>
        </div>
      </nav>
    </div>
  );
}

const styles = {
  navbarWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "100%",
    position: "fixed",
    top: 0,
    left: 0,
    zIndex: 1000,
    backgroundColor: "#111",
  },
  navbar: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    maxWidth: "800px",
    padding: "12px 20px",
    borderRadius: "25px",
    backgroundColor: "rgba(25, 25, 25, 0.8)",
    backdropFilter: "blur(10px)",
    margin: "10px 0",
  },
  navLinks: {
    display: "flex",
    justifyContent: "center",
    gap: "10px",
  },
  navLink: {
    padding: "8px 16px",
    color: "#fff",
    textDecoration: "none",
    borderRadius: "20px",
    fontSize: "16px",
    transition: "all 0.3s ease",
  },
  activeLink: {
    backgroundColor: "#333",
    color: "#fff",
  },
};

export default Navbar;
