import ProductModel from '../product.model'
import db from '../../database'
import Product from '../../types/products.type'

const productModel = new ProductModel()
describe('Product Model defined', () => {
  describe('test if Product methods exists', () => {
    it('if getAllproduct Method exists', () => {
      expect(productModel.getAllProducts).toBeDefined()
    })

    it('if createProduct Method exists', () => {
      expect(productModel.createProduct).toBeDefined()
    })

    it('if update Product Method exists', () => {
      expect(productModel.updateProduct).toBeDefined()
    })

    it('if getOneProduct Method exists', () => {
      expect(productModel.getOneProduct).toBeDefined()
    })

    it('if deleteProduct Method exists', () => {
      expect(productModel.deleteProduct).toBeDefined()
    })

    describe('Test Product Model methods', () => {
      const product = {
        item_name: 'Tesla806',
        price: 200000
      } as Product
      beforeAll(async () => {
        const createProduct = await productModel.createProduct(product)
        product.id = createProduct.id
      })

      afterAll(async () => {
        const conn = await db.connect()
        const sql = 'DELETE FROM products'
        const reOrderId = 'ALTER SEQUENCE products_id_seq RESTART WITH 1'
        await conn.query(reOrderId)
        await conn.query(sql)
        conn.release()
      })

      it('test createProduct method', async () => {
        const createProduct = await productModel.createProduct({
          item_name: 'Bogaty',
          price: 400000
        } as Product)
        expect(createProduct).toEqual({
          id: createProduct.id,
          item_name: 'Bogaty',
          price: 400000
        } as Product)
      })

      it('test getAllProducts method', async () => {
        const products = await productModel.getAllProducts()
        expect(products.length).toBe(2)
      })

      it('test getOneProduct method', async () => {
        const getOneProduct = await productModel.getOneProduct(product.id as unknown as string)
        expect(getOneProduct.id).toBe(product.id)
        expect(getOneProduct.item_name).toBe(product.item_name)
        expect(getOneProduct.price).toBe(product.price)
      })

      it('test updateProduct method', async () => {
        const updateProduct = await productModel.updateProduct({
          id: product.id,
          item_name: 'updated Product',
          price: 300000
        })
        expect(updateProduct.id).toBe(product.id)
        expect(updateProduct.item_name).toBe('updated Product')
        expect(updateProduct.price).toBe(300000)
      })

      it('test deleteProduct method', async () => {
        const deleteProduct = await productModel.deleteProduct(product.id as unknown as string)
        expect(deleteProduct.id).toBe(product.id)
      })
    })
  })
})
