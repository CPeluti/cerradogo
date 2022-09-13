import {Request, Response} from 'express'
import UserModel from '../models/User'
const create = async (req: Request, res: Response) => {
  const {token} = req.body
  if(token){
    const user = await UserModel.find({token})
    if(user && user.length){
      res.status(200).send(user)
      return
    }
  }
  res.status(401).send()
  return
}

export default create