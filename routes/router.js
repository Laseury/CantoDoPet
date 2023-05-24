// Importando o módulo 'express' para utilizar o framework Express.js
const express = require('express')

// Criando um objeto de roteador utilizando o Express.js
const router = express.Router()

// Importando o controlador (controller) para lidar com as rotas
const controller = require('../controllers/controller')

// Definindo a rota principal e associando-a à função 'home' do controlador
router.get('/', controller.home)

// Exportando o objeto de roteador para uso em outros módulos
module.exports = router