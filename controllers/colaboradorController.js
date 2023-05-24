const Colaborador = require('../model/Colaborador')

module.exports = class ColaboradorController {
    static newColaborador(req, res) {
        res.render('colaborador/colaboradorForm')
    }

    static async newColaboradorSave(req, res) {
        const colaborador = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            funcao: req.body.funcao,
            login: req.body.login,
            senha: req.body.senha
        }

        await Colaborador.create(colaborador)
            .then(() => {
                this.allColaborador()
            }).catch((error) => {
                console.log(error)
            })
        res.redirect('/colaborador/allColaborador')    
    }
    
    static async allColaborador(req, res) {
        const colaborador = await Colaborador.findAll({ raw: true })
        res.render('colaborador/viewColaborador', { colaborador })
    }

    static async updateViewColaborador(req, res) {
      const id = req.params.id
      const colaborador = await Colaborador.findOne({ where: { id: id }, raw: true })
      res.render('colaborador/editColaborador', { colaborador })
    }

    static async updateColaborador(req, res) {
      const id = req.body.id
      const colaborador = {
          nome: req.body.nome,
          sobrenome: req.body.sobrenome,
          data_nascimento: req.body.dataNascimento,
          cpf: req.body.cpf,
          funcao: req.body.funcao,
          login: req.body.login,
          senha: req.body.senha
      }
      
      await Colaborador.update(colaborador, { where: { id: id } })
        .then(res.redirect('/colaborador/allColaborador'))
        .catch((err) => {
          console.log(err)
        })
    }

    static async removeColaborador(req, res) {
        const id = req.body.id
    
        await Colaborador.destroy({ where: { id: id } })
          .then(
            res.redirect('/colaborador/allColaborador'))
          .catch((err) => {
            console.log(err)
          })
      }

      
}

