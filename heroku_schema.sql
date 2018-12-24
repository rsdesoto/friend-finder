use tuy5ijgjkpzjovda;

drop table friends;

CREATE TABLE friends(
id INTEGER(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(25),
friend_desc VARCHAR(150),
pic_url TEXT(500),
answers VARCHAR(50),
createdAt TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP,
PRIMARY KEY (id)
);

INSERT INTO friends (name,friend_desc,pic_url,answers) 
VALUES
("bigfoot","likes long walks in the forest","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/bigfoot.jpg","5,1,2,1,2,4,2,5,5,5"),
("mothman","light my fire, baby","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/mothman.jpg","2,5,3,5,4,2,1,2,3,1"),
("jersey devil","[wordless screams]","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/jerseydevil.jpg","1,4,5,5,3,2,1,1,2,1"),
("kraken","eight arms for hugging","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/kraken.jpg","4,2,3,5,5,1,5,2,1,1"),
("tsuchinoko","my anaconda DO want some","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/tsuchinoko.jpg","1,1,2,5,3,5,2,4,2,3"),
("chupacabra","sucks to suck","https://raw.githubusercontent.com/rsdesoto/friend-finder/master/app/public/assets/chupacabra.jpg","2,1,2,1,3,2,2,5,4,3")
;

select * from friends;