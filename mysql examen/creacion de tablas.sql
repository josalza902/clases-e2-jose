create database pizza;
use pizza;
create table productos(
id_produc int primary key auto_increment not null,
nombre_produc varchar(50),
ingredientes_produc varchar(50),
precio_por_unidad int
);
create table adiciones(
id_adicion int primary key auto_increment not null,
id_produc int,
descripcion varchar(100),
foreign key(id_produc) references productos(id_produc)
);
create table combos(
id_combo int primary key auto_increment,
nombre varchar(50),
descripcion varchar(50)
);
create table pedidos(
id_pedido int primary key auto_increment ,
id_produc int,
id_combo int,
descripcion varchar(100),
llevar varchar(50),
foreign key (id_produc) references productos(id_produc),
foreign key (id_combo) references combos(id_combo)
);
create table menu(
id_menu int primary key auto_increment not null,
id_product int,
nombre varchar(50),
id_combo int,
precio int,
foreign key(id_product) references productos(id_produc),
foreign key(id_combo) references combos(id_combo)
);
create table ventas(
id_ventas int primary key auto_increment not null,
id_producto int,
id_pedido int,
precio int,
descripcion varchar(100),
foreign key (id_producto) references productos(id_produc),
foreign key (id_pedido) references pedidos(id_pedido)
);

