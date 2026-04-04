export const SCREEN = {
  INIT: 0,
  PLAYER_SELECT: 1,
  SKILLS_SELECT: 2,
  RAID_TOOL_SELECT: 3,
  BOSS_FIGHT_SELECT: 31,
  NOTE_PAGE: 41,
  VISERIO_NOTE_PAGE: 42,
};

export const SPEC_ICON_MAP = {
  "DeathKnight-Blood": "spell_deathknight_bloodpresence",
  "DeathKnight-Frost": "spell_deathknight_frostpresence",
  "DeathKnight-Unholy": "spell_deathknight_unholypresence",
  DeathKnight: "",
  "DemonHunter-Havoc": "ability_demonhunter_specdps",
  "DemonHunter-Vengeance": "ability_demonhunter_spectank",
  DemonHunter: "",
  "Druid-Balance": "spell_nature_starfall",
  "Druid-Feral": "ability_druid_catform",
  "Druid-Guardian": "ability_racial_bearform",
  "Druid-Restoration": "spell_nature_healingtouch",
  Druid: "",
  "Hunter-BeastMastery": "ability_hunter_bestialdiscipline",
  "Hunter-Marksmanship": "ability_hunter_focusedaim",
  "Hunter-Survival": "ability_hunter_camouflage",
  Hunter: "",
  "Mage-Arcane": "spell_holy_magicalsentry",
  "Mage-Fire": "spell_fire_firebolt02",
  "Mage-Frost": "spell_frost_frostbolt02",
  Mage: "",
  "Monk-Brewmaster": "spell_monk_brewmaster_spec",
  "Monk-Mistweaver": "spell_monk_mistweaver_spec",
  "Monk-Windwalker": "spell_monk_windwalker_spec",
  Monk: "",
  "Paladin-Holy": "spell_holy_holybolt",
  "Paladin-Protection": "spell_holy_devotionaura",
  "Paladin-Retribution": "spell_holy_auraoflight",
  Paladin: "",
  "Priest-Discipline": "spell_holy_powerwordshield",
  "Priest-Holy": "spell_holy_guardianspirit",
  "Priest-Shadow": "spell_shadow_shadowwordpain",
  Priest: "",
  "Rogue-Assassination": "ability_rogue_deadlybrew",
  "Rogue-Outlaw": "ability_rogue_waylay",
  "Rogue-Subtlety": "ability_stealth",
  Rogue: "",
  "Shaman-Elemental": "spell_nature_lightning",
  "Shaman-Enhancement": "spell_shaman_improvedstormstrike",
  "Shaman-Restoration": "spell_nature_magicimmunity",
  Shaman: "",
  "Warlock-Affliction": "spell_shadow_deathcoil",
  "Warlock-Demonology": "spell_shadow_metamorphosis",
  "Warlock-Destruction": "spell_shadow_rainoffire",
  Warlock: "",
  "Warrior-Arms": "ability_warrior_savageblow",
  "Warrior-Fury": "ability_warrior_innerrage",
  "Warrior-Protection": "ability_warrior_defensivestance",
  Warrior: "",
  "Evoker-Preservation": "classicon_evoker_preservation",
  "Evoker-Augmentation": "classicon_evoker_augmentation",
  "Evoker-Devastation": "classicon_evoker_devastation",
  Evoker: "",
};

export const RAID_TOOLS = {
  MRT: 0,
  VISERIO: 1,
};

export const BOSSES = {
  "Imperator Averzian": 1,
  Vorasius: 2,
  "Fallen-King Salhadaar": 3,
  "Vaelgor & Ezzorak": 4,
  "Lightblinded Vanguard": 5,
  "Crown of the Cosmos": 6,
  "Chimaerus the Undreamt God": 7,
  "Belo'ren, Child of Al'ar": 8,
  "Midnight Falls": 9,
};

export const BOSS_ENCOUNTERS = {
  [BOSSES["Imperator Averzian"]]: 3176,
  [BOSSES.Vorasius]: 3177,
  [BOSSES["Fallen-King Salhadaar"]]: 3179,
  [BOSSES["Vaelgor & Ezzorak"]]: 3178,
  [BOSSES["Lightblinded Vanguard"]]: 3180,
  [BOSSES["Crown of the Cosmos"]]: 3181,
  [BOSSES["Chimaerus the Undreamt God"]]: 3306,
  [BOSSES["Belo'ren, Child of Al'ar"]]: 3182,
  [BOSSES["Midnight Falls"]]: 3183,
};

export const BOSS_ICONS = {
  [BOSSES["Imperator Averzian"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_hostgeneral.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES.Vorasius]: `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_kaiju.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Fallen-King Salhadaar"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_salhadaar.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Vaelgor & Ezzorak"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_dragonduo.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Lightblinded Vanguard"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_paladintrio.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Crown of the Cosmos"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-voidspire%2Finv_120_raid_voidspire_alleria.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Chimaerus the Undreamt God"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fthe-dreamrift%2Finv_120_raid_dreamwell_malformedmanifestation.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Belo'ren, Child of Al'ar"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fmarch-on-queldanas%2Finv_120_raid_marchonqueldanas_lightvoidphoenix.png&w=96&q=75&dpl=dpl-${+new Date()}`,
  [BOSSES["Midnight Falls"]]:
    `http://wowutils.com/viserio-cooldowns/_next/image?url=%2Fviserio-cooldowns%2Fimages%2Fbosses%2Fmarch-on-queldanas%2Finv_120_raid_marchonqueldanas_lura.png&w=96&q=75&dpl=dpl-${+new Date()}`,
};
