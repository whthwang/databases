CREATE DATABASE chat;

USE chat;

CREATE TABLE messages (
  /* Describe your table here.*/
  id smallint not null auto_increment,
  user varchar(20) not null,
  text varchar(140) not null,
  primary key (id)
);
CREATE TABLE users (
  /* Describe your table here.*/
  id smallint not null auto_increment,
  name varchar(20) not null,
  primary key (id)
);
CREATE TABLE rooms (
  /* Describe your table here.*/
  id smallint not null auto_increment,
  name varchar(20) not null,
  messages smallint not null,
  primary key (id)
);

/* Create other tables and define schemas for them here! */




/*  Execute this file from the command line by typing:
 *    mysql -u root < server/schema.sql
 *  to create the database and the tables.*/



-- CREATE TABLE testTable (id smallint not null auto_increment, name varchar(10) not null, location varchar(30) not null, primary key (id));