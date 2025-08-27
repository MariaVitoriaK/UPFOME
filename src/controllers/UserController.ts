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
}
