DROP DATABASE IF EXISTS more_db;

CREATE DATABASE more_db;

USE more_db;

CREATE TABLE person (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  firstname VARCHAR(30) NOT NULL,
  lastname VARCHAR(30) NOT NULL,
  email VARCHAR(50) NOT NULL,
  gender VARCHAR(10) NOT NULL,
  job VARCHAR(30) NOT NULL
);