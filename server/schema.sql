create table products(
    id serial primary key not null,
    name varchar(70),
    description varchar(180),
    price money,
    type varchar(20)
);

create table cart(
    id serial primary key not null,
    products_id int references products
);


insert into products
    (name, description, price, type)
values
    ('shirt1', 'cool shirt1', 15.00, 'shirt'),
    ('shirt2', 'cool shirt2', 15.00, 'shirt'),
    ('shirt3', 'cool shirt3', 15.00, 'shirt'),
    ('shirt4', 'cool shirt4', 15.00, 'shirt');
