const service = require('../services/inscricaoService');

exports.listarInscricoes = (req, res) => {
  res.json(service.listarInscricoes());
};

exports.criarInscricao = (req, res) => {
  const nova = service.criarInscricao(req.body);
  res.status(201).json(nova);
};
