/* eslint-disable prettier/prettier */
import Bu from '../types/bu.type'
import db from '../database'


class BuModel {
  // create new BU
  async createBu(b:Bu): Promise<Bu> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO bus(bu_name,bu_manager_name,bu_manager_mail) VALUES (
        $1,$2,$3) RETURNING *`

      const result = await conn.query(sql,
        [b.bu_name,b.bu_manager_name,b.bu_manager_mail])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this BU Error : ${(err as Error).message}`)
    }
  }
  // get one BU by id
  async getOneBu(id: string): Promise<Bu> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from bus WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this BU id Error : ${(err as Error).message}`)
    }
  }

  // get all users

  async getAllBus(): Promise<Bu[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from bus`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these BUs Error : ${(err as Error).message}`)
    }
  }

  // udate one Bu by id
  async updateBu(b: Bu): Promise<Bu> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE bus SET bu_name=$1,bu_manager_name=$2,bu_manager_mail=$3 WHERE id=$4 RETURNING *`
      const result = await conn.query(sql, [b.bu_name,b.bu_manager_name,b.bu_manager_mail,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this BU Error : ${(err as Error).message}`)
    }
  }
  // delete one BU by id

  async deleteBu(id: string): Promise<Bu> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM bus WHERE id=($1) RETURNING id, bu_name , bu_manager_name`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this BU Error : ${(err as Error).message}`)
    }
  }


}

export default BuModel
