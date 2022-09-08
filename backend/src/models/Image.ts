import { Schema } from 'mongoose'

export interface Image {
    file: string;
    fileType: string;
}
const imageSchema = new Schema<Image>({
    file: {type: String},
    fileType: {type: String}
})

export default imageSchema
