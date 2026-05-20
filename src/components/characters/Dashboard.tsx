import CharacterCard from "./CharacterCard.tsx"
import Weapon from "../characters/Weapon.tsx"
import Stats from "./Stats.tsx"

function Dashboard() {
    return (
        <>
        <div className="dashboard-container">
            <main>
                <CharacterCard />
                <Weapon />
                <Stats />
            </main>
        </div>
        </>
    )
}
export default Dashboard