import {Request, Response} from 'express'
import UserModel, {User} from '../models/User'
import { HydratedDocument } from 'mongoose'
const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const user: User = req.body
  const userModel: HydratedDocument<User> = new UserModel(user)
  try{
    await userModel.save()
    res.send('Usuario cadastrado com sucesso')
  } catch(e){
    console.error(e)
  }
}

export default create