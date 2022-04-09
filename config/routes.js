import { Router } from 'express';
import HomeController from '../controllers/HomeController.js';
import homeController from '../controllers/HomeController.js'

const router = new Router();
 
//root
router.get('/', homeController.home)

router.get('/Index', HomeController.index)

export default router
