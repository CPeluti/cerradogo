import {Request, Response} from 'express'
import UserModel, {User} from '../models/User'
import HuntModel from '../models/Hunt'
import { HydratedDocument } from 'mongoose'
export const create = async (req: Request, res: Response) => {
  const user: User = req.body
  const userExist = await UserModel.find({email: user.email})
  if(userExist.length){
    res.status(400).send('Email ja cadastrado')
    return
  }   
  
  const userModel: HydratedDocument<User> = new UserModel(user)
  try{
    await userModel.save()
    res.send('Usuario cadastrado com sucesso')
  } catch(e){
    console.error(e)
  }
}

export const findAll = async (req: Request, res: Response) => {
  try {
    const user = await UserModel.find({})
    res.send(user)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar o usuario")
  }
}

export const findById = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const user = await UserModel.findById(id)
    if(user===null){
      throw(new Error("Usuario nao encontrado"))
    }
    res.send(user)
  } catch (e){
    console.error(e)
    res.status(404).send("Nao foi possivel achar o usuario")
  }
}

export const updateById = async (req: Request, res: Response) => {
  const id = req.params.id
  const data = req.body
  try {
    var keyArray = Object.keys(data)
    let flag = false // false significa que a key enviada no body não está presente no user
    for (let _i = 0; _i < keyArray.length; _i++){
      if (UserModel.hasOwnProperty(keyArray[_i])){
        flag = true
        break
      }
    }
    if (flag){
      const user = await UserModel.findByIdAndUpdate(id, req.body, {new: true})
      res.send("Usuario atualizado com sucesso")
    }
    else{
      res.send("Nao foi possivel atualizar usuario, verifique os atributos")
    }
  } catch (e) {
    console.error(e)
    res.status(500).send("Falha ao atualizar o usuario")
  }
}

export const deleteById = async (req: Request, res: Response) => {
  const id = req.params.id
  try {
    const user = await UserModel.deleteOne({_id:id})
    res.send("usuario deletado com sucesso")
  } catch (e) {
    console.error(e)
    res.send("Falha ao deletar o ID")
  }
} 

export const point = async (req: Request, res: Response) => {
  const {id, player} = req.body
  try {
    const user: User | null = await UserModel.findById(player) 
    const hunt = await HuntModel.findById(id)
    let userHunts = user?.hunts
    let userHuntsArray
    let huntsLength = 0
    if (hunt?.questions){
      huntsLength = hunt.questions.length
    }
    if(userHunts?.length){
      if(userHunts.find(el => el.huntId === id)){
        userHuntsArray = userHunts?.map(el=>{
          if(el.huntId===id){
            if(el.progress < 1){
              el.progress += 1/huntsLength
            }
          }
          return el
        })
        const result = await UserModel.findByIdAndUpdate(player, {hunts: userHunts}, {new: true})
        res.send(result)
        return
      } else {
        const newUserHunts = [...userHunts, {huntId: id, progress: 1/huntsLength}]
        const result = await UserModel.findByIdAndUpdate(player, {hunts: newUserHunts}, {new: true})
        res.send(result)
        return
      }
    } else {
      userHunts = [{huntId: id, progress: 1/huntsLength}]
      const result = await UserModel.findByIdAndUpdate(player, {hunts: userHunts}, {new: true})
      res.send(result)
    }

  } catch {}
}