import { Schema, model, connect } from 'mongoose'

export interface User {
    nickname: string;
    name: string;
    email: string;
    password: string;
    avatar?: string;
    experience: number;
    rank: number;
    leaguePoints: number;
}

const userSchema = new Schema<User>({
    nickname: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    experience: {type: Number, required: true},
    rank: {type: Number, required: true},
    leaguePoints: {type: Number, required: true},
})

const UserModel = model<User>('User', userSchema)

export default UserModel