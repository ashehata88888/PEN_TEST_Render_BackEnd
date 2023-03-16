CREATE TABLE market_size_records(
id SERIAL PRIMARY KEY,
egmed_consumption INTEGER,
total_consumption INTEGER,
competitor_id INTEGER REFERENCES competitors(id),
item_qty1 INTEGER NOT NULL,
item_status1_id INTEGER REFERENCES product_status(id),
item_qty2 INTEGER,
item_status2_id INTEGER REFERENCES product_status(id),
item_group_id   INTEGER REFERENCES item_groups(id),
market_size_id INTEGER REFERENCES market_size(id)
)