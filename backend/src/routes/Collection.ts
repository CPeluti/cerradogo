import express, {Router} from 'express'
import {createCollection, updateCollection, deleteCollection, readCollection, readAllCollections} from '../controllers/Collection'
const router: Router = express.Router()
router.post('/', createCollection)
router.patch('/:id', updateCollection)
router.delete('/:id', deleteCollection)
router.get('/:id', readCollection)
router.get('/', readAllCollections)
//router.post('/validate', validate)

export default router
