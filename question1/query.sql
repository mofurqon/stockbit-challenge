-- create table
CREATE TABLE USER (
id INT(1) PRIMARY KEY,
username VARCHAR(30) NOT NULL,
parent int(1) null
);

-- insert data
INSERT INTO USER VALUES (1, 'Ali', 2),(2, 'Budi', 0),(3, 'Cecep', 1);

-- querying data base on the question
SELECT a.id, a.username, (select b.username from USER b where b.id = a.parent) AS parentusername FROM USER a;