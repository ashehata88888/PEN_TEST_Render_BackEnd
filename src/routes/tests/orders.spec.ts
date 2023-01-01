import supertest from 'supertest'
import db from '../../database'
import OrderModel from '../../models/order.model'
import app from '../../index'
import Order from '../../types/order.type'

const orderModel = new OrderModel()
const request = supertest(app)

describe('Test api/orders endpoints', () => {
  const order = {
    status: 'Active',
    user_id: 1
  } as Order

  beforeAll(async () => {
    const createdorder = await orderModel.createOrder(order)
    order.id = createdorder.id
  })

  afterAll(async () => {
    const conn = await db.connect()
    const sql = 'DELETE FROM products'
    const reOrderId = 'ALTER SEQUENCE orders_id_seq RESTART WITH 1'
    await conn.query(reOrderId)
    await conn.query(sql)
    conn.release()
  })

  describe(`CRUD testing for All Endpoints`, () => {
    it('test post by creating order', async () => {
      const res = await request
        .post('/api/orders/')
        .set('content-type', 'application/json')
        .send({
          status: 'Active',
          user_id: 1
        } as Order)
      expect(res.status).toBe(200)
      const { status, user_id } = res.body.data
      expect(status).toBe('Active')
      expect(user_id).toBe(1)
    })

    it(`get all orders`, async () => {
      const res = await request.get('api/orders/')
      expect(res.status).toBe(200)
    })

    it(`get one order`, async () => {
      const res = await request.get(`api/orders/${order.id}`)
      expect(res.status).toBe(200)
    })

    it(`updae one order`, async () => {
      const res = await request.patch(`api/orders/${order.id}`)
      expect(res.status).toBe(200)
    })

    it(`delete one order`, async () => {
      const res = await request.delete(`api/orders/${order.id}`)
      expect(res.status).toBe(200)
    })
  })
})
