import multer from 'multer';
import { extname, resolve } from 'path';

const ramdom = () => Math.floor(Math.random() * 10000 + 10000);

export default {
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
