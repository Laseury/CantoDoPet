const express = require('express')
const app = express()
const port = 3000

const exphbs = require('express-handlebars')
const cliente = require('./routes/clienteRouter')

const conn = require('./db/conn')
const userModel = require('./model/Cliente')

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

//adicionando rota users
app.use('/clientes', cliente)

conn.sync().then(() => {
  app.listen(port)
  console.log('Servidor Inicializado')
})
.catch((err) => {
  console.log(err)
})

//webserver
// app.listen(port, () => {
//   console.log('Server Started')
// })