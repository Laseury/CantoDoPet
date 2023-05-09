const PetController = require('../controllers/PetController')

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