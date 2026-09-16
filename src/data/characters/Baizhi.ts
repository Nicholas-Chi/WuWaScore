import type { WWCharacter } from "../WWCharacter";

 const rarity4Star = "https://wuthering-waves-assets.pages.dev/icon_stars/Icon_4_Stars.webp";

 export const Baizhi: WWCharacter = {
    name: "Baizhi",
    charId: 1001,
    rarity: {
        alt: "4-Star",
        img: rarity4Star
    },
    element: "Glacio",
    weapon: "Rectifier",
    images: {
        icon: "https://raw.githubusercontent.com/ryanbenson/wuthering-waves-assets/master/images/Baizhi.png",
        portrait: "/assets/image/character_portrait/Baizhi_Full_Sprite.webp",
    },

    stats: {
        base_hp: 12812,
        base_atk: 212,
        base_def: 1002,
        base_crit: 5,
        base_crit_dmg: 150,
        base_healing: 0,
        max_energy: 175,
        bonus_ele: 0,
        bonus_hp: 1.12,
        bonus_atk: 0,
        bonus_def: 0,
        bonus_heal: 12,
        bonus_crit: 0,
        bonus_crit_dmg: 0
    },

 }