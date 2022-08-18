import express, {Router} from 'express'
import {create, update, del, read} from '../controllers/Question'
const router: Router = express.Router()
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', del)
router.get('/:id', read)
//router.post('/validate', validate)

export default router
