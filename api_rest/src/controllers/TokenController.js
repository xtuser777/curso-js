import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async create(req, res) {
    try {
      const { email = '', password = '' } = req.body;
      if (!email || !password) return res.status(400).json({ errors: ['Credenciais inválidas.'] });

      const user = await User.findOne({ where: { email } });
      if (!user) return res.status(400).json({ errors: ['Usuário não cadastrado.'] });

      if (!(await user.autenticate(password))) return res.status(400).json({ errors: ['Senha inválida.'] });

      const { id } = user;
      const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
        expiresIn: process.env.TOKEN_EXPIRATION,
      });

      return res.json({ token, user: { nome: user.nome, id, email } });
    } catch (e) {
      return res.send(e);
    }
  }
}

export default new TokenController();
