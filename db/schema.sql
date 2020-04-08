DROP DATABASE IF EXISTS wouldyourather_db;

CREATE DATABASE wouldyourather_db;

DROP TABLE IF EXISTS questions

CREATE TABLE questions (
    id INT PRIMARY KEY AUTO_INCREMENT,
    question VARCHAR
(255) NOT NULL,
    answer BOOLEAN
);