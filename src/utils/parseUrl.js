const parseUrl = (url) => {
    const parsedUrl = new URL(url)
    const reportId = parsedUrl.pathname.split('/').pop()
    const fightId = parsedUrl.searchParams.get('fight')

    return {
        reportId,
        fightId
    }
}

export default parseUrl
