import { h } from "preact";
import { useState } from "preact/hooks";
import "../../styles/SkillCard.css";

function RaidToolCard({ name, image, onClick, selected }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      className={`bdsm-skill-card ${hovered ? "hovered" : ""} ${selected ? "selected" : ""}`}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      onClick={onClick}
    >
      <img src={image} alt="class" className="skill-image" />
      <div className="skill-name">{name}</div>
    </div>
  );
}

export default RaidToolCard;
