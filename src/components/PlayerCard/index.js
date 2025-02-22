import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../../styles/PlayerCard.css'

function PlayerCard({ name, classImage, onClick }) {
    const [hovered, setHovered] = useState(false)

    return (
        <div
            className={`bdsm-card ${hovered ? "hovered" : ""}`}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
            onClick={onClick}
        >
            <img src={classImage} alt="class" className="class-image" />
            <div className="player-name">{name}</div>
        </div>
    )
}

export default PlayerCard
