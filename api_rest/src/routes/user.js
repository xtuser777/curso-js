import { Router } from 'express';
import ctrlr from '../controllers/UserController';

import userAuthenticated from '../middlewares/userAuthenticated';

const router = new Router();

router.get('/', userAuthenticated, ctrlr.index);
router.post('/', userAuthenticated, ctrlr.create);
router.get('/:id', ctrlr.show);
router.put('/:id', userAuthenticated, ctrlr.update);
router.delete('/:id', userAuthenticated, ctrlr.delete);

export default router;
