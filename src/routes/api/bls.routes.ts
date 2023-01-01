import { Router } from 'express'
import * as act from '../../handlers/bls.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createBl)
routes.get('/', authMiddleware, act.getAllBls)
routes.get('/:id', authMiddleware, act.getOneBl)
routes.patch('/:id', authMiddleware, act.updateBl)
routes.delete('/:id', authMiddleware, act.deleteBl)

export default routes
