import { Schema, model} from 'mongoose'

export interface Hunt{
        name: string
        location: string
        img: string
        latlong: number[]
        questions: string[]
    }

const huntSchema = new Schema<Hunt>({
    name: {type: String, required: true},
    location: {type: String, required: true},
    latlong: {type: [Number], required: true},
    questions: {type: [String]},
    img: {file: {data: Buffer, contentType: String}, type: String}
})

const HuntModel = model<Hunt>('Hunt', huntSchema)

export default HuntModel