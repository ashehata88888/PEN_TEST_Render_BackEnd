import { Router } from 'express'
import * as act from '../../handlers/product_families.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createPF)
routes.get('/', authMiddleware, act.getAllPFs)
routes.get('/names/:id',authMiddleware,act.getAllPFBySupId)
routes.get('/:id', authMiddleware, act.getOnePF)
routes.patch('/:id', authMiddleware, act.updatePF)
routes.delete('/:id', authMiddleware, act.deletePF)

export default routes
