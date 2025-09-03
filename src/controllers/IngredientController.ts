import { Request, Response } from "express";
import { AppDataSource } from "src/config/datasource";
import { Ingredient } from "src/entities/ingredient";


const repo = () => AppDataSource.getRepository(Ingredient)

export class IngredientController {

    static async getAll(req: Request, res: Response) {
        const ingredients = await repo().find({ order: {name: "ASC"} })

        res.status(200).json(ingredients)
    }

    static async create(req: Request, res: Response) {
        const{name, } = req.body
        
        try {
            const createdIngredient = repo().create({name})
            await repo().save(createdIngredient)

            res.status(201).send("Ingredient created!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error while creating new Ingredient")
        }
    }

    static async update(req: Request, res: Response) {
        const id: number = Number(req.params.id)
        const {name} = req.body.name

        if(!name){
            res.status(404).send("Ingredient not found")
        }

        const ingredient = await repo().findOneBy({id})

        if (!ingredient) {
            res.status(404).send("Ingredient not found")
        }

        try {
            ingredient.name = name
            const savedIngredient = await repo().save(ingredient)

            res.status(200).send("Ingredient updated!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error updating Ingredient" + id)
        }
    }

    static async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id)

        const ingredient = await repo().findOneBy({id})

        if (!ingredient) {
            res.status(404).send("Ingredient not found")
        }

        try {
            const result = await repo().delete(id)
            res.status(204).send("Ingredient deleted")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error removing ingredient " + id)
        }
    }

        static async getById(req: Request, res: Response) {

        const id: number = Number(req.params.id)
        const ingredient = await repo().findOneBy({id})

          if (!ingredient) {
            res.status(404).send("Ingredient not found")
        }

         try {
            const result = await repo().findOneBy(ingredient)
   
             res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).send("Error finding ingredient " + id)
        }
    }

}
