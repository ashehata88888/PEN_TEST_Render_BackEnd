CREATE TABLE call_contacts(
id SERIAL PRIMARY KEY,
contact_person VARCHAR(50) NOT NULL,
mobile_number VARCHAR(11) NOT NULL,
authority_id INTEGER REFERENCES authorities(id),
speciality_id INTEGER REFERENCES specialities(id),
position_id INTEGER REFERENCES positions(id),
call_product_id INTEGER REFERENCES call_products(id),
activity_id INTEGER REFERENCES activities(id),
account_id INTEGER REFERENCES accounts(id)
)