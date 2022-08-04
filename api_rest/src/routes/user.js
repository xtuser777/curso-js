import { Router } from 'express';
import ctrlr from '../controllers/UserController';

const router = new Router();

router.get('/', ctrlr.index);
router.post('/', ctrlr.create);
router.get('/:id', ctrlr.show);
router.put('/:id', ctrlr.update);
router.delete('/:id', ctrlr.delete);

export default router;
