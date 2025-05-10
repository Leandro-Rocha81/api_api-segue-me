const express = require('express');
const router = express.Router();
const controller = require('../controllers/inscricaoController');

router.get('/', controller.listarInscricoes);
router.post('/', controller.criarInscricao);

module.exports = router;
