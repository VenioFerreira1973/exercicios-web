select e.nome as Empresa, c.nome as Cidade,  p.nome as NomePrefeito 
from empresas e, empresas_unidades eu, cidades c, prefeitos p
where e.id = eu.id_empresa 
and c.id = eu.id_cidade
and c.id = p.cidade_id
and sede = 1; 


select * from prefeitos;
select * from cidades;

-- equivalente ao de cima
select e.nome as Empresa, c.nome as Cidade, p.nome as NomePrefeito 
from empresas_unidades eu 
inner join empresas e on e.id = eu.id_empresa
inner join cidades c inner join prefeitos p on c.id = p.cidade_id on c.id = eu.id_cidade
where sede = 1; 