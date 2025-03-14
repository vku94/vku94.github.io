import { h } from 'preact'
import { useMemo, useContext, useCallback, useState } from 'preact/hooks'
import AppContext from '../../providers/appProvider'
import SkillCard from '../../components/SkillCard'
import Error from '../../screens/Error'
import { extractPlayerSkills } from '../../transformers'
import Button from '../../components/Button'

const getBlizzardIconUrl = (icon_name) => `https://render.worldofwarcraft.com/eu/icons/56/${icon_name}`

function SkillsSelection ({ handleNextStepNav }) {
    const { reportRawData, selectedPlayer } = useContext(AppContext)

    const [selectedSkills, setSelectedSkills] = useState([])

    const processSelection = useCallback((id) => {
        setSelectedSkills((prev) => {
            if (prev.includes(id)) {
                return prev.filter(f => f !== id)
            }

            return [...prev, id]
        })
    }, [selectedSkills])

    const skillsList = useMemo(() =>
            extractPlayerSkills(reportRawData, selectedPlayer.id),
        [reportRawData, selectedPlayer])

    const handleOnSkillSelect = useCallback(() =>
        handleNextStepNav(selectedSkills), [handleNextStepNav, selectedSkills])

    const buttonDisabled = useMemo(() => !selectedSkills.length, [selectedSkills])

    return selectedPlayer && skillsList.length ? (
        <div className="screen" style={{ flexDirection: 'column' }}>
            <h1>{selectedPlayer.name}</h1>
            <div className="list-container">
                {skillsList.map(({ id, name, icon }) => (
                    <SkillCard
                        key={id}
                        name={name}
                        classImage={getBlizzardIconUrl(icon)}
                        onClick={() => processSelection(id)}
                        selected={selectedSkills.includes(id)}
                    />
                ))}
            </div>
            <div style={{ marginTop: '40px' }}>
                <Button label={'Do magic'} disabled={buttonDisabled} onClick={handleOnSkillSelect} />
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default SkillsSelection
