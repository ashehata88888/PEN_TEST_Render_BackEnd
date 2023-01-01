import Position from '../types/position.type'
import db from '../database'

class PositionModel {
  // create new Position
async createPosition(b:Position): Promise<Position> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO positions(position_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.position_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Position Error : ${(err as Error).message}`)
    }
  }
  // get one Position by id
  async getOnePosition(id: string): Promise<Position> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from positions WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Position by id Error : ${(err as Error).message}`)
    }
  }

  // get all Positions

  async getAllPositions(): Promise<Position[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from positions`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Positions Error : ${(err as Error).message}`)
    }
  }

  // udate one Position by id
  async updatePosition(b: Position): Promise<Position> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE positions SET position_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.position_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Position Error : ${(err as Error).message}`)
    }
  }
  // delete one Position by id

  async deletePosition(id: string): Promise<Position> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM positions WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Position Error : ${(err as Error).message}`)
    }
  }


}

export default PositionModel
