alter table empresas modify cnpj VARCHAR(14);

insert into empresas
    (nome, cnpj)
values
    ('Bradesco', 312313123123),
    ('Vale', 331313131232),
    ('Cielo', 0312931239012);

-- descreve as propriedades da tabela
desc empresas;


insert into empresas_unidades
    (id_empresa, id_cidade, sede)
values
    (1,1,1),
    (1,2,0),
    (2,1,0),
    (2,2,1);

select * from empresas_unidades;
