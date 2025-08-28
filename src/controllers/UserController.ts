import { Request, Response } from "express";
import { AppDataSource } from "src/config/datasource";
import { User } from "src/entities/User";


const repo = () => AppDataSource.getRepository(User)

export class UserController {

    static async getAll(req: Request, res: Response) {
        const users = await repo().find({ order: {name: "ASC"} })

        res.status(200).json(users)
    }

    static async create(req: Request, res: Response) {
        const{name, email} = req.body
        
        try {
            const createdUser = repo().create({name, email})
            await repo().save(createdUser)

            res.status(201).send("User created!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error while creating new user")
        }
    }

    static async update(req: Request, res: Response) {
        const id: number = Number(req.params.id)
        const {name} = req.body.name

        if(!name){
            res.status(404).send("Name not found")
        }

        const user = await repo().findOneBy({id})

        if (!user) {
            res.status(404).send("User not found")
        }

        try {
            user.name = name
            const savedUser = await repo().save(user)

            res.status(200).send("User updated!")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error updating user " + id)
        }
    }

    static async delete(req: Request, res: Response) {
        const id: number = Number(req.params.id)

        const user = await repo().findOneBy({id})

        if (!user) {
            res.status(404).send("User not found")
        }

        try {
            const result = await repo().delete(id)
            res.status(204).send("User deleted")
        } catch (error) {
            console.log(error)
            res.status(500).send("Error removing user " + id)
        }
    }

        static async getById(req: Request, res: Response) {

        const id: number = Number(req.params.id)
        const user = await repo().findOneBy({id})

          if (!user) {
            res.status(404).send("User not found")
        }

         try {
            const result = await repo().findOneBy(user)
            //res.status(200).send("User found")

             res.status(200).json(result)
        } catch (error) {
            console.log(error)
            res.status(500).send("Error finding user " + id)
        }
    }

}
