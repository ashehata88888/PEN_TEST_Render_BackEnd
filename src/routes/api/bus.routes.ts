import { Router } from 'express'
import * as act from '../../handlers/bus.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createBu)
routes.get('/', authMiddleware, act.getAllBus)
routes.get('/:id', authMiddleware, act.getOneBu)
routes.patch('/:id', authMiddleware, act.updateBu)
routes.delete('/:id', authMiddleware, act.deleteBu)

export default routes
