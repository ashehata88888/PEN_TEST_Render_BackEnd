import Call_product from '../types/call_product.type'
import db from '../database'

class Call_productModel {
  // create new Call_product
async createCall_product(b:Call_product): Promise<Call_product> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO call_products(supplier_id ,product_family_id ,item_group_id ,item_name ,item_stock ,objective_id ,status_id ,activity_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`

      const result = await conn.query(sql,
        [b.supplier_id,b.product_family_id,b.item_group_id,b.item_name,b.item_stock,b.objective_id,b.status_id,b.activity_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Call_product Error : ${(err as Error).message}`)
    }
  }
  // get one Call_product by id
  async getOneCall_product(id: string): Promise<Call_product> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from call_products WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Call_product by id Error : ${(err as Error).message}`)
    }
  }

  // get all Call_products

  async getAllCall_products(): Promise<Call_product[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from call_products`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Call_products Error : ${(err as Error).message}`)
    }
  }

  // udate one Call_product by id
  async updateCall_product(b:Call_product): Promise<Call_product> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE call_products SET supplier_id=$1,product_family_id=$2,item_group_id=$3,item_name=$4,item_stock=$5,objective_id=$6,status_id=$7,activity_id=$8 WHERE id=$9 RETURNING *`
      const result = await conn.query(sql, [b.supplier_id,b.product_family_id,b.item_group_id,b.item_name,b.item_stock,b.objective_id,b.status_id,b.activity_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Call_product Error : ${(err as Error).message}`)
    }
  }
  // delete one Call_product by id I hold that method and replace it as delete CP where activity_id =$1

  async deleteCall_product(id: string): Promise<Call_product> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM call_products WHERE activity_id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Call_product Error : ${(err as Error).message}`)
    }
  }


}

export default Call_productModel
