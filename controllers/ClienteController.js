const Cliente= require('../model/Cliente')


module.exports = class ClienteController {

  static newCliente(req, res) {
    res.render('clientes/clienteform')
  }

  static async newClienteSave(req, res) {
    const cliente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      cpf: req.body.cpf
    }

    await Cliente.create(cliente)
      .then(() => {
        this.allCliente()//carrega todos os usuários
      }).catch((error) => {
        console.log(error)
      })
    res.redirect('/clientes/allCliente')

  }
  static async home(req, res) {
    res.render('clientes/home')
  }

  static async allCliente(req, res) {
    const clientes = await Cliente.findAll({ raw: true })
    res.render('clientes/viewcliente', { clientes })
  }

  static async updateViewCliente(req, res) {
    const id = req.params.id
    const cliente = await Cliente.findOne({ where: { id: id }, raw: true })
    res.render('clientes/edit', { cliente })
  }

  static async updateCliente(req, res) {
    const id = req.body.id
    const cliente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      cpf: req.body.cpf
    }
    
    await Cliente.update(cliente, { where: { id: id } })
      .then(res.redirect('/clientes/allCliente'))
      .catch((err) => {
        console.log(err)
      })
  }

  /*static async removeCliente(req, res) {
    const id = req.body.id

    await Cliente.destroy({ where: { id: id } })
      .then(res.redirect('/clientes/allCliente'))
      .catch((err) => {
        console.log(err)
      })
      return this.removeCliente
  }*/
  static async removeCliente(req, res) {
    const id = req.body.id
    
    const confirmDelete = confirm("Tem certeza que deseja excluir este cliente?")
  
    if (confirmDelete) {
      await Cliente.destroy({ where: { id: id } })
        .then(() => {
          res.redirect('/clientes/allCliente')
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      // Se o usuário cancelar a exclusão, redirecione-o para a página de clientes
      res.redirect('/clientes/allCliente')
    }
  }
  
  
}

/*const btnExcluir = document.getElementById('btn-excluir');
btnExcluir.addEventListener('click', () => {
  const confirmacao = confirm('Tem certeza que deseja excluir?');
  if (confirmacao) {
   
  }
});*/
