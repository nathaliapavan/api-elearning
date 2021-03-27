import { Router } from 'express';
import { UserController } from './controllers/UserController';

const router = Router();

const userController = new UserController();

//router.get('/users', userController.showAll);
//router.get('/users', userController.showOne);
router.post('/users', userController.create);

export { router } 