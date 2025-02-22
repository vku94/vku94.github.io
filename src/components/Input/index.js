import { h } from 'preact'
import { useState } from 'preact/hooks'
import '../../styles/Input.css'

function Input({ onInput, label, placeholder }) {
    const [focused, setFocused] = useState(false)

    return (
        <div className="bdsm-input-container">
            {label && (
                <label className="bdsm-label">{label}</label>
            )}
            <input
                type="text"
                placeholder={placeholder}
                className={`bdsm-input ${focused ? "focused" : ""}`}
                onFocus={() => setFocused(true)}
                onBlur={() => setFocused(false)}
                onInput={(e) => onInput(e.target.value)}
            />
        </div>
    );
}

export default Input
