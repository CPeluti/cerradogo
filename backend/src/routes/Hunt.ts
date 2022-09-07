import express, {Router} from 'express'
import {createHunt, updateHunt, deleteHunt, readHunt, readAllHunts} from '../controllers/Hunt'
import Question from './Question' 

const router: Router = express.Router()
router.use('/:huntId/question', Question)
router.post('/', createHunt)
router.patch('/:id', updateHunt)
router.delete('/:id', deleteHunt)
router.get('/:id', readHunt)
router.get('/', readAllHunts)
//router.post('/validate', validate)

export default router
