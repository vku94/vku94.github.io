import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../../styles/Button.css'

function Button({ label, onClick, disabled }) {
    const [pressed, setPressed] = useState(false)
    return (
        <button
            className={`bdsm-button ${pressed ? "active" : ""}`}
            onClick={onClick}
            onMouseDown={() => setPressed(true)}
            onMouseUp={() => setPressed(false)}
            disabled={disabled}
        >
            {label}
        </button>
    );
}

export default Button
