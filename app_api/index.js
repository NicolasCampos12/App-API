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
  host: 'localhost', 
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

// criação da 1ª rota do servidor
app.get('/', (req, res) => {
    res.send('Hello World!'); // resposta da rota
})

// criação da 2ª rota do servidor
app.get('/sobre', (req, res) => {
    res.send('Rota Sobre do Projeto'); // resposta da rota
})

// 3ª rota - usando json
app.get('/dados', (req, res) => {
    res.json({ message: "Porta executada: " + porta, dados: "Teste da rota: 12345678987654321" }); // resposta da rota
})

// 4º rota - usando json
app.get('/lista', (req, res) => {
    const lista = [
        { id: 1, nome: 'Item 1' },
        { id: 2, nome: 'Item 2' },
        { id: 3, nome: 'Item 3' }
    ];
    console.log("Alguém acessou a lista!"); // exibe a lista no console do servidor
    res.json(lista); // resposta da rota
})

// Rota Nova: Listar os Usuários Reais do Banco de Dados do XAMPP
app.get('/usuarios', async (req, res) => {
  try {
    const usuariosDoBanco = await User.findAll();
    res.json(usuariosDoBanco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados: ' + error.message });
  }
});

// 3. Autenticar conexão e Iniciar o Servidor na porta 4000
sequelize.authenticate()
  .then(() => {
    console.log('Conexão com o banco bem sucedida.');
    
    app.listen(4000, () => {
      console.log('Servidor rodando na porta ' + porta);
    });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });

