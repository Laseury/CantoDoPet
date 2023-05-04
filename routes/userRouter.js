const express = require('express')
const router = express.Router()

const ClienteController = require('../controllers/ClienteController')
const FuncionarioController = require('../controllers/FuncionarioController')
const PetController = require('../controllers/PetController')

//Rotas dos clientes
router.get('/add', ClienteController.newCliente)
router.post('/add', ClienteController.newClienteSave)

router.get('edit', ClienteController.updateViewCliente)
router.post('edit', ClienteController.updateCliente)

router.post('/remove', ClienteController.removeCliente)

router.get('/allCli', ClienteController.allCliente)
router.get('/', ClienteController.home)

//Rotas dos Funcionarios
router.post('/addFunc', FuncionarioController. newFuncionarioSave)
router.get('/allFunc', FuncionarioController.allFuncionario)

//Rotas dos pets
router.get ('/addPet', PetController.newPet)
router.post ('/add', PetController.newPetSave)

router.get('edit', PetController.updatePet)
router.post('edit', PetController.updatePetSave)

router.post('/remove', PetController.removePet)

router.get ('/allPet', PetController.allPets)
router.get ('/', PetController.home)

module.exports = router

/*router.get('/edit/:id', UserController.updateUser)
router.post('/edit', UserController.updateUserSave)*/