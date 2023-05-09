const express = require('express')
const { newColaboradorSave, allColaborador } = require('../controllers/colaboradorController')
const router = express.Router()
const ColaboradorController = require('../controllers/colaboradorController')

//Rotas dos Colaboradores
router.get('/add', ColaboradorController.newColaborador)
router.post('/addFunc', ColaboradorController.newColaboradorSave)
router.get('/allFunc', ColaboradorController.allColaborador)

module.exports = router