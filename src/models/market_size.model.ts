import Market_size from '../types/market_size.type'
import db from '../database'

class Market_sizeModel {
  // create new Market_size
async createMarket_size(b:Market_size): Promise<Market_size> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO market_size(supplier_id,product_family_id,item_group_id,market_potential_id) VALUES (
$1,$2,$3,$4) RETURNING *`

      const result = await conn.query(sql,
        [b.supplier_id,b.product_family_id,b.item_group_id,b.market_potential_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Market_size Error : ${(err as Error).message}`)
    }
  }
  // get one Market_size by id
  async getOneMarket_size(id: string): Promise<Market_size> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from market_size WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Market_size by id Error : ${(err as Error).message}`)
    }
  }

  // get all Market_sizes

  async getAllMarket_sizes(): Promise<Market_size[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from market_size`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Market_sizes Error : ${(err as Error).message}`)
    }
  }

  // udate one Market_size by id
  async updateMarket_size(b: Market_size): Promise<Market_size> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE market_size SET supplier_id=$1,product_family_id =$2,item_group_id =$3,market_potential_id =$4 WHERE id=$5 RETURNING *`
      const result = await conn.query(sql, [b.supplier_id,b.product_family_id,b.item_group_id,b.market_potential_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Market_size Error : ${(err as Error).message}`)
    }
  }
  // delete one Market_size by id

  async deleteMarket_size(id: string): Promise<Market_size> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM market_size WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Market_size Error : ${(err as Error).message}`)
    }
  }


}

export default Market_sizeModel
