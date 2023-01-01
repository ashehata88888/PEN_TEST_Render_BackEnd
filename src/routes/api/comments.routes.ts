import { Router } from 'express'
import * as act from '../../handlers/comments.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createComment)
routes.get('/', authMiddleware, act.getAllComments)
routes.get('/:id', authMiddleware, act.getOneComment)
routes.patch('/:id', authMiddleware, act.updateComment)
routes.delete('/:id', authMiddleware, act.deleteComment)

export default routes
