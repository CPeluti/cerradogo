import express, {Router} from 'express'
import Validate from '../middlewares/auth'
import {create, deleteById, findById, findAll, updateById} from '../controllers/User'
const router: Router = express.Router()
router.post('/', create)
router.get('/:id', findById)
router.get('/', findAll)
router.patch('/:id', updateById)
router.delete('/:id',deleteById)

export default router
