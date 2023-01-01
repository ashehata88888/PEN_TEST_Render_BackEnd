/* eslint-disable prettier/prettier */
import account from '../types/account.type'
import db from '../database'

class AccountModel {
  // create new account
  async createAccount(b:account): Promise<account> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO accounts(account_name,account_area,user_id,bl_id) VALUES (
        $1,$2,$3,$4) RETURNING *`

      const result = await conn.query(sql,
        [b.account_name,b.account_area,b.user_id,b.bl_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this account Error : ${(err as Error).message}`)
    }
  }
  // get one account by id
  async getOneAccount(id: string): Promise<account> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from accounts WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this account id Error : ${(err as Error).message}`)
    }
  }

  // get all accounts related to certain user
async getAllAccountNamesForOneUser(id: string): Promise<account[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT id,account_name,account_area from accounts WHERE user_id=($1)` 
      // select account_name from accounts where user_id = 10
      const result = await conn.query(sql,[id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get the account Names for this user Error : ${(err as Error).message}`)
    }
  }
  


  // get all accounts

  async getAllAccounts(): Promise<account[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from accounts`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these accounts Error : ${(err as Error).message}`)
    }
  }

  // udate one account by id
  async updateAccount(b: account): Promise<account> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE accounts SET account_name=$1,account_area=$2,user_id=$3,bl_id=$4 WHERE id=$5 RETURNING *`
      const result = await conn.query(sql, [b.account_name,b.account_area,b.user_id,b.bl_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this account Error : ${(err as Error).message}`)
    }
  }
  // delete one account by id

  async deleteAccount(id: string): Promise<account> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM accounts WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this account Error : ${(err as Error).message}`)
    }
  }


}

export default AccountModel
