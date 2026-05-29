
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

const express = require('express'); /* Import express */
const cors = require('cors');       /* Import cors */
const { Sequelize, DataTypes } = require('sequelize');

const app = express(); /* Criação de uma instância do express */
