import { h } from 'preact'
import { useCallback } from 'preact/hooks'
import Button from '../../components/Button'

function SkillsSelection ({ handleNextStepNav }) {
    const handleBackHome = useCallback(() => window.location.reload(), [])

    return (
        <div className="screen" style={{ flexDirection: 'column' }}>
            <h1>Something was not quite nice :(</h1>
            <div style={{ marginTop: '40px' }}>
                <Button label={'Home'} onClick={handleBackHome} />
            </div>
        </div>
    )
}

export default SkillsSelection
