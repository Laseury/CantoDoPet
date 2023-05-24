const express = require('express');
const router = express.Router();

const servicosController = require('../controllers/servicosController');
router.get('/add', servicosController.newServico);
router.post('/add', servicosController.newServicoSave);

router.get('/all', servicosController.allServicos);

module.exports = router;
