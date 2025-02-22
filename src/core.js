import convertSeconds from './utils/convertSeconds'

const transformCasts = (obj, whiteListedSkills) => {
    const casts = []
    const startTime = obj.startTime
    const skills = obj.casts

    skills.forEach(({ name, guid, timestamp }) => {
        if (whiteListedSkills.includes(guid)) {
            const fightTime = (timestamp - startTime) / 1000
            casts.push({ skillName: name, skillId: guid, time: fightTime })
        }
    })

    return casts
}

export const generateNote = (castsObj, playerName, whiteListedSkills) => {
    const casts = transformCasts(castsObj, whiteListedSkills)
    const sorted = casts.sort((a, b) => a.time - b.time)

    return sorted.reduce((p, c) => {
        const timeParsed = convertSeconds(c.time)
        const row = `{time:${timeParsed}} ${timeParsed} - |cff33937F${playerName}|r {spell:${c.skillId}}`
        return p + row + '\n'
    }, '')
}
