import { h } from "preact";
import { useCallback } from "preact/hooks";
import RaidToolCard from "../../components/RaidToolCard";
import { RAID_TOOLS } from "../../constants";

const ICONS = {
  [RAID_TOOLS.MRT]:
    "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABwAAAAcCAMAAABF0y+mAAAAQlBMVEVHcEwAAAAAAAAAAAAAAAAAAAAAAAAAAAB9RwrBbQ/ZexHshRMAAAAmFQP/lRUAAACPUAv/kRWsYQ5FJwVnOggAAAAhVYpSAAAAFnRSTlMARoSsvxao//////+Q///g///////frXz3TwAAARlJREFUeAFkkgeSxDAIBJ0RsJrVyL7/f/UsrM1TkWoyDC+N07ws8zQOP1o3SWrupkm29ZPdsuIpzbd3di8g4VqrOkiU+4uJgqhZQrmCUHnGKeCBuozQHnsrgL2hXdkyR901g/5CxcEm5NbzpkTu5FBcSEndTihg7Z0wiDkhlZBzLwkRmAwM4QBNMpDGYVK47D2IhVQ9uYhDp2E2WgTBO7j6U9g8LB65WLMFsEqkE1b4EhB2mnsHJKXDSBuTtIykF6BKT3s11IQAxQk5FQ09R6kBeIDaWIzyXALJBFYj9ihJyHN9HcQCIjDW1xfvF9gNR1Tsi28no5GWtYFIaugni2MzSnVlB/Tv/U34P7Rkgi+B4U2ahBM13uwAAMB0HFINbos5AAAAAElFTkSuQmCC",
  [RAID_TOOLS.VISERIO]: `https://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fviserio-logo.png&w=48&q=75&dpl=dpl-${+new Date()}`,
};

function RaidToolSelection({ handleNextStepNav }) {
  const handleOnSelectTool = useCallback(
    (tool) => handleNextStepNav(tool),
    [handleNextStepNav],
  );

  return (
    <div className="screen">
      <div className="list-container">
        {Object.entries(RAID_TOOLS).map(([raidTool, value]) => (
          <RaidToolCard
            name={raidTool}
            image={ICONS[value]}
            onClick={() => handleOnSelectTool(value)}
          />
        ))}
      </div>
    </div>
  );
}

export default RaidToolSelection;
