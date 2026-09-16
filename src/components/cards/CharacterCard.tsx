// import img from "../assets/characters/Galbrena_Full_Sprite.webp"
import type { WWCharacter } from "../../data/WWCharacter";

interface CharacterCardProps {
    character: WWCharacter | null
}

function CharacterCard(props: CharacterCardProps) {
    return (
    <div className="character-portrait">
        <img src={props.character?.images.portrait} alt={props.character?.name} />
    </div>
    )
}
export default CharacterCard