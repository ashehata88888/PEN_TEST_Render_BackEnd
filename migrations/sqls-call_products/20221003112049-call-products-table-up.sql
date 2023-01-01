CREATE TABLE call_products(
id SERIAL PRIMARY KEY,
supplier_id INTEGER REFERENCES suppliers(id),
product_family_id INTEGER REFERENCES product_families(id),
item_group_id INTEGER REFERENCES item_groups(id),
item_name VARCHAR(50),
item_stock BIGINT,
objective_id INTEGER REFERENCES objectives(id),
status_id INTEGER REFERENCES statuses(id),
activity_id INTEGER REFERENCES activities(id) 
)