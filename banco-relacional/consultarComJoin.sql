select * from estados e, cidades c
where e.id = c.estado_id;

select c.nome as Cidade, e.nome as Estado, e.sigla
from estados e, cidades c
where e.id = c.estado_id;

select 
    c.nome as Cidade,
    e.nome as Estado,
    regiao as Regiao
from estados e inner join cidades c on e.id = c.estado_id;

