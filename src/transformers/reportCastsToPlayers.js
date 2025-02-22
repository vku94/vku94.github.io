import { get } from 'lodash'
import extractPlayerSkills from './extractPlayerSkills'

export default function (data) {
    // todo: enable optional chaining
    const actors = get(data, 'data.reportData.report.masterData.actors', [])

    return actors
      .filter((a) => {
        const skillsUsed = extractPlayerSkills(data, a.id)
        return !!skillsUsed.length
        })
      .map(({ id, name, icon }) => ({ id, name, iconName: icon }))
}