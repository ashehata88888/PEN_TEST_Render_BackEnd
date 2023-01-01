import supertest from 'supertest'
import db from '../../database'
import UserModel from '../../models/user.model'
import User from '../../types/user.type'
import app from '../../index'

const userModel = new UserModel()
const request = supertest(app)
// eslint-disable-next-line @typescript-eslint/no-unused-vars
let token = ''

describe('Test api/users endpoints', () => {
  const user = {
    user_name: 'Ahmed',
    password: 'foo@123'
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

  it('test Authenticate function if token returned', async () => {
    const res = await request
      .post('/api/users/authenticate')
      .set('content-type', 'application/json')
      .send({
        user_name: 'Ahmed',
        password: 'foo@123'
      })
    expect(res.status).toBe(200)
    const { id, user_name, token: userToken } = res.body.data
    expect(id).toBe(user.id)
    expect(user_name).toBe('Ahmed')
    token = userToken
  })

  it('test Authenticate with wrong username & password', async () => {
    const res = await request
      .post('/api/users/authenticate')
      .set('content-type', 'application/json')
      .send({
        user_name: 'example1',
        password: 'wrongPass'
      })
    expect(res.status).toBe(401)
  })

  describe(`CRUD testing for All Endpoints`, () => {
    it('test post by creating new user', async () => {
      const res = await request
        .post('/api/users/')
        .set('content-type', 'application/json')
        .send({
          user_name: 'Mohamed',
          password: 'pass@123'
        } as User)
      expect(res.status).toBe(200)
      const user_name = res.body.data
      expect(user_name).toBe('Mohamed')
    })

    it(`get all Users`, async () => {
      const res = await request.get('api/users/')
      expect(res.status).toBe(200)
      const { id, user_name, token: userToken } = res.body.data
      expect(id).toBe(user.id)
      expect(user_name).toBe(['Ahmed', 'Mohamed'])
      token = userToken
    })

    it(`get one Users`, async () => {
      const res = await request.get(`api/users/1`)
      expect(res.status).toBe(200)
      const { user_name, token: userToken } = res.body.data
      expect(user.id).toBe(1)
      expect(user_name).toBe(['Ahmed'])
      token = userToken
    })

    it(`updae one Users`, async () => {
      const res = await request.patch(`api/users/${user.id}`)
      expect(res.status).toBe(200)
      const { user_name, token: userToken } = res.body.data
      expect(user_name).toBe(user_name)
      token = userToken
    })

    it(`delete one Users`, async () => {
      const res = await request.delete(`api/users/${user.id}`)
      expect(res.status).toBe(200)
    })
  })
})
