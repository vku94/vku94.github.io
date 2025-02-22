import { h } from 'preact'
import { useMemo, useContext, useCallback } from 'preact/hooks'
import AppContext from '../../providers/appProvider'
import SkillCard from '../../components/SkillCard'
import Error from '../../screens/Error'
import { extractPlayerSkills } from '../../transformers'
import Button from '../../components/Button'

const getBlizzardIconUrl = (icon_name) => `https://render.worldofwarcraft.com/eu/icons/56/${icon_name}`

function SkillsSelection ({ handleNextStepNav }) {
    const { reportRawData, selectedPlayer } = useContext(AppContext)

    const skillsList = useMemo(() =>
            extractPlayerSkills(reportRawData, selectedPlayer.id),
        [reportRawData, selectedPlayer])

    const handleOnSkillSelect = useCallback((player) =>
        handleNextStepNav(player), [handleNextStepNav, skillsList])

    return selectedPlayer && skillsList.length ? (
        <div className="screen" style={{ flexDirection: 'column' }}>
            <h1>{selectedPlayer.name}</h1>
            <div className="list-container">
                {skillsList.map(({ id, name, icon }) => (
                    <SkillCard
                        key={id}
                        name={name}
                        classImage={getBlizzardIconUrl(icon)}
                    />
                ))}
            </div>
            <div style={{ marginTop: '40px' }}>
                <Button label={'Make magic'}/>
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default SkillsSelection
