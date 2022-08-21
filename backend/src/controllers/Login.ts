import {Request, Response} from 'express'
import authentication from '../helpers/authentication'
const key = "teste"
const create = async (req: Request, res: Response) => {
    console.log('teste')
    const {username, password} = req.body
    try{
        const token = await authentication.auth({username, password}, key)
        res.send(token)
  } catch(e){
    console.error(e)
    res.status(401).end()
  }
}

export default create