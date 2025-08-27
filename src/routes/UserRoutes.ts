import {Router} from "express";
import { UserController } from "src/controllers/UserController";
import { User } from "src/entities/User";

const router = Router();

router.get('/', UserController.getAll);
router.post('/', UserController.create);

export default router;