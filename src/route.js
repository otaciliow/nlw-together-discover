const express = require('express');

// .Router é uma funcionalidade do express
const route = express.Router();

// "/" = especifica o domínio que será usado; req = requisition; res = response; .render = faz a renderização do arquivo especificado;
route.get('/', (req, res) => res.render("index"))

module.exports = route;