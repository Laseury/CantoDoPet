const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Pet = require('../model/Pets');
const Cliente = require('../model/Cliente');
const Colaborador = require('../model/Colaborador');

const Servicos = db.define('Servicos', {
  nome: {
    type: DataTypes.STRING,
    required: true
  },
  valor: {
    type: DataTypes.STRING,
    required: true
  },
  dono: {
    type: DataTypes.STRING,
    required: true
  },
  pet: {
    type: DataTypes.STRING,
    required: true
  },
  colaborador: {
    type: DataTypes.STRING,
    required: true
  }
});

Pet.hasMany(Servicos); // Um usuário pode ter vários posts
Servicos.belongsTo(Cliente); // Um post pertence a um usuário

module.exports = Servicos;
