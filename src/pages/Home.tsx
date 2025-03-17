import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import vueLogo from "../assets/vue.svg";

const styles = {
  content: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageWrapper: {
    margin: '0 30px',
  },
  image: {
    width: '100px',
    height: '100px',
  },

};

export default function Home() {
  return (
    <div className="project_presentation" style={styles.content}>
      <div style={styles.content}>
        <a
          href="https://github.com/Pousset"
          target="_blank"
          rel="noopener noreferrer"
          style={styles.imageWrapper}
        >
          <img src={githubLogo} alt="GitHub Logo" style={styles.image} />
        </a>
          <a
            href="https://github.com/Pousset/REACT_PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.imageWrapper}
          >
            <img src={reactLogo} alt="React Logo" style={styles.image} />
          </a>
        </div>
          <a
            href="https://github.com/Pousset/REACT_PROJECT"
            target="_blank"
            rel="noopener noreferrer"
            style={styles.imageWrapper}
          >
            <img src={vueLogo} alt="Vue Logo" style={styles.image} />
          </a>
        </div>
  );
}
