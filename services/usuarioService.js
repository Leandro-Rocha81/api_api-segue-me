const usuarios = [];

exports.listarUsuarios = () => usuarios;

exports.buscarUsuarioPorId = (id) => usuarios.find(u => u.id === parseInt(id));

exports.criarUsuario = (usuario) => {
  usuario.id = usuarios.length + 1;
  usuarios.push(usuario);
  return usuario;
};

exports.atualizarUsuario = (id, novosDados) => {
  const index = usuarios.findIndex(u => u.id === parseInt(id));
  if (index !== -1) {
    usuarios[index] = { ...usuarios[index], ...novosDados };
    return usuarios[index];
  }
  return null;
};

exports.deletarUsuario = (id) => {
  const index = usuarios.findIndex(u => u.id === parseInt(id));
  if (index !== -1) {
    return usuarios.splice(index, 1);
  }
  return null;
};
