insert into cidades (nome, area, estado_id)
values ('Campinas', 795, 31);

insert into cidades (nome, area, estado_id)
values ('Niterói', 133.9, 25);

insert into cidades (nome, area, estado_id)
values ('Caruaru', 133.9, (select id from estados where sigla = 'PE'));

insert into cidades (nome, area, estado_id)
values ('Juazeiro do Norte', 248.2, (select id from estados where sigla = 'CE'));

update cidades c set area = 920.6 where c.nome = 'Caruaru'; 

select * from cidades;


select * from estados e, cidades c where 