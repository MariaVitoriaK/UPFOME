import { Router } from "express";
import userRouter from "./UserRoutes";
import ingredientRouter from "./IngredientRoutes";
import foodRestrictionRoutes from "./FoodRestrictionRoutes";

const router = Router();

router.use('/users', userRouter);
router.use('/ingredients', ingredientRouter);
router.use('/foodrestriction', foodRestrictionRoutes);

export default router;