CREATE TABLE bus(
id SERIAL PRIMARY KEY,
bu_name VARCHAR (40) UNIQUE NOT NULL,
bu_manager_name VARCHAR(30),
bu_manager_mail VARCHAR(50) 
)
