// importação das biblioetas
const express = require('express');

// função para manipulação de rotas
const rotas = express.Router();

// rota raiz para veiculos
rotas.get("/", (req, res) => {
  res.status(200).send({
    mensagem: 'Você acessou a raiz da rota veiculos.'
  })
});

// rota raiz para veiculos
rotas.get("/:idveiculos", (req, res) => {

  // obter o id enviado pela url
  const idveiculos = req.params.idveiculos;

  res.status(200).send({
    mensagem: `O id recebido foi: ${idveiculos}.`
  })
});

// rota para o médoto post
rotas.post('/', (req, res) => {

  // implementação do recebimento dos dados para salvar no BD
  let novoveiculo = {
    nome: req.body.nome,
    fabricante: req.body.fabricante,
    ano: req.body.ano,
    modelo: req.body.modelo,
    combustivel: req.body.combustivel,
    cor: req.body.cor,
    preco: req.body.preco
  };

  // implementação do código para enviar para BD

  res.status(201).send({
    mensagem: 'veiculos cadastrado com sucesso.',
    dadosNovoveiculo: novoveiculo
  });
});


// rota put para veiculos
rotas.put('/:id', (req, res) => {

  const id = req.params.id;

  let Atualizacao = {
    preco: req.body.preco,
    id
  };

  // implementação do código para enviar para BD

  res.status(201).send({
    mensagem: 'O veículo com ID ' + id + ' teve o preço atualizado para ' + req.body.preco + " R$",
    PrecoAtualizado: Atualizacao,
  });
});

// rota para raiz do médoto delete
rotas.delete('/', (req, res) => {

  res.status(200).send({
    mensagem: `Você está na raiz da rota DELETE`
  });
  
});

// rota para o médoto delete
rotas.delete('/:idveiculos', (req, res) => {

  // obtém o id enviado pelo corpo da requisição
  const idveiculos = req.params.idveiculos;

  res.status(202).send({
    mensagem: `O veículo de ID ${idveiculos} foi excluído com sucesso.`
  });
  
});

// exportar o código que manipula a rota para veiculos
module.exports = rotas