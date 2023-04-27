const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  usuario: {
    type: DataTypes.STRING,
    required: true
  },
  senha: {
    type: DataTypes.INTEGER,
    required: true
  }

})

const Pet = db.define('Pet',{
    nome: {
        type: DataTypes.STRING,
        required: true
      },
      raça: {
        type: DataTypes.STRING,
        required: true
      },
      idade: {
        type: DataTypes.INTEGER,
        required: true
      },

})

module.exports = User
module.exports = Pet