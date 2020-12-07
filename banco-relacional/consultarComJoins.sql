-- somente a intersecção ou seja, retorna todas as cidades que possuem prefeitos associados
select * from cidades c inner join prefeitos p on c.id = p.cidade_id;

-- as duas abaixo retornam o mesmo resultado - todos os registros da tabela cidades independentemente se há prefeitos associados
select * from cidades c left join prefeitos p on c.id = p.cidade_id;
select * from prefeitos p right join cidades c on c.id = p.cidade_id;-- equivalente a de cima só muda a ordem de exibição das colunas

select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- retorna todos os registros da tabela prefeitos independentemente se há cidades associadas - a ordem de exibição das colunas começa pela tabela de cidades
select * from cidades c right join prefeitos p on c.id = p.cidade_id;

-- retorna todos os registros da tabela prefeitos independentemente se há cidades associadas - a ordem de exibição das colunas começa pela tabela de prefeitos
select * from prefeitos p left join cidades c on c.id = p.cidade_id;

-- retorna todas as cidades independentemente de haver prefeitos associados as duas consultas se equivalem o que muda é somente a ordem de exibição das colunas
select * from prefeitos p right join cidades c on c.id = p.cidade_id;
select * from cidades c left join prefeitos p on c.id = p.cidade_id;

-- simulação do full join que seria o inner join da primeira ou seja, retorna as intececções entre as duas 
-- mais as cidades com prefeitos associados e os prefeitos que não tem cidades associadas
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;

-- além do resultado identico da query acima o all inclui as duplicidades no caso retorna duas vezes o inner ou seja, retorna duas vezes as cidades com prefeitos associados
select * from cidades c left outer join prefeitos p on c.id = p.cidade_id
union all
select * from cidades c right outer join prefeitos p on c.id = p.cidade_id;