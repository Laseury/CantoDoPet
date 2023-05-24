// Importando o módulo 'express' para utilizar o framework Express.js
const express = require('express');

// Importando o módulo 'express' para utilizar o framework Express.js
const router = express.Router();

// Importando o controlador 'servicosController' para lidar com as rotas relacionadas a serviços
const servicosController = require('../controllers/servicosController');

// Rota para exibir o formulário de adição de um novo serviço
router.get('/add', servicosController.newServico);

// Rota para salvar as informações do novo serviço no banco de dados
router.post('/add', servicosController.newServicoSave);

// Rota para exibir todos os serviços cadastrados
router.get('/all', servicosController.allServicos);

// Exportando o objeto de roteador para uso em outros módulos
module.exports = router;
