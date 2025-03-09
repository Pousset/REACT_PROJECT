import React from "react";

const StarryBackground: React.FC = () => {
  const stars = Array.from({ length: 100 }, (_, i) => ({
    id: i,
    size: Math.random() * 3 + 1 + "px",
    top: Math.random() * 100 + "vh",
    left: Math.random() * 100 + "vw",
    animationDuration: Math.random() * 5 + 2 + "s",
    animationDelay: Math.random() * 5 + "s",
  }));

  return (
    <div style={styles.starryBackground}>
      {stars.map((star) => (
        <div
          key={star.id}
          style={{
            ...styles.star,
            width: star.size,
            height: star.size,
            top: star.top,
            left: star.left,
            animationDuration: star.animationDuration,
            animationDelay: star.animationDelay,
          }}
        />
      ))}
    </div>
  );
};

const styles: { [key: string]: React.CSSProperties } = {
  starryBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    background: "black",
    overflow: "hidden",
    zIndex: -1, // Assurez-vous que le fond étoilé est derrière le contenu principal
  },
  star: {
    position: "absolute",
    background: "white",
    borderRadius: "50%",
    boxShadow: "0 0 5px white",
    animation: "twinkle infinite alternate ease-in-out",
  },
};

// Ajoutez les animations globales dans index.css ou dans un style global
const globalStyles = `
@keyframes twinkle {
  0% {
    opacity: 0.3;
    transform: scale(1);
  }
  100% {
    opacity: 1;
    transform: scale(1.2);
  }
}
`;

// Injectez les styles globaux dans le document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default StarryBackground;
