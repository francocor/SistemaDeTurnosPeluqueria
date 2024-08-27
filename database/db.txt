Create database PeluqueriaSistemaDeTurnos;
use PeluqueriaSistemaDeTurnos;

CREATE TABLE usuarios (
    idUsuarios INT AUTO_INCREMENT PRIMARY KEY,
    Usuario VARCHAR(100) NOT NULL UNIQUE,
    Contraseña VARCHAR(255) NOT NULL
);

CREATE TABLE Productos(
idProductos INT auto_increment primary Key,
NombreProducto VARCHAR(200) NOT NULL,
DescripcionProducto varchar(200) NOT NULL,
PrecioProducto varchar(50) not null
);

CREATE TABLE Servicio(
idServicio INT auto_increment primary Key,
NombreServicio VARCHAR(200) NOT NULL,
DescripcionServicio varchar(200) NOT NULL,
PrecioServicio varchar(50) not null
);

CREATE TABLE Cursos(
idCursos INT auto_increment primary Key,
NombreCursos VARCHAR(200) NOT NULL,
DescripcionCursos varchar(200) NOT NULL,
PrecioCursos varchar(50) not null
);


---------------------------------
/*Procedimientos almacenados USUARIOS*/

DELIMITER $$
create procedure InsertarUsuario(
	in pUsuario Varchar (100),
	in pContraseña varchar(255)
)
begin
	insert into usuarios (usuario,Contraseña)
    values (pUsuario, pContraseña);
end$$
DELIMITER ;

DELIMITER $$
create procedure ObtenerUsuario()
begin
	select * from usuarios;
end$$
DELIMITER ;

DELIMITER $$
create procedure ActualizarUsuario(
	in pIdUsuarios int,
    in pUsuarios varchar(100),
    in pContraseña varchar(250)
)
begin 
	update usuarios
    set Usuario = pUsuario, Contraseña = pContraseña
    where idUsuarios = pIdUsuarios;
end$$
DELIMITER ;

DELIMITER $$
create procedure EliminarUsuario(
	in pIdUsuario int
)
begin
	delete from usuario where idUsuarios=pIdUsuarios;
end$$
DELIMITER ;

/*procedimientos almacenados PRODUCTOS*/

DELIMITER $$
create procedure InsertarProducto(
	in pNombreProducto varchar(200),
    in pDescripcionProducto varchar(300),
    in pPrecioProducto varchar(50)
)
begin
	insert into Productos(NombreProducto, DescripcionProducto, PrecioProducto)
    values (pNombreProducto, pDescripcionProducto, pPrecioProducto);
end$$
DELIMITER ;

DELIMITER $$
create procedure ObtenerProductos()
begin
	select * from Productos;
end$$
DELIMITER ;

DELIMITER $$
create procedure ActualizarProductos(
	in pIdProducto int,
    in pNombreProducto varchar (200),
    in pDescripcionProducto varchar(300),
    in pPrecioProducto varchar(50)
)
begin
	update Productos
    set NombreProducto = pNombreProducto, DescripcionProducto = pDescripcionProducto, precioProducto=pPrecioProducto
    where idProducto = pIdProducto;
end$$
DELIMITER ;

DELIMITER $$
create procedure EliminarProducto(
	in pIdProducto int
)
begin
	delete from Productos where idProductos = pIdProductos;
end$$
DELIMITER ;


/*procedimientos almacenados SERVICIOS*/

DELIMITER $$
create procedure InsertarServicio(
	in pNombreServicio VARCHAR(200),
    in pDescripcionServicio varchar (300),
    in pPrecioServicio varchar (50)
)
begin
	insert into Servicio (NombreServicio, DescripcionServicio, PrecioServicio)
    values (pNombreServicio, pDescripcionServicio, pPrecioServicio);
end$$
DELIMITER ;

DELIMITER $$
create procedure ObtenerServicios()
begin
	select * from servicio;
end$$
DELIMITER ;

DELIMITER $$
create procedure ActualizarServicio(
	in pIdProducto int,
    in pNombreProducto varchar (200),
    in pDescripcionProducto varchar(300),
    in pPrecioProducto varchar(50)
)
begin 
	update servicio
    set NombreServicio = pNombreServicio, DescripcionServicio = pDescripcionServicio, PrecioServicio = pPrecioServicio
    where idServicio = pIdServicio;
end$$
DELIMITER ; 

DELIMITER $$
create procedure ElimiarServicio(
 in pIdServicio int
)
begin 
	delete from Servicio where idServicio = pIdServicio;
end$$
DELIMITER ;


/*procedimientos almacenados CURSOS*/

DELIMITER $$
create procedure InsertarCurso(
	in pNombreCursos varchar (200),
    in pDescripcionCursos varchar (500),
    in pPrecioCurso varchar (50)
)
begin 
	insert into Cursos (NombreCursos, DescripcionCursos, PrecioCursos)
    Values (pNombreCursos, pDescripcionCursos, pPrecioCursos);
end$$
DELIMITER ; 

DELIMITER $$
create procedure ObtenerCursos()
begin
	select * from Cursos;
end$$
DELIMITER ;

DELIMITER $$
create procedure ActualizarCurso(
	in pIdCursos int,
    in pNombreCursos varchar(200),
    in pDescripcionCursos varchar(500),
    in pPrecioCursos varchar(50)
)
begin
	update Cursos
    set NombreCursos = pNombreCursos, DescipcionCursos = pDescripcionCursos, PrecioCursos = pPrecioCursos
    where idCursos = pIdCursos;
end$$
DELIMITER ; 

DELIMITER $$
create procedure EliminarCurso(
	in pIdCursos int
)
begin
	delete from cursos where idCursos = pIdCrusos;
end$$
DELIMITER ;