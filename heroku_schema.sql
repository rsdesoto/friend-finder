use tuy5ijgjkpzjovda;

CREATE TABLE friends(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(25),
friend_desc VARCHAR(150),
pic_url TEXT(500),
answers VARCHAR(50),
createdAt TIMESTAMP NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO friends (name,friend_desc,pic_url,answers) 
VALUES("bigfoot","likes long walks in the forest","data:image/jpeg;base64,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","4,4,4,4,4,4,4,4,4,4"),
("mothman","light my fire, baby","https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Mothman_statue_in_West_Virigina.jpg/1024px-Mothman_statue_in_West_Virigina.jpg","5,5,5,5,5,5,5,5,5,5"),
("jersey devil","[wordless screams]","https://upload.wikimedia.org/wikipedia/commons/1/13/Jersey_Devil_Philadelphia_Post_1909.jpg","1,1,1,1,1,1,1,1,1,1")
;