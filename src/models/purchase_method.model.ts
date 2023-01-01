/* eslint-disable prettier/prettier */
import pm from '../types/purchase_methods.type'
import db from '../database'


class Purchase_MethodModel {
  // create new PM
  async createPurchase_Method(b:pm): Promise<pm> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO purchase_methods(purchase_method) VALUES (
        $1) RETURNING *`

      const result = await conn.query(sql,
        [b.purchase_method])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this purchase_method Error : ${(err as Error).message}`)
    }
  }
  // get one PM by id
  async getOnePurchase_Method(id: string): Promise<pm> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from purchase_methods WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this purchase_method id Error : ${(err as Error).message}`)
    }
  }

  // get all PMs

  async getAllPurchase_Methods(): Promise<pm[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from purchase_methods`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these purchase_methods Error : ${(err as Error).message}`)
    }
  }

  // udate one PM by id
  async updatePurchase_Method(b: pm): Promise<pm> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE purchase_methods SET purchase_method=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.purchase_method,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this purchase_method Error : ${(err as Error).message}`)
    }
  }
  // delete one PM by id

  async deletePurchase_Method(id: string): Promise<pm> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM purchase_methods WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this purchase_method Error : ${(err as Error).message}`)
    }
  }


}

export default Purchase_MethodModel
