import {Request, Response} from 'express'
import authentication from '../helpers/authentication'
import dotenv from 'dotenv'
dotenv.config()
const key = "teste"
const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const {username, password} = req.body
    try{
        const token = await authentication.auth({username, password}, key)
        res.cookie("session", token.token, {
          path: '/',
          httpOnly: true,
          maxAge: process.env.EXPIRESIN,
        })
        res.send({user: token.user})
  } catch(e){
    console.error(e)
    res.status(401).end()
  }
}

export default create