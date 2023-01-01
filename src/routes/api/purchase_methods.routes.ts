import { Router } from 'express'
import * as act from '../../handlers/purchase_methods.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createPurchase_Method)
routes.get('/', authMiddleware, act.getAllPurchase_Methods)
routes.get('/:id', authMiddleware, act.getOnePurchase_Method)
routes.patch('/:id', authMiddleware, act.updatePurchase_Method)
routes.delete('/:id', authMiddleware, act.deletePurchase_Method)

export default routes
