import { h } from "preact";
import { useCallback } from "preact/hooks";
import BossCard from "../../components/BossCard";
import { BOSSES, BOSS_ICONS } from "../../constants";

function BossSelection({ handleNextStepNav }) {
  const handleOnSelectBoss = useCallback(
    (tool) => handleNextStepNav(tool),
    [handleNextStepNav],
  );

  return (
    <div className="screen">
      <div className="list-container-column">
        {Object.entries(BOSSES).map(([boss, value]) => (
          <BossCard
            name={boss}
            image={BOSS_ICONS[value]}
            onClick={() => handleOnSelectBoss(value)}
          />
        ))}
      </div>
    </div>
  );
}

export default BossSelection;
