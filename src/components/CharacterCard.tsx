import img from "../assets/characters/Galbrena_Full_Sprite.webp"

function CharacterCard() {
    return (
    <div className="character-portrait">
        <img src={img} alt="Galbrena" />
    </div>
    )
}
export default CharacterCard