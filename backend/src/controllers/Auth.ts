import {Request, Response} from 'express'
const create = async (req: Request, res: Response) => {
  const {token} = req.body
  if(token){
    res.status(200).send()
  } else {
    res.status(401).send()
  }
  return
}

export default create