import {Request, Response} from 'express'
import QuestionModel, {Question} from '../models/Question'
import { HydratedDocument } from 'mongoose'

export const create = async (req: Request, res: Response) => {
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

export const update = async (req: Request, res: Response) => {
  const questionUpdate: Question = req.body
  const question = await QuestionModel.findById(req.params.id)
  
  /* Object.keys(questionUpdate).forEach(key => {
    if(question != null){
      question[0][key] = questionUpdate[0][key]
    }
    //question[key] = questionUpdate[key]
    
  }) */

  question!.question = questionUpdate.question
  question!.rightanswer = questionUpdate.rightanswer
  question!.wronganswer = questionUpdate.wronganswer

  try{
    await question!.save()
    res.send('Pergunta atualizada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const del = async (req: Request, res: Response) => {
  const questionUpdate: Question = req.body
  const question = await QuestionModel.findById(req.params.id)

  try{
    await question!.delete()
    res.send('Pergunta deletada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const read = async (req: Request, res: Response) => {
  const questionUpdate: Question = req.body
  const question = await QuestionModel.findById(req.params.id)

  try{
    await question!.get()
    //res.send('Pergunta deletada com sucesso')
  } catch(e){
    console.error(e)
  }
}
