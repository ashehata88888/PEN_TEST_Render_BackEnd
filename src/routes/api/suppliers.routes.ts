import { Router } from 'express'
import * as act from '../../handlers/suppliers.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createSup)
routes.get('/', authMiddleware, act.getAllSups)
routes.get('/names/:id',authMiddleware,act.getAllSuppliersByBLId)
routes.get('/:id', authMiddleware, act.getOneSup)
routes.patch('/:id', authMiddleware, act.updateSup)
routes.delete('/:id', authMiddleware, act.deleteSup)

export default routes
