import { Router } from 'express'
import * as act from '../../handlers/market_size_records.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createMarket_size_record)
routes.get('/', authMiddleware, act.getAllMarket_size_records)
routes.get('/:id', authMiddleware, act.getOneMarket_size_record)
routes.patch('/:id', authMiddleware, act.updateMarket_size_record)
routes.delete('/:id', authMiddleware, act.deleteMarket_size_record)

export default routes
