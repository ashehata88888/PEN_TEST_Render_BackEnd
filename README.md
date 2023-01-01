# Storefront Backend Project

## Getting Started
this project represent a Express Nodejs API for creating online store backend 
and provided all endpoints needed for front end development 


### Project Setup instructions 

1- run this command line to install node_moduels 

npm install 

2- you need to create .env file which will contain the database connection info as the following setup 
PORT=3000
ENV=dev
POSTGRES_HOST=localhost
POSTGRES_PORT=5432
POSTGRES_DB=store_dev
POSTGRES_DB_TEST=store_test
POSTGRES_USER=postgres
POSTGRES_PASSWORD=123456
POSTGRES_MAX=6
BCRYPT_PASS=password@123
SALT_ROUNDS=10
TOKEN=password@456
      
      
      
      "host": "localhost",
      "port": "5432",
      "database": "store_dev",
      "user": "postgres",
      "password": "123456"

to do so you need to access the psql with user postgres and password 123456
then you need to create your database by typing this sql : 
CREATE DATABASE store_dev;

then you will need to connect with your database by : 

\c store_dev or \c store_test in case you will connect to the test database 

3- now you are connected so lets running the project server to do so you need to run this CL first:
yarn start 

it will run this script "npm run build && node build/index.js" and the console will tell you that the server run on port # 3000 

4- we ready now to start using the API so please open postman to test the following endpoints 

--------------Users Route-----------------

- localhost:3000/api/users     with post http verb
- localhost:3000/api/users     with get http verb
- localhost:3000/api/users/id  with get http verb
- localhost:3000/api/users/id  with patch http verb
- localhost:3000/api/users/id  with delete http verb

--------------Product Route-----------------

- localhost:3000/api/products     with post http verb
- localhost:3000/api/products     with get http verb
- localhost:3000/api/products/id  with get http verb
- localhost:3000/api/products/id  with patch http verb
- localhost:3000/api/products/id  with delete http verb

--------------Order Route-----------------

- localhost:3000/api/orders       with post http verb
- localhost:3000/api/orders     with get http verb
- localhost:3000/api/orders/id  with get http verb
- localhost:3000/api/orders/id  with patch http verb
- localhost:3000/api/orders/id  with delete http verb



packages incloded 

- Postgres for the database
- Node/Express for the application logic
- dotenv from npm for managing environment variables
- db-migrate from npm for migrations
- jsonwebtoken from npm for working with JWTs
- jasmine from npm for testing
- nodemon for development testing
- supertest for endpoint testing
- bcrypt for hashing password
- eslint for code formatting 

for running test suits please type script "yarn test"


please read the REQUIREMENTS.md to for more details about each endpoint