import { Schema, model, connect } from 'mongoose'

export interface Question {
    question: string;
    rightanswer: string;
    wronganswer: Array<string>;
}

const questionSchema = new Schema<Question>({
    question: {type: String, required: true},
    rightanswer: {type: String, required: true},
    wronganswer: [String],
})

const QuestionModel = model<Question>('Question', questionSchema)

export default QuestionModel
