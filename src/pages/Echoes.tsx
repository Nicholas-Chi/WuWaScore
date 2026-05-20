import React from "react"
import EchoWindow  from "../components/modals/EchoWindow"
import EchoEditor from "../components/echoes/EchoEditor"

export default function Echoes() {

    // use this to store the echo object
    const [backpack, setBackpack] = React.useState<any[]>([])

    const [showEchoWindow, setShowEchoWindow] = React.useState(false)

    const [selectedEcho, setSelectedEcho] = React.useState<any | null>(null)

    function toggleEchoWindow() {
        setShowEchoWindow(prevWindow => !prevWindow)
    }

    // this should populate the echoEdior with the data of the echo from the backpack
    function editSelectedEcho(echoFromBackpack: any) {
        setSelectedEcho(echoFromBackpack)
    }

    function addEcho(formData: any) {
        if (formData.instanceId) {
            setBackpack(prev => prev.map(item =>
                item.instanceId === formData.instanceId ? {...item, ...formData} : item
            ))
        } else {
            const newEcho = {
                ...formData,
                instanceId: Date.now(),
                id: selectedEcho.id,
                name: selectedEcho.name,
                cost: selectedEcho.cost
            }
            setBackpack(prev => [...prev, newEcho]);
        }
        setSelectedEcho(null); // Close the editor
    }

    function deleteEcho(instanceId: number, e: React.MouseEvent) {
        e.stopPropagation(); // Prevents the backpack-item onClick (edit) from firing
        setBackpack(prev => prev.filter(item => item.instanceId !== instanceId));
    }

    return (
        <>
            <div className="echo-backpack">
                    <h2>Echo Backpack ({backpack.length})</h2>
                    <div className="backpack-grid">
                        {backpack.map((echo) => (
                            <button
                            key={echo.instanceId}
                            className="backpack-item"
                            onClick={() => editSelectedEcho(echo)}
                            >   
                                <div className="echo-icon-container">
                                    {/* echo cost icon */}
                                    <div className="echo-cost-icon">{echo.cost}</div>
                                    {/* display which sonata the echo is */}
                                    <img src={`/assets/icons/sonatas/${echo.sonata.replace(/\s+/g, '_').toLowerCase()}.webp`}
                                        alt={echo.sonata}
                                        className="sonata-icon"
                                        title={echo.sonata}
                                    />
                                </div>

                                {/* image of echo inside the backpack */}
                                <img 
                                    src={`/assets/icons/echoes/${echo.id}.webp`} 
                                    alt={echo.name} 
                                    className="echo-img"
                                />

                                {/* the little delete icon in the top right of each echo */}
                                <span
                                    className="delete-icon"
                                    onClick={(e)=> deleteEcho(echo.instanceId, e)}
                                >
                                    &times;
                                </span>
                            </button>

                        ))}
                    </div>
                </div>

            <div className="echo-form-container">
                <h1>Echo Form</h1>
                <p>This is where you can add and manage your echoes.</p>
                <button onClick={toggleEchoWindow}>
                    {showEchoWindow ? "Close Echo Window" : "Open Echo Window"}
                </button>
                <div className="echo-stats-window">
                    <h2>Echo Stats</h2>
                    {selectedEcho ?  (
                        <EchoEditor  
                            echo={selectedEcho}
                            onSave={addEcho
                            }
                        />
                    ) : (
                        <p>Please select an echo to manage its stats.</p>
                    )}
                </div>

                {showEchoWindow && (
                    <EchoWindow 
                    onClose={toggleEchoWindow} 
                    onSelectEcho={(echo) => setSelectedEcho(echo)}
                    />
                )}
            </div>
        </>
    )
}

