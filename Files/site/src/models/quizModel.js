var database = require("../database/config")

function selectRespQuiz(fkUser) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function selectRespQuiz()", fkUser);
    var instrucao = `
    SELECT qtdAcertos,
    dataResp, 
    fkUsuario,
    nome
    FROM RespostaQuiz
    JOIN usuario
     ON fkUsuario = idUsuario
     WHERE fkUsuario = '${fkUser}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}


// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function registrarRespostas(acertos, idUser, dataResp) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function registrarRespostas():", acertos, idUser, dataResp);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO RespostaQuiz (qtdAcertos, fkUsuario, dataResp) VALUES ('${acertos}', '${idUser}', '${dataResp}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

module.exports = {
    registrarRespostas,
    selectRespQuiz,
};