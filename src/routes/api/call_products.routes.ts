import { Router } from 'express'
import * as act from '../../handlers/call_products.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware,act.createCall_product)
routes.get('/', authMiddleware, act.getAllCall_products)
routes.get('/:id', authMiddleware, act.getOneCall_product)
routes.patch('/:id', authMiddleware, act.updateCall_product)
routes.delete('/:id', authMiddleware, act.deleteCall_product)

export default routes
