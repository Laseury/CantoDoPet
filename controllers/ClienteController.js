const Cliente = require('../model/Cliente'); // Importa o modelo Cliente

module.exports = class ClienteController {
  
  static newCliente(req, res) {
    res.render('clientes/clienteform'); // Renderiza o formulário de cadastro de cliente
  }

  static async newClienteSave(req, res) {
    const cliente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      cpf: req.body.cpf
    };

    await Cliente.create(cliente) // Cria um novo cliente no banco de dados
      .then(() => {
        this.allCliente(); // Carrega todos os clientes
      })
      .catch((error) => {
        console.log(error);
      });
    res.redirect('/clientes/allCliente'); // Redireciona para a página de visualização de clientes
  }
  
  static async home(req, res) {
    res.render('clientes/home'); // Renderiza a página inicial dos clientes
  }

  static async allCliente(req, res) {
    const clientes = await Cliente.findAll({ raw: true }); // Busca todos os clientes no banco de dados
    res.render('clientes/viewcliente', { clientes }); // Renderiza a página de visualização de clientes com os dados obtidos
  }

  static async updateViewCliente(req, res) {
    const id = req.params.id;
    const cliente = await Cliente.findOne({ where: { id: id }, raw: true }); // Busca um cliente específico no banco de dados
    res.render('clientes/edit', { cliente }); // Renderiza a página de edição de cliente com os dados obtidos
  }

  static async updateCliente(req, res) {
    const id = req.body.id;
    const cliente = {
      nome: req.body.nome,
      sobrenome: req.body.sobrenome,
      data_nascimento: req.body.data_nascimento,
      cpf: req.body.cpf
    };

    await Cliente.update(cliente, { where: { id: id } }) // Atualiza as informações do cliente no banco de dados
      .then(res.redirect('/clientes/allCliente')) // Redireciona para a página de visualização de clientes
      .catch((err) => {
        console.log(err);
      });
  }

  static async removeCliente(req, res) {
    const id = req.body.id;

    await Cliente.destroy({ where: { id: id } }) // Remove o cliente do banco de dados
      .then(res.redirect('/clientes/allCliente')) // Redireciona para a página de visualização de clientes
      .catch((err) => {
        console.log(err);
      });
  }
};
