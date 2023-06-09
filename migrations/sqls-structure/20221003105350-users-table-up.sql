CREATE TABLE users(
id SERIAL PRIMARY KEY,
first_name VARCHAR(15) NOT NULL,
last_name VARCHAR(15) NOT NULL,
user_name VARCHAR(40) UNIQUE NOT NULL,
user_mail VARCHAR(50) UNIQUE NOT NULL,
position VARCHAR(20) NOT NULL,
privilege VARCHAR(20) NOT NULL,
status VARCHAR(20) NOT NULL,
password VARCHAR(100) NOT NULL,
created_date TIMESTAMPTZ DEFAULT NOW(),
bl1_id INTEGER REFERENCES bls(id),
bl2_id INTEGER REFERENCES bls(id),
bl3_id INTEGER REFERENCES bls(id),
bl4_id INTEGER REFERENCES bls(id),
bl5_id INTEGER REFERENCES bls(id),
bl6_id INTEGER REFERENCES bls(id),
bl7_id INTEGER REFERENCES bls(id),
bu_id INTEGER REFERENCES bus(id)
)