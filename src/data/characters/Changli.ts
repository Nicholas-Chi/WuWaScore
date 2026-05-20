import type { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Changli: WWCharacter = {
    name: "Changli",
    charId: 1003,
    rarity: {
        alt: "5-Star",
        img: rarity5Star
    },
    element: "Fusion",
    weapon: "Sword",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Changli.png",
        portrait: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0e/Changli_Full_Sprite.png/revision/latest?cb=20240202080219",
    }
}