import CharacterFilter from "../components/modals/CharacterFilter"
import React from "react"
import type { WWCharacter } from "../data/WWCharacter"
import ShowcaseDashboard from "../components/cards/ShowcaseDashboard"

export default function Characters() {  

    const [showCharacterWindow, setShowCharacterWindow] = React.useState(false)
    const [selectedCharacter, setSelectedCharacter] =  React.useState<WWCharacter | null>(null)

    function toggleCharacterWindow() {
        setShowCharacterWindow(prevState => !prevState)
    }

    function editSelectedCharacter(character: WWCharacter)
    {
        setSelectedCharacter(character)
        // close the character window after selecting a character
        setShowCharacterWindow(false)
    }

    return (
        <div className="characters-container">
            <h1>Characters</h1>
            <div>
                <button onClick={toggleCharacterWindow}>
                    {showCharacterWindow ? "Close Window" : "Add Character"}
                </button>

                    {showCharacterWindow && (<CharacterFilter 
                    onClose={toggleCharacterWindow}
                    onSelectCharacter={editSelectedCharacter}
                    />)}
                <div className="characterGrid">
                    <ShowcaseDashboard character={selectedCharacter} />
                </div>
            </div>

            {/* <div>
                <input type="search" name="" id="" />
            </div>
            <p>This is where you can view and manage your characters.</p> */}
        </div>
    )
}