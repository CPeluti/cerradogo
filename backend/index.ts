import express, {Express, Request, Response} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

dotenv.config()

const app: Express = express()
const port = process.env.PORT
const dbUser = process.env.DB_USER
const dbPasswd = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`)

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor express com typescript')
})

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
