import { Router } from 'express';

import ctrlr from '../controllers/FotoController';
import userAuthenticated from '../middlewares/userAuthenticated';

const router = new Router();

router.post('/', userAuthenticated, ctrlr.create);

export default router;
