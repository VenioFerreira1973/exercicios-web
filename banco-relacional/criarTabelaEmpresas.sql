create table if not exists empresas (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cnpj int UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cnpj)
);

drop table empresas_unidades;
 
create table if not exists empresas_unidades (
    id_cidade int unsigned not null,
    id_empresa int unsigned not null,
    sede TINYINT(1) NOT NULL,
    PRIMARY KEY (id_cidade, id_empresa)
);