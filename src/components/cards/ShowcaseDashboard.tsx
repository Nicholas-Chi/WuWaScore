import CharacterCard from "./CharacterCard.tsx";
import Weapon from "./WeaponCard.tsx";
import Stats from "./StatsPanel.tsx";
import ForteCard from "./ForteCard.tsx";
import EchoCards from "./EchoCards.tsx";
import type { WWCharacter } from "../../data/WWCharacter.ts";

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
        <main>
          <CharacterCard character={character} />
          <Weapon weapon={weapon} onSelectWeapon={onSelectWeapon} />
          <Stats weapon={weapon} character={character} />
          <ForteCard />
          <EchoCards />
        </main>
      </div>
    </>
  );
}
export default ShowcaseDashboard;
