import { Router } from 'express'
import * as act from '../../handlers/market_sizes.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createMarket_size)
routes.get('/', authMiddleware, act.getAllMarket_sizes)
routes.get('/:id', authMiddleware, act.getOneMarket_size)
routes.patch('/:id', authMiddleware, act.updateMarket_size)
routes.delete('/:id', authMiddleware, act.deleteMarket_size)

export default routes
