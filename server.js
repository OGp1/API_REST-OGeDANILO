/* ATIVIDADE FEITA PELA DUPLA: OG PRATES & DANILO GABRIEL ASSAD */


// importação da biblioteca Express
// para instalar rodo o comando: npm install express
const express = require('express')

// instalação: npm install body-parser
const bodyParser = require('body-parser');

const fs = require('fs');

// criação de um app Express
const app = express();

// Configuração para conseguir usar as imagens
app.use('/assets', express.static('./src/pages/assets'));

// configurar o body-parser
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// importação das rotas
const veiculosRotas = require('./src/routes/Veiculo');

// definição de parâmetros do servidor
const hostname = '127.0.0.1';
const port = 3000;

app.get('/', (req, res) => {
  const arquivoHtml = fs.readFileSync('./src/pages/index.html');

  res.status(200).end(arquivoHtml);
});

// utilizar as rotas
app.use('/veiculos', veiculosRotas);


// rodar a aplicação
app.listen(port, hostname, console.log('Servidor rodando...'));