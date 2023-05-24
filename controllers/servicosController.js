const Pet = require('../model/Pets');
const Servicos = require('../model/Servicos');
const Colaborador = require('../model/Colaborador');
const Cliente = require('../model/Cliente');

module.exports = class servicosController {
  static async newServico(req, res) {
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

    res.render('servicos/servForm', { pets, colaborador, clientes });
  }

  static async newServicoSave(req, res) {
    const trabalhos = {
      nome: req.body.nome,
      valor: req.body.valor,
      dono: req.body.dono,
      pet: req.body.pet,
      colaborador: req.body.colaborador
    };

    await Servicos.create(trabalhos)
      .then(() => {
        this.allServicos();
      })
      .catch(error => {
        console.log(error);
      });
    res.redirect('/servicos/all');
  }

  static async allServicos(req, res) {
    const servicos = await Servicos.findAll({ raw: true });
    res.render('servicos/servViews', { servicos });
  }
};
