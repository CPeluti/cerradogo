import express, {Router} from 'express'
import {createCollectionable, updateCollectionable, deleteCollectionable, readCollectionable, readAllCollectionables} from '../controllers/Collectionable'
const router: Router = express.Router()
router.post('/', createCollectionable)
router.patch('/:id', updateCollectionable)
router.delete('/:id', deleteCollectionable)
router.get('/:id', readCollectionable)
router.get('/', readAllCollectionables)
//router.post('/validate', validate)

export default router
