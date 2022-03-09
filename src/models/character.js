const { DataTypes, Sequelize} = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo ***********************************
  sequelize.define('character', {
    id:{
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4  //Generacion aut de id
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique:true
      },
      species:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      gender:{
        type: DataTypes.STRING,
        allowNull: false,
      }, 
      house:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      dateOfBirth:{
        type: DataTypes.DATEONLY,
        allowNull: false,
      },
      wizard:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      ancestry:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      patronus:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      hogwartsStudents:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      hogwartsStaff:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      actors:{
        type: DataTypes.STRING,
        allowNull: false,
      },
      alive:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      image:{
        type: DataTypes.STRING,
      }
  });
}