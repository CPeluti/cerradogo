import {Request, Response} from 'express'
import CollectionModel, {Collection} from '../models/Collection'
import { HydratedDocument } from 'mongoose'

export const createCollection = async (req: Request, res: Response) => {
  console.log(req.body)
  const hunt: Collection = req.body
  const huntModel: HydratedDocument<Collection> = new CollectionModel(hunt)
  try{
    await huntModel.save()
    res.send('Coleção cadastrada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const updateCollection = async (req: Request, res: Response) => {
  const id = req.params.id
  const huntUpdates = req.body

  try{
    const hunt = await CollectionModel.findByIdAndUpdate(id, huntUpdates, {new: true})
    res.send('Coleção atualizada com sucesso')
  } catch(e){
    console.error(e)
    res.status(500).send("Falha ao atualizar a coleção")
  }
}


export const deleteCollection = async (req: Request, res: Response) => {
  const id = req.params.id

  try{
    const hunt = await CollectionModel.deleteOne({_id:id})
    res.send('Coleção deletada com sucesso')
  } catch(e){
    console.error(e)
    res.send("Falha ao deletar o ID")
  }
}

export const readAllCollections = async (req: Request, res: Response) => {
  try {
    const hunt = await CollectionModel.find({})
    res.send(hunt)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a coleção")
  }
}

export const readCollection = async (req: Request, res: Response) => {
  const id = req.params.id
  try{
    const hunt = await CollectionModel.findById(id)
    if(hunt===null){
      throw(new Error("Coleção nao encontrada"))
    } 
  res.send(hunt)
  } catch(e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a coleção")
  }
}
