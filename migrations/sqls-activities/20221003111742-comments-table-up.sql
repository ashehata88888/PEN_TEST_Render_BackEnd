CREATE TABLE comments(
id SERIAL PRIMARY KEY,
comment TEXT,
activity_id INTEGER REFERENCES activities(id) 
)