import CharacterCard from "./CharacterCard.tsx"
import Weapon from "./WeaponCard.tsx"
import Stats from "./StatsPanel.tsx"
import ForteCard from "./ForteCard.tsx"
import EchoCards from "./EchoCards.tsx"
import type { WWCharacter } from "../../data/WWCharacter.ts"

interface ShowcaseDashboardProps{
    character: WWCharacter | null;
}

// central component with all the cards for the dashboard
function ShowcaseDashboard({ character }: ShowcaseDashboardProps) {
    return (
        <>
        <div className="dashboard-container">
            <main>
                <CharacterCard character={character} />
                <Weapon />
                <Stats character={character} />
                <ForteCard />
                <EchoCards />
            </main>
        </div>
        </>
    )
}
export default ShowcaseDashboard


