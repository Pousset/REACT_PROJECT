import ControlledAccordions from "../components/Accordeon";
import "../components/StarryBackground.tsx"; // Importez le fichier CSS
import StarryBackground from "../components/StarryBackground.tsx";

export default function Projects() {
  return (
    <>
      <StarryBackground />
      <div>
        <h2>Voila tout ce que j'ai fait</h2>
        <p>ET JE VOUS PROMETS QUE JE PEUX EN FAIRE PLUS</p>
        <ControlledAccordions />
      </div>
    </>
  );
}
