const service = require('../services/usuarioService');

exports.listarUsuarios = (req, res) => {
  res.json(service.listarUsuarios());
};

exports.detalharUsuario = (req, res) => {
  const usuario = service.buscarUsuarioPorId(req.params.id);
  if (usuario) res.json(usuario);
  else res.status(404).json({ error: 'Usuário não encontrado' });
};

exports.criarUsuario = (req, res) => {
  const novo = service.criarUsuario(req.body);
  res.status(201).json(novo);
};

exports.atualizarUsuario = (req, res) => {
  const atualizado = service.atualizarUsuario(req.params.id, req.body);
  if (atualizado) res.json(atualizado);
  else res.status(404).json({ error: 'Usuário não encontrado' });
};

exports.deletarUsuario = (req, res) => {
  const deletado = service.deletarUsuario(req.params.id);
  if (deletado) res.json({ message: 'Usuário removido com sucesso' });
  else res.status(404).json({ error: 'Usuário não encontrado' });
};
