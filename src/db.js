require('dotenv').config();  //sirve para configurar las variables de entorno
const { Sequelize } = require('sequelize'); 
const fs = require('fs'); // para lectura de archivos
const path = require('path'); // para las rutas
const { DB_USER, DB_PASSWORD, DB_HOST, } = process.env; // para traer las variables de entorno ya destructuradas

//Creamos nuestra conexion a la BD con sequelize y 2 argumentos mas para mejorar visibilidad y rendimiento
const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/harrypotter`,{
    logging:false, // loggin en falso nos quita el exceso de informacion que arroja 
    native:false, //  Mejora el rendimiento de sequelize en 30% al saber que podemos usar pg nativo
});

// Testeo que se realice la conexion a la BD
sequelize.authenticate().then(() =>{console.log('Conexion correcta')}).catch(err => console.log(err));

const basename = path.basename(__filename);  //No se que hace
const modelosDefinidos = []; //Es un arreglo para usar despues

// Leemos todos los archivos de la carpeta 'models', los requerimos y agregamos al arreglo modelDefiners
fs.readdirSync(path.join(__dirname, '/models'))
  .filter((file) => (file.indexOf('.') !== 0) && (file !== basename) && (file.slice(-3) === '.js'))
  .forEach((file) => {
    modelosDefinidos.push(require(path.join(__dirname, '/models', file)));
  });

// Injectamos la conexion (sequelize) a todos los modelos
modelosDefinidos.forEach(model => model(sequelize));
// Capitalizamos los nombres de los modelos ie: product => Product
let entries = Object.entries(sequelize.models);
let capsEntries = entries.map((entry) => [entry[0][0].toUpperCase() + entry[0].slice(1), entry[1]]);
sequelize.models = Object.fromEntries(capsEntries);

// En sequelize.models están todos los modelos importados como propiedades
// Para relacionarlos hacemos un destructuring
const { Character, Spells, Wand, Activities } = sequelize.models;   //Personaje, Hechizos, varita y actividades

Character.belongsToMany(Spells,{through:'character_spells'}) //hacemos la relacion mediante la tabla intermedia
Spells.belongsToMany(Character,{through:'character_spells'})
Character.hasOne(Wand)
Character.belongsToMany(Activities,{through:'character_activities'}) //hacemos la relacion mediante la tabla intermedia
Activities.belongsToMany(Character,{through:'character_activities'})

module.exports = {
    ...sequelize.models,
    conexionDB: sequelize,
}