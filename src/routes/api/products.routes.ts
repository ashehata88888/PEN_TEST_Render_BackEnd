import { Router } from 'express'
import * as act from '../../handlers/products.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createProduct)
routes.get('/', authMiddleware, act.getAllProducts)
routes.get('/:id', authMiddleware, act.getOneProduct)
routes.patch('/:id', authMiddleware, act.updateProduct)
routes.delete('/:id', authMiddleware, act.deleteProduct)

export default routes
