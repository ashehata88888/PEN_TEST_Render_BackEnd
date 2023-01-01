CREATE TABLE item_groups(
id SERIAL PRIMARY KEY,
item_group  VARCHAR(100) NOT NULL UNIQUE ,
item_name  VARCHAR(50) ,
item_stock BIGINT ,
product_family_id INTEGER REFERENCES product_families(id)
)