// Importação dos modelos utilizados no controller
const Pet = require('../model/Pets');
const Servicos = require('../model/Servicos');
const Colaborador = require('../model/Colaborador');
const Cliente = require('../model/Cliente');

module.exports = class servicosController {
   // Método para exibir o formulário de criação de um novo serviço
  static async newServico(req, res) {
   // Obtendo todos os pets, clientes e colaboradores do banco de dados
    const pets = await Pet.findAll({
      attributes: ['id', 'nome', 'raça'],
      raw: true
    });

    const clientes = await Cliente.findAll({
      attributes: ['id', 'nome', 'sobrenome'],
      raw: true
    });

    const colaborador = await Colaborador.findAll({
      attributes: ['id', 'nome'],
      raw: true
    });
// Renderizando a view do formulário de criação de serviço, passando os dados dos pets, clientes e colaboradores
    res.render('servicos/servForm', { pets, colaborador, clientes });
  }
// Método para salvar um novo serviço
  static async newServicoSave(req, res) {
// Criando um objeto com os dados do novo serviço
    const trabalhos = {
      nome: req.body.nome,
      valor: req.body.valor,
      dono: req.body.dono,
      pet: req.body.pet,
      colaborador: req.body.colaborador
    };
 // Salvando o novo serviço no banco de dados
    await Servicos.create(trabalhos)
      .then(() => {
        this.allServicos();
      })
      .catch(error => {
        console.log(error);
      });
    res.redirect('/servicos/all');
  }
 // Método para exibir todos os serviços
  static async allServicos(req, res) {
     // Obtendo todos os serviços do banco de dados
    const servicos = await Servicos.findAll({ raw: true });
    // Renderizando a view que exibe todos os serviços, passando os dados dos serviços
    res.render('servicos/servViews', { servicos });
  }
};
