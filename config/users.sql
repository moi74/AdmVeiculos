create user 'adm_veiculos'@'localhost' identified by 'carros2021';
grant ALL PRIVILEGES ON automoveis . * to 'adm_veiculos'@'localhost';
ALTER USER 'adm_veiculos'@'localhost' IDENTIFIED WITH mysql_native_password BY 'carros2021';

#create user 'adm_veiculos'@'%' identified by 'carros2021';
#grant ALL PRIVILEGES ON automoveis . * to 'adm_veiculos'@'%';
#drop user 'adm_veiculos'@'%';

create database automoveis;