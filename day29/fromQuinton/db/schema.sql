DROP DATABASE IF EXISTS todo_db;

CREATE DATABASE todo_db;

USE todo_db;

CREATE TABLE list (
  id INT PRIMARY KEY AUTO_INCREMENT NOT NULL,
  item VARCHAR(50) NOT NULL,
  isDone BOOL NOT NULL
);
