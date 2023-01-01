import { Router } from 'express'
import * as act from '../../handlers/positions.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createPosition)
routes.get('/', authMiddleware, act.getAllPositions)
routes.get('/:id', authMiddleware, act.getOnePosition)
routes.patch('/:id', authMiddleware, act.updatePosition)
routes.delete('/:id', authMiddleware, act.deletePosition)

export default routes
