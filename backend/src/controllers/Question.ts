import {Request, Response} from 'express'
import QuestionModel, {Question} from '../models/Question'
import HuntModel, {Hunt} from '../models/Hunt'
import { HydratedDocument } from 'mongoose'

export const createQuestion = async (req: Request, res: Response) => {
  const question: Question = req.body
  const questionModel: HydratedDocument<Question> = new QuestionModel(question)
  try{
    const result = await questionModel.save()
    await HuntModel.findByIdAndUpdate(req.params.huntId, {$push: {questions: [result._id]}})
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
    const hunt = await HuntModel.findById(req.params.huntId).select('questions -_id')
    if(hunt?.questions){
      const question = await QuestionModel.find({
        '_id': {$in: hunt.questions}
      })
      res.send(question)
    } else {
      res.send([])
    }
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

export const randomQuestion = async (req: Request, res: Response) => {
  try {
    const hunt = await HuntModel.findById(req.params.huntId).select('questions -_id')
    console.log(hunt)
    const id =  hunt?.questions[Math.floor(Math.random() * hunt.questions.length)]
    const question = await QuestionModel.findById(id)
    res.send(question)
  } catch {
    res.status(404).send("falha ao pegar uma pergunta aleatória")
  }
}

