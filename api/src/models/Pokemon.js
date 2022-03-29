const { DataTypes, UUID } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('pokemon', {
    id:{
      type: UUID,
      primaryKey:true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    health: {
      //stats -> stat -> name -> hp
      type: DataTypes.INTEGER
    },
    strength: {
      //stats -> stat -> name -> attack
      type: DataTypes.INTEGER
    },
    defense: {
      //stats -> stat -> name -> defense
      type: DataTypes.INTEGER
    },
    velocity: {
      //stats -> stat -> name ->speed
      type: DataTypes.INTEGER
    },
    height: {
      type: DataTypes.INTEGER
    },
    weight: {
      type: DataTypes.INTEGER
    },
    img:{
      type:DataTypes.STRING
    },
    public_id: {
      type: DataTypes.STRING
    }
  });
};
