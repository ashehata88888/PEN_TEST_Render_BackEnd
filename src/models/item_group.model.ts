/* eslint-disable prettier/prettier */
import item_group from '../types/item_group.type'
import db from '../database'

class ItemGroupModel {
  // create new Item_Group
  async createItem_group(b:item_group): Promise<item_group> {
    try {
      const conn = await db.connect()
      const sql = `INSERT INTO item_groups(item_group,item_name,item_stock,product_family_id) VALUES (
        $1,$2,$3,$4) RETURNING *`

      const result = await conn.query(sql,
        [b.item_group,b.item_name,b.item_stock,b.product_family_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this item_group Error : ${(err as Error).message}`)
    }
  }
  // get one item_group by id
  async getOneItem_group(id: string): Promise<item_group> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from item_groups WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this item_group id Error : ${(err as Error).message}`)
    }
  }

   // get All item_group by product_Family
  async getAllItem_groupByPFID(id: string): Promise<item_group[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from item_groups WHERE product_family_id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get this item_group id Error : ${(err as Error).message}`)
    }
  }

  // get all item_groups

  async getAllItem_groups(): Promise<item_group[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from item_groups`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these item_groups Error : ${(err as Error).message}`)
    }
  }

  // udate one item_group by id
  async updateItem_group(b: item_group): Promise<item_group> {
    try {
      const conn = await db.connect()
      const sql = `UPDATE item_groups SET item_group=$1,item_name=$2,item_stock=$3,product_family_id=$4 WHERE id=$5 RETURNING *`
      const result = await conn.query(sql, [b.item_group,b.item_name,b.item_stock,b.product_family_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this item_group Error : ${(err as Error).message}`)
    }
  }
  // delete one item_group by id

  async deleteItem_group(id: string): Promise<item_group> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM item_groups WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this item_group Error : ${(err as Error).message}`)
    }
  }


}

export default ItemGroupModel
