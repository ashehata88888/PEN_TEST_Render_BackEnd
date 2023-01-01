import Call_contact from '../types/call_contact.type'
import db from '../database'

class Call_contactModel {
  // create new Call_contact
async createCall_contact(b:Call_contact): Promise<Call_contact> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO call_contacts(contact_person, mobile_number,authority_id,speciality_id,position_id,call_product_id,activity_id,account_id) VALUES (
$1,$2,$3,$4,$5,$6,$7,$8) RETURNING *`

      const result = await conn.query(sql,
        [b.contact_person, b.mobile_number,b.authority_id,b.speciality_id,b.position_id,b.call_product_id,b.activity_id,b.account_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Call_contact Error : ${(err as Error).message}`)
    }
  }
  // get one Call_contact by id
  async getOneCall_contact(id: string): Promise<Call_contact> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from call_contacts WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Call_contact by id Error : ${(err as Error).message}`)
    }
  }

  // get all Call_contacts

  async getAllCall_contacts(): Promise<Call_contact[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from call_contacts`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Call_contacts Error : ${(err as Error).message}`)
    }
  }

  // udate one Call_contact by id
  async updateCall_contact(b: Call_contact): Promise<Call_contact> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE call_contacts SET contact_person=$1, mobile_number=$2,authority_id=$3,speciality_id=$4,position_id=$5,call_product_id=$6,activity_id=$7,account_id=$8 WHERE id=$9 RETURNING *`
      const result = await conn.query(sql, [b.contact_person, b.mobile_number,b.authority_id,b.speciality_id,b.position_id,b.call_product_id,b.activity_id,b.account_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Call_contact Error : ${(err as Error).message}`)
    }
  }
  // delete one Call_contact by id I'll hold this method and replace it with another function as I need to delete all contact where activity_id = $1

  async deleteCall_contact(id: string): Promise<Call_contact> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM call_contacts WHERE activity_id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Call_contact Error : ${(err as Error).message}`)
    }
  }


}

export default Call_contactModel
