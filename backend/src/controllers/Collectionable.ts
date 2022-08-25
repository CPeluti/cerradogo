import {Request, Response} from 'express'
import CollectionableModel, {Collectionable} from '../models/Collectionable'
import { HydratedDocument } from 'mongoose'

export const createCollectionable = async (req: Request, res: Response) => {
  //console.log(req.body)
  const hunt: Collectionable = req.body
  const huntModel: HydratedDocument<Collectionable> = new CollectionableModel(hunt)
  try{
    await huntModel.save()
    const idNum = JSON.stringify(huntModel._id)
    res.write("Coleção criada com sucesso com id: ")
    res.write({idNum}.idNum)
    res.end()
  } catch(e){
    console.error(e)
  }
}

export const updateCollectionable = async (req: Request, res: Response) => {
  const id = req.params.id
  const huntUpdates = req.body

  try{
    const hunt = await CollectionableModel.findByIdAndUpdate(id, huntUpdates, {new: true})
    res.send('Coleção atualizada com sucesso')
  } catch(e){
    console.error(e)
    res.status(500).send("Falha ao atualizar a coleção")
  }
}


export const deleteCollectionable = async (req: Request, res: Response) => {
  const id = req.params.id

  try{
    const hunt = await CollectionableModel.deleteOne({_id:id})
    res.send('Coleção deletada com sucesso')
  } catch(e){
    console.error(e)
    res.send("Falha ao deletar o ID")
  }
}

export const readAllCollectionables = async (req: Request, res: Response) => {
  try {
    const hunt = await CollectionableModel.find({})
    res.send(hunt)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a coleção")
  }
}

export const readCollectionable = async (req: Request, res: Response) => {
  const id = req.params.id
  try{
    const hunt = await CollectionableModel.findById(id)
    if(hunt===null){
      throw(new Error("Coleção nao encontrada"))
    } 
  res.send(hunt)
  } catch(e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar a coleção")
  }
}
