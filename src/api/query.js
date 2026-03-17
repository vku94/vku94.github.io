const GRAPHQL_API_URL = 'https://www.warcraftlogs.com/api/v2/client'
// Simplify as much as possible. No need to reissue a token since it lasts for 1 year
const API_KEY = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJhMTUyMmUyNC1kZGFlLTRhYzUtYWQ0OC00ZGM5YTYyOGUzNDciLCJqdGkiOiJjNDM3NDEwMmY0NThiMGE0ZmJmZTc1MWU0ZWQ0MDIwMDcyY2UzMzMyMmQ1ZGZiYjM0ZGY4MzE4NmMxMGY1Y2RkOWEwZGY4OTc0NDhjMDhiOCIsImlhdCI6MTc3Mzc0MzM5Ni4wNzk5NjMsIm5iZiI6MTc3Mzc0MzM5Ni4wNzk5NjYsImV4cCI6MTgwNDg0NzM5Ni4wNjk3NjMsInN1YiI6IiIsInNjb3BlcyI6WyJ2aWV3LXVzZXItcHJvZmlsZSIsInZpZXctcHJpdmF0ZS1yZXBvcnRzIl19.QeI0j9Y1Jkx5lJPushcCivjOVg0fQHh6DDvDiFNd5wg9XC21as5dgR55O7KK0jXymHRs2PHjqDGftgjDFMDRQzMDJqgy0iml8en9MtCAvkY_2NZpel2zh3tA1eGmLV1f0aCIdhs1iMS9jC1WOMgqnK7rXnjR37vXrAdPuDpUvUxhlnqeJOLHMD7k-ansSEK1y37_tYbOpf_IkMft-XpRjrvQeYfS0b_3X9Zv0BMnjfO187XMWX5JU4MpVQ2a7UJMbCwfIO4foOvzSqn6DbPazk1wBaZNfwMVZnF3cz-K8Cdr8FMd88kctBOylRMbsqy1Xcd5x7QrM7ykd5jYOiO_cncnu1jEJc8ACekxGVy-4_59TW43pFgbl9CySOdcJrrTcc2AxICGCdcoLxyCzLy3yAdmiuV__Ri2axF2YkKVF59-Mwf6k6HksTnSY0pRk6RfxmR99oMCuTe6wVWMeoWidTjLTnOhOisD8KVapOHtbz0tnNFoEufIXlg6dv83l00E34w2zVHbyi49fZnQ67d1bY-btexuG0L3djmvVBr16NXVYhCdTo_IowR0hGv-WB9x-Yzrh2oR2_f_9yaZGaN9XeeFTPA0es3dH0OZMBWWJAGAbW_W2_I7232Mf-qhXHdLDDaI-RraJK_ha9nCO4626GUcUJ5gl0hlOjy7ydkRFDg'

const query = async (query) => {
    return fetch(GRAPHQL_API_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${API_KEY}`
        },
        body: JSON.stringify({ query })
    })
        .then(response => response.json())
}

export default query
