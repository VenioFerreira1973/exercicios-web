create table if not exists prefeitos (
    id INT UNSIGNED NOT NULL AUTO_INCREMENT,
    nome VARCHAR(255) NOT NULL,
    cidade_id int UNSIGNED,
    PRIMARY KEY (id),
    UNIQUE KEY (cidade_id),
    FOREIGN KEY (cidade_id) REFERENCES cidades (id)
);

select * from prefeitos;