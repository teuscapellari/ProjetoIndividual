var quizModel = require("../models/quizModel");

var sessoes = [];

function testar(req, res) {
    console.log("ENTRAMOS NA quizController");
    res.json("ESTAMOS FUNCIONANDO!");
}

function selectRespQuiz(req, res) {
    var fkUser = req.params.fkUser;
    quizModel.selectRespQuiz(fkUser)
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}


function registrarRespostas(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var acertos = req.body.acertosServer;
    var idUser = req.body.idUserServer;
    var dataResp = req.body.dataRespServer;
    

    // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } else {
        
        // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
        quizModel.registrarRespostas(acertos, idUser, dataResp)
            .then(
                function (resultado) {
                    res.json(resultado);
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log(
                        "\nHouve um erro ao realizar o cadastro! Erro: ",
                        erro.sqlMessage
                    );
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }
// }

module.exports = {
    registrarRespostas,
    selectRespQuiz,
    testar
}