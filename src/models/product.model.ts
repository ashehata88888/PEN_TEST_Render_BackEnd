import db from '../database'
import Product from '../types/products.type'

class ProductModel {
  // create new Product
  async createProduct(p: Product): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO products (item_name,price) VALUES ($1,$2) RETURNING *`
      const result = await conn.query(sql, [p.item_name, p.price])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Product Error : ${(err as Error).message}`)
    }
  }
  // get one Product by id
  async getOneProduct(id: string): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from products WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this product Error : ${(err as Error).message}`)
    }
  }

  // get all products

  async getAllProducts(): Promise<Product[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from products`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get this product Error : ${(err as Error).message}`)
    }
  }

  // udate one product by id
  async updateProduct(p: Product): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE products SET item_name=$1, price=$2 WHERE id=$3 RETURNING *`
      const result = await conn.query(sql, [p.item_name, p.price, p.id as unknown as string])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this product Error : ${(err as Error).message}`)
    }
  }
  // delete one product by id

  async deleteProduct(id: string): Promise<Product> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM products WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this product Error : ${(err as Error).message}`)
    }
  }

  // Auth product
}

export default ProductModel
