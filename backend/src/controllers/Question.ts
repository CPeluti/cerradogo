import {Request, Response} from 'express'
import QuestionModel, {Question} from '../models/Question'
import { HydratedDocument } from 'mongoose'
const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const question: Question = req.body
  const questionModel: HydratedDocument<Question> = new QuestionModel(question)
  try{
    await questionModel.save()
    res.send('Pergunta cadastrada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export default create