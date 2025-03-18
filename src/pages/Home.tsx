import reactLogo from "../assets/react.svg";
import githubLogo from "../assets/github.svg";
import vueLogo from "../assets/vue.svg";

const styles = {
  content: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  imageWrapper: {
    margin: "0 10px",
    position: "relative" as "relative",
  },
  image: {
    width: "50px",
    height: "50px",
  },
};

export default function Home() {
  const handleSourceCodeClick = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <div className="project_presentation" style={styles.content}>
      <div style={styles.content}>
        <div style={styles.imageWrapper}>
          <img
            src={githubLogo}
            alt="GitHub Logo"
            style={styles.image}
            onClick={() => handleSourceCodeClick("https://github.com/Pousset")}
          />
        </div>
        <div style={styles.imageWrapper}>
          <img
            src={reactLogo}
            alt="React Logo"
            style={styles.image}
            onClick={() =>
              handleSourceCodeClick("https://github.com/Pousset/REACT_PROJECT")
            }
          />
        </div>
        <div style={styles.imageWrapper}>
          <img
            src={vueLogo}
            alt="Vue Logo"
            style={styles.image}
            onClick={() =>
              handleSourceCodeClick("https://github.com/Pousset/REACT_PROJECT")
            }
          />
        </div>
      </div>
    </div>
  );
}
