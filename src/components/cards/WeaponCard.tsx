// import weapon from "../assets/weapons/Weapon_Static_Mist.webp"
import React from "react"
import WeaponModal from "../modals/WeaponModal";

function WeaponCard() {
    const [showWeaponWindow, setShowWeaponWindow] = React.useState(false)
    const [selectedWeapon, setSelectedWeapon] = React.useState<any | null>(null)

    function toggleWeaponWindow() {
        setShowWeaponWindow(prevState => !prevState)
    }


    return (    
    <div className="weapon-container" onClick={toggleWeaponWindow}>
        {showWeaponWindow && <WeaponModal onClose={toggleWeaponWindow} onSelect={setSelectedWeapon} />}
        {/* <img src={`/assets/icons/weapons/Weapon_Static_Mist.webp`} alt="Static Mist" /> */}
        {selectedWeapon === null ? <img src={`https://whisperingsea.github.io/wuthering-waves-assets/images/icons_ui2/weapons.png`} alt={"Weapon"} />  : <img src={selectedWeapon?.img} alt={selectedWeapon?.name} /> }
    </div>
    )
}
export default WeaponCard