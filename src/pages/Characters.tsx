import SearchFilter from "../components/modals/SearchFilter"
import React from "react"
export default function Characters() {

    const [showCharacterWindow, setShowCharacterWindow] = React.useState(false)

    function toggleCharacterWindow() {
        setShowCharacterWindow(prevState => !prevState)
    }

    return (
        <div className="characters-container">
            <h1>Characters</h1>
            <div>
                <button onClick={toggleCharacterWindow}>
                    {showCharacterWindow ? "Close Window" : "Add Character"}
                </button>
                    {showCharacterWindow && (<SearchFilter onClose={toggleCharacterWindow}/>)}
                <div className="characterGrid">
                </div>
            </div>

            <div>
                <input type="search" name="" id="" />
            </div>
            <p>This is where you can view and manage your characters.</p>
        </div>
    )
}