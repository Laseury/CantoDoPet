const express = require('express')
const app = express()
const port = 3000

//Importação do Handlebars
const exphbs = require('express-handlebars')

//Importação do Banco de Dados
const conn = require('./db/conn')

//Importação das Rotas
const cliente = require('./routes/clienteRouter')
const usershop = require('./routes/router')
const Pet = require('./routes/petRouter')
const Colaborador = require('./routes/colaboradorRouter')

//Importação dos Models

const petModel = require('./model/Pets')
const clienteModel = require('./model/Cliente')
const funcionarioRouter = require('./model/Colaborador')

const hbs = exphbs.create({
  partialsDir: ["views/partials"]
})

//configure template handlebars
app.engine('handlebars', hbs.engine)
app.set('view engine', 'handlebars')

//parser para leitura do body
app.use(
  express.urlencoded({
    extended: true
  })
)
app.use(express.json())

//adicionando css
app.use(express.static('public'))


//adicionando rota Pets
app.use('/petshop', usershop)
app.use('/pets', Pet)
//adicionando rota users
app.use('/clientes', cliente)
//adcionando a rota Funcionario
app.use('/colaborador', Colaborador)



app.get('/', (req, res) => {
  res.render('petshop/home')
})
conn.sync().then(() => {
  app.listen(port)
  console.log('Servidor Inicializado')
})
.catch((err) => {
  console.log(err)
})

//teste