import express, {Router} from 'express'
import Question from '../controllers/Question'
const router: Router = express.Router()
router.post('/', Question)
//router.post('/validate', validate)

export default router
