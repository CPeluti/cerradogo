import express, {Router} from 'express'
import User from '../controllers/User'
const router: Router = express.Router()
router.post('/', User)
//router.post('/validate', validate)

export default router
