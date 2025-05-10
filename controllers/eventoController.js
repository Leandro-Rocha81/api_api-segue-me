const service = require('../services/eventoService');

exports.listarEventos = (req, res) => {
  res.json(service.listarEventos());
};

exports.detalharEvento = (req, res) => {
  const evento = service.buscarEventoPorId(req.params.id);
  if (evento) res.json(evento);
  else res.status(404).json({ error: 'Evento não encontrado' });
};

exports.criarEvento = (req, res) => {
  const novo = service.criarEvento(req.body);
  res.status(201).json(novo);
};

exports.atualizarEvento = (req, res) => {
  const atualizado = service.atualizarEvento(req.params.id, req.body);
  if (atualizado) res.json(atualizado);
  else res.status(404).json({ error: 'Evento não encontrado' });
};

exports.deletarEvento = (req, res) => {
  const deletado = service.deletarEvento(req.params.id);
  if (deletado) res.json({ message: 'Evento removido com sucesso' });
  else res.status(404).json({ error: 'Evento não encontrado' });
};