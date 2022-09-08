import { Schema, model, connect } from 'mongoose'
import imageSchema, {Image} from './Image';
export interface User {
    nickname: string;
    name: string;
    email: string;
    password: string;
    experience: number;
    rank: number;
    leaguePoints: number;
    img: Image
    
}

const userSchema = new Schema<User>({
    nickname: {type: String, required: true},
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true, select: false},
    experience: {type: Number, required: true},
    rank: {type: Number, required: true},
    leaguePoints: {type: Number, required: true},
    img: imageSchema
})

const UserModel = model<User>('User', userSchema)

export default UserModel
