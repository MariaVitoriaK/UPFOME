import {Router} from "express";
import { UserController } from "src/controllers/UserController";
import { User } from "src/entities/User";

const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);
router.put('/:id', UserController.update);
router.delete('/:id', UserController.delete);
router.get('/:id', UserController.getById);

export default router;