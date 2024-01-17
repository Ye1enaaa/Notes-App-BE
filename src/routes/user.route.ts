import { Router } from 'express';
import userController from '@controllers/UserController';

const router = Router();

//Users API
router.post(`/add-user`, userController.addUser);
router.get(`/users`, userController.fetchUsers);

export default router;