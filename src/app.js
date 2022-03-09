const express = require('express'); // para habilitar las rutas en el servidor ('https://expressjs.com/es/guide/routing.html')
const cookieParser = require('cookie-parser'); //Para configurar cookies en el servidor, es un middleware
const morgan = require('morgan'); //Middleware de registro de solicitudes HTTP para node.js

const routes = require('./routes/index'); //Se trae las rutas configuradas en la ruta routes/index

require('./db.js')

const server = express(); // Creamos la instancia de express
server.name = 'API'; // Nombra el servidor

//Middlewares
server.use(express.urlencoded({ extended: true, limit: '50mb' })); //bodyParser esta deprecado, middleware que solo analiza los cuerpos codificados en URL y UTF8
server.use(express.json({ limit: '50mb' })); // Analiza las solicitudes entrantes con cargas JSON
server.use(cookieParser()); // Arriba se describe en el require
server.use(morgan('dev')); // Arriba se describe en el require
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // Especifica que origen puede acceder al recurso. Sólo se puede especificar un origen. con * los permites todos (desde donde puedo acceder)
  res.header('Access-Control-Allow-Credentials', 'true'); //  le dice al navegador si exponer la respuesta al código JavaScript (del frontend)
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); // Para identificar antes de hacer la peticion el o los tipos de metodos que acepta (get, put, post, delete)
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // indica los metodos aceptados
  next(); // continua al siguiente middleware
});

server.use('/',routes) // middleware que le indica que use la constante routes creada arriba que lo lleva a las rutas configuradas en routes/index.js

// Error catching endware. concentrador de errores por si se nos pasa alguno de crear
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
    const status = err.status || 500;
    const message = err.message || err;
    console.error(err);
    res.status(status).send({message});
  });

  module.exports = server;