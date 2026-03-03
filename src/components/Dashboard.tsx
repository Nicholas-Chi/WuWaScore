import CharacterCard from "./CharacterCard.tsx"
import Weapon from "./Weapon.tsx"
import Stats from "./Stats.tsx"
import Navbar from "./Navbar.tsx"

function Dashboard() {
    return (
        <>
        <Navbar/>
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