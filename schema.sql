drop database friend_db;

CREATE DATABASE friend_db;

USE friend_db;


CREATE TABLE friends(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(25),
friend_desc VARCHAR(150),
answers VARCHAR(50),
PRIMARY KEY (id)
);

INSERT INTO friends (name,friend_desc,answers) 
VALUES("bigfoot","likes long walks in the forest","4,4,4,4,4,4,4,4,4,4"),
("mothman","light my fire, baby","5,5,5,5,5,5,5,5,5,5"),
("jersey devil","[wordless screams]","1,1,1,1,1,1,1,1,1,1")
;

select * from friends;