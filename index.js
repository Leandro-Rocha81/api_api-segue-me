const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send('API do Segue-me está rodando!');
});

// Rotas para eventos
app.get('/eventos', (req, res) => res.json({ message: 'Listar eventos' }));
app.post('/eventos', (req, res) => res.json({ message: 'Criar evento' }));
app.get('/eventos/:id', (req, res) => res.json({ message: 'Detalhes do evento' }));
app.put('/eventos/:id', (req, res) => res.json({ message: 'Atualizar evento' }));
app.delete('/eventos/:id', (req, res) => res.json({ message: 'Deletar evento' }));

// Rotas para usuários
app.get('/usuarios', (req, res) => res.json({ message: 'Listar usuários' }));
app.post('/usuarios', (req, res) => res.json({ message: 'Criar usuário' }));
app.get('/usuarios/:id', (req, res) => res.json({ message: 'Detalhes do usuário' }));
app.put('/usuarios/:id', (req, res) => res.json({ message: 'Atualizar usuário' }));
app.delete('/usuarios/:id', (req, res) => res.json({ message: 'Deletar usuário' }));

// Outras rotas
app.get('/inscricoes', (req, res) => res.json({ message: 'Listar inscrições' }));
app.post('/inscricoes', (req, res) => res.json({ message: 'Criar inscrição' }));

// Servidor rodando
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});
