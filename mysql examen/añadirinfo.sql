/*insert into productos(nombre_produc,ingredientes_produc,precio_por_unidad)values
("pizzas","masa,queso,peperoni",15000),
("panzarottis","masa,queso,jamon",4000),
("gaseosa","cocacola",7800);*/
use pizza;
insert into combos (nombre,descripcion) values
("pizza con gaseosa","pizza de peperoni con gaseosa"),
("panzarottis con gaseosa","panzarottis de jamon con gaseosa");
/*insert into productos(nombre_produc,ingredientes_produc,precio_por_unidad)values
("pizzas","masa,queso,peperoni",15000),
("panzarottis","masa,queso,jamon",4000),
("gaseosa","cocacola",7800);*/
insert into menu (id_product,nombre,id_combo,precio) values
(1,"pizzas",1,15000),
(2,"panzarottis",2,4000);
insert into pedidos(id_produc,id_combo,descripcion,llevar) values
(1,1,"una pizza y un combo de pizza","si"),
(2,1,"un panzarottis y un combo de pizza","no"),
(1,2,"una pizza y un combo de panzarottis","si"),
(2,2,"un panzarottis y un combo de panzarottis","no"),
(1,1,"una pizza y un combo de pizza","si"),
(2,2,"un panzarottis y un combo de panzarottis","si");
insert into ventas (id_producto,id_pedido,precio,descripcion) values
(1,1,18000,"una pizza y un combo"),
(2,2,10000,"un panzarottis y un combo"),
(1,3,18000,"una pizza y un combo"),
(2,4,10000,"un panzarottis y un combo");