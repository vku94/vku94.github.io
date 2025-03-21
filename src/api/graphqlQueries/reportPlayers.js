const getQuery = ({ reportId, fightId }) => `
    query {
      reportData {
        report(code: "${reportId}") {
          events(fightIDs: [${fightId}], dataType: Casts, limit: 100000) {
            data
          }
          masterData {
            actors(type: "player") {
              id
              name
              icon
              gameID
            }
            abilities {
              gameID
              name
              icon
            }
          }
        }
      }
    }
`

export default getQuery
