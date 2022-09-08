import {Request, Response} from 'express'
import authentication from '../helpers/authentication'
import dotenv from 'dotenv'
dotenv.config()
const key = "teste"
const age: number = process.env.EXPIRESIN ? parseInt(process.env.EXPIRESIN) : 15000
const create = async (req: Request, res: Response) => {
  console.log(req.body)
  const {username, password} = req.body
    try{
        console.log("a")
        const token = await authentication.auth({username, password}, key)
        console.log("")
        res.cookie("session", token.token, {
          path: '/',
          httpOnly: true,
          maxAge: age,
        })
        res.send({user: token.user})
  } catch(e){
    console.error(e)
    res.status(401).end()
  }
}

export default create