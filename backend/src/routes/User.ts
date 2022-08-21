import express, {Router} from 'express'
import User from '../controllers/User'
import Validate from '../middlewares/auth'

const router: Router = express.Router()
router.post('/', Validate, User)

//router.post('/validate', validate)

export default router
