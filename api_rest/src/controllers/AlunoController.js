import Aluno from '../models/Aluno';

class AlunoController {
  async index(req, res) {
    try {
      return res.json(await Aluno.findAll());
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async show(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Id não enviado.'] });

      return res.json(await Aluno.findByPk(req.params.id));
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async create(req, res) {
    try {
      return res.json(await Aluno.create(req.body));
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Id não enviado.'] });

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno com este ID não foi encontrado.'] });

      return res.json(await aluno.update(req.body));
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) return res.status(400).json({ errors: ['Id não enviado.'] });

      const aluno = await Aluno.findByPk(req.params.id);
      if (!aluno) return res.status(400).json({ errors: ['Aluno com este ID não foi encontrado.'] });

      await aluno.destroy();

      return res.json('Aluno deletado com sucesso!');
    } catch (e) {
      return res.status(400).json({ errors: e.errors.map((err) => err.message) });
    }
  }
}

export default new AlunoController();
