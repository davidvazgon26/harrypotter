const server = require('./src/app');
const { conexionDB } = require('./src/db.js');

// Syncing all the models at once.
conexionDB.sync({ force: false }).then(() => {
  server.listen(process.env.PORT || 3001, () => {
    console.log('Escuchando en el puerto: 3001'); // eslint-disable-line no-console
  });
});