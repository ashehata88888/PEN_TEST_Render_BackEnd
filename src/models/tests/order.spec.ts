import OrderModel from '../order.model'
import db from '../../database'
import Order from '../../types/order.type'

const orderModel = new OrderModel()
describe('Order Model defined', () => {
  describe('test if Order methods exists', () => {
    it('if getAllOrders Method exists', () => {
      expect(orderModel.getAllOrders).toBeDefined()
    })

    it('if createOrder Method exists', () => {
      expect(orderModel.createOrder).toBeDefined()
    })

    it('if updateOrder Method exists', () => {
      expect(orderModel.updateOrder).toBeDefined()
    })

    it('if getOneOrder Method exists', () => {
      expect(orderModel.getOneOrder).toBeDefined()
    })

    it('if deleteOrder Method exists', () => {
      expect(orderModel.deleteOrder).toBeDefined()
    })

    describe('Test Order Model methods', () => {
      const order = {
        status: 'Active',
        user_id: 1
      } as Order
      beforeAll(async () => {
        const createOrder = await orderModel.createOrder(order)
        order.id = createOrder.id
      })

      afterAll(async () => {
        const conn = await db.connect()
        const sql = 'DELETE FROM orders'
        const reOrderId = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1'
        await conn.query(reOrderId)
        await conn.query(sql)
        conn.release()
      })

      it('test createOrder method', async () => {
        const createOrder = await orderModel.createOrder({
          status: 'Demo',
          user_id: 1
        } as Order)
        expect(createOrder).toEqual({
          id: createOrder.id,
          status: 'Demo',
          user_id: 1
        } as Order)
      })

      it('test getAllOrders method', async () => {
        const orders = await orderModel.getAllOrders()
        expect(orders.length).toBe(2)
      })

      it('test getOneOrder method', async () => {
        const getOneOrder = await orderModel.getOneOrder(order.id as unknown as string)
        expect(getOneOrder.id).toBe(order.id)
        expect(getOneOrder.status).toBe(order.status)
        expect(getOneOrder.user_id).toBe(order.user_id)
      })

      it('test updateOrder method', async () => {
        const updateOrder = await orderModel.updateOrder({
          id: order.id,
          status: 'not Active',
          user_id: 2
        })
        expect(updateOrder.id).toBe(order.id)
        expect(updateOrder.status).toBe('not Active')
        expect(updateOrder.user_id).toBe(2)
      })

      it('test deleteOrder method', async () => {
        const deleteOrder = await orderModel.deleteOrder(order.id as unknown as string)
        expect(deleteOrder.id).toBe(order.id)
      })
    })
  })
})
