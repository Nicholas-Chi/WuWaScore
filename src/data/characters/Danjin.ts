import type { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Danjin: WWCharacter = {
    name: "Danjin",
    charId: 1005,
    rarity: {
        alt: "4-Star",
        img: rarity4Star
    },
    element: "Havoc",
    weapon: "Swords",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Danjin.png",
        portrait: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0e/Danjin_Full_Sprite.png/revision/latest?cb=20240202080219",
    }
}