CREATE DATABASE todo_database;

--\c into todo_database

CREATE TABLE todo(
    sno SERIAL PRIMARY KEY,
    title TEXT,
    description TEXT,
    active boolean
);