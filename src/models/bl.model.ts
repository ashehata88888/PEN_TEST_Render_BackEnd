/* eslint-disable prettier/prettier */
import Bl from '../types/bl.type'
import db from '../database'


class BlModel {
  // create new BL
  async createBl(b:Bl): Promise<Bl> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO bls(bl_name,bl_manager_name,bl_manager_mail,bu_id) VALUES (
        $1,$2,$3,$4) RETURNING *`

      const result = await conn.query(sql,
        [b.bl_name,b.bl_manager_name,b.bl_manager_mail,b.bu_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this BL Error : ${(err as Error).message}`)
    }
  }
  // get one BL by id
  async getOneBl(id: string): Promise<Bl> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from bls WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this BL id Error : ${(err as Error).message}`)
    }
  }

  // get all BLs

  async getAllBls(): Promise<Bl[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from bls`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Bls Error : ${(err as Error).message}`)
    }
  }

  // udate one Bl by id
  async updateBl(b: Bl): Promise<Bl> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE bls SET bl_name=$1,bl_manager_name=$2,bl_manager_mail=$3,bu_id=$4 WHERE id=$5 RETURNING *`
      const result = await conn.query(sql, [b.bl_name,b.bl_manager_name,b.bl_manager_mail,b.bu_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Bl Error : ${(err as Error).message}`)
    }
  }
  // delete one BL by id

  async deleteBl(id: string): Promise<Bl> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM bls WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this BL Error : ${(err as Error).message}`)
    }
  }


}

export default BlModel
