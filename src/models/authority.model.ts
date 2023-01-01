import Authority from '../types/authority.type'
import db from '../database'

class AuthorityModel {
  // create new Authority
async createAuthority(b:Authority): Promise<Authority> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO authorities(authority_name) VALUES (
$1) RETURNING *`

      const result = await conn.query(sql,
        [b.authority_name])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Authority Error : ${(err as Error).message}`)
    }
  }
  // get one Authority by id
  async getOneAuthority(id: string): Promise<Authority> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from authorities WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Authority by id Error : ${(err as Error).message}`)
    }
  }

  // get all Authoritys

  async getAllAuthoritys(): Promise<Authority[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from authorities`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Authoritys Error : ${(err as Error).message}`)
    }
  }

  // udate one Authority by id
  async updateAuthority(b: Authority): Promise<Authority> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE authorities SET authority_name=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.authority_name,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Authority Error : ${(err as Error).message}`)
    }
  }
  // delete one Authority by id

  async deleteAuthority(id: string): Promise<Authority> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM authorities WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Authority Error : ${(err as Error).message}`)
    }
  }


}

export default AuthorityModel
