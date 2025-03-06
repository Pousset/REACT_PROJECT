import { Link } from "react-router-dom";
import MenuConnect from "./MenuConnect";

function Navbar() {
  return (
    <nav style={styles.navbar}>
      <ul style={styles.navLinks}>
        <h2 style={styles.logo}>Mon Portfolio</h2>
        <li>
          <Link to="/" style={styles.link}>
            Accueil
          </Link>
        </li>
        <li>
          <Link to="/about" style={styles.link}>
            À propos
          </Link>
        </li>
        <li>
          <Link to="/projects" style={styles.link}>
            Projets
          </Link>
        </li>
        <li>
          <Link to="/contact" style={styles.link}>
            Contact
          </Link>
        </li>
      </ul>
      <MenuConnect />
    </nav>
  );
}

const styles = {
  navbar: {
    position: "fixed", // Fixer la navbar en haut de la page
    top: 0, // Positionner en haut
    left: "6%", // Positionner la navbar à 10% du bord gauche pour centrer globalement
    width: "85%", // La navbar prend 80% de la largeur de l'écran
    display: "flex",
    justifyContent: "space-between", // Espacement entre la gauche et la droite
    alignItems: "center",
    padding: "10px 20px",
    backgroundColor: "#333",
    color: "#fff",
    zIndex: 1000, // Placer la navbar au-dessus des autres éléments
  },
  logo: {
    margin: 0,
    fontSize: "24px", // Agrandir la police du logo
    fontWeight: "bold", // Ajouter du poids pour le logo
    flexGrow: 1, // Le logo prend tout l'espace à gauche
  },
  navLinks: {
    listStyle: "none",
    display: "flex",
    justifyContent: "center", // Centrer les liens dans l'espace restant
    gap: "20px", // Espacement entre les liens
    flexGrow: 1, // Espace pour les liens au centre
  },
  link: {
    color: "#fff",
    textDecoration: "none",
    fontSize: "18px",
  },
  menuConnect: {
    display: "flex",
    justifyContent: "flex-end", // Aligner le menu de connexion à droite
  },
};

export default Navbar;
