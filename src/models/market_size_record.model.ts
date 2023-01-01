import Market_size_record from '../types/market_size_record.type'
import db from '../database'

class Market_size_recordModel {
  // create new Market_size_record
async createMarket_size_record(b:Market_size_record): Promise<Market_size_record> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO market_size_records(egmed_consumption,total_consumption,competitor_id,item_qty1,item_status1_id,item_qty2,item_status2_id,market_size_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`

      const result = await conn.query(sql,
        [b.egmed_consumption,b.total_consumption,b.competitor_id,b.item_qty1,b.item_status1_id,b.item_qty2,b.item_status2_id,b.market_size_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Market_size_record Error : ${(err as Error).message}`)
    }
  }
  // get one Market_size_record by id
  async getOneMarket_size_record(id: string): Promise<Market_size_record> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from market_size_records WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Market_size_record by id Error : ${(err as Error).message}`)
    }
  }

  // get all Market_size_records

  async getAllMarket_size_records(): Promise<Market_size_record[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from market_size_records`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Market_size_records Error : ${(err as Error).message}`)
    }
  }

  // udate one Market_size_record by id
  async updateMarket_size_record(b: Market_size_record): Promise<Market_size_record> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE market_size_records SET egmed_consumption=$1,total_consumption=$2,competitor_id=$3,item_qty1=$4,item_status1_id=$5,item_qty2=$6,item_status2_id=$7,market_size_id=$8 WHERE id=$9 RETURNING *`
      const result = await conn.query(sql, [b.egmed_consumption,b.total_consumption,b.competitor_id,b.item_qty1,b.item_status1_id,b.item_qty2,b.item_status2_id,b.market_size_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Market_size_record Error : ${(err as Error).message}`)
    }
  }
  // delete one Market_size_record by id

  async deleteMarket_size_record(id: string): Promise<Market_size_record> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM market_size_records WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Market_size_record Error : ${(err as Error).message}`)
    }
  }


}

export default Market_size_recordModel
