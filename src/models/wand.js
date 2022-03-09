const { DataTypes, Sequelize } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo ***********************************
  
  sequelize.define('wand', {
    id:{
      type: DataTypes.UUID,
      allowNull: false,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4  //Generacion aut de id
    },
    wood: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
    },
    core: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    length: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
  });
  
};