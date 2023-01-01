import { Router } from 'express'
import usersRoutes from './api/users.routes'
import busRoutes from './api/bus.routes'
import blsRoutes from './api/bls.routes'
import suppliersRoutes from './api/suppliers.routes'
import product_familiesRoutes from './api/product_families.routes'
import competitorsRoutes from './api/competitors.routes'
import item_groupsRoutes from './api/item_groups.routes'
import AccountsRoutes from './api/accounts.routes'
import account_typesRoutes from './api/account_types.routes'
import purchase_methodRoutes from './api/purchase_methods.routes'
import activityRoutes from './api/activities.routes'
import activity_typeRoutes from './api/activity_types.routes'
import commentRoutes from './api/comments.routes'
import objectiveRoutes from './api/objectives.routes'
import statusRoutes from './api/statuses.routes'
import call_productRoutes from './api/call_products.routes'
import call_contactRoutes from './api/call_contacts.routes'
import authorityRoutes from './api/authorities.routes'
import specialityRoutes from './api/specialities.routes'
import positionRoutes from './api/positions.routes'
import market_potentialRoutes from './api/market_potentials.routes'
import market_sizeRoutes from './api/market_sizes.routes'
import market_size_recordRoutes from './api/market_size_records.routes'
import product_statusRoutes from './api/product_status.routes'
import product_status2Routes from './api/product_status2.routes'



import productsRoutes from './api/products.routes'
import ordersRoutes from './api/orders.routes'

const routes = Router()



routes.use('/users', usersRoutes)
routes.use('/bus', busRoutes)
routes.use('/bls', blsRoutes)
routes.use('/suppliers', suppliersRoutes)
routes.use('/product_families', product_familiesRoutes)
routes.use('/competitors', competitorsRoutes)
routes.use('/item_groups', item_groupsRoutes)
routes.use('/accounts', AccountsRoutes)
routes.use('/account_types', account_typesRoutes)
routes.use('/purchase_methods', purchase_methodRoutes)


routes.use('/activities', activityRoutes)
routes.use('/call_products', call_productRoutes)
routes.use('/call_contacts', call_contactRoutes)


routes.use('/activity_types', activity_typeRoutes)
routes.use('/comments', commentRoutes)
routes.use('/objectives', objectiveRoutes)
routes.use('/statuses', statusRoutes)
routes.use('/authorities', authorityRoutes)
routes.use('/specialities', specialityRoutes)
routes.use('/positions', positionRoutes)
routes.use('/market_potentials',market_potentialRoutes)
routes.use('/market_size',market_sizeRoutes)
routes.use('/market_size_records',market_size_recordRoutes)
routes.use('/product_stauts',product_statusRoutes)
routes.use('/product_stauts2',product_status2Routes)



routes.use('/products', productsRoutes)
routes.use('/orders', ordersRoutes)



export default routes




