import UserModel from '../user.model'
import db from '../../database'
import User from '../../types/user.type'

const userModel = new UserModel()

describe('Auth Module', () => {
  describe('testing if the function exists or not', () => {
    it('have to has Authenticate method', () => {
      expect(userModel.authenticate).toBeDefined()
    })
  })

  describe('User Authentication test', () => {
    const user = {
      user_name: 'Ahmed',
      password: 'pass@123'
    } as User
    beforeAll(async () => {
      const createdUser = await userModel.createUser(user)
      user.id = createdUser.id
    })

    afterAll(async () => {
      const conn = await db.connect()
      const sql = 'DELETE FROM users'
      const reOrderId = 'ALTER SEQUENCE users_id_seq RESTART WITH 1'
      await conn.query(reOrderId)
      await conn.query(sql)
      conn.release()
    })

    it('return the Authenticated user', async () => {
      const authUser = await userModel.authenticate(user.user_name, user.password)
      expect(authUser?.user_name).toBe(user.user_name)
      expect(authUser?.password).toBe(user.password)
    })

    it('returns null in case invalid username or password', async () => {
      const authUser = await userModel.authenticate('UserNameExample', 'wrongPassword')
      expect(authUser).toBe(null)
    })
  })
})
