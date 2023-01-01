import Product_status from '../types/product_status2.type'
import db from '../database'

class Product_statusModel {
  // create new Product_status
async createProduct_status(b:Product_status): Promise<Product_status> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO product_status2(product_status_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.product_status_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Product_status Error : ${(err as Error).message}`)
    }
  }
  // get one Product_status by id
  async getOneProduct_status(id: string): Promise<Product_status> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from product_status2 WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Product_status by id Error : ${(err as Error).message}`)
    }
  }

  // get all Product_statuss

  async getAllProduct_statuss(): Promise<Product_status[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from product_status2`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Product_statuss Error : ${(err as Error).message}`)
    }
  }

  // udate one Product_status by id
  async updateProduct_status(b: Product_status): Promise<Product_status> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE product_status2 SET product_status_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.product_status_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Product_status Error : ${(err as Error).message}`)
    }
  }
  // delete one Product_status by id

  async deleteProduct_status(id: string): Promise<Product_status> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM product_status2 WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Product_status Error : ${(err as Error).message}`)
    }
  }


}

export default Product_statusModel
