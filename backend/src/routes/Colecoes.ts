import express, {Router} from 'express'
import Collection from '../controllers/Colecoes'
const router: Router = express.Router()
router.post('/', Collection)
//router.post('/validate', validate)

export default router