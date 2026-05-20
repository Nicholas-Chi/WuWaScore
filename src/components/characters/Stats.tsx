
import icons from "../../data/icons.json";

interface StatItem {
  label: string;
  value: string;
}

function Stats() {
  const statsArr: StatItem[] = [
    { label: "HP", value: "15585" },
    { label: "Resonance Skill DMG", value: "0%" },
    { label: "ATK", value: "1482" },
    { label: "Basic Attack DMG", value: "0%" },
    { label: "DEF", value: "1148" },
    { label: "Heavy Attack DMG", value: "0%" },
    { label: "Energy Regen", value: "112.8%" },
    { label: "Resonance Liberation DMG", value: "25%" },
  ];

  const stats = statsArr.map((stat, index) => {
    const validIcon = icons.icontypes.find(icon => icon.name === stat.label)

    return (
    <div key={index} className="stat-row">
      {validIcon && <img src={validIcon.icon} alt={stat.label} />}
      <span className="label">{stat.label}</span>
      <span className="value">{stat.value}</span>
    </div>
    )
});

  return (
    <div className="stats-container">
      {stats}
    </div>
  );
}

export default Stats