const express = require('express');
const router = express.Router();
const controller = require('../controllers/eventoController');

router.get('/', controller.listarEventos);
router.get('/:id', controller.detalharEvento);
router.post('/', controller.criarEvento);
router.put('/:id', controller.atualizarEvento);
router.delete('/:id', controller.deletarEvento);

module.exports = router;