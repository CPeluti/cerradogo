import express, {Router} from 'express'
import Login from '../controllers/Login'
const router: Router = express.Router()
router.post('/', Login)
//router.post('/validate', validate)

export default router
