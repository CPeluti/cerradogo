import {Request, Response, NextFunction} from 'express'
import authentication from '../helpers/authentication'
const key = "teste"
const create = async (req: Request, res: Response, next: NextFunction) => {
    const token: string | undefined = req.headers.authorization
    if(!token){
        res.status(401).send('Não autorizado')
        return
    }
    const isValid = authentication.validate(token, key)
    if(isValid){
        next()
    } else {
        res.status(401).send('Token Invalido')
        return
    }
        
}

export default create