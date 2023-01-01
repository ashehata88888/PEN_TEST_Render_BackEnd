import supertest from 'supertest'
import db from '../../database'
import ProductModel from '../../models/product.model'
import app from '../../index'
import Product from '../../types/products.type'

const productModel = new ProductModel()
const request = supertest(app)

describe('Test api/products endpoints', () => {
  const product = {
    item_name: 'Tesla806',
    price: 200000
  } as Product

  beforeAll(async () => {
    const createdProduct = await productModel.createProduct(product)
    product.id = createdProduct.id
  })

  afterAll(async () => {
    const conn = await db.connect()
    const sql = 'DELETE FROM products'
    const reOrderId = 'ALTER SEQUENCE products_id_seq RESTART WITH 1'
    await conn.query(reOrderId)
    await conn.query(sql)
    conn.release()
  })

  describe(`CRUD testing for All Endpoints`, () => {
    it('test post by creating product', async () => {
      const res = await request
        .post('/api/products/')
        .set('content-type', 'application/json')
        .send({
          item_name: 'Tesla',
          price: 200000
        } as Product)
      expect(res.status).toBe(200)
      const { item_name, price } = res.body.data
      expect(item_name).toBe('Tesla')
      expect(price).toBe(200000)
    })

    it(`get all products`, async () => {
      const res = await request.get('api/products/')
      expect(res.status).toBe(200)
    })

    it(`get one product`, async () => {
      const res = await request.get(`api/products/${product.id}`)
      expect(res.status).toBe(200)
    })

    it(`updae one product`, async () => {
      const res = await request.patch(`api/products/${product.id}`)
      expect(res.status).toBe(200)
    })

    it(`delete one product`, async () => {
      const res = await request.delete(`api/products/${product.id}`)
      expect(res.status).toBe(200)
    })
  })
})
