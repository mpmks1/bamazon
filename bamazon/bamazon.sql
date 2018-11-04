
-- DROP DATABASE IF EXISTS bamazon_db;
USE bamazon_db;
SELECT * FROM bamazon_db.products LIMIT 1000;



-- CREATE TABLE products (
--     item_id int NOT NULL AUTO_INCREMENT,
--     product_name varchar(55),
--     department_name varchar(55),
--     price int(55),
--     stock_quantity int (255),
--     PRIMARY KEY (item_id)
-- );

-- INSERT INTO products (product_name, department_name, price, stock_quantity)
-- VALUES (socks, clothing, 6, 29), (oranges, food, 3, 42), (lemons, food, 2, 66), (munchies, food, 8, 35), (balloon, party, 6, 50),  (shoes, clothing, 60, 25),  (yomomma, party, 100, 20),  (robot, party, 350, 12),  (jacket, clothing, 63, 63),  (bananas, food, 3, 75);