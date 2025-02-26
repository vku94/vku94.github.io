import { get } from 'lodash'

export default function (data, playerId) {
    // todo: enable optional chaining
    const allSkills = get(data, 'data.reportData.report.events.data', [])
    const skillsMeta = get(data, 'data.reportData.report.masterData.abilities', [])
    const playerCasts = allSkills
        .filter((f) => f.sourceID === playerId && f.type === 'cast')
        .sort((a, b) => a.timestamp - b.timestamp)
        .map((pc) => {
            const skillInfo = skillsMeta.find((sm) => sm.gameID === pc.abilityGameID)
            return {
                id: pc.abilityGameID,
                name: get(skillInfo, 'name', 'Unknown'),
                icon: get(skillInfo, 'icon', '')
            }
        })
    const castsMap = new Map(playerCasts.map(cast => [cast.name, cast]))

    return Array.from(castsMap.values())
}