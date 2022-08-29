import { Schema, model, connect } from 'mongoose'

export interface Rank {
    rankName: number;
    leaguePoints: number;
    tableScore: Array<string>;
}

const ranksSchema = new Schema<Ranks>({
    rankName: {type: Number, required: true},
    leaguePoints: {type: Number, required: true},
    tableScore: {type: [String], required: true},
})

const RanksModel = model<Ranks>('Ranks', userSchema)

export default RanksModel