CREATE TABLE activities(
id SERIAL PRIMARY KEY,
session_created_at TIMESTAMPTZ  DEFAULT NOW(),
user_id INTEGER REFERENCES users(id),
bl_id INTEGER REFERENCES bls(id),
bu_id INTEGER REFERENCES bus(id),
activity_date_from DATE NOT NULL,
activity_date_to DATE,
activity_type_id  INTEGER REFERENCES activity_types(id),
account_type_id  INTEGER REFERENCES account_types(id),
account_id  INTEGER REFERENCES accounts(id),
purchase_method_id INTEGER REFERENCES purchase_methods(id),
comment varchar(250)
)
