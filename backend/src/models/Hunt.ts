import { Schema, model} from 'mongoose'

export interface Hunt{
        name: string
        location: string
        latlong: number[]
    }

const huntSchema = new Schema<Hunt>({
    name: {type: String, required: true},
    location: {type: String, required: true},
    latlong: {type: [Number], required: true}
    
})

const HuntModel = model<Hunt>('Hunt', huntSchema)

export default HuntModel