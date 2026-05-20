import type { WWCharacter } from "../WWCharacter";

const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

export const Chixia: WWCharacter = {
    name: "Chixia",
    charId: 1004,
    rarity: {
        alt: "4-Star",
        img: rarity4Star
    },
    element: "Fusion",
    weapon: "Pistols",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Chixia.png",
        portrait: "https://static.wikia.nocookie.net/wutheringwaves/images/0/0e/Chixia_Full_Sprite.png/revision/latest?cb=20240202080219",
    }
}