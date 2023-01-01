import { Router } from 'express'
import * as act from '../../handlers/activities.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createActivity)
routes.get('/', authMiddleware, act.getAllActivitys)
routes.get('/history/:id', authMiddleware, act.getAllActivityforOneUserId)
routes.get('/superuser', authMiddleware,act.getAllActivityforSuperUser)
routes.get('/:id', authMiddleware, act.getOneActivity)
routes.patch('/:id', authMiddleware, act.updateActivity)
routes.delete('/:id', authMiddleware, act.deleteActivity)

export default routes
