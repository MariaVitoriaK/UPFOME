import { Request, Response } from "express";
import { AppDataSource } from "src/config/datasource";
import { User } from "src/entities/user";


const repo = () => AppDataSource.getRepository(User)

export class UserController {

    static async getAll(req: Request, res: Response) {
        const users = await repo().find({ order: {name: "ASC"} })

        res.status(200).json(users)
    }
}
