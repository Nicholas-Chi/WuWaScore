import type { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Buling: WWCharacter = {
    name: "Buling",
    charId: 1002,
    rarity: {
        alt: "4-Star",
        img: rarity4Star
    },
    element: "Electro",
    weapon: "Rectifier",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Buling.png",
        portrait: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0e/Buling_Full_Sprite.png/revision/latest?cb=20240202080219",
    }
}