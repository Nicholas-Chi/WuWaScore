import React from "react"
import sonata from "../../data/sonatas.json"
import echoData from "../../data/echoes.json"

interface EchoFormProps {
    onClose: () => void;
    onSelectEcho: (echo: any) => void;
}

export default function EchoWindow(props: EchoFormProps) {

    const [searchEcho, setSearchEcho] = React.useState("")

    const [selectedSet, setSelectedSet] = React.useState<string | null>(null)

    const sonataSets = sonata.sonatas.map(sonata => sonata.name)

    // Filter echoes based on search and selected set
    const filteredEchoes = echoData.echoes.filter(echo => {
        const matchesSearch = echo.name.toLowerCase().includes(searchEcho.toLowerCase());
        // If no set is selected, show all. Otherwise, check if the echo's sets array contains the selectedSet.
        const matchesSet = selectedSet ? echo.sets.includes(selectedSet) : true;
    
        return matchesSearch && matchesSet;
    })

    // handle echo click in echo window
    function handleEchoClick(echo: any) {
        console.log(`Clicked on echo: ${echo.name}`);
        props.onClose(); 
        props.onSelectEcho(echo);
    }

    // Map filtered echoes to JSX elements
    // const echoElements = filteredEchoes.map(echo => (
    //     // <div key={echo.id} className="echo-card">
    //     //     <img src={`/assets/icons/echoes/${echo.id}.webp`} alt={echo.name} />
    //     //     {/* <h3>{echo.name}</h3> */}
    //     //     {/* <p>Cost: {echo.cost}</p>
    //     //     <p>Set: {echo.sets.join(", ")}</p> */}
    //     // </div>

    //     <button
    //         key={echo.id}
    //         className="echo-card"
    //         onClick={() => handleEchoClick(echo)}
    //     >
    //         <img src={`/assets/icons/echoes/${echo.id}.webp`} alt={echo.name} />
    //     </button>
    //     )
    // )

    return (
        <div className="modal-overlay" onClick={props.onClose}>
            <div className="echo-window" onClick={(e) => e.stopPropagation()}>
                <button className="close-btn" onClick={props.onClose}>X</button>

                <h2>Available Echoes</h2>
                
                <div className="filters-container">
                <input 
                    type="text" 
                    placeholder="Search echoes..." 
                    value={searchEcho}
                    onChange={(e) => setSearchEcho(e.target.value)}
                    className="search-bar"
                />
                <div className="set-filter-container">
                    {sonataSets.map(setName => (
                        <button 
                            key={setName}
                            className={`set-button ${selectedSet === setName ? 'active' : ''}`}
                            onClick={() => setSelectedSet(selectedSet === setName ? null : setName)}
                            title={setName}
                        >
                            <img 
                                src={`/assets/icons/sonatas/${setName.replace(/\s+/g, '_').toLowerCase()}.webp`} 
                                alt={setName} 
                            />
                        </button>
                    ))}
                </div>
            </div>

                <div className="echo-grid" style={{ color: "white" }}>
                    <div className="cost-section">
                        <h3>4-Cost Echoes</h3>
                        <div className="echo-list">
                            {filteredEchoes.filter(echo => echo.cost === 4).map(echo => (
                                <button
                                    key={echo.id}
                                    className="echo-card"
                                    onClick={() => handleEchoClick(echo)}
                                >
                                    <img src={`/assets/icons/echoes/${echo.id}.webp`} alt={echo.name} />
                                    <p>{echo.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="cost-section">
                        <h3>3-Cost Echoes</h3>
                        <div className="echo-list">
                            {filteredEchoes.filter(echo => echo.cost === 3).map(echo => (
                                <button
                                    key={echo.id}
                                    className="echo-card"
                                    onClick={() => handleEchoClick(echo)}
                                >
                                    <img src={`/assets/icons/echoes/${echo.id}.webp`} alt={echo.name} />
                                    <p>{echo.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    <div className="cost-section">
                        <h3>1-Cost Echoes</h3>
                        <div className="echo-list">
                            {filteredEchoes.filter(echo => echo.cost === 1).map(echo => (
                                <button
                                    key={echo.id}
                                    className="echo-card"
                                    onClick={() => handleEchoClick(echo)}
                                >
                                    <img src={`/assets/icons/echoes/${echo.id}.webp`} alt={echo.name} />
                                    <p>{echo.name}</p>
                                </button>
                            ))}
                        </div>
                    </div>
                    </div>
                    {/* {echoElements.length > 0 ? echoElements : <p>No results found.</p>} */}
                </div>

                {/* <div className="echo-grid">
                    {echoElements}
                </div> */}
            </div>
    )
}