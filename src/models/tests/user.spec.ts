import UserModel from '../user.model'
import db from '../../database'
import User from '../../types/user.type'

const userModel = new UserModel()
describe('User Model defined', () => {
  describe('test if User methods exists', () => {
    it('if getAllUser Method exists', () => {
      expect(userModel.getAllUser).toBeDefined()
    })

    it('if createUser Method exists', () => {
      expect(userModel.createUser).toBeDefined()
    })

    it('if updateUser Method exists', () => {
      expect(userModel.updateUser).toBeDefined()
    })

    it('if getOneUser Method exists', () => {
      expect(userModel.getOneUser).toBeDefined()
    })

    it('if deleteUser Method exists', () => {
      expect(userModel.deleteUser).toBeDefined()
    })

    it('test if AuthUser Function exists', () => {
      expect(userModel.authenticate).toBeDefined()
    })

    describe('Test User Model methods', () => {
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

      it('test createUser method', async () => {
        const createUser = await userModel.createUser({
          user_name: 'UserTest',
          password: 'testpassword'
        } as User)
        expect(createUser).toEqual({
          id: createUser.id,
          user_name: 'UserTest',
          password: createUser.password
        } as User)
      })

      it('test getAllUsers method', async () => {
        const users = await userModel.getAllUser()
        expect(users.length).toBe(2)
      })

      it('test getOneUser method', async () => {
        const getOneUser = await userModel.getOneUser(user.id as unknown as string)
        expect(getOneUser.id).toBe(user.id)
        expect(getOneUser.user_name).toBe(user.user_name)
      })

      it('test updateUser method', async () => {
        const updateUser = await userModel.updateUser({
          id: user.id,
          user_name: 'updated User',
          password: user.password,
          first_name: '',
          last_name: '',
          user_mail: '',
          position: '',
          privilege: '',
          status: '',
          created_date: '',
          bl1_id: 0,
          bl2_id: 0,
          bl3_id: 0,
          bl4_id: 0,
          bl5_id: 0,
          bl6_id: 0,
          bl7_id: 0,
          bu_id: 0
        })
        expect(updateUser.id).toBe(user.id)
        expect(updateUser.user_name).toBe('updated User')
        expect(updateUser.password).toBe(user.password)
      })

      it('test deleteUser method', async () => {
        const deleteUser = await userModel.deleteUser(user.id as unknown as string)
        expect(deleteUser.id).toBe(user.id)
      })
    })
  })
})
