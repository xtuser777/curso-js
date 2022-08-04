import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      return res.json(await User.findAll());
    } catch (e) {
      return res.status('400').json(null);
    }
  }

  async create(req, res) {
    try {
      const novo = await User.create(req.body);

      return res.json(novo);
    } catch (e) {
      return res.status('400').json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      return res.json(await User.findByPk(req.params.id));
    } catch (e) {
      return res.status('400').json(null);
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status('400').json({ errors: ['Parâmetro incorreto.'] });

      const user = await User.findByPk(req.params.id);
      if (!user) return res.status('400').json({ errors: ['Usuário não existe.'] });

      return res.json(await user.update(req.body));
    } catch (e) {
      return res.status('400').json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status('400').json({ errors: ['Parâmetro incorreto.'] });

      const user = await User.findByPk(req.params.id);
      if (!user) return res.status('400').json({ errors: ['Usuário não existe.'] });

      await user.destroy();

      return res.json('Usuário deletado com sucesso.');
    } catch (e) {
      return res.status('400').json(null);
    }
  }
}

export default new UserController();
