module.exports = class controller {
     // Renderiza a página inicial do petshop
    static async home(req, res){
        res.render('petshop/home')
    }

}