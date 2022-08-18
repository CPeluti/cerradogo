import {Request, Response} from 'express'
import CollectionModel, {Collectables} from '../models/Colecoes'
import { HydratedDocument } from 'mongoose'
const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const collectable: Collectables = req.body
  const collectionModel: HydratedDocument<Collectables> = new CollectionModel(collectable)
  try{
    await collectionModel.save()
    res.send('Colecao cadastrada com sucesso')
  } catch(e){
    console.error(e)
  }
}

export default create