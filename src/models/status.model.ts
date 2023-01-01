import Status from '../types/status.type'
import db from '../database'

class StatusModel {
  // create new Status
async createStatus(b:Status): Promise<Status> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO statuses(status_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.status_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Status Error : ${(err as Error).message}`)
    }
  }
  // get one Status by id
  async getOneStatus(id: string): Promise<Status> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from statuses WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Status by id Error : ${(err as Error).message}`)
    }
  }

  // get all Statuss

  async getAllStatuss(): Promise<Status[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from statuses`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Statuss Error : ${(err as Error).message}`)
    }
  }

  // udate one Status by id
  async updateStatus(b: Status): Promise<Status> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE statuses SET status_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.status_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Status Error : ${(err as Error).message}`)
    }
  }
  // delete one Status by id

  async deleteStatus(id: string): Promise<Status> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM statuses WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Status Error : ${(err as Error).message}`)
    }
  }


}

export default StatusModel
