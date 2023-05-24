const { DataTypes } = require('sequelize');
const db = require('../db/conn');
const Pet = require('../model/Pets');
const Cliente = require('../model/Cliente');
const Colaborador = require('../model/Colaborador');

//trab. com o Sequelize, modelos Pet, Cliente e Colaborador, estabelece as associações entre as tabelas do bd.
//  DataTypes importada, para definir os tipos de dados dos campos do modelo.
// ('../db/conn');` importa o objeto `db` que representa a conexão com o banco de dados.
/*const Pet, Cliente e colaborador importam os modelos `Pet`, `Cliente` e `Colaborador`, 
usados para estabelecer as associações entre as tabelas do banco de dados*/

// Definição do modelo Servicos
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
// Estabelecendo as associações entre os modelos
// Um Pet pode ter vários Servicos
Pet.hasMany(Servicos); 
// Um usuário pode ter vários posts


// Um Servico pertence a um Cliente
Servicos.belongsTo(Cliente);
 // Um post pertence a um usuário

 // Exportação do modelo Servicos
module.exports = Servicos;
