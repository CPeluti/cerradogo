import express, {Router} from 'express'
import {createHunt, updateHunt, deleteHunt, readHunt, readAllHunts} from '../controllers/Hunt'
const router: Router = express.Router()
router.post('/', createHunt)
router.patch('/:id', updateHunt)
router.delete('/:id', deleteHunt)
router.get('/:id', readHunt)
router.get('/', readAllHunts)
//router.post('/validate', validate)

export default router
