// É ncessário usar o comando abaixo para conseguir utilizar o express nos projetos
const express = require('express');
// É necessário importar o route para usá-lo (por ser um arquivo criado pelo usuário, deve ser usada a ./)
const route = require('./route');
// Módulo necessário para dizer ao express o local que se encontra a pasta views (já que nesse caso, ela não está no root, mas sim, dentro da pasta src)
const path = require('path')

const server = express();

// Especifica pro express que a view engine será o módulo ejs
server.set('view engine', 'ejs')

// basicamente, lê-se: nome da pasta, comando para incluir o caminho da pasta, __dirname para declarar o nome da pasta, e o nome da pasta
server.set('views', path.join(__dirname, 'views'));

server.use(route);

// listen é uma funcionalidade existente no express, e como parâmetro declaramos a porta que será utilizada e uma "função" a ser executada
server.listen(3000, () => console.log('Rodando'));
// Para rodar o script com o node, usamos no terminal o seguinte: node "caminho do arquivo js/nome do arquivo". Também podemos atribuir os comandos a "palavras" no campo script do package.json
