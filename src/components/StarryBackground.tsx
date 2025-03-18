import React, { useEffect, useState } from "react";

// Définition des couleurs et des formes des étoiles
const starColors = [
  "text-yellow-300",
  "text-orange-300",
  "text-pink-300",
  "text-purple-300",
];
const starShapes = ["•", "✦", "✧", "+", "×", "★", "✸"];

// Définition du composant StarryBackground
const StarryBackground: React.FC<{ starCount?: number }> = ({
  starCount = 100, // Valeur par défaut du nombre d'étoiles
}) => {
  // État pour stocker les étoiles générées
  const [stars, setStars] = useState<
    {
      id: number;
      color: string;
      shape: string;
      left: string;
      top: string;
      duration: number;
    }[]
  >([]);

  // Fonction pour générer les étoiles
  const generateStars = () => {
    const newStars = Array.from({ length: starCount }, (_, index) => ({
      id: index,
      color: starColors[Math.floor(Math.random() * starColors.length)],
      shape: starShapes[Math.floor(Math.random() * starShapes.length)],
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      duration: 1 + Math.random() * 3,
    }));
    setStars(newStars);
  };

  // Utilisation de useEffect pour générer les étoiles lors du montage du composant
  useEffect(() => {
    generateStars();
  }, [starCount]);

  return (
    // Conteneur pour le fond étoilé
    <div style={styles.starryBackground}>
      {stars.map((star) => (
        // Chaque étoile est rendue avec des styles et des classes appliqués pour la couleur et l'animation
        <div
          key={star.id}
          style={{
            ...styles.star,
            left: star.left,
            top: star.top,
            animation: `twinkle ${star.duration}s infinite`,
          }}
          className={star.color}
        >
          {star.shape}
        </div>
      ))}
    </div>
  );
};

// Définition des styles pour les différents éléments
const styles: { [key: string]: React.CSSProperties } = {
  starryBackground: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    overflow: "hidden",
    opacity: 0.5,
    pointerEvents: "none",
    zIndex: -1, // fond étoilé doit etre derrière le contenu principal
  },
  star: {
    position: "absolute",
    fontSize: "12px",
  },
};

// Ajout des animations globales dans le document
const globalStyles = `
@keyframes twinkle {
  0%, 100% {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}`;

// Injection des styles globaux dans le document
const styleSheet = document.createElement("style");
styleSheet.type = "text/css";
styleSheet.innerText = globalStyles;
document.head.appendChild(styleSheet);

export default StarryBackground;
