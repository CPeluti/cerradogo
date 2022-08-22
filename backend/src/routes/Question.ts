import express, {Router} from 'express'
import {createQuestion, updateQuestion, deleteQuestion, readQuestion, readAllQuestions} from '../controllers/Question'
const router: Router = express.Router()
router.post('/', createQuestion)
router.patch('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)
router.get('/:id', readQuestion)
router.get('/', readAllQuestions)
//router.post('/validate', validate)

export default router
