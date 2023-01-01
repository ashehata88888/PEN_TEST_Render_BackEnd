import Speciality from '../types/speciality.type'
import db from '../database'

class SpecialityModel {
  // create new Speciality
async createSpeciality(b:Speciality): Promise<Speciality> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO specialities(speciality_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.speciality_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Speciality Error : ${(err as Error).message}`)
    }
  }
  // get one Speciality by id
  async getOneSpeciality(id: string): Promise<Speciality> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from specialities WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Speciality by id Error : ${(err as Error).message}`)
    }
  }

  // get all Specialitys

  async getAllSpecialitys(): Promise<Speciality[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from specialities`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Specialitys Error : ${(err as Error).message}`)
    }
  }

  // udate one Speciality by id
  async updateSpeciality(b: Speciality): Promise<Speciality> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE specialities SET speciality_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.speciality_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Speciality Error : ${(err as Error).message}`)
    }
  }
  // delete one Speciality by id

  async deleteSpeciality(id: string): Promise<Speciality> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM specialities WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Speciality Error : ${(err as Error).message}`)
    }
  }


}

export default SpecialityModel
