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
    },

    stats:{
        base_hp: 12812,
        base_atk: 212,
        base_def: 1002,
        base_crit: 5,
        base_crit_dmg: 150,
        base_healing: 0,
        base_energy_regen: 100.00,
        bonus_ele: 0,
        bonus_hp: 1.12,
        bonus_atk: 0,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_crit_dmg: 0,
        bonus_energy_regen: 0

    }
}