import Aluno from '../models/Aluno';

class HomeController {
  async index(req, res) {
    try {
      const novo = await Aluno.create({
        nome: 'Lucas',
        sobrenome: 'Oliveira',
        email: 'oribeila.rukasu@gmail.com',
        idade: 30,
        peso: 130,
        altura: 2.00,
      });

      return res.json(novo);
    } catch (e) {
      return res.send(e);
    }
  }
}

export default new HomeController();
