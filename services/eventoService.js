const eventos = [];

exports.listarEventos = () => eventos;

exports.buscarEventoPorId = (id) => eventos.find(e => e.id === parseInt(id));

exports.criarEvento = (evento) => {
  evento.id = eventos.length + 1;
  eventos.push(evento);
  return evento;
};

exports.atualizarEvento = (id, novosDados) => {
  const index = eventos.findIndex(e => e.id === parseInt(id));
  if (index !== -1) {
    eventos[index] = { ...eventos[index], ...novosDados };
    return eventos[index];
  }
  return null;
};

exports.deletarEvento = (id) => {
  const index = eventos.findIndex(e => e.id === parseInt(id));
  if (index !== -1) {
    return eventos.splice(index, 1);
  }
  return null;
};
