import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import { display } from "@mui/system";

export default function Home() {
  return (
    <div>
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
  );
}

const styles = {
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
