/* eslint-disable prettier/prettier */
import pf from '../types/product_family.type'
import db from '../database'


class ProductFamilyModel {
  // create new Product Family
  async createPF(b:pf): Promise<pf> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO product_families(product_family,supplier_id) VALUES (
        $1,$2) RETURNING *`

      const result = await conn.query(sql,
        [b.product_family,b.supplier_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Product Family Error : ${(err as Error).message}`)
    }
  }
  // get one BL by id
  async getOnePF(id: string): Promise<pf> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from product_families WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this product family
 id Error : ${(err as Error).message}`)
    }
  }

    // get All PF by supplier_id
  async getAllPFBySupplierId(id: string): Promise<pf[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from product_families WHERE supplier_id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get this product family
 id Error : ${(err as Error).message}`)
    }
  }

  // get all product families based on supplier id
    // get one BL by id
    async getAllPFBySupId(id: string): Promise<pf[]> {
      try {
        const conn = await db.connect()
        const sql = `SELECT * from product_families WHERE supplier_id=($1)`
        const result = await conn.query(sql, [id])
        conn.release()
        return result.rows
      } catch (err) {
        throw new Error(`Unable to get this product family
   id Error : ${(err as Error).message}`)
      }
    }

  // get all PFs

  async getAllPFs(): Promise<pf[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from product_families`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get All product families Error : ${(err as Error).message}`)
    }
  }

  // udate one Product Fmily by id
  async updatePF(b: pf): Promise<pf> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE product_families SET product_family=$1,supplier_id=$2 WHERE id=$3 RETURNING *`
      const result = await conn.query(sql, [b.product_family,b.supplier_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this product family Error : ${(err as Error).message}`)
    }
  }
  // delete one product family by id

  async deletePF(id: string): Promise<pf> {
    try {
      const conn = await db.connect()
      const sql = ` DELETE FROM product_families WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this product family Error : ${(err as Error).message}`)
    }
  }


}

export default ProductFamilyModel
