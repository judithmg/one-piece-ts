export interface characterInterface {
    name?: string
    type?: string
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
    famiy?: null | string
    cooldown?: number[]
}

export interface characterDetail {
    id?: number
    captain?: string
    special?: string
    sailor?: string
    sailorNotes?: string
    specialName?: string
    limit?: any
    potential?: any
    potentialNotes?: any
    support?: any
    evolution?: number[] | number
    evolvers?: number[]
}