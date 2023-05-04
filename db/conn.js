//DB é a pasta do banco de dados
//tem que instalar o sequelize -> npm install sequelize
//Sequelize será o intermediador do banco de dados.
//Instalar -> npm install tedius
//Instalar -> npm install mysql2 ou mysql

//Importar o Sequelize
const {Sequelize} = require('sequelize')


//Passar o nome do banco, usuario e senha.
const sequelize = new Sequelize('petshop', 'root', '12345678',{
    host: 'localhost',

    //No dialect iremos dizer qual será o banco de dados que será utilizado
    //Instalar o banco de dados -> npm install mysql
    dialect: 'mysql',
})

try {
    sequelize.authenticate()
    console.log("Banco de dados inicializado")
} catch (error) {
    console.log('Banco de dados não conseguiu conectar', error)
}

//Exportar o sequelize para que outras classes possam usar.
module.exports = sequelize