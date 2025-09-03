import {Router} from "express";
import { IngredientController } from "src/controllers/ingredientController";
import { Ingredient } from "src/entities/ingredient";

const router = Router();

router.get('/', IngredientController.getAll);
router.post('/', IngredientController.create);
router.put('/:id', IngredientController.update);
router.delete('/:id', IngredientController.delete);
router.get('/:id', IngredientController.getById);

export default router;