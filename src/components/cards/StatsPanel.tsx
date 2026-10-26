import icons from "../../data/icons.json";
import type { WWCharacter } from "../../data/WWCharacter";
import CalculateStats from "../../hooks/CalculateStats.tsx";

interface StatsPanelProps {
  character: WWCharacter | null;
  weapon: any | null;
}

function StatsPanel({ character, weapon }: StatsPanelProps) {
  const stats = CalculateStats({ character, weapon });

  return (
    <div className="stats-container">
      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "HP")?.icon}
          alt="HP"
        />
        <span className="stat-name">HP </span>
        <span className="value">{stats.total_hp}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "ATK")?.icon}
          alt="ATK"
        />
        <span className="stat-name">Attack </span> <br />
        <span className="value">
          Base Attack: {character?.stats.base_atk}{" "}
        </span>{" "}
        <br />
        <span className="value">With Weapon: {stats.total_atk}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "DEF")?.icon}
          alt="DEF"
        />
        <span className="stat-name">Defense </span>
        <span className="value">{character?.stats.base_def}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Crit Rate")?.icon}
          alt="Crit Rate"
        />
        <span className="stat-name">Crit Rate </span>
        <span className="value">{character?.stats.base_crit}%</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Crit DMG")?.icon}
          alt="Crit DMG"
        />
        <span className="stat-name">Crit DMG </span>
        <span className="value">{character?.stats.base_crit_dmg}%</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Energy Regen")?.icon}
          alt="Energy Regen"
        />
        <span className="stat-name">Energy Regen </span>
        <span className="value">{stats.total_energy_regen}%</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Healing Bonus")?.icon}
          alt="Healing Bonus"
        />
        <span className="stat-name">Healing Bonus </span>
        <span className="value">{`0.00%`}</span>
      </div>

      {/* Basic Attack DMG Bonus */}
      <div className="stat-item">
        <img
          className="stat-icon"
          src={
            icons.icontypes.find((i) => i.name === "Basic Attack DMG Bonus")
              ?.icon
          }
          alt="Basic Attack DMG Bonus"
        />
        <span className="stat-name">Basic Attack</span>
        <span className="value">{`0.00%`}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={
            icons.icontypes.find((i) => i.name === "Heavy Attack DMG Bonus")
              ?.icon
          }
          alt="Heavy Attack DMG Bonus"
        />
        <span className="stat-name">Heavy Attack</span>
        <span className="value">{`0.00%`}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={
            icons.icontypes.find((i) => i.name === "Resonance Skill DMG Bonus")
              ?.icon
          }
          alt="Resonance Skill DMG Bonus"
        />
        <span className="stat-name">Resonance Skill</span>
        <span className="value">{`0.00%`}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={
            icons.icontypes.find(
              (i) => i.name === "Resonance Liberation DMG Bonus",
            )?.icon
          }
          alt="Resonance Liberation DMG Bonus"
        />
        <span className="stat-name">Resonance Liberation</span>
        <span className="value">{`0.00%`}</span>
      </div>

      <div className="stat-item">
        {character?.element && (
          <>
            <img
              className="stat-icon"
              src={
                icons.icontypes.find(
                  (i) => i.name === `${character?.element} DMG Bonus`,
                )?.icon
              }
              alt={`${character?.element} DMG Bonus`}
            />

            <span className="stat-name">{character?.element} DMG</span>
            <span className="value">0.00 %</span>
          </>
        )}
      </div>
    </div>
  );
}

export default StatsPanel;
