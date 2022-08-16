import multer from 'multer';
import { extname, resolve } from 'path';

const ramdom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
  fileFilter: (req, file, callback) => {
    if (file.mimetype !== 'image/png' && file.mimetype !== 'image/jpeg') {
      return callback(new multer.MulterError('O arquivo precisa ser um imagem .PNG ou .JPEG'));
    }

    return callback(null, true);
  },
  storage: multer.diskStorage(
    {
      destination: (req, file, callback) => {
        callback(null, resolve(__dirname, '..', '..', 'uploads'));
      },
      filename: (req, file, callback) => {
        callback(null, `${Date.now()}_${ramdom()}${extname(file.originalname)}`);
      },
    },
  ),
};
