import {Request, Response} from 'express'
import authentication from '../helpers/authentication'
import dotenv from 'dotenv'
import UserModel from '../models/User'
dotenv.config()
const age: number = process.env.EXPIRESIN ? parseInt(process.env.EXPIRESIN) : 15000
const key = "teste"
const create = async (req: Request, res: Response) => {
  const {username, password} = req.body
    try{
        const token = await authentication.auth({username, password}, key)
        res.cookie("session", token.token, {
          path: '/',
          httpOnly: true,
          maxAge: age,
        })
        const user: any = token.user
        await UserModel.findByIdAndUpdate(user['_id'], {token: token.token}, {new: true})
        res.status(200).send({user: token.user})
  } catch(e){
    console.error(e)
    res.status(401).end()
  }
}

export default create