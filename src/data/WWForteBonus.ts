export interface WWForteBonus {
    name: string,
    Id: number,
    skill?: {
        id: number,
        name: string,
        description: string,
        icon: string,
    }[],
    inherentSkill?: {
        id: number,
        name: string,
        description?: string,
        icon: string,
    }[],
    minorForte:{
        id: number,
        name: string,
        value: number,
    }[]
}


export const WWForteBonusData: WWForteBonus[] = [
    {
        name: "Baizhi",
        Id: 1001,
        skill: [
            { id: 1, name: "Destined Promise", description: "Basic Attack", icon: "/assets/icons/characters/baizhi/Skill_Rectifier.webp" },
            { id: 2, name: "Emergency Plan", description: "Resonance Skill", icon: "/assets/icons/characters/baizhi/Skill_Emergency_Plan.webp" },
            { id: 3, name: "Cycle of Life", description: "Forte Circuit", icon: "/assets/icons/characters/baizhi/Skill_Cycle_of_Life.webp" },
            { id: 4, name: "Momentary Union", description: "Resonance Liberation", icon: "/assets/icons/characters/baizhi/Skill_Momentary_Union.webp" },      
            { id: 5, name: "Overflowing Frost", description: "Intro Skill", icon: "/assets/icons/characters/baizhi/Skill_Overflowing_Frost.webp" },  
            { id: 6, name: "Rejuvinating Flow", description: "Outro Skill", icon: "/assets/icons/characters/baizhi/Skill_Rejuvinating_Flow.webp" }
        ],
        inherentSkill: [
            { id: 1, name: "Harmonic Range", icon: "/assets/icons/characters/baizhi/Skill_Harmonic_Range.webp" },
            { id: 2, name: "Stimulus Feedback", icon: "/assets/icons/characters/baizhi/Skill_Stimulus_Feedback.webp" },
        ],
        minorForte: [
            { id: 1, name: "Healing Bonus", value: 1.8 },
            { id: 2, name: "Healing Bonus", value: 4.2 },

            { id: 3, name: "HP", value: 1.8 },
            { id: 4, name: "HP", value: 4.2 },

            { id: 5, name: "HP", value: 1.8 },
            { id: 6, name: "HP", value: 4.2 }, 
            
            { id: 7, name: "Healing Bonus", value: 1.8 },
            { id: 8, name: "Healing Bonus", value: 4.2 },            
        ]
    }
]

export default WWForteBonusData;