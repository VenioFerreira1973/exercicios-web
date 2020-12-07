update estados 
set nome ='Maranhão'
where sigla = 'MA';

select * from estados where sigla ='MA';

update estados
set nome = 'Paraná',
populacao = 11.32
where sigla = 'PR';

select nome, sigla, populacao from estados est where sigla = 'PR';