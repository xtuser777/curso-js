import { Router } from 'express';
import ctrlr from '../controllers/HomeController';

const router = new Router();

router.get('/', ctrlr.index);

export default router;
