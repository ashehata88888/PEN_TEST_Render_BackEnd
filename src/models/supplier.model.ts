/* eslint-disable prettier/prettier */
import Sup from '../types/supplier.type'
import db from '../database'


class SupplierModel {
  // create new BL
  async createSup(b:Sup): Promise<Sup> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO suppliers(supplier_name,bl_id,bu_id) VALUES (
        $1,$2,$3) RETURNING *`

      const result = await conn.query(sql,
        [b.supplier_name,b.bl_id,b.bu_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Supplier Error : ${(err as Error).message}`)
    }
  }
  // get one Supplier by id
  async getOneSup(id: string): Promise<Sup> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from suppliers WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Supplier id Error : ${(err as Error).message}`)
    }
  }

  // get all Suppliers by bl1_id
  async getAllSuppliersByBLId(bl1_id: string): Promise<Sup[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from suppliers WHERE bl_id=($1)`
      const result = await conn.query(sql, [bl1_id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get this Supplier id Error : ${(err as Error).message}`)
    }
  }




  // get all suppliers

  async getAllSups(): Promise<Sup[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from suppliers`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get All suppliers Error : ${(err as Error).message}`)
    }
  }

  // udate one suppler by id
  async updateSup(b:Sup): Promise<Sup> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE suppliers SET supplier_name=$1,bl_id=$2,bu_id=$3 WHERE id=$4 RETURNING *`
      const result = await conn.query(sql, [b.supplier_name,b.bl_id,b.bu_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Supplier Error : ${(err as Error).message}`)
    }
  }
  // delete one supplier by id

  async deleteSup(id: string): Promise<Sup> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM suppliers WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Supplier Error : ${(err as Error).message}`)
    }
  }


}

export default SupplierModel
