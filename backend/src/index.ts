import express, {Express} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//import routes
import User from './routes/User' 
import Question from './routes/Question' 

dotenv.config()

const app: Express = express()
app.use(express.json())

const port = process.env.PORT
const dbUser = process.env.DB_USERNAME
const dbPasswd = process.env.DB_PASSWORD

console.log(dbUser)
console.log(dbPasswd)

mongoose.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`)


app.use('/user', User)
app.use('/question', Question)

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
