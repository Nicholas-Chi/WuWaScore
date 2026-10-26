import CharacterCard from "./CharacterCard.tsx";
import Weapon from "./WeaponCard.tsx";
import Stats from "./StatsPanel.tsx";
import ForteCard from "./ForteCard.tsx";
import EchoCards from "./EchoCards.tsx";
import type { WWCharacter } from "../../data/WWCharacter.ts";
import "./ShowcaseDashboard.css";

interface ShowcaseDashboardProps {
  character: WWCharacter | null;
  weapon: any | null;
  onSelectWeapon: (weapon: any) => void;
}

// central component with all the cards for the dashboard
function ShowcaseDashboard({
  character,
  weapon,
  onSelectWeapon,
}: ShowcaseDashboardProps) {
  return (
    <>
      <div className="dashboard-container">
        <div className="top-grid">
          <div className="character-card">
            <CharacterCard character={character} />
          </div>

          <div className="middle-column">
            <div className="stats-panel">
              <Stats weapon={weapon} character={character} />
            </div>

            <div className="weapon-card">
              <Weapon weapon={weapon} onSelectWeapon={onSelectWeapon} />
            </div>
          </div>

          <div className="forte-card">
            <ForteCard />
          </div>
        </div>
        {/* this will be under the above elements */}
        <div className="echo-cards">
          <EchoCards />
        </div>
      </div>
    </>
  );
}
export default ShowcaseDashboard;
