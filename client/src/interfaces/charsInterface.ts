export interface characterInterface {
    name?: string
    type?: string | string[]
    class?: any
    stars?: number
    cost?: number
    combo?: number
    sockets?: number
    maxLvl?: number
    expToMax?: number
    lvl1HP?: number
    lvl1ATK?: number
    lvl1RCV?: number
    maxHP?: number
    maxATK?: number
    maxRCV?: number
    growthRate?: number
    id?: number
    alias?: null | string
    family?: null | string
    cooldown?: number[]
}

export interface characterDetail {
    id?: number
    captain?: string | {
        character1: string
        character2: string
        combined: string
    }
    special?: string | any
    sailor?: any
    sailorNotes?: string
    specialName?: string
    limit?: any
    potential?: any
    potentialNotes?: any
    support?: any
    evolution?: number[] | number
    evolvers?: number[]
    swap?: string
    festAbility?: {
        description: string
    }[]
    festSpecial?: {
        description: string
        cooldown: number
    }[]
    festResistance?: string
    festAttackTarget?: string

    superSpecial?: string
    superSpecialCriteria?: string
    superSpecialNotes?: string
    VSCondition?: string
    VSSpecial?: {
        character1?: string
        character2?: string
    }
    festResilienc?: string
}