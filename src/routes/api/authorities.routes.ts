import { Router } from 'express'
import * as act from '../../handlers/authorities.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createAuthority)
routes.get('/', authMiddleware, act.getAllAuthoritys)
routes.get('/:id', authMiddleware, act.getOneAuthority)
routes.patch('/:id', authMiddleware, act.updateAuthority)
routes.delete('/:id', authMiddleware, act.deleteAuthority)

export default routes
