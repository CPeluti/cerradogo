import express, {Express} from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'

//import routes
import User from './routes/User' 

dotenv.config()

const app: Express = express()
app.use(express.json())

const port = process.env.PORT
const dbUser = process.env.DB_USERNAME
const dbPasswd = process.env.DB_PASSWORD

// mongoose.connect(`mongodb://cerradogo:cerradogo@localhost:27017`)
mongoose.connect(`mongodb+srv://${dbUser}:${dbPasswd}@cluster0.ub24ryp.mongodb.net/?retryWrites=true&w=majority`)
//mongoose.connect(`mongodb://cerradogo:cerradogo@localhost:27017`)

app.use('/user', User)

app.listen(port, () => {
    console.log(`server rodando na porta ${port}`)
})
