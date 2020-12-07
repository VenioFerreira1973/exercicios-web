insert into estados (id, nome, sigla, regiao, populacao)
values (1000, 'Novo', 'NV', 'Sul', 2.54);

-- Fazendo o insert abaixo o sistema irá inserir um novo estado com id a partir do último inserido, ou seja, 1001
insert into estados (nome, sigla, regiao, populacao)
values ('Mais Novo', 'MN', 'Sul', 2.54);


select * from estados;