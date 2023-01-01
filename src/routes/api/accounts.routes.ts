import { Router } from 'express'
import * as act from '../../handlers/accounts.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createAccount)
routes.get('/names/:id', authMiddleware, act.getAllAccountNamesForOneUser)
routes.get('/', authMiddleware, act.getAllAccounts)
routes.get('/:id', authMiddleware, act.getOneAccount)
routes.patch('/:id', authMiddleware, act.updateAccount)
routes.delete('/:id', authMiddleware, act.deleteAccount)

export default routes
