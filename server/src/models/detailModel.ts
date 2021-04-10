export { }
const { model, Schema } = require('mongoose');
import { characterDetail } from '../interfaces/charsInterface'

const detailSchema: characterDetail = new Schema({
    id: Number,
    captain: Schema.Types.Mixed,
    special: Schema.Types.Mixed,
    sailor: Schema.Types.Mixed,
    sailorNotes: String,
    specialName: String,
    limit: Schema.Types.Mixed,
    potential: Schema.Types.Mixed,
    potentialNotes: Schema.Types.Mixed,
    support: Schema.Types.Mixed,
    evolution: Schema.Types.Mixed,
    evolvers: [Number],
    swap: String,
    festAbility: [{
        description: String
    }],
    festSpecial: [{
        description: String,
        cooldown: Number
    }],
    festResistance: String,
    festAttackTarget: String,

    superSpecial: String,
    superSpecialCriteria: String,
    superSpecialNotes: String,
    VSCondition: String,
    VSSpecial: {
        character1: String,
        character2: String,
    },
    festResilienc: String
})

module.exports = model('Details', detailSchema);
