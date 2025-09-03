import {Router} from "express";
import { FoodRestrictionController } from "src/controllers/FoodRestrictionController";


const router = Router();


router.post('/user/:userId/ingredient/:ingredientId', FoodRestrictionController.create);

export default router;