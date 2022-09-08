import { Schema, model } from 'mongoose'
import imageSchema, {Image} from './Image';

export interface Question {
    question: string;
    img: Image;
    answers: Array<{text:string, right: boolean, selected: string}>;
}

const questionSchema = new Schema<Question>({
    question: {type: String, required: true},
    img: imageSchema,
    answers: {type: [{text:String, right: Boolean, selected: String}], required: true}
})

const QuestionModel = model<Question>('Question', questionSchema)

export default QuestionModel
