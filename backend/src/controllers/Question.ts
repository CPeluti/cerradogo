import {Request, Response} from 'express'
import QuestionModel, {Question} from '../models/Question'
import { HydratedDocument } from 'mongoose'

export const createQuestion = async (req: Request, res: Response) => {
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

export const updateQuestion = async (req: Request, res: Response) => {
  const id = req.params.id
  const questionUpdates = req.body

  try{
    const question = await QuestionModel.findByIdAndUpdate(id, questionUpdates, {new: true})
    res.send('Pergunta atualizada com sucesso')
  } catch(e){
    console.error(e)
    res.status(500).send("Falha ao atualizar a pergunta")
  }
}

export const deleteQuestion = async (req: Request, res: Response) => {
  const id = req.params.id

  try{
    const question = await QuestionModel.deleteOne({_id:id})
    res.send('Pergunta deletada com sucesso')
  } catch(e){
    console.error(e)
    res.send("Falha ao deletar o ID")
  }
}

export const readAllQuestions = async (req: Request, res: Response) => {
  try {
    const question = await QuestionModel.find({})
    res.send(question)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a pergunta")
  }
}

export const readQuestion = async (req: Request, res: Response) => {
  const id = req.params.id
  try{
    const question = await QuestionModel.findById(id)
    if(question===null){
      throw(new Error("Pergunta nao encontrada"))
    } 
  res.send(question)
  } catch(e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a pergunta")
  }
}
