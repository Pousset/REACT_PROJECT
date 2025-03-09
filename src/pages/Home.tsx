import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import StarryBackground from "../components/StarryBackground";
import "../components/StarryBackground.css"; // Importez le fichier CSS

export default function Home() {
  return (
    <div>
      <StarryBackground />;
      <div style={styles.content}>
        <h1>Bienvenue sur mon porfolio</h1>
        <div style={styles.imagesContainer}>
          <a
            href="https://reactjs.org/"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.imageWrapper}
          >
            <img src={reactLogo} alt="React Logo" style={styles.image} />
          </a>
          <a
            href="https://github.com/Pousset/REACT_PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.imageWrapper}
          >
            <img src={githubLogo} alt="GitHub Logo" style={styles.image} />
          </a>
        </div>
      </div>
    </div>
  );
}

const styles: { [key: string]: React.CSSProperties } = {
  content: {
    position: "relative",
    zIndex: 1, // Assurez-vous que le contenu principal est au-dessus du fond étoilé
    width: "100%",
  },
  imagesContainer: {
    alignItems: "center",
    display: "flex",
    justifyContent: "space-around",
  },
  imageWrapper: {
    width: "80%",
    height: "auto",
  },
  image: {
    width: "100px",
    height: "20", // Assurez-vous que l'image conserve ses proportions
  },
};
