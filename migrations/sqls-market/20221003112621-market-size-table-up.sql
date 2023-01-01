CREATE TABLE market_size(
id SERIAL PRIMARY KEY,
supplier_id INTEGER REFERENCES suppliers(id),
product_family_id INTEGER REFERENCES product_families(id),
item_group_id   INTEGER REFERENCES item_groups(id),
market_potential_id INTEGER REFERENCES market_potentials(id)
)