import { Router } from 'express';
import ctrlr from '../controllers/TokenController';

const router = new Router();

router.post('/', ctrlr.create);

export default router;
