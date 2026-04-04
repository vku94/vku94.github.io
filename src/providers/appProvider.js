import { h, createContext } from "preact";
import { useState } from "preact/hooks";
import { SCREEN } from "../constants";

const defaultContext = {
  isLoading: false,
  currentScreen: SCREEN.INIT,
  selectedPlayer: null,
  reportRawData: null,
  playerCastsRawData: null,
  reportId: null,
  fightId: null,
  selectedSkills: [],
  selectedRaidTool: null,
  selectedBoss: null,
};

const AppContext = createContext(defaultContext);

export const AppProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(defaultContext.isLoading);
  const [reportId, setReportId] = useState(defaultContext.reportId);
  const [fightId, setFightId] = useState(defaultContext.fightId);
  const [selectedPlayer, setSelectedPlayer] = useState(
    defaultContext.selectedPlayer,
  );
  const [currentScreen, setCurrentScreen] = useState(
    defaultContext.currentScreen,
  );
  const [reportRawData, setReportRawData] = useState(
    defaultContext.reportRawData,
  );
  const [playerCastsRawData, setPlayerCastsRawData] = useState(
    defaultContext.playerCastsRawData,
  );
  const [selectedSkills, setSelectedSkills] = useState(
    defaultContext.selectedSkills,
  );
  const [selectedRaidTool, setSelectedRaidTool] = useState(
    defaultContext.selectedRaidTool,
  );
  const [selectedBoss, setSelectedBoss] = useState(defaultContext.selectedBoss);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        setIsLoading,
        reportId,
        setReportId,
        fightId,
        setFightId,
        selectedPlayer,
        setSelectedPlayer,
        currentScreen,
        setCurrentScreen,
        reportRawData,
        setReportRawData,
        playerCastsRawData,
        setPlayerCastsRawData,
        selectedSkills,
        setSelectedSkills,
        selectedRaidTool,
        setSelectedRaidTool,
        selectedBoss,
        setSelectedBoss,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default AppContext;
