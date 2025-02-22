import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../../styles/SkillCard.css'

function SkillCard({ name, classImage, onClick, selected }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`bdsm-skill-card ${hovered ? "hovered" : ""} ${selected ? "selected" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
        >
            <img src={classImage} alt="class" className="skill-image" />
            <div className="skill-name">{name}</div>
        </div>
    )
}

export default SkillCard
