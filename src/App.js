import { h, Fragment } from 'preact'
import { useCallback, useContext } from 'preact/hooks'
import Loader from './components/Loader'
import AppContext, { AppProvider } from './providers/appProvider'
import { InitStep, PlayersSelection, SkillsSelection } from './screens'
import getReportCastsQuery from './api/graphqlQueries/reportCasts'
import parseUrl from './utils/parseUrl'
import query from './api/query'
import { SCREEN } from './constants'
import './styles/index.css'

// todo: no error handling, fuck it :D
function Main () {
    const { isLoading, setIsLoading, currentScreen, setCurrentScreen, setReportRawData, setSelectedPlayer } = useContext(AppContext)

    const getReportInfo = useCallback(async (reportUrl) => {
        setIsLoading(true)
        const { reportId, fightId } = parseUrl(reportUrl)
        const q = getReportCastsQuery({ reportId, fightId })
        const res = await query(q)
        setReportRawData(res)
        setCurrentScreen(SCREEN.PLAYER_SELECT)
        setIsLoading(false)
    }, [])

    const selectPlayer = useCallback((player) => {
        setIsLoading(true)
        setSelectedPlayer(player)
        setCurrentScreen(SCREEN.SKILLS_SELECT)
        setIsLoading(false)
    }, [])

    return (
        <Fragment>
            {isLoading && <Loader/>}
            <div className="version">Ultra Alpha</div>
            <div className="header">
                <img src="/public/logo.webp" className="logo" alt="logo" />
                <h2>All rights are not reserved</h2>
                <h4>Sponsored by beer</h4>
            </div>
            {(() => {
                    switch (currentScreen) {
                        case SCREEN.INIT: {
                            return (
                                <InitStep handleNextStepNav={getReportInfo}/>
                            )
                        }
                        case SCREEN.PLAYER_SELECT: {
                            return (
                                <PlayersSelection handleNextStepNav={selectPlayer} />
                            )
                        }
                        case SCREEN.SKILLS_SELECT: {
                            return (
                                <SkillsSelection handleNextStepNav={() => null} />
                            )
                        }
                    }
                }
            )()}
        </Fragment>
    )
}

function App () {
    return (
        <div className="app">
            <AppProvider>
                <Main />
            </AppProvider>
        </div>
    )
}

export default App
