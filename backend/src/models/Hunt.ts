import { Schema, model} from 'mongoose'
import imageSchema, {Image} from './Image';


export interface Hunt{
        name: string
        location: string
        img: Image
        latlong: number[]
        questions: string[]
        tips: string[]
    }

const huntSchema = new Schema<Hunt>({
    name: {type: String, required: true},
    location: {type: String, required: true},
    latlong: {type: [Number], required: true},
    questions: {type: [String], select: true},
    tips: {type: [String], required: true},
    img: imageSchema
})

const HuntModel = model<Hunt>('Hunt', huntSchema)

export default HuntModel