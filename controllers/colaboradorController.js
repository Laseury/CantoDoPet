const Colaborador = require('../model/Colaborador')

module.exports = class ColaboradorController {
    static newColaborador(req, res) {
        res.render('colaborador/colaboradorForm')
    }c

    static async newColaboradorSave(req, res) {
        const colaborador = {
            nome: req.body.nome,
            sobrenome: req.body.sobrenome,
            data_nascimento: req.body.dataNascimento,
            cpf: req.body.cpf,
            funcao: req.body.funcao,
            usuario: req.body.usuario,
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
}

