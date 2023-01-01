import { Router } from 'express'
import * as act from '../../handlers/statuses.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createStatus)
routes.get('/', authMiddleware, act.getAllStatuss)
routes.get('/:id', authMiddleware, act.getOneStatus)
routes.patch('/:id', authMiddleware, act.updateStatus)
routes.delete('/:id', authMiddleware, act.deleteStatus)

export default routes
