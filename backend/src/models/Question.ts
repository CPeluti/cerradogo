import { Schema, model, connect } from 'mongoose'

export interface Question {
    question: string;
    img: string;
    answers: Array<{text:string, right: boolean, selected: string}>;
}

const questionSchema = new Schema<Question>({
    question: {type: String, required: true},
    /* img: {data: Buffer, contentType: String}, */
    img: {type: String},
    answers: {type: [{text:String, right: Boolean, selected: String}], required: true}
})

const QuestionModel = model<Question>('Question', questionSchema)

export default QuestionModel
