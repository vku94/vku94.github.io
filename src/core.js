import convertSeconds from "./utils/convertSeconds";
import { BOSSES, BOSS_ENCOUNTERS } from "./constants";

const transformCasts = (obj, whiteListedSkills) => {
  const casts = [];
  const startTime = obj.startTime;
  const skills = obj.casts;

  skills.forEach(({ name, guid, timestamp, iconUrl }) => {
    if (whiteListedSkills.includes(guid)) {
      const fightTime = (timestamp - startTime) / 1000;
      casts.push({ skillName: name, skillId: guid, time: fightTime, iconUrl });
    }
  });

  return casts;
};

export const getCasts = (castsObj, whiteListedSkills) => {
  const casts = transformCasts(castsObj, whiteListedSkills);
  return casts.sort((a, b) => a.time - b.time);
};

export const generateNote = (castsObj, playerName, whiteListedSkills) => {
  const casts = getCasts(castsObj, whiteListedSkills);

  return casts.reduce((p, c) => {
    const timeParsed = convertSeconds(c.time, true);
    const timeToShow = convertSeconds(c.time);
    const row = `{time:${timeParsed}} ${timeToShow} - |cff33937F${playerName}|r {spell:${c.skillId}}`;
    return p + row + "\n";
  }, "");
};

export const generateViserioNote = (
  castsObj,
  playerName,
  whiteListedSkills,
  boss,
) => {
  const casts = getCasts(castsObj, whiteListedSkills);

  return (
    `EncounterID:${BOSS_ENCOUNTERS[boss]};Name:${Object.entries(BOSSES).find(([, value]) => value === boss)[0]}\n` +
    casts.reduce((p, c) => {
      const timeParsed = convertSeconds(c.time);
      const row = `time:${timeParsed};ph:1;tag:${playerName};spellid:${c.skillId};`;
      return p + row + "\n";
    }, "")
  );
};
