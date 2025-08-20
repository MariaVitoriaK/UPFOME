import { DataSource } from "typeorm"
import dotenv from "dotenv"

dotenv.config()

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: "upfome",
    synchronize: false,
    logging: true,
    entities: [],
    migrations: []
})

