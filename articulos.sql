
-- Creando la tabla de articulos--


create table articles(

    id int NOT NULL AUTO_INCREMENT,
    nombre varchar(50),
    precio real,
    stock integer,

    CONSTRAINT err PRIMARY KEY(id)
    


);

select * from articles;





select * from articles;
delete from articles;


-- Cargando registros a la tabla de articulos --

use pruebas;
insert into articles(nombre,precio,stock)VALUES('coca cola',120,20);
insert into articles(nombre,precio,stock)VALUES('desodorante AXE',160,40);
insert into articles(nombre,precio,stock)VALUES('lavandina',135,15);
insert into articles(nombre,precio,stock)VALUES('galletitas oreo',80,24);
insert into articles(nombre,precio,stock)VALUES('esponja',40,50);
insert into articles(nombre,precio,stock)VALUES('mentoplus',50,100);
insert into articles(nombre,precio,stock)VALUES('cerveza brahma',160,120);
insert into articles(nombre,precio,stock)VALUES('fernet branca',750,30);
insert into articles(nombre,precio,stock)VALUES('wisky sumuggler',550,10);
insert into articles(nombre,precio,stock)VALUES('mayonesa natura',70,20);


use pruebas;
select * from articles;