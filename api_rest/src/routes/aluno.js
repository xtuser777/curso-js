import { Router } from 'express';
import ctrlr from '../controllers/AlunoController';
import userAuthenticated from '../middlewares/userAuthenticated';

const router = new Router();

router.get('/', ctrlr.index);
router.get('/:id', ctrlr.show);
router.post('/', userAuthenticated, ctrlr.create);
router.put('/:id', userAuthenticated, ctrlr.update);
router.delete('/:id', userAuthenticated, ctrlr.delete);

export default router;
