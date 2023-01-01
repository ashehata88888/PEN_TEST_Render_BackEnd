import { Router } from 'express'
import * as act from '../../handlers/orders.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createOrder)
routes.get('/', authMiddleware, act.getAllOrders)
routes.get('/:id', authMiddleware, act.getOneOrder)
routes.delete('/:id', authMiddleware, act.deleteOrder)
routes.patch('/:id', authMiddleware, act.updateOrder)
// add product
routes.post('/:id/products', authMiddleware, act.addProduct)

export default routes
