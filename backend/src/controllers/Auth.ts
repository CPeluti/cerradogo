import {Request, Response} from 'express'
import UserModel from '../models/User'
const create = async (req: Request, res: Response) => {
  const {cookie} = req.body
  if(cookie){
    const user = await UserModel.findOne({token: cookie})
    if(user){
      res.status(200).send(user)
      return
    }
  }
  res.status(401).send()
  return
}

export default create