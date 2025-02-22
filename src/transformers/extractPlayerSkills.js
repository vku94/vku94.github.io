import { get } from 'lodash'

export default function (data, playerId) {
    // todo: enable optional chaining
    const allSkills = get(data, 'data.reportData.report.events.data', [])
    const skillsMeta = get(data, 'data.reportData.report.masterData.abilities', [])
    const playerCasts = allSkills.filter((f) => f.sourceID === playerId)

    const playerSkills = Array.from(new Map(playerCasts.map(cast => [cast.abilityGameID, cast])).values())

    return playerSkills.map((ps) => {
        const skillInfo = skillsMeta.find((sm) => sm.gameID === ps.abilityGameID)
        return ({
            id: ps.abilityGameID,
            name: get(skillInfo, 'name', 'Unknown'),
            icon: get(skillInfo, 'icon', '')
        })
    })
}