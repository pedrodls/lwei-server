require('dotenv').config();

const express = require('express'); //framework nodejs para facilitar nos métodos de roteamento
const cors = require('cors');

require('./models/models'); //importando os modelos

const routes = require('./routes/routes'); //importando rotas

const {
    corsOption
} = require('./app/cors/cors.application');

//--------------------------------------------------------------------

let app = express();

let server = require('http').createServer(app); //criação do servidor

//--------------------------------------------------------------------

//-----------------------configuração da aplicação--------------------

app.set('engine view', 'ejs');
app.set('port', process.env.PORT);
app.set('address', process.env.ADDRESS);

app.use(cors(corsOption));

//------------------------------------------------------------------
//-----------------------aplicações---------------------------------

app.use(express.urlencoded({
    extended: true
}));

app.use(express.json());
app.use(express.static('public')); //especificando o local onde ficarão os elementos estáticos
//-----------------------------------------------------------------
//-----------------------rotas padrão-------------------------------

app.use('/api/v1', routes);

app.get('/', (req, res) => {
    return res.send('Lwei-Brokers - versão: 0.1.1');
})
//------------------------------------------------------------------
//-----------------------abertura do servidor------------------------
server = server.listen(app.get('port'), () => {
    console.log(`Servidor Aberto - ${app.get('address')} na porta ${app.get('port')}`);
})