import express, {Router} from 'express'
import {createQuestion, updateQuestion, deleteQuestion, readQuestion, readAllQuestions, randomQuestion} from '../controllers/Question'
const router: Router = express.Router({mergeParams: true})
router.post('/', createQuestion)
router.patch('/:id', updateQuestion)
router.delete('/:id', deleteQuestion)
router.get('/specific/:id', readQuestion)
router.get('/', readAllQuestions)
router.get('/random', randomQuestion)
//router.post('/validate', validate)

export default router
