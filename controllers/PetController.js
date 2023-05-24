// Importando os modelos de Pet e Cliente
const Pet = require('../model/Pets');
const Cliente = require('../model/Cliente');

// Definindo a classe PetController
module.exports = class PetController {
   // Método para criar um novo Pet
  static async newPet(req, res) {
    // Buscando todos os clientes e seus atributos específicos
    const clientes = await Cliente.findAll({
      attributes: ['id', 'nome', 'sobrenome'],
      raw: true
    });
    // Renderizando o formulário de pet e passando os clientes como dados
    res.render('pets/petform', { clientes });
  }
 // Método para salvar um novo pet
  static async newPetSave(req, res) {
    // Criando um objeto com os dados do animal a ser criado
    const animal = {
      nome: req.body.nome,
      especie: req.body.especie,
      raça: req.body.raça,
      nascimento: req.body.nascimento,
      cor: req.body.cor,
      peso: req.body.peso,
      dono: req.body.dono
    };

    // Criando o pet no banco de dados usando o modelo Pet
     // Após a criação, carrega todos os pets novamente
    await Pet.create(animal)
      .then(() => {
        this.allPets();
      })
      .catch(error => {
        console.log(error);
      });
     // Redirecionando para a página que mostra todos os pets
    res.redirect('/Pets/allPets');
  }
   // Método para renderizar a página inicial dos pets
  static async home(req, res) {
    res.render('pets/home');
  }
 // Método para listar todos os pets
  static async allPets(req, res) {
// Buscando todos os pets e clientes do banco de dados
    let pets = await Pet.findAll({ raw: true });
    const clientes = await Cliente.findAll({ raw: true });
// Criando uma lista temporária para os pets com o nome do dono incluído
    let tmpPets = [];
    pets.forEach(pet => {
      clientes.forEach(cliente => {
        if (pet.dono === cliente.id) {
          pet = { ...pet, donoNome: cliente.nome };
        }
      });
      tmpPets.push(pet);
    });
    pets = tmpPets;
     // Renderizando a página que exibe todos os pets
    res.render('pets/viewpet', { pets });
  }
   // Método para atualizar um pet
  static async updatePet(req, res) {
    const id = req.params.id;
     // Buscando o pet pelo ID e o cliente associado a ele
    const pet = await Pet.findOne({ where: { id: id }, raw: true });
    const cliente = await Cliente.findOne({
      where: { id: pet.dono },
      raw: true
    });
    // Renderizando a página de edição do pet com os dados do pet e cliente
    res.render('pets/edit', { pet, cliente });
  }
 // Método para salvar as alterações de um pet
  static async updatePetSave(req, res) {
    const id = req.body.id;
// Criando um objeto com os dados atualizados do pet
    const pet = {
      nome: req.body.nome,
      especie: req.body.especie,
      raça: req.body.raça,
      nascimento: req.body.nascimento,
      cor: req.body.cor,
      peso: req.body.peso
    };
     // Atualizando o pet no banco de dados
    await Pet.update(pet, { where: { id: id } })
      .then(res.redirect('/pets/allPets'))
      .catch(err => {
        console.log(err);
      });
  }
 // Método para remover um pet
  static async removePet(req, res) {
    const id = req.body.id;
    // Removendo o pet do banco de dados com base no ID
    await Pet.destroy({ where: { id: id } })
      .then(res.redirect('/pets/allPets'))
      .catch(err => {
        console.log(err);
      });
  }
};
