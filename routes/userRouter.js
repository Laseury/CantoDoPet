const express = require('express')
const router = express.Router()

const FuncionarioController = require('../controllers/FuncionarioController')

router.get('/edit/:id', UserController.updateUser)
router.post('/edit', UserController.updateUserSave)