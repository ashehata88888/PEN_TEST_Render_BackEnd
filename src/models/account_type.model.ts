/* eslint-disable prettier/prettier */
import at from '../types/account_types.type'
import db from '../database'

class AccountModel {
  // create new account_type
  async createAccount_typet(b:at): Promise<at> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO account_types(account_type) VALUES (
        $1) RETURNING *`

      const result = await conn.query(sql,
        [b.account_type])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this account type Error : ${(err as Error).message}`)
    }
  }
  // get one account by id
  async getOneAccount_type(id: string): Promise<at> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from account_types WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this account_type id Error : ${(err as Error).message}`)
    }
  }

  // get all accounts

  async getAllAccount_types(): Promise<at[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from account_types`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these account_types Error : ${(err as Error).message}`)
    }
  }

  // udate one account_type by id
  async updateAccount_type(b: at): Promise<at> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE account_types SET account_type=$1 WHERE id=$2 RETURNING *`
      const result = await conn.query(sql, [b.account_type,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this account_type Error : ${(err as Error).message}`)
    }
  }
  // delete one account_type by id

  async deleteAccount_type(id: string): Promise<at> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM account_types WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this account_type Error : ${(err as Error).message}`)
    }
  }


}

export default AccountModel
