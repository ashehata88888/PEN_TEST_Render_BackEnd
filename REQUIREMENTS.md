# API Requirements
The company stakeholders want to create an online storefront to showcase their great product ideas. Users need to be able to browse an index of all products, see the specifics of a single product, and add products to an order that they can view in a cart page. You have been tasked with building the API that will support this application, and your coworker is building the frontend.

These are the notes from a meeting with the frontend developer that describe what endpoints the API needs to supply, as well as data shapes the frontend and backend have agreed meet the requirements of the application. 

## API Endpoints
#### Products
- Index 
- Show
- Create [token required]

#### Users
- Index [token required]
- Show [token required]
- Create N[token required]

#### Orders
- Current Order by user (args: user id)[token required]
- [OPTIONAL] Completed Orders by user (args: user id)[token required]

## Data Shapes
#### Product
-  id
- name
- price

#### User
- id
- firstName
- lastName
- password

#### Orders
- id
- id of each product in the order
- quantity of each product in the order
- user_id
- status of order (active or complete)


#### Database tables design and schema 

 Schema |      Name      | Type  |  Owner
--------+----------------+-------+----------
 public | order_products | table | postgres
 public | orders         | table | postgres
 public | products       | table | postgres
 public | users          | table | postgres

-----Users Table----
 id | user_name | password
----+-----------+----------

-----Orders Table----
 id | status | user_id
----+--------+---------

-----Products Table---
 id | item_name | price
----+-----------+-------

-----Order_products Table----
 id | quantity | order_id | product_id
----+----------+----------+------------

#### setup the database and run server 
1- run script "yarn migration:up" to create the mentioned table in the database 
2- run script "yarn start" to build the project and start the server on port #3000

#### Authentication & Authorization  
to make sure all useres are authenticated I used bcrypt and salt to make the user password high protected so if you create a new user as following data 
user_name : 'Ahmed',
password: 'pass@123'

the user name will be added in the database in users table and the password and salt will be added also but in hash form like "$2b$10$yYZKtWezO8.Z/jr.xAXon.jj7vaI7eYb.f21FMfJG/JP7JvV0pBDq"

for testing the Authentication features you need to type : 
"localhost:3000/api/users/Authenticate"

and send the following data user by post http verb 

user_name : 'Ahmed',
password: 'pass@123'

if the data is right you will get all user data including the jsonwebtoken 

{
    "data": {
        "id": 1,
        "user_name": "Mahmoud",
        "password": "$2b$10$yYZKtWezO8.Z/jr.xAXon.jj7vaI7eYb.f21FMfJG/JP7JvV0pBDq",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoxLCJ1c2VyX25hbWUiOiJNYWhtb3VkIiwicGFzc3dvcmQiOiIkMmIkMTAkeVlaS3RXZXpPOC5aL2pyLnhBWG9uLmpqN3ZhSTdlWWIuZjIxRk1mSkcvSlA3SnZWMHBCRHEifSwiaWF0IjoxNjYwNDczMTA4fQ.ZJUoKZi2MOaT_bejluTVCt2YLMyuc2QCamVeGjllg9M"
    },
    "message": "user's passed the authentication successfully"
}


if the crediatials is wrong you will get this message 

{
    "message": "User Name or Password is not correct"
}




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

- localhost:3000/api/orders              with post http verb 
- localhost:3000/api/orders              with get http verb
- localhost:3000/api/orders/id           with get http verb
- localhost:3000/api/orders/id           with patch http verb
- localhost:3000/api/orders/id           with delete http verb
- localhost:3000/api/orders/id/products  with post http verb


#### User Endpoints 

1- 'localhost:3000/api/users' with POST http verb 

to use this endpoint you need to send the user_name & password to create new user in the database 

user_name : 'Ahmed',
password: 'pass@123'


-----------------------------------------------------------------------------

2- 'localhost:3000/api/users' with GET http verb 

to use this endpoint you need to send the token and please select bearer token to get all users data in data base users Table

step 1   enter the token you have already got with the user creation returned data in postman after you chose Bearer token for Auth type

step 2  send get request to 'localhost:3000/api/users'

if the token is right you will get all users data like : 

