import { Router } from 'express'
import * as act from '../../handlers/activity_types.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createActivity_type)
routes.get('/', authMiddleware, act.getAllActivity_types)
routes.get('/:id', authMiddleware, act.getOneActivity_type)
routes.patch('/:id', authMiddleware, act.updateActivity_type)
routes.delete('/:id', authMiddleware, act.deleteActivity_type)

export default routes
