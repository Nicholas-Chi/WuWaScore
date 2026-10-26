import WWForteBonusData from "../../data/WWForteBonus.ts";
import icons from "../../data/icons.json";
import "./ForteCard.css";

function ForteCard() {
  return (
    <div className="forte-container">
      <div className="forte-cols">
        {WWForteBonusData.map((forte) => (
          <>
            {/* Column 1: Basic Attack Column */}
            <div className="forte-col">
              <div className="skill-item">
                <img src={forte.skill?.[0].icon} alt={forte.skill?.[0].name} />
              </div>

              <div className="forte-divider"></div>

              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[0].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>

              <div className="forte-divider"></div>

              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[1].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
            </div>
            {/* Column 2: Res Skill Column */}
            <div className="forte-col">
              <div className="skill-item">
                <img src={forte.skill?.[1].icon} alt={forte.skill?.[1].name} />
              </div>

              <div className="forte-divider"></div>

              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[2].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>

              <div className="forte-divider"></div>

              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[3].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
            </div>

            {/* Column 3: Forte Circuit Column */}
            <div className="forte-col">
              <div className="skill-item">
                <img src={forte.skill?.[2].icon} alt={forte.skill?.[2].name} />
              </div>

              <div className="forte-divider"></div>

              <div className="inherent-skill-icon">
                <img
                  src={forte.inherentSkill?.[0].icon}
                  alt={forte.inherentSkill?.[0].name}
                />
              </div>

              <div className="forte-divider"></div>

              <div className="inherent-skill-icon">
                <img
                  src={forte.inherentSkill?.[1].icon}
                  alt={forte.inherentSkill?.[1].name}
                />
              </div>
            </div>

            {/* Column 4: Res Liberation Column */}
            <div className="forte-col">
              <div className="skill-item">
                <img src={forte.skill?.[3].icon} alt={forte.skill?.[3].name} />
              </div>
              <div className="forte-divider"></div>
              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[4].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
              <div className="forte-divider"></div>
              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[5].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
            </div>

            {/* Column 5: Intro SKill Column */}
            <div className="forte-col">
              <div className="skill-item">
                <img src={forte.skill?.[4].icon} alt={forte.skill?.[4].name} />
              </div>
              <div className="forte-divider"></div>
              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[6].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
              <div className="forte-divider"></div>
              <div className="minor-forte-item">
                <img
                  src={
                    icons.icontypes.find(
                      (icon) => icon.name === forte.minorForte?.[7].name,
                    )?.icon
                  }
                  alt=""
                />
              </div>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ForteCard;
