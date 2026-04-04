import { h } from "preact";
import {
  useCallback,
  useContext,
  useMemo,
  useRef,
  useState,
} from "preact/hooks";
import AppContext from "../../providers/appProvider";
import Error from "../../screens/Error";
import Button from "../../components/Button";
import Input from "../../components/Input";
import extractPlayerCasts from "../../transformers/extractPlayerCasts";
import { generateNote, generateViserioNote, getCasts } from "../../core";
import { RAID_TOOLS, BOSS_ICONS } from "../../constants";
import copyToClipboard from "../../utils/copyToClipboard";

function Note({ raidTool }) {
  const textRef = useRef(null);
  const [customPlayerName, setCustomPlayerName] = useState("");
  const { playerCastsRawData, selectedSkills, selectedPlayer, selectedBoss } =
    useContext(AppContext);

  const noteText = useMemo(() => {
    const castsObj = extractPlayerCasts(playerCastsRawData, selectedPlayer.id);
    const generationFn =
      raidTool === RAID_TOOLS.VISERIO ? generateViserioNote : generateNote;
    return generationFn(
      castsObj,
      customPlayerName || selectedPlayer.name,
      selectedSkills,
      selectedBoss,
    );
  }, [
    playerCastsRawData,
    selectedPlayer,
    selectedSkills,
    customPlayerName,
    raidTool,
    selectedBoss,
  ]);

  const casts = useMemo(() => {
    const castsObj = extractPlayerCasts(playerCastsRawData, selectedPlayer.id);
    return getCasts(castsObj, selectedSkills);
  }, [playerCastsRawData, selectedPlayer, selectedSkills]);

  const handleCustomPlayerNameInput = useCallback((value) => {
    setCustomPlayerName(value);
  }, []);

  const handleCopyToClipboard = useCallback(() => {
    if (textRef.current) {
      copyToClipboard(textRef.current);
    }
  }, [textRef]);

  return !!selectedSkills.length && selectedPlayer ? (
    <div className="screen" style={{ flexDirection: "column" }}>
      <div style={{ marginBottom: "20px", width: "300px" }}>
        <Input
          label="Custom player name"
          placeholder="Enter your name buddy"
          onInput={handleCustomPlayerNameInput}
        />
      </div>
      {selectedBoss && <img src={BOSS_ICONS[selectedBoss]} />}
      <div style={{ display: "flex" }}>
        <pre
          ref={textRef}
          className="mrt-note-result"
          style={{ margin: "20px" }}
        >
          {noteText}
        </pre>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "20px 0",
            padding: "22px 0",
            gap: "0.0556em",
            marginTop: raidTool === RAID_TOOLS.VISERIO ? "38px" : "20px",
          }}
        >
          {casts.map(({ iconUrl }, key) => (
            <img
              key={key}
              style={{ width: "1em", height: "1em" }}
              src={iconUrl}
              alt={""}
            />
          ))}
        </div>
      </div>
      <div style={{ marginTop: "40px", marginBottom: "40px" }}>
        <Button label={"Copy"} onClick={handleCopyToClipboard} />
      </div>
    </div>
  ) : (
    <Error />
  );
}

export default Note;
