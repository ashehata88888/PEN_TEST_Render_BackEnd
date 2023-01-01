CREATE TABLE accounts(
id SERIAL PRIMARY KEY,
account_name VARCHAR(100) NOT NULL,
account_area VARCHAR(100) NOT NULL,
user_id INTEGER REFERENCES users(id),
bl_id INTEGER REFERENCES bls(id)
)