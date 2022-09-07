import express, {Express} from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import mongoose from 'mongoose'

//import routes
import User from './routes/User' 
import Login from './routes/Login'
import Hunt from './routes/Hunt'
import Collection from './routes/Collectionable'

dotenv.config()

const app: Express = express()
app.use(express.json())
app.use(cors())

const port = process.env.PORT
const dbUser = process.env.DB_USERNAME
const dbPasswd = process.env.DB_PASSWORD

mongoose.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`)

app.use('/user', User)
app.use('/login', Login)
app.use('/hunt', Hunt)
app.use('/collectionable', Collection)

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
