import express, {Router} from 'express'
import {create, deleteById, findById, updateById} from '../controllers/User'
const router: Router = express.Router()
router.post('/', create)
router.get('/:id', findById)
router.patch('/:id', updateById)
router.delete('/:id',deleteById)

//router.post('/validate', validate)

export default router
