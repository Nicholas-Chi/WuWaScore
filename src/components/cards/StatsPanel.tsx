import icons from "../../data/icons.json";
import type { WWCharacter } from "../../data/WWCharacter";
interface StatsPanelProps {
  character: WWCharacter | null;
}

function StatsPanel({ character }: StatsPanelProps) {
  return (
    <div className="stats-container">
      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "HP")?.icon}
          alt="HP"
        />
        <span className="stat-name">HP </span>
        <span className="value">{character?.stats.base_hp}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "ATK")?.icon}
          alt="ATK"
        />
        <span className="stat-name">Attack </span>
        <span className="value">{character?.stats.base_atk}</span>
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
        <span className="value">{character?.stats.base_crit}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Crit DMG")?.icon}
          alt="Crit DMG"
        />
        <span className="stat-name">Crit DMG </span>
        <span className="value">{character?.stats.base_crit_dmg}</span>
      </div>

      <div className="stat-item">
        <img
          className="stat-icon"
          src={icons.icontypes.find((i) => i.name === "Energy Regen")?.icon}
          alt="Energy Regen"
        />
        <span className="stat-name">Energy Regen </span>
        <span className="value">{`100.00%`}</span>
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
        <span className="stat-name">Basic Attack DMG Bonus </span>
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
        <span className="stat-name">Heavy Attack DMG Bonus </span>
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
        <span className="stat-name">Resonance Skill DMG Bonus </span>
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
        <span className="stat-name">Resonance Liberation DMG Bonus </span>
        <span className="value">{`0.00%`}</span>
      </div>

      <div className="stat-item">
        {character?.element === "Glacio" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Glacio DMG Bonus")?.icon
              }
              alt="Glacio DMG Bonus"
            />

            <span className="stat-name">Glacio DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : character?.element === "Fusion" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Fusion DMG Bonus")?.icon
              }
              alt="Fusion DMG Bonus"
            />

            <span className="stat-name">Fusion DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : character?.element === "Electro" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Electro DMG Bonus")
                  ?.icon
              }
              alt="Electro DMG Bonus"
            />

            <span className="stat-name">Electro DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : character?.element === "Aero" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Aero DMG Bonus")?.icon
              }
              alt="Aero DMG Bonus"
            />

            <span className="stat-name">Aero DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : character?.element === "Spectro" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Spectro DMG Bonus")
                  ?.icon
              }
              alt="Spectro DMG Bonus"
            />

            <span className="stat-name">Spectro DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : character?.element === "Havoc" ? (
          <div className="calc-stats">
            <img
              className="stat-icon"
              src={
                icons.icontypes.find((i) => i.name === "Havoc DMG Bonus")?.icon
              }
              alt="Havoc DMG Bonus"
            />

            <span className="stat-name">Havoc DMG Bonus </span>
            <span className="value">0.00 %</span>
          </div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default StatsPanel;
