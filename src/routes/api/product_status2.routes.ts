import { Router } from 'express'
import * as act from '../../handlers/product_status2.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createProduct_status)
routes.get('/', authMiddleware, act.getAllProduct_statuses)
routes.get('/:id', authMiddleware, act.getOneProduct_status)
routes.patch('/:id', authMiddleware, act.updateProduct_status)
routes.delete('/:id', authMiddleware, act.deleteProduct_status)

export default routes
