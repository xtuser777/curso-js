import User from '../models/User';

class UserController {
  async index(req, res) {
    try {
      return res.json(await User.findAll({ attributes: ['id', 'nome', 'email'] }));
    } catch (e) {
      return res.status('400').json(null);
    }
  }

  async create(req, res) {
    try {
      const { id, nome, email } = await User.create(req.body);

      return res.json({ id, nome, email });
    } catch (e) {
      return res.status('400').json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async show(req, res) {
    try {
      return res.json(await User.findByPk(req.params.id, { attributes: ['id', 'nome', 'email'] }));
    } catch (e) {
      return res.status('400').json(null);
    }
  }

  async update(req, res) {
    try {
      const user = await User.findByPk(req.userId, { attributes: ['id', 'nome', 'email'] });
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
      const user = await User.findByPk(req.userId, { attributes: ['id', 'nome', 'email'] });
      if (!user) return res.status('400').json({ errors: ['Usuário não existe.'] });

      await user.destroy();

      return res.json('Usuário deletado com sucesso.');
    } catch (e) {
      return res.status('400').json(null);
    }
  }
}

export default new UserController();
