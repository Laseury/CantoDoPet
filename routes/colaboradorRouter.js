const express = require('express');

// Importa as funções `newColaboradorSave` e `allColaborador` do controlador `colaboradorController`
const {
  newColaboradorSave,
  allColaborador
} = require('../controllers/colaboradorController');
const router = express.Router();

// Importa o controlador `colaboradorController`
const ColaboradorController = require('../controllers/colaboradorController');

// Rotas dos Colaboradores

// Rota para exibir o formulário de adição de um novo colaborador (GET)
router.get('/add', ColaboradorController.newColaborador);

// Rota para salvar os dados de um novo colaborador (POST)
router.post('/add', ColaboradorController.newColaboradorSave);

// Rota para remover um colaborador (POST)
router.post('/remove', ColaboradorController.removeColaborador);

// Rota para listar todos os colaboradores (GET)
router.get('/allColaborador', ColaboradorController.allColaborador);

// Rota para exibir o formulário de edição de um colaborador existente (GET)
router.get('/edit/:id', ColaboradorController.updateViewColaborador);

// Rota para atualizar os dados de um colaborador existente (POST)
router.post('/edit', ColaboradorController.updateColaborador);

module.exports = router;
