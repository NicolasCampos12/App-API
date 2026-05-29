const express = require('express'); /* Import express */
const cors = require('cors');       /* Import cors */
const { Sequelize, DataTypes } = require('sequelize');

const app = express(); /* Criação de uma instância do express */

//const port = 4000;//Definição da porta do servidor

// Configuração do CORS e JSON Middleware
app.use(cors({
    origin: '*', // p/ acesso de qualquer origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type']
}));
app.use(express.json());





// 1. Conexão com o Banco do XAMPP
const sequelize = new Sequelize('app-blog', 'root', '', {
  host: 'localhost', 
  dialect: 'mysql',
  port: 3306, 
  define: {
    timestamps: false // Remove a exigência dos campos createdAt e updatedAt
  }
});

// 2. Mapeamento Exato da sua tabela 'users'
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
  slug: DataTypes.STRING,
  image: DataTypes.STRING,
  status: DataTypes.INTEGER,
  id_level_users: DataTypes.INTEGER
}, {
  tableName: 'users' // Garante que o Sequelize use o nome exato da sua tabela
});

// --- Suas Rotas do Projeto ---

// Rota Inicial
app.get('/', (req, res) => {
    res.send('Hello World!'); // resposta da rota
})

// criação da 2ª rota do servidor
app.get('/sobre', (req, res) => {
    res.send('Rota Sobre do Projeto'); // resposta da rota
})

// 3ª rota - usando json
app.get('/dados', (req, res) => {
    res.json({ message: "Porta executada: " + port, dados: "12345678987654321" }); // resposta da rota
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

// ROTA PARA TESTAR O SERVIDOR -- PASSADO PELO NELCI

// app.listen(port, (error) => { // definição da porta de escuta do servidor
//     if (error) {
//         console.log('Server is not working/responding: \n', error);
//     } else {
//         console.log('Running server at port ' + port + '...');
//     }
// })
// // para executar o servidor, usar o comando: node index.js




////////////////////// ENTRADA BANCO DE DADOS /////////////////////////////////////

// Rota Nova: Listar os Usuários Reais do Banco de Dados do XAMPP
app.get('/usuarios', async (req, res) => {
  try {
    const usuariosDoBanco = await User.findAll();
    res.json(usuariosDoBanco);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Erro ao buscar dados do MySQL do XAMPP' });
  }
});

// 3. Autenticar conexão e Iniciar o Servidor na porta 4000
sequelize.authenticate()
  .then(() => {
    console.log('Conectado ao MySQL do XAMPP com sucesso!');
    
    app.listen(4000, () => {
      console.log('Server is running, port: 4000');
    });
  })
  .catch((error) => {
    console.error('Não foi possível conectar ao banco de dados:', error);
  });


  ////////////////////// FINAL - ENTRADA BANCO DE DADOS /////////////////////////////////////

