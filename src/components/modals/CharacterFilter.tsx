// This component will display a list of all characters that a user can add
// import sonata from "../../data/sonatas.json"
import weapontypes from "../../data/weapontypes.json"
import attributes from "../../data/attributes.json"
import { WWCharacterData } from "../../data/WWCharacter"
import React from "react";

interface CharacterFilterProps {
    onClose: () => void
}

function CharacterFilter(props: CharacterFilterProps) {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [selectedWeapon, setSelectedWeapon] = React.useState<string | null>(null)
    const [selectedAttribute, setSelectedAttribute] = React.useState<string | null>(null)

    const filteredCharacters = WWCharacterData.filter(character => {
        const matchesName = character.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesWeapon = selectedWeapon ? character.weapon === selectedWeapon : true;
        const matchesAttribute = selectedAttribute ? character.element === selectedAttribute : true;

        return matchesName && matchesWeapon && matchesAttribute;
    })

    return (
        <div className="modal-overlay">

            <div className="character-window">
                <h2>Characters</h2>
                <div className="character-filter">
                    <input type="text" placeholder="Search characters..." 
                    className="search-bar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />

                    <div className="weapon-filter">
                        <div >
                            {weapontypes.weapontypes.map(weapontype => (
                                <button key={weapontype.id}
                                className={selectedWeapon === weapontype.name ? "selected" : ""}
                                onClick={() => setSelectedWeapon(selectedWeapon === weapontype.name ? null : weapontype.name)}
                                >
                                    <div>
                                        <img src={weapontype.icon} 
                                        alt={weapontype.name} />
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    <div className="attribute-filter">
                        <div>
                            {attributes.attributes.map(attr=> (
                                <button 
                                    key={attr.id}
                                    className={selectedAttribute === attr.element ? "selected" : ""}
                                    onClick={() => setSelectedAttribute(selectedAttribute === attr.element ? null : attr.element)}
                                >
                                    <img src={attr.icon} 
                                    alt={attr.element} />
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="character-cards">
                    <h1>Characters grid</h1>
                    <div className="character-grid">
                        <div className="character-grid-item">
                            {filteredCharacters.map(character => (
                                <div key={character.charId} onClick={() => console.log(`Clicked on character: ${character.name}`)}  >
                                    <img src={character.images.icon} alt={character.name} />
                                    <p>{character.name}</p>
                                    {/* <img src={character.rarity.img} alt={character.rarity.alt} /> */}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                 <button 
                    onClick={props.onClose} 
                    style={{position: 'absolute', top: 20, right: 20}}
                    >
                        Close
                </button>
            </div>


        </div>
    )
}

export default CharacterFilter