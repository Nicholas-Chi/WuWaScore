import { Baizhi } from "./characters/Baizhi";
import { Buling } from "./characters/Buling";
import { Changli } from "./characters/Changli";
import { Chixia } from "./characters/Chixia";
import { Danjin } from "./characters/Danjin";
import { Jianxin } from "./characters/Jianxin";

export interface WWCharacter {
    name: string;
    charId: number;
    rarity: {
        alt: string;
        img: string;
    };
    element: string;
    weapon: string;
    images: {
        icon: string;
        portrait: string;
    };

    stats: {
        base_hp: number;
        base_atk: number;
        base_def: number;
        base_crit: number;
        base_crit_dmg: number;
        base_healing: number;
        base_energy_regen: number;
        bonus_ele: number;
        bonus_hp: number;
        bonus_atk: number;
        bonus_def: number;
        bonus_heal: number;
        bonus_crit: number;
        bonus_crit_dmg: number;
        bonus_energy_regen: number;
    }
}

export const WWCharacterData: WWCharacter[] = [
    Baizhi,
    Buling,
    Changli,
    Chixia,
    Danjin,
    Jianxin
]