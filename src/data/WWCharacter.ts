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
}

export const WWCharacterData: WWCharacter[] = [
    Baizhi,
    Buling,
    Changli,
    Chixia,
    Danjin,
    Jianxin
]