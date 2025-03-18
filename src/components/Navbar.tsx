import { Link, useLocation } from "react-router-dom";
import React from "react";
import UserMenu from "./UserMenu";

// Définition du composant Navbar
function Navbar() {
  // Utilisation du hook useLocation pour obtenir l'objet location
  const location = useLocation();

  // Fonction pour vérifier si la route est active
  const isActive = (path: string): boolean => {
    return location.pathname === path;
  };

  return (
    // Style pour le conteneur de la barre de navigation
    <div style={styles.navbarWrapper as React.CSSProperties}>
      <nav style={styles.navbar as React.CSSProperties}>
        <div style={styles.navLinks as React.CSSProperties}>
          {/* Lien vers la page d'accueil */}
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
          {/* Lien vers la page "About" */}
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
          {/* Lien vers la page "Projects" */}
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
          {/* Lien vers la page "Contact" */}
          <Link
            className={`nav-link ${isActive("/contact") ? "active" : ""}`}
            to="/contact"
            style={
              {
                ...styles.navLink,
                ...(isActive("/contact") ? styles.activeLink : {}),
              } as React.CSSProperties
            }
          >
            Contact
          </Link>
          {/* Menu utilisateur */}
          <UserMenu />
        </div>
      </nav>
    </div>
  );
}

// Définition des styles pour les différents éléments de la barre de navigation
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
