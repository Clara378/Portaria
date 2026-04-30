--- criar banco 
nome do banco dbportaria

--- criar table 
use dbportaria
CREATE TABLE lista_pessoas 
id BIGINT AUTO_INCREMENT PRIMARY KEY,
    datains TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data DATE,
    hora TIME,
    descricao VARCHAR(255)
);
--- componentes da table
id,data,hora,descricao,datains 

--- testar o banco 
INSERT INTO lista_pessoa ( data, hora, descricao) 
VALUES ('2026-04-30', '09:45:00', 'Entrega de encomenda');
