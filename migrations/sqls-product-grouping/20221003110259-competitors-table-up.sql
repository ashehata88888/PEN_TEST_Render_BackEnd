CREATE TABLE competitors(
id SERIAL PRIMARY KEY,
competitor_name VARCHAR(50) NOT NULL,
supplier_id INTEGER REFERENCES suppliers(id),
bl_id INTEGER REFERENCES bls(id)
)