const inscricoes = [];

exports.listarInscricoes = () => inscricoes;

exports.criarInscricao = (inscricao) => {
  inscricao.id = inscricoes.length + 1;
  inscricoes.push(inscricao);
  return inscricao;
};