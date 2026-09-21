// This file will take the relevant stats from the character and calculate the total values based on their weapons and echoes?
import type { WWCharacter } from "../data/WWCharacter.ts";

interface Weapon {
  name: string;
  mainStat: string;
  mainStatValue: number;
  subStat: string;
  subStatValue: number;
}

interface CalculateStatsProps {
  character: WWCharacter | null;
  weapon: Weapon | null;
}

function calculateStats({ character, weapon }: CalculateStatsProps) {
  return {
    total_hp: character
      ? character.stats.base_hp *
        (1 + (weapon?.subStat === "HP" ? weapon.subStatValue : 0) / 100)
      : 0,
    total_atk: character
      ? (character.stats.base_atk +
          (weapon?.mainStat === "ATK" ? weapon.mainStatValue : 0)) *
        (1 + (weapon?.subStat === "ATK" ? weapon.subStatValue : 0) / 100)
      : 0,
    total_def: character
      ? character.stats.base_def *
        (1 + (weapon?.subStat === "DEF" ? weapon.subStatValue : 0) / 100)
      : 0,
    total_crit: character
      ? character.stats.base_crit +
        (weapon?.subStat === "Crit Rate" ? weapon?.subStatValue : 0)
      : 0,
    total_crit_dmg: character
      ? character.stats.base_crit_dmg +
        (weapon?.subStat === "Crit DMG" ? weapon?.subStatValue : 0)
      : 0,
    total_healing: character ? character.stats.base_healing : 0,
    total_energy_regen: character
      ? character.stats.base_energy_regen +
        (weapon?.subStat === "Energy Regeneration" ? weapon?.subStatValue : 0)
      : 0,
  };
}

export default calculateStats;
