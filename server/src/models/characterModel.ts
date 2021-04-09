const { model, Schema } = require('mongoose');
import { characterInterface } from '../interfaces/charsInterface'

const charSchema: characterInterface = new Schema({
    name: String,
    type: Schema.Types.Mixed,
    class: Schema.Types.Mixed,
    stars: Schema.Types.Mixed,
    cost: Number,
    combo: Number,
    sockets: Number,
    maxLvl: Number,
    expToMax: Number,
    lvl1HP: Number,
    lvl1ATK: Number,
    lvl1RCV: Number,
    maxHP: Number,
    maxATK: Number,
    maxRCV: Number,
    growthRate: Number,
    id: Number,
    alias: Schema.Types.Mixed,
    family: Schema.Types.Mixed,
    cooldown: [Number],
})

module.exports = model('Characters', charSchema);
