import { get } from 'lodash'

export default function (data, playerId) {
    // todo: enable optional chaining
    const allSkills = get(data, 'data.reportData.report.events.data', [])
    const skillsMeta = get(data, 'data.reportData.report.masterData.abilities', [])
    const startTime = get(data, 'data.reportData.report.fights.[0].startTime', '')
    const playerCasts = allSkills.filter((f) => f.sourceID === playerId)

    return {
        startTime,
        casts: playerCasts.map(({ abilityGameID, timestamp }) => {
            const skillInfo = skillsMeta.find((sm) => sm.gameID === abilityGameID)
            return ({
                guid: abilityGameID,
                name: get(skillInfo, 'name', 'Unknown'),
                timestamp
            })
        })
    }
}