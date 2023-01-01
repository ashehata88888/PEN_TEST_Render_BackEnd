/* eslint-disable prettier/prettier */
import Activity_type from '../types/activity_type.type'
import db from '../database'

class Activity_typeModel {
  // create new Activity_type
async createActivity_type(b:Activity_type): Promise<Activity_type> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO activity_types(activity_type) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.activity_type])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Activity_type Error : ${(err as Error).message}`)
    }
  }
  // get one Activity_type by id
  async getOneActivity_type(id: string): Promise<Activity_type> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from activity_types WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Activity_type by id Error : ${(err as Error).message}`)
    }
  }

  // get all Activity_types

  async getAllActivity_types(): Promise<Activity_type[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from activity_types`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Activity_types Error : ${(err as Error).message}`)
    }
  }

  // udate one Activity_type by id
  async updateActivity_type(b: Activity_type): Promise<Activity_type> {
    try {
      const conn = await db.connect()
   const sql = `UPDATE activity_types SET activity_type=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.activity_type,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Activity_type Error : ${(err as Error).message}`)
    }
  }
  // delete one Activity_type by id

  async deleteActivity_type(id: string): Promise<Activity_type> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM activity_types WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Activity_type Error : ${(err as Error).message}`)
    }
  }


}

export default Activity_typeModel

