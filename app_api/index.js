const express = require('express'); // requisição do express
const cors = require('cors');
const { Sequelize, DataTypes } = require('sequelize'); // requisição do sequelize

const app = express(); // criação da instância do express
const porta = 4000; // definição da porta do servidor

// 2. ativação do cors p/ permitir acesso as rotas
app.use(cors({
    origin: '*', // p/ acesso de qualquer origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json()); // p/ permitir o uso de json nas requisições

const sequelize = new Sequelize('app-api', 'root', '', {
  host: '127.0.0.1', // Dica: usar 127.0.0.1 evita lentidão no Sequelize com MySQL
  dialect: 'mysql',
  port: 3306, 
  define: {
    timestamps: false // Remove a exigência dos campos createdAt e updatedAt
  }
});

const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  name: DataTypes.STRING,
  email: DataTypes.STRING,
  telefone: DataTypes.STRING,
  pass: DataTypes.STRING,
}, {
  tableName: 'users' // Garante que o Sequelize use o nome exato da sua tabela
});

// rotas GET...
app.get('/', (req, res) => res.send('Hello World!'));
app.get('/sobre', (req, res) => res.send('Rota Sobre do Projeto'));
app.get('/dados', (req, res) => res.json({ message: "Porta executada: " + porta, dados: "Teste da rota: 12345678987654321" }));
app.get('/lista', (req, res) => {
    const lista = [{ id: 1, nome: 'Item 1' }, { id: 2, nome: 'Item 2' }, { id: 3, nome: 'Item 3' }];
    res.json(lista);
});

app.get('/usuarios', async (req, res) => {
  try {
    const usuariosDoBanco = await User.findAll();
    res.json(usuariosDoBanco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados: ' + error.message });
  }
});

// Rota do INSERT
app.post('/usuarios', async (req, res) => {
  try {
    const { name, email, telefone, pass } = req.body;
    const novoUsuario = await User.create({ name, email, telefone, pass });
    return res.status(201).json(novoUsuario); 
  } catch (error) {
    console.error("Erro no servidor:", error);
    res.status(500).json({ error: error.message });
  }
});

// CORREÇÃO AQUI: Autenticar conexão e Iniciar o Servidor aceitando conexões externas
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco bem sucedida.');
    
    // Adicionado o '0.0.0.0' para o Express aceitar conexões vindas da rede Wi-Fi/Emuladores
    app.listen(porta, '0.0.0.0', () => {
      console.log('Servidor rodando na porta ' + porta);
    });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });
