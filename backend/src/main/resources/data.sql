INSERT INTO products (name, price, stock, active, description, created_at)
SELECT 'Ban phim co', 890000, 12, true, 'Ban phim co cho goc hoc tap React', NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Ban phim co');

INSERT INTO products (name, price, stock, active, description, created_at)
SELECT 'Chuot khong day', 320000, 25, true, 'Chuot gon nhe, pin lau', NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Chuot khong day');

INSERT INTO products (name, price, stock, active, description, created_at)
SELECT 'Man hinh 24 inch', 2650000, 7, true, 'Man hinh phu hop hoc frontend', NOW()
WHERE NOT EXISTS (SELECT 1 FROM products WHERE name = 'Man hinh 24 inch');
