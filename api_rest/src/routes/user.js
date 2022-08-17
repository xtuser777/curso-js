import { Router } from 'express';
import ctrlr from '../controllers/UserController';

import userAuthenticated from '../middlewares/userAuthenticated';

const router = new Router();

router.get('/', ctrlr.index);
router.post('/', userAuthenticated, ctrlr.create);
router.get('/:id', ctrlr.show);
router.put('/', userAuthenticated, ctrlr.update);
router.delete('/', userAuthenticated, ctrlr.delete);

export default router;
