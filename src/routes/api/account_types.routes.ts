import { Router } from 'express'
import * as act from '../../handlers/account_types.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createAccount_Type)
routes.get('/', authMiddleware, act.getAllAccount_Types)
routes.get('/:id', authMiddleware, act.getOneAccount_Type)
routes.patch('/:id', authMiddleware, act.updateAccount_Type)
routes.delete('/:id', authMiddleware, act.deleteAccount_Type)

export default routes
