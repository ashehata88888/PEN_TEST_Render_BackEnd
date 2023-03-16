CREATE TABLE market_size(
id SERIAL PRIMARY KEY,
supplier_id INTEGER REFERENCES suppliers(id),
product_family_id INTEGER REFERENCES product_families(id),
market_potential_id INTEGER REFERENCES market_potentials(id)
)