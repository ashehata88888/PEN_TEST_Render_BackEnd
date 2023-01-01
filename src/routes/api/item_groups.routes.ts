import { Router } from 'express'
import * as act from '../../handlers/item_groups.handlers'
import authMiddleware from '../../middleware/authMiddle'

const routes = Router()

routes.post('/', authMiddleware, act.createItem_group)
routes.get('/', authMiddleware, act.getAllItem_groups)
routes.get('/names/:id',authMiddleware, act.getAllItem_groupByPFID)
routes.get('/:id', authMiddleware, act.getOneItem_group)
routes.patch('/:id', authMiddleware, act.updateItem_group)
routes.delete('/:id', authMiddleware, act.deleteItem_group)

export default routes
