import { h, Fragment } from 'preact'
import { useCallback, useContext } from 'preact/hooks'
import _ from 'lodash'
import Loader from './components/Loader'
import AppContext, { AppProvider } from './providers/appProvider'
import { InitStep, PlayersSelection, SkillsSelection, Note } from './screens'
import getReportCastsQuery from './api/graphqlQueries/reportCasts'
import getReportFightsQuery from './api/graphqlQueries/reportFights'
import parseUrl from './utils/parseUrl'
import query from './api/query'
import { SCREEN } from './constants'
import './styles/index.css'

// todo: no error handling, fuck it :D
function Main () {
    const {
        isLoading,
        setIsLoading,
        currentScreen,
        setCurrentScreen,
        setReportRawData,
        setSelectedPlayer,
        setSelectedSkills
    } = useContext(AppContext)

    const getReportInfo = useCallback(async (reportUrl) => {
        setIsLoading(true)
        const { reportId, fightId: fId } = parseUrl(reportUrl)

        let fightId = fId

        if (fId === 'last') {
            const q = getReportFightsQuery({ reportId })
            const res = await query(q)
            const fights = _.get(res, 'data.reportData.report.fights', [])
            const lastFight = fights.at(-1) || {}
            fightId = lastFight.id
        }

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

    const selectSkills = useCallback((skills) => {
        setIsLoading(true)
        setSelectedSkills(skills)
        setCurrentScreen(SCREEN.NOTE_PAGE)
        setIsLoading(false)
    }, [])

    return (
        <Fragment>
            {isLoading && <Loader/>}
            <div className="version">Ultra Alpha</div>
            {currentScreen > 0 ? (
                <button
                    className="back-button"
                    onClick={() => setCurrentScreen(currentScreen - 1)}
                >
                    &#x25c0;
                </button>
            ) : null}
            <div className="header">
                <img src="/public/logo.webp" className="logo" alt="logo" />
                <h2>All rights are not reserved</h2>
                <h4>Sponsored by beer</h4>
            </div>
            {(() => {
                    switch (currentScreen) {
                        case SCREEN.INIT: {
                            return (
                                <InitStep handleNextStepNav={getReportInfo} />
                            )
                        }
                        case SCREEN.PLAYER_SELECT: {
                            return (
                                <PlayersSelection handleNextStepNav={selectPlayer} />
                            )
                        }
                        case SCREEN.SKILLS_SELECT: {
                            return (
                                <SkillsSelection handleNextStepNav={selectSkills} />
                            )
                        }
                        case SCREEN.NOTE_PAGE: {
                            return (
                                <Note />
                            )
                        }
                        default: {
                            return null
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
