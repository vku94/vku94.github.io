const getQuery = ({ reportId }) => `
    query {
      reportData {
        report(code: "${reportId}") {
          fights {
            id
            startTime
            endTime
          }
        }
      }
    }
`

export default getQuery
