import type { WWCharacter } from "../WWCharacter";

const rarity5Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_5_Stars.webp";

export const Jianxin: WWCharacter = {
    name: "Jianxin",
    charId: 1006,
    rarity: {
        alt: "5-Star",
        img: rarity5Star
    },
    element: "Aero",
    weapon: "Gauntlets",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Jianxin.png",
        portrait: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0e/Jianxin_Full_Sprite.png/revision/latest?cb=20240202080219",
    }
}