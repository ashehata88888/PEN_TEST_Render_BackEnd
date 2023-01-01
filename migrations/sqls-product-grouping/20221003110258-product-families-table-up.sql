CREATE TABLE product_families(
id SERIAL PRIMARY KEY,
product_family  VARCHAR(50) NOT NULL UNIQUE ,
supplier_id INTEGER REFERENCES suppliers(id) 
)