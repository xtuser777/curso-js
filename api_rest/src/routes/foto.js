import { Router } from 'express';
import multer from 'multer';

import ctrlr from '../controllers/FotoController';
import multerConfig from '../config/multer';

const file = multer(multerConfig);

const router = new Router();

router.post('/', file.single('foto'), ctrlr.create);

export default router;
