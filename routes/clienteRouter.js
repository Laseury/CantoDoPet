const express = require('express')
const router = express.Router()

const ClienteController = require('../controllers/ClienteController')

// Rotas dos clientes

// Rota para exibir o formulário de adição de um novo cliente (GET)
router.get('/add', ClienteController.newCliente)
// Rota para salvar os dados de um novo cliente (POST)
router.post('/add', ClienteController.newClienteSave)

// Rota para exibir o formulário de edição de um cliente existente (GET)
router.get('/edit/:id', ClienteController.updateViewCliente)
// Rota para atualizar os dados de um cliente existente (POST)
router.post('/edit', ClienteController.updateCliente)

// Rota para remover um cliente (POST)
router.post('/remove', ClienteController.removeCliente)

router.get('/allCliente', ClienteController.allCliente)
router.get('/', ClienteController.home)

module.exports = router