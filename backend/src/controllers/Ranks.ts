import {Request, Response} from 'express'
import RanksModel, {Rank} from '../models/Ranks'
import { HydratedDocument } from 'mongoose'

export const createRank = async (req: Request, res: Response) => {
  const rank: Rank = req.body
  const rankModel: HydratedDocument<Rank> = new RanksModel(rank)
  try{
    await rankModel.save()
    res.send('Rank criado com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const updateRank = async (req: Request, res: Response) => {
    const id = req.params.id
    const collecUpdates = req.body
  
    try{
      const collec = await RanksModel.findByIdAndUpdate(id, collecUpdates, {new: true})
      res.send('Rank atualizada com sucesso')
    } catch(e){
      console.error(e)
      res.status(500).send("Falha ao atualizar o Rank")
    }
  }
  
  
  export const deleteRank = async (req: Request, res: Response) => {
    const id = req.params.id
  
    try{
      const collec = await RanksModel.deleteOne({_id:id})
      res.send('Ranks deletada com sucesso')
    } catch(e){
      console.error(e)
      res.send("Falha ao deletar o Rank")
    }
  }
  
  export const readAllRanks = async (req: Request, res: Response) => {
    try {
      const collec = await RanksModel.find({})
      res.send(collec)
    } catch (e){
      console.error(e)
      res.status(404).send("Nao foi possivel achar o Rank")
    }
  }
  
  export const readRanks = async (req: Request, res: Response) => {
    const id = req.params.id
    try{
      const collec = await RanksModel.findById(id)
      if(collec===null){
        throw(new Error("Rank nao encontrada"))
      } 
    res.send(collec)
    } catch(e){
      console.error(e)
      res.status(404).send("Nao foi possivel achar o Rank")
    }
  }