const express = require('express');
const cors = require('cors');
require('dotenv').config();

const eventoRoutes = require('./routes/eventoRoutes');
const usuarioRoutes = require('./routes/usuarioRoutes');
const inscricaoRoutes = require('./routes/inscricaoRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
  res.send('API do Segue-me está rodando!');
});

app.use('/eventos', eventoRoutes);
app.use('/usuarios', usuarioRoutes);
app.use('/inscricoes', inscricaoRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});