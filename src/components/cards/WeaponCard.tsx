// import weapon from "../assets/weapons/Weapon_Static_Mist.webp"
import React from "react";
import WeaponModal from "../modals/WeaponModal";

interface WeaponCardProps {
  weapon: any | null;
  onSelectWeapon: (weapon: any) => void;
}

function WeaponCard({ weapon, onSelectWeapon }: WeaponCardProps) {
  const [showWeaponWindow, setShowWeaponWindow] = React.useState(false);

  function toggleWeaponWindow() {
    setShowWeaponWindow((prevState) => !prevState);
  }

  return (
    <div className="weapon-container" onClick={toggleWeaponWindow}>
      {showWeaponWindow && (
        <WeaponModal onClose={toggleWeaponWindow} onSelect={onSelectWeapon} />
      )}
      {/* <img src={`/assets/icons/weapons/Weapon_Static_Mist.webp`} alt="Static Mist" /> */}
      {weapon === null ? (
        <img
          className="no-weapon-icon"
          src={`https://whisperingsea.github.io/wuthering-waves-assets/images/icons_ui2/weapons.png`}
          alt={"Weapon"}
        />
      ) : (
        <img className="weapon-icon" src={weapon?.img} alt={weapon?.name} />
      )}
      {weapon && (
        <span
          style={{
            color: "white",
            fontSize: "0.8rem",
            textAlign: "center",
          }}
        >
          {weapon.name} - {weapon.rarity}★ <br />
          {weapon.mainStat}: {weapon.mainStatValue} - {weapon.subStat}:{" "}
          {weapon.subStatValue}
        </span>
      )}
    </div>
  );
}
export default WeaponCard;
