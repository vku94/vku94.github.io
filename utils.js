export const convertSeconds = (seconds) => {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0')
    const remainingSeconds = String(Math.floor(seconds % 60)).padStart(2, '0')
    return `${minutes}:${remainingSeconds}`
}