import multer from 'multer';

import Foto from '../models/Foto';
import multerConfig from '../config/multer';

const file = multer(multerConfig).single('foto');

class FotoController {
  create(req, res) {
    return file(req, res, async (error) => {
      if (error) return res.status(400).json({ errors: [error.code] });

      try {
        const foto = await Foto.create({
          originalname: req.file.originalname,
          filename: req.file.filename,
          aluno_id: req.body.aluno_id,
        });

        return res.json(foto);
      } catch (e) {
        return res.status(400).json({
          errors: ['Aluno não existe.'],
        });
      }
    });
  }
}

export default new FotoController();
