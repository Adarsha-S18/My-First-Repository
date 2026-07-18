create table students (
    id int primary key,
    name varchar(255) not null,
    age int not null
);
insert into students (id, name, age) values (1, 'Alice', 20);
insert into students (id, name, age) values (2, 'Bob', 22);-