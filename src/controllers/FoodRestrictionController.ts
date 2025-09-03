import { Request, Response } from "express";
import { AppDataSource } from "src/config/datasource";
import { FoodRestriction } from "src/entities/FoodRestriction";
import { Ingredient } from "src/entities/ingredient";
import { User } from "src/entities/User";


const repo = () => AppDataSource.getRepository(FoodRestriction)
const userRepo = () => AppDataSource.getRepository(User)
const ingredientRepo = () => AppDataSource.getRepository(Ingredient)

export class FoodRestrictionController {

    static async create(req: Request, res: Response) {
        const{ level } = req.body.level
        const { userId, ingredientId } = req.params
        
        try {
            const user = await userRepo().findOneBy({"id": Number(userId)})
            const ingredient = await ingredientRepo().findOneBy({"id": Number(ingredientId)})

            if(!user || !ingredient){
                res.status(400).send("User or Ingredient not found")
            }

            const foodRestriction = repo().create({
                "user": user,
                "ingredient": ingredient, 
                "level": Number(level)
            })

            await repo().save(foodRestriction)
            res.status(201).send("Food restriction created!")

        } catch (error) {
            res.status(500).send("Contact your sys admin")
        }

    }
}
