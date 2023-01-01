import Objective from '../types/objective.type'
import db from '../database'

class ObjectiveModel {
  // create new Objective
async createObjective(b:Objective): Promise<Objective> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO objectives(objective_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.objective_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Objective Error : ${(err as Error).message}`)
    }
  }
  // get one Objective by id
  async getOneObjective(id: string): Promise<Objective> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from objectives WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Objective by id Error : ${(err as Error).message}`)
    }
  }

  // get all Objectives

  async getAllObjectives(): Promise<Objective[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from objectives`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Objectives Error : ${(err as Error).message}`)
    }
  }

  // udate one Objective by id
  async updateObjective(b: Objective): Promise<Objective> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE objectives SET objective_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.objective_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Objective Error : ${(err as Error).message}`)
    }
  }
  // delete one Objective by id

  async deleteObjective(id: string): Promise<Objective> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM objectives WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Objective Error : ${(err as Error).message}`)
    }
  }


}

export default ObjectiveModel
