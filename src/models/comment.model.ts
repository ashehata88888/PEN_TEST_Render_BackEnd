/* eslint-disable prettier/prettier */
import Comment from '../types/comment.type'
import db from '../database'

class CommentModel {
  // create new Comment
async createComment(b:Comment): Promise<Comment> {
    try {
      const conn = await db.connect()
const sql = `INSERT INTO comments(comment,activity_id) VALUES (
$1,$2) RETURNING *`

      const result = await conn.query(sql,
        [b.comment,b.activity_id])

      conn.release()

      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to create this Comment Error : ${(err as Error).message}`)
    }
  }
  // get one Comment by id
  async getOneComment(id: string): Promise<Comment> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from comments WHERE id=($1)`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to get this Comment by id Error : ${(err as Error).message}`)
    }
  }

  // get all Comments

  async getAllComments(): Promise<Comment[]> {
    try {
      const conn = await db.connect()
      const sql = `SELECT * from comments`
      const result = await conn.query(sql)
      conn.release()
      return result.rows
    } catch (err) {
      throw new Error(`Unable to get these Comments Error : ${(err as Error).message}`)
    }
  }

  // udate one Comment by id
  async updateComment(b: Comment): Promise<Comment> {
    try {
      const conn = await db.connect()
  const sql = `UPDATE comments SET comment=$1,activity_id=$2 WHERE id=$3 RETURNING *`
      const result = await conn.query(sql, [b.comment,b.activity_id,b.id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to update this Comment Error : ${(err as Error).message}`)
    }
  }
  // delete one Comment by id

  async deleteComment(id: string): Promise<Comment> {
    try {
      const conn = await db.connect()
      const sql = `DELETE FROM comments WHERE id=($1) RETURNING *`
      const result = await conn.query(sql, [id])
      conn.release()
      return result.rows[0]
    } catch (err) {
      throw new Error(`Unable to Delete this Comment Error : ${(err as Error).message}`)
    }
  }


}

export default CommentModel
