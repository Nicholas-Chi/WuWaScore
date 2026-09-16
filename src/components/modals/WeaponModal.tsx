import weapontypes from '../../data/weapontypes.json'
import React from 'react';
import weapons from '../../data/weapons.json'

interface WeaponModalProps {
    onClose: () => void;
    onSelect: (weapon: any) => void;
}

function WeaponModal(props: WeaponModalProps) {
    const [searchQuery, setSearchQuery] = React.useState("")
    const [selectedRarity, setSelectedRarity] = React.useState<string | null>(null)
    const [selectedWeapon, setSelectedWeapon] = React.useState<string | null>(null)

    const filteredWeapons = weapons.weapons.filter(weapon => {
        const matchesName = weapon.name.toLowerCase().includes(searchQuery.toLowerCase());
        const matchesRarity = selectedRarity ? weapon.rarity.toString() === selectedRarity : true;
        const matchesType = selectedWeapon ? weapon.type === selectedWeapon : true;
        return matchesName && matchesRarity && matchesType;
    })
    
    return (
        <div className="modal-overlay" onClick={(e) => e.stopPropagation()}>
            <div className="weapon-overlay">
                <h2>Weapons</h2>     
                    <div className="weapon-types">
                        <input type="text" placeholder='Search Weapon...'
                        className="search-bar" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                        <div className='weapon-filter'>
                            <div>
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

                        <div className="rarity-filter">
                            <div>
                                {weapontypes.rarities.map(rarity => (
                                    <button 
                                    key={rarity.id}
                                    className={selectedRarity === rarity.name ? "selected" : ""}
                                    onClick={() => setSelectedRarity(selectedRarity === rarity.name ? null : rarity.name)}
                                    >
                                        <img src={rarity.icon} alt={rarity.name} />
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
            
                    <div className="weapon-list">   
                        <h2>Weapons</h2>
                        <div className="weapon-grid">  
                            <div className="weapon-grid-item">
                                {filteredWeapons.map(weapon => (

                                    <div 
                                    key={weapon.name} 
                                    onClick={() => {
                                        props.onSelect(weapon);
                                        props.onClose();
                                    }}>
                                        <img src={weapon.img} alt={weapon.name} />
                                        <p>{weapon.name}</p>
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

export default WeaponModal