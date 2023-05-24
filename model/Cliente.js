const { DataTypes } = require('sequelize')
const db = require('../db/conn')
//  sequelize usada para interagir com bancos de dados relacionais.
// DataTypes propriedade é usada para definir os tipos de dados dos campos do modelo.
//const db contém as informações de conexão, como nome do banco de dados, usuário, senha...
//  seja possível criar o modelo `Cliente` e definir seus campos e propriedades utilizando o Sequelize.


// Definição do modelo Cliente
const Cliente = db.define('Cliente', {
 // Campo 'nome' do tipo STRING, obrigatório
  nome: {
    type: DataTypes.STRING,
    required: true
  },
   // Campo 'sobrenome' do tipo STRING, obrigatório
  sobrenome: {
    type: DataTypes.STRING,
    required: true
  },
   // Campo 'data_nascimento' do tipo STRING, obrigatóri
  data_nascimento: {
    type: DataTypes.STRING,
    required: true
  },
  // Campo 'cpf' do tipo STRING, obrigatório
  cpf: {
    type: DataTypes.STRING,
    required: true
  }
})
// Exportação do modelo Cliente
module.exports = Cliente