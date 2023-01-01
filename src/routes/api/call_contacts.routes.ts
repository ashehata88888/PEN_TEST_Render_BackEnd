import { Router } from 'express'
import * as act from '../../handlers/call_contacts.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createCall_contact)
routes.get('/', authMiddleware, act.getAllCall_contacts)
routes.get('/:id', authMiddleware, act.getOneCall_contact)
routes.patch('/:id', authMiddleware, act.updateCall_contact)
routes.delete('/:id', authMiddleware, act.deleteCall_contact)

export default routes
