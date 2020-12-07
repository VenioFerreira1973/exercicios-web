select * from estados;


select nome as 'Nome do estado', sigla as 'Sigla do esdado' from estados
where regiao = 'Sul';

select nome, regiao, populacao from estados where populacao >= 10 order by populacao;

select regiao, populacao from estados where populacao between 5 and 10 group by regiao order by populacao desc;

select nome, regiao, sum(populacao) as  'Total' from estados group by regiao order by sum(populacao) desc;