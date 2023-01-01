/* eslint-disable prettier/prettier */
import User from '../types/user.type'
import db from '../database'
import * as dotenv from 'dotenv'
import bcrypt from 'bcrypt'

dotenv.config()
const passwordEnv = process.env.BCRYPT_PASS
const salt = process.env.SALT_ROUNDS

const hashPass = (pass: string) => {
  const saltend = parseInt(salt as string, 10)
  return bcrypt.hashSync(pass + passwordEnv, saltend)
}

class UserModel {
  // create new user
  async createUser(u: User): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO users (
        first_name,
        last_name,
        user_name,
        user_mail,
        position,
        privilege,
        status,
        password,
        bl1_id,
        bl2_id,
        bl3_id,
        bl4_id,
        bl5_id,
        bl6_id,bl7_id,bu_id) VALUES ($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11,$12,$13,$14,$15,$16) RETURNING *`

      const result = await conn.query(sql,
        [u.first_name,u.last_name,u.user_name, u.user_mail,
        u.position,u.privilege,u.status ,hashPass(u.password),
        u.bl1_id,u.bl2_id,u.bl3_id,u.bl4_id,u.bl5_id,u.bl6_id,u.bl7_id,u.bu_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this user Error : ${(err as Error).message}`)
    }
  }
  // get one user by id
  async getOneUser(id: string): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from users WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this user id Error : ${(err as Error).message}`)
    }
  }

  // get all users

  async getAllUser(): Promise<User[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from users`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get this user Error : ${(err as Error).message}`)
    }
  }

  // udate one user by id
  async updateUser(u: User): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE users SET  
      first_name=$1,
      last_name=$2,
      user_name=$3,
      user_mail=$4,
      position=$5,
      privilege=$6,
      status=$7,
      password=$8,
      bl1_id=$9,
      bl2_id=$10,
      bl3_id=$11,
      bl4_id=$12,
      bl5_id=$13,
      bl6_id=$14,
      bl7_id=$15,
      bu_id=$16 WHERE id=$17 RETURNING *`
      const result = await conn.query(sql, [
        u.first_name,u.last_name,u.user_name, u.user_mail,
        u.position,u.privilege,u.status ,hashPass(u.password),
        u.bl1_id,u.bl2_id,u.bl3_id,u.bl4_id,u.bl5_id,u.bl6_id,u.bl7_id,u.bu_id,
        u.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this user Error : ${(err as Error).message}`)
    }
  }

    // udate one user by id
    async updateUserPass(u: User): Promise<User> {
      try {
        const conn = await db.connect()
        const sql = `UPDATE users SET 
        password=$1 WHERE id=$2 RETURNING *`
        const result = await conn.query(sql, [hashPass(u.password),u.id])
        conn.release()
        return result.rows[0]
      } catch (err) {
        throw new Error(`Unable to update this user Password Error : ${(err as Error).message}`)
      }
    }


  // delete one user by id

  async deleteUser(id: string): Promise<User> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM users WHERE id=($1) RETURNING id, user_name , bl1_id, bu_id`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this user Error : ${(err as Error).message}`)
    }
  }

  // Auth user
  async authenticate(user_name: string, password: string): Promise<User | null> {
    try {
      const conn = await db.connect()
      const sql = `SELECT password FROM users WHERE user_name=$1`
      const result = await conn.query(sql, [user_name])
      if (result.rows.length) {
        const { password: hashPass } = result.rows[0]
        const isPasswordValid = bcrypt.compareSync(password + passwordEnv, hashPass)
        if (isPasswordValid) {
          const sql = `SELECT * FROM users WHERE user_name=$1`
          const userinfo = await conn.query(sql, [user_name])
          return userinfo.rows[0]
        }
      }
      conn.release()
      return null
    } catch (err) {
      throw new Error(`Invaled username or password ${(err as Error).message}`)
    }
  }
}

export default UserModel
