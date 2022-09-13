import {Request, Response} from 'express'
import HuntModel, {Hunt} from '../models/Hunt'
import mongoose, { HydratedDocument } from 'mongoose'
const ObjectId = mongoose.Types.ObjectId;
export const createHunt = async (req: Request, res: Response) => {
  const hunt: Hunt = req.body
  const huntModel: HydratedDocument<Hunt> = new HuntModel(hunt)
  try{
    await huntModel.save()
    res.send('Caça cadastrada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const updateHunt = async (req: Request, res: Response) => {
  const id = req.params.id
  const huntUpdates = req.body

  try{
    const hunt = await HuntModel.findByIdAndUpdate(id, huntUpdates, {new: true})
    res.send('Caça atualizada com sucesso')
  } catch(e){
    console.error(e)
    res.status(500).send("Falha ao atualizar a caça")
  }
}


export const deleteHunt = async (req: Request, res: Response) => {
  const id = req.params.id

  try{
    const hunt = await HuntModel.deleteOne({_id:id})
    res.send('Caça deletada com sucesso')
  } catch(e){
    console.error(e)
    res.send("Falha ao deletar o ID")
  }
}

export const readAllHunts = async (req: Request, res: Response) => {
  try {
    let hunt = await HuntModel.aggregate([
      {$addFields: { totalQuestions: {$size:'$questions' }}},
      { $unset: "questions" }
    ])
    res.send(hunt)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a caça")
  }
}

export const readHunt = async (req: Request, res: Response) => {
  const id = req.params.id
  try{
    const hunt = await HuntModel.aggregate([
      { "$match": { "_id":  new ObjectId(id) }},
      {$addFields: { totalQuestions: {$size:'$questions' }}},
      { $unset: "questions" }
    ])
    if(hunt===null){
      throw(new Error("Caça nao encontrada"))
    } 
  res.send(hunt[0])
  } catch(e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a caça")
  }
}
