import { Router } from 'express'
import * as act from '../../handlers/competitors.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createCompetitor)
routes.get('/', authMiddleware, act.getAllCompetitors)
routes.get('/:id', authMiddleware, act.getOneCompetitor)
routes.patch('/:id', authMiddleware, act.updateCompetitor)
routes.delete('/:id', authMiddleware, act.deleteCompetitor)

export default routes
