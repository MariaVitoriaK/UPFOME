import { DataSource } from "typeorm"
import dotenv from "dotenv"
import { User } from "src/entities/User";
import { Ingredient } from "src/entities/ingredient";
import { FoodRestriction } from "src/entities/FoodRestriction";

dotenv.config()

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  port: process.env.DB_PORT ? Number(process.env.DB_PORT) : 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  entities: [User, Ingredient, FoodRestriction],
  migrations: ['src/migrations/*.ts'],
});