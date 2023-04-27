const { DataTypes } = require('sequelize')
const db = require('../db/conn')


const User = db.define('User', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  tipo: {
    type: DataTypes.STRING,
    required: true
  },
  volumes: {
    type: DataTypes.INTEGER,
    required: true
  }
})

module.exports = User