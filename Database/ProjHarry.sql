CREATE DATABASE ProjHarry;
USE ProjHarry;

CREATE TABLE Usuario(
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
    nome VARCHAR(45),
    email VARCHAR(60),
    senha VARCHAR(12),
    dataNasc DATE,
    casa VARCHAR(20) CHECK (casa IN('Grifinória', 'Sonserina', 'Corvinal', 'Lufa-Lufa')),
    filmeFav VARCHAR(60)
);

CREATE TABLE RespostaQuiz(
	idRespostaQuiz INT PRIMARY KEY AUTO_INCREMENT,
    qtdAcertos VARCHAR(45),
    fkUsuario INT,
    FOREIGN KEY(fkUsuario) REFERENCES Usuario(idUsuario),
    dataResp DATETIME
);