# apiPetshop
# Configurando bibliotecas e instalando 

npm init -y

npm install express body-parser sequelize mysql2

npm install config

# Como acessar o mysql pelo windows 10 através do powershell do vs code?

C:\ cd Arquivos de Programas

C:\Arquivos de Programas>cd MySQL

C:\Arquivos de Programas\MySQL>cd "MySQL Server 8.0"

C:\Arquivos de Programas\MySQL\MySQL Server 8.0>cd bin

C:\Arquivos de Programas\MySql\MySQL Server 8.0\bin>.\mysql -u root -h 127.0.0.1 -p

Enter password: 
Welcome to the MySQL monitor.  Commands end with ; or \g.
Your MySQL connection id is 11
Server version: 5.5.5-10.4.14-MariaDB mariadb.org binary distribution

Copyright (c) 2000, 2019, Oracle and/or its affiliates. All rights reserved.

Oracle is a registered trademark of Oracle Corporation and/or its
affiliates. Other names may be trademarks of their respective
owners.

Type 'help;' or '\h' for help. Type '\c' to clear the current input statement.

mysql> create database petshop;
Query OK, 1 row affected (0.01 sec)

mysql> create database petshop

# Node

node api/banco-de-dados/criarTabelas.js <- executar somente uma vez

node api/index.js <-executa nossa api

# Para que serve o async?

Eles permitem que escrever código baseado em promessa como se fosse síncrono, mas sem bloquear o segmento principal. Elas tornam o seu código assíncrono menos "inteligente" e mais legível. Se usar a palavra-chave async antes de uma definição de função, você pode usar await dentro da função

# Para que serve o Await?
A palavra-chave await é usada para esperar até que uma função (que geralmente demora para executar completamente) retorne seu resultado -- e ela espera esse resultado sem bloquear o fluxo do programa. 

