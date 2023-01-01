import { Pool } from 'pg'
import * as dotenv from 'dotenv'

dotenv.config()

const {
  ENV,
  POSTGRES_HOST,
  POSTGRES_PORT,
  POSTGRES_DB,
  POSTGRES_DB_TEST,
  POSTGRES_USER,
  POSTGRES_PASSWORD,
  POSTGRES_MAX
} = process.env

let db: Pool

if (ENV === 'dev') {
  db = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: parseInt(POSTGRES_PORT as string),
    max: parseInt(POSTGRES_MAX as string)
  })
}

if (ENV === 'test') {
  db = new Pool({
    host: POSTGRES_HOST,
    database: POSTGRES_DB_TEST,
    user: POSTGRES_USER,
    password: POSTGRES_PASSWORD,
    port: parseInt(POSTGRES_PORT as string),
    max: parseInt(POSTGRES_MAX as string)
  })
}

db.on('error', (error: Error) => {
  console.error(error.message)
})

export default db
