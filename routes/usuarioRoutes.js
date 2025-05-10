const express = require('express');
const router = express.Router();
const controller = require('../controllers/usuarioController');

router.get('/', controller.listarUsuarios);
router.get('/:id', controller.detalharUsuario);
router.post('/', controller.criarUsuario);
router.put('/:id', controller.atualizarUsuario);
router.delete('/:id', controller.deletarUsuario);

module.exports = router;
