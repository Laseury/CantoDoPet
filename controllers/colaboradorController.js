const Colaborador = require('../model/Colaborador') // Importa o modelo Colaborador

module.exports = class ColaboradorController {
  // Cria um novo colaborador
    static newColaborador(req, res) {
        res.render('colaborador/colaboradorForm')
    }
    // Salva um novo colaborador no banco de dados
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
        // Carrega todos os colaboradores após a criação
        // Redireciona para a página de visualização de colaboradores
        await Colaborador.create(colaborador)
            .then(() => {
                this.allColaborador()
            }).catch((error) => {
                console.log(error)
            })
        res.redirect('/colaborador/allColaborador')    
    }
    // Retorna todos os colaboradores do banco de dados
    static async allColaborador(req, res) {
        const colaborador = await Colaborador.findAll({ raw: true })
        res.render('colaborador/viewColaborador', { colaborador })
    }
    // Renderiza a página de edição de um colaborador específico
    static async updateViewColaborador(req, res) {
      const id = req.params.id
      const colaborador = await Colaborador.findOne({ where: { id: id }, raw: true })
      res.render('colaborador/editColaborador', { colaborador })
    }
    // Atualiza as informações de um colaborador no banco de dados
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
      // Redireciona para a página de visualização de colaboradores após a atualização 
      await Colaborador.update(colaborador, { where: { id: id } })
        .then(res.redirect('/colaborador/allColaborador'))
        .catch((err) => {
          console.log(err)
        })
    }
    // Remove um colaborador do banco de dados
    static async removeColaborador(req, res) {
        const id = req.body.id
        // Redireciona para a página de visualização de colaboradores após a remoção
        await Colaborador.destroy({ where: { id: id } })
          .then(
            res.redirect('/colaborador/allColaborador'))
          .catch((err) => {
            console.log(err)
          })
      }

      
}

