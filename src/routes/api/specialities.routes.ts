import { Router } from 'express'
import * as act from '../../handlers/specialities.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createSpeciality)
routes.get('/', authMiddleware, act.getAllSpecialitys)
routes.get('/:id', authMiddleware, act.getOneSpeciality)
routes.patch('/:id', authMiddleware, act.updateSpeciality)
routes.delete('/:id', authMiddleware, act.deleteSpeciality)

export default routes
