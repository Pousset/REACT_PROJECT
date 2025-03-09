import React from "react";
import "./StarryBackground.css";

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
    <div className="starry-background">
      {stars.map((star) => (
        <div
          key={star.id}
          className="star"
          style={{
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

export default StarryBackground;
