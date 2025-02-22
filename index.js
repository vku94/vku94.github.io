import { readdirSync, readFileSync, writeFileSync, existsSync, mkdirSync } from 'fs'
import path from 'path'
import { SKILLS_WHITELIST } from './constants.js'
import { convertSeconds } from './utils.js'

const folderPath = './json';
const resultPath = './notes';

const flatCasts = (obj) => {
    const casts = []
    const startTime = obj.startTime
    const skills = obj.series

    skills.forEach(({ name, guid, events }) => {
        events.forEach(event => {
            if (SKILLS_WHITELIST.includes(guid)) {
                const fightTime = (event[0].timestamp - startTime) / 1000
                casts.push({ skillName: name, skillId: guid, time: fightTime })
            }
        })
    })

    return casts
}

const generateNote = (obj, playerName) => {
    const flat = flatCasts(obj)
    const sorted = flat.sort((a, b) => a.time - b.time)

    return sorted.reduce((p, c) => {
        const timeParsed = convertSeconds(c.time)
        const row = `{time:${timeParsed}} ${timeParsed} - |cff33937F${playerName}|r {spell:${c.skillId}}`
        return p + row + '\n'
    }, '')
}

const processFile = (file, content, playerName, specName, difficulty) => {
    const reportObj = JSON.parse(content)
    const note = generateNote(reportObj, playerName)

    const dirPath = path.join(resultPath, playerName, specName, difficulty)
    if (!existsSync(dirPath)) {
        mkdirSync(dirPath, { recursive: true })
    }

    writeFileSync(path.join(dirPath, file.replace('json', 'txt')), note, 'utf-8')
}

const getFoldersRecursive = (dir) => {
    const folders = []
    const files = readdirSync(dir, { withFileTypes: true })
    for (const file of files) {
        if (file.isDirectory()) {
            const folderPath = path.join(dir, file.name)
            const nextFolder = getFoldersRecursive(folderPath)
            if (nextFolder.length) {
                folders.push(...nextFolder)
            } else {
                folders.push(folderPath)
            }
        }
    }
    return folders
}

const filePaths = getFoldersRecursive(folderPath)
filePaths.forEach(fileSource => {
    const files = readdirSync(fileSource)
    const [, playerName, specName, difficulty] = fileSource.split('/')
    files.forEach(file => {
        const filePath = path.join(fileSource, file)
        const content = readFileSync(filePath, 'utf8')
        processFile(file, content, playerName, specName, difficulty)
    })
})
