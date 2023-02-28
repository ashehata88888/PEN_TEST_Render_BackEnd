/* eslint-disable prettier/prettier */
import competitor from '../types/competitor.type'
import db from '../database'

class CompetitorModel {
  // create new BL
  async createCompetitor(b:competitor): Promise<competitor> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO competitors(competitor_name,supplier_id,bl_id) VALUES (
        $1,$2,$3) RETURNING *`

      const result = await conn.query(sql,
        [b.competitor_name,b.supplier_id,b.bl_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this competitor Error : ${(err as Error).message}`)
    }
  }
  // get one competitor by id
  async getOneCompetitor(id: string): Promise<competitor> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from competitors WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this competitor id Error : ${(err as Error).message}`)
    }
  }

  // get all competitors

  async getAllCompetitors(): Promise<competitor[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from competitors`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these competitors Error : ${(err as Error).message}`)
    }
  }

    // get all competitors where BL id=  & Supplier id =
    // bl_id:string,supplier_id:string
    // id,competitor_name

  async getAllCompetitorsPerBLSupller(bl_id:string ,supplier_id:string): Promise<competitor[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from competitors WHERE bl_id=($1) AND supplier_id=($2)`
      const result = await conn.query(sql,[bl_id,supplier_id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these competitors Error : ${(err as Error).message}`)
    }
  }



  // udate one competitor by id
  async updateCompetitor(b: competitor): Promise<competitor> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE competitors SET competitor_name=$1,supplier_id=$2,bl_id=$3 WHERE id=$4 RETURNING *`
      const result = await conn.query(sql, [b.competitor_name,b.supplier_id,b.bl_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this competitor Error : ${(err as Error).message}`)
    }
  }
  // delete one competitor by id

  async deleteCompetitor(id: string): Promise<competitor> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM competitors WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this competitor Error : ${(err as Error).message}`)
    }
  }


}

export default CompetitorModel
