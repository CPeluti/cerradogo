import express, {Router} from 'express'
import {createRank, updateRank, deleteRank, readAllRanks, readRanks} from '../controllers/Ranks'
const router: Router = express.Router()
router.post('/', createRank)
router.patch('/:id', updateRank)
router.delete('/:id', deleteRank)
router.get('/:id', readRanks)
router.get('/', readAllRanks)
//router.post('/validate', validate)

export default router