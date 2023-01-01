import { Router } from 'express'
import * as act from '../../handlers/objectives.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createObjective)
routes.get('/', authMiddleware, act.getAllObjectives)
routes.get('/:id', authMiddleware, act.getOneObjective)
routes.patch('/:id', authMiddleware, act.updateObjective)
routes.delete('/:id', authMiddleware, act.deleteObjective)

export default routes
