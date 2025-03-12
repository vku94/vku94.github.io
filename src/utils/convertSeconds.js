export default function (seconds, withMilliseconds = false) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
    const remainingSeconds = String(Math.floor(seconds % 60)).padStart(2, '0')
    if (withMilliseconds) {
        const milliseconds = String(Math.floor((seconds % 1) * 1000)).padStart(3, '0')
        return `${minutes}:${remainingSeconds}:${milliseconds}`
    }
    return `${minutes}:${remainingSeconds}`
}