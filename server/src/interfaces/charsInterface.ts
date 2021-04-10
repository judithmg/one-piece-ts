export interface characterInterface {
    name?: string
    type?: string | string[]
    class?: string | Array<string> | Array<Array<string>>
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

interface sailorInterface {
    base?: string
    level1?: string
    level2?: string
}

interface specialInterface {
    japan?: string
    global?: string
    character1?: string
    character2?: string
    description?: string
    cooldown?: Array<number>
}

interface limitInterface {
    description: string
}

interface potentialInterface {
    Name: string
    description: string[]
}

interface supportInterface {
    Characters: string
    description: string[]
}

export interface characterDetail {
    id?: number
    captain?: string | {
        character1: string
        character2: string
        combined: string
    }
    special?: string | specialInterface | Array<specialInterface>
    sailor?: string | sailorInterface
    sailorNotes?: string
    specialName?: string
    limit?: limitInterface[]
    potential?: potentialInterface[]
    potentialNotes?: string
    support?: supportInterface[]
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