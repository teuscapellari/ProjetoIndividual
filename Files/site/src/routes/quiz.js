var express = require("express");
var router = express.Router();

var quizController = require("../controllers/quizController");

router.get("/", function (req, res) {
    usuarioController.testar(req, res);
});

router.get("/selectRespQuiz/:fkUser", function (req, res){
    quizController.selectRespQuiz(req, res);
});

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/registrarRespostas", function (req, res) {
    quizController.registrarRespostas(req, res);
})


module.exports = router;