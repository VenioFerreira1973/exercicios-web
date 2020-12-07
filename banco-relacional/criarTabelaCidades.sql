-- Criando a tabela cidades
create table if not exists cidades (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(45) NOT NULL,
    estado_id INT UNSIGNED NOT NULL,
    area DECIMAL(10,2),
    PRIMARY KEY (id),
    FOREIGN KEY (estado_id) REFERENCES estados (id)
);

-- DDL - Data Definition Language
/* create table if not exists teste (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
);

drop table if exists teste;
 */
select * from cidades;