{
    "Message": " the Users was retrieved successfully",
    "data": {
        "0": {
            "id": 1,
            "user_name": "Mahmoud",
            "password": "$2b$10$yYZKtWezO8.Z/jr.xAXon.jj7vaI7eYb.f21FMfJG/JP7JvV0pBDq"
        },
        "1": {
            "id": 2,
            "user_name": "Marko",
            "password": "$2b$10$jE1b1hAx0zzgq./rejUFH.HKZAH9qhD0HDCsz7YV2ExOjtWVnHdYi"
        },
        "2": {
            "id": 3,
            "user_name": "Mido",
            "password": "$2b$10$5jjwkSq.h4W99nda1WYZ/ev2TTVjpAmd7F22J61lwOj33kCAUOFDq"
        }
    }
}

if the token is wrong "access denied" error message will be thrown 

--------------------------------------------------------------------------

3- "localhost:3000/api/users/id"  with GET http verb 

to use this endpoint for getting a specific user data by user_id

step 1   enter the token you have already got with the user creation returned data in postman after you chose Bearer token for Auth type

step 2  send get request to 'localhost:3000/api/users/1' the last number is the user_id to get specific user data by user_id

if the token is right you will get specific user data like :

{
    "Message": " User \"Mahmoud\" was retrieved successfully",
    "data": {
        "id": 1,
        "user_name": "Mahmoud",
        "password": "$2b$10$yYZKtWezO8.Z/jr.xAXon.jj7vaI7eYb.f21FMfJG/JP7JvV0pBDq"
    }

if the token is wrong "access denied" error message will be thrown

-----------------------------------------------------------------------------

4- 'localhost:3000/api/users/id'  with PATCH http verb

this endpoint for updating specific user data by user_id so to use it do that:

step 1   enter the token you have already got with the user creation returned data in postman after you chose Bearer token for Auth type

step 2  send patch request to 'localhost:3000/api/users/1' the last number is the user_id to update specific user data by user_id

step 3 send the data you need to update like: 

    {
        "id": 1,
        "user_name": "Ahmed",
    }

    if the token is right the user will be updated and the following message wil be returned 

 {
    "Message": " the User was updated successfully",
    "data": {
        "id": 1,
        "user_name": "Ahmed",
        "password": "$2b$10$KFtOFBjNf8Rj1Jspnjr2BuHyZqrud1tlQLsDBWy1XgxpZVWZ5RIq."
    }
}

if the token is wrong "access denied" error message will be thrown

-------------------------------------------------------------------------------

5- localhost:3000/api/users/id  with DELETE http verb

to use this endpoint for deleting a specific user data by user_id

step 1   enter the token you have already got with the user creation returned data in postman after you chose Bearer token for Auth type

step 2  send delete request to 'localhost:3000/api/users/3' the last number is the user_id to delete specific user data by user_id

if the token is right you will delete specific user data and the data deleted will returned like :

{
    "Message": " User \"Mido\" was deleted successfully",
    "data": {
        "id": 3,
        "user_name": "Mido"
    }
}

if the token is wrong "access denied" error message will be thrown

------------------------------------------------------------------------------


#### Product Endpoints

please Product Endpoints as same as the User end point

#### Order Endpoints

please Product Endpoints as same as the User end point

#### Cart Order Endpoint 

you have noted that there is a table in database called order_products that table will represent the many to many relationship between the orders and products so please follow the following steps to add data in this table 


localhost:3000/api/orders/id/products  with POST http verb

to use this endpoint for adding products to specific order

step 1   enter the token you have already got with the user creation returned data in postman after you chose Bearer token for Auth type

step 2  send post request to 'localhost:3000/api/orders/1/products' 

step 3 send the following data 

{
 "quantity": "77",
 "order_id": 2,
 "product_id":1
}



you will get the follwoing message 

{
    "Message": " the Product was successfully added to the order ",
    "data": {
        "id": 2,
        "quantity": 77,
        "order_id": "1",
        "product_id": "1"
    }
}


if you check the order_products table you will find the following data 


store_dev=# select * from order_products;
 id | quantity | order_id | product_id
----+----------+----------+------------
  1 |       77 |        1 |          1



