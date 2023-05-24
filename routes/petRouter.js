// Importando o módulo 'express' para utilizar o framework Express.js
const express = require('express')
// Criando um objeto de roteador utilizando o Express.js
const router = express.Router()
// Importando o controlador de Pet (PetController) para lidar com as rotas
const PetController = require('../controllers/PetController')

// Definindo as rotas e associando-as às funções do controlador

// Rota para exibir o formulário de adição de um novo pet
router.get('/add', PetController.newPet)
router.post('/add', PetController.newPetSave)
router.get('/edit/:id', PetController.updatePet)
router.post('/edit', PetController.updatePetSave)
router.post('/remove', PetController.removePet)
router.get('/allPets', PetController.allPets)

// Exportando o objeto de roteador para uso em outros módulos
module.exports = router