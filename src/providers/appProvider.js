import { h, createContext } from 'preact'
import { useState } from 'preact/hooks'
import { SCREEN } from '../constants'

const defaultContext = {
    isLoading: false,
    currentScreen: SCREEN.INIT,
    selectedPlayer: null,
    reportRawData: null
}

const AppContext = createContext(defaultContext)

export const AppProvider = ({ children }) => {
    const [isLoading, setIsLoading] = useState(defaultContext.isLoading)
    const [selectedPlayer, setSelectedPlayer] = useState(defaultContext.selectedPlayer)
    const [currentScreen, setCurrentScreen] = useState(defaultContext.currentScreen)
    const [reportRawData, setReportRawData] = useState(defaultContext.reportRawData)

    return (
        <AppContext.Provider value={{
            isLoading,
            setIsLoading,
            selectedPlayer,
            setSelectedPlayer,
            currentScreen,
            setCurrentScreen,
            reportRawData,
            setReportRawData
        }}>
            {children}
        </AppContext.Provider>
    )
}

export default AppContext
