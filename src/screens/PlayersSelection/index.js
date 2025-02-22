import { h } from 'preact'
import { useMemo, useContext, useCallback } from 'preact/hooks'
import AppContext from '../../providers/appProvider'
import PlayerCard from '../../components/PlayerCard'
import Error from '../../screens/Error'
import { SPEC_ICON_MAP } from '../../constants'
import { reportCastsToPlayers } from '../../transformers'

const getBlizzardIconUrl = (classSpec) => {
    const iconName = SPEC_ICON_MAP[classSpec] || "inv_misc_questionmark"
    return `https://render.worldofwarcraft.com/eu/icons/56/${iconName}.jpg`
}

function PlayersSelection ({ handleNextStepNav }) {
    const { reportRawData } = useContext(AppContext)

    const playersList = useMemo(() => reportCastsToPlayers(reportRawData), [reportRawData])

    const handleOnSelectPlayer = useCallback((player) =>
        handleNextStepNav(player), [handleNextStepNav, playersList])

    return playersList.length ? (
        <div className="screen">
            <div className="list-container">
                {playersList.map(({ id, name, iconName }) => (
                    <PlayerCard
                        key={id}
                        name={name}
                        classImage={getBlizzardIconUrl(iconName)}
                        onClick={() => handleOnSelectPlayer({ id, name, iconName })}
                    />
                ))}
            </div>
        </div>
    ) : (
        <Error />
    )
}

export default PlayersSelection
