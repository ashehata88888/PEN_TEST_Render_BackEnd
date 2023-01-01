import { Router } from 'express'
import * as act from '../../handlers/market_potentials.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createMarket_potential)
routes.get('/', authMiddleware, act.getAllMarket_potentials)
routes.get('/:id', authMiddleware, act.getOneMarket_potential)
routes.patch('/:id', authMiddleware, act.updateMarket_potential)
routes.delete('/:id', authMiddleware, act.deleteMarket_potential)

export default routes
