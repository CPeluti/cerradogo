import express, {Router} from 'express'
import Login from '../controllers/Login'
import Validate from '../controllers/Auth'
import Auth from '../middlewares/auth'
const router: Router = express.Router()
router.post('/', Login)
router.post('/validate', Validate)

export default router
