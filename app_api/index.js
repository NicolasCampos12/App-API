const express = require('express');/*import express */
const cors = require('cors');/*import cors */
//Instale o cors usando: npm install cors
const app = express();/* Criação de uma instancia do express */ //app é a variavel que vai receber a instancia do express


app.use(cors({
    origin: '*',//Permitir acesso de qualquer origem
    methods: ['GET', 'POST'],
    allowedHeaders: ['Content-Type'],
}));
app.use(express.json());

//Rota Inicial
app.get('/', (req, res) =>{
    res.send('Rota Iniciada do Projeto');
})







//Criação da 1º Rota
app.get('/', (req, res) =>{
    res.send('Rota Iniciada do Projeto');
})

//Criação da 2º Rota
app.get('/sobre', (req, res) =>{
    res.send('Rota Sobre do Projeto');
})

//Criação da 3º Rota - json
app.get('/dados', (req, res)=>{
    res.json({message: "Dados da Rota"})
})

//Criação da 4º Rota - json
app.get('/lista', (req, res) =>{
    const lista = [
        {id: 1, nome: 'Item 1'},
        {id: 2, nome: 'Item 2'},
        {id: 3, nome: 'Item 3'},
    ];
    console.log("Alguem acessou a rota /lista");//isso deve aparecer no terminal toda vez que alguém acessar a rota /lista
    res.json(lista);
})





app.listen(4000,(error) =>{
    if(error){
        console.log('Server is not running: ', error);
    } else {
        console.log('Server is running, port: 4000');
    }
});/* Ouvindo a porta 4000, e caso haja um erro, ele vai mostrar a mensagem de erro, caso contrário, ele vai mostrar a mensagem de que o servidor está rodando */ 