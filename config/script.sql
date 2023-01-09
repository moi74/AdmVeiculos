drop database automoveis;
create database automoveis;
use automoveis;

create table veiculos (
	id int not null auto_increment,
    placa varchar(7) not null,
    chassi varchar(17) not null,
    renavam varchar(11) not null,
    modelo varchar(25) not null,
    marca varchar(25) not null,
    ano int not null,
    
    primary key(id)
);

insert into veiculos (placa, chassi, renavam, modelo, marca, ano)
values('abc1234', 'FX5798AL99M3A45AX', '04925579384', 'gol G3', 'VW', '2002'),
('xyz9876', 'AL93455RTX99F4B17', '54911618007', 'Hilux', 'Toyota', '2020');

select * from veiculos;