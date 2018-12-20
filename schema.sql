CREATE DATABASE friend_db;

USE friend_db;


CREATE TABLE friends(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(25),
friend_desc VARCHAR(50),
q1 INTEGER(11),
q2 INTEGER(11),
q3 INTEGER(11),
q4 INTEGER(11),
q5 INTEGER(11),
q6 INTEGER(11),
q7 INTEGER(11),
q8 INTEGER(11),
q9 INTEGER(11),
q10 INTEGER(11),
PRIMARY KEY (id)
);

INSERT INTO friends (name,friend_desc,q1,q2,q3,q4,q5,q6,q7,q8,q9,q10) 
VALUES("bigfoot","likes long walks in the forest",4,4,4,4,4,4,4,4,4,4),
("mothman","light my fire, baby",5,5,5,5,5,5,5,5,5,5),
("jersey devil","[wordless screams]",1,1,1,1,1,1,1,1,1,1)
;

select * from friends;