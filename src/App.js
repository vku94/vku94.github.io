import { h, Fragment } from "preact";
import { useCallback, useContext } from "preact/hooks";
import _ from "lodash";
import Loader from "./components/Loader";
import AppContext, { AppProvider } from "./providers/appProvider";
import {
  InitStep,
  PlayersSelection,
  SkillsSelection,
  RaidToolSelection,
  BossSelection,
  Note,
} from "./screens";
import getReportPlayersQuery from "./api/graphqlQueries/reportPlayers";
import getReportFightsQuery from "./api/graphqlQueries/reportFights";
import getReportPlayerCastsQuery from "./api/graphqlQueries/reportPlayerCasts";
import parseUrl from "./utils/parseUrl";
import query from "./api/query";
import { SCREEN, RAID_TOOLS } from "./constants";
import "./styles/index.css";

const DEFAULT_SCREENS = [
  SCREEN.INIT,
  SCREEN.PLAYER_SELECT,
  SCREEN.SKILLS_SELECT,
  SCREEN.RAID_TOOL_SELECT,
  SCREEN.NOTE_PAGE,
];

const VISERIO_SCREENS = [
  SCREEN.INIT,
  SCREEN.PLAYER_SELECT,
  SCREEN.SKILLS_SELECT,
  SCREEN.RAID_TOOL_SELECT,
  SCREEN.BOSS_FIGHT_SELECT,
  SCREEN.NOTE_PAGE,
];

// todo: no error handling, fuck it :D
function Main() {
  const {
    isLoading,
    setIsLoading,
    currentScreen,
    reportId,
    setReportId,
    fightId,
    selectedRaidTool,
    setFightId,
    setCurrentScreen,
    setReportRawData,
    setPlayerCastsRawData,
    setSelectedPlayer,
    setSelectedSkills,
    setSelectedRaidTool,
    setSelectedBoss,
  } = useContext(AppContext);

  const getReportInfo = useCallback(async (reportUrl) => {
    setIsLoading(true);
    const { reportId: rId, fightId: fId } = parseUrl(reportUrl);

    let _fightId = fId;

    if (fId === "last") {
      const q = getReportFightsQuery({ reportId: rId });
      const res = await query(q);
      const fights = _.get(res, "data.reportData.report.fights", []);
      const lastFight = fights.at(-1) || {};
      _fightId = lastFight.id;
    }

    setFightId(fId);
    setReportId(rId);

    const q = getReportPlayersQuery({ reportId: rId, fightId: _fightId });
    const res = await query(q);
    setReportRawData(res);
    setCurrentScreen(SCREEN.PLAYER_SELECT);
    setIsLoading(false);
  }, []);

  const selectPlayer = useCallback(
    async (player) => {
      setIsLoading(true);
      const q = getReportPlayerCastsQuery({
        reportId,
        fightId,
        playerId: player.id,
      });
      const res = await query(q);
      setSelectedPlayer(player);
      setPlayerCastsRawData(res);
      setCurrentScreen(SCREEN.SKILLS_SELECT);
      setIsLoading(false);
    },
    [reportId, fightId],
  );

  const selectSkills = useCallback((skills) => {
    setIsLoading(true);
    setSelectedSkills(skills);
    setCurrentScreen(SCREEN.RAID_TOOL_SELECT);
    setIsLoading(false);
  }, []);

  const selectRaidTool = useCallback((tool) => {
    setIsLoading(true);
    setSelectedRaidTool(tool);
    setSelectedBoss(null);
    switch (tool) {
      case RAID_TOOLS.MRT: {
        setCurrentScreen(SCREEN.NOTE_PAGE);
        break;
      }
      case RAID_TOOLS.VISERIO: {
        setCurrentScreen(SCREEN.BOSS_FIGHT_SELECT);
        break;
      }
    }
    setIsLoading(false);
  }, []);

  const selectBoss = useCallback((boss) => {
    setIsLoading(true);
    setSelectedBoss(boss);
    setCurrentScreen(SCREEN.NOTE_PAGE);
    setIsLoading(false);
  }, []);

  const onBackButtonClick = useCallback(() => {
    const screensOrderArray =
      selectedRaidTool === RAID_TOOLS.VISERIO
        ? VISERIO_SCREENS
        : DEFAULT_SCREENS;

    const indexOfCurrentScreen = screensOrderArray.indexOf(currentScreen);
    const newScreen = screensOrderArray[indexOfCurrentScreen - 1];
    setCurrentScreen(newScreen);
  }, [currentScreen, selectedRaidTool]);

  return (
    <Fragment>
      {isLoading && <Loader />}
      <div className="version">Ultra Alpha</div>
      {currentScreen > 0 ? (
        <button className="back-button" onClick={onBackButtonClick}>
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
            return <InitStep handleNextStepNav={getReportInfo} />;
          }
          case SCREEN.PLAYER_SELECT: {
            return <PlayersSelection handleNextStepNav={selectPlayer} />;
          }
          case SCREEN.SKILLS_SELECT: {
            return <SkillsSelection handleNextStepNav={selectSkills} />;
          }
          case SCREEN.RAID_TOOL_SELECT: {
            return <RaidToolSelection handleNextStepNav={selectRaidTool} />;
          }
          case SCREEN.BOSS_FIGHT_SELECT: {
            return <BossSelection handleNextStepNav={selectBoss} />;
          }
          case SCREEN.NOTE_PAGE: {
            return <Note raidTool={selectedRaidTool} />;
          }
          default: {
            return null;
          }
        }
      })()}
    </Fragment>
  );
}

function App() {
  return (
    <div className="app">
      <AppProvider>
        <Main />
      </AppProvider>
    </div>
  );
}

export default App;
