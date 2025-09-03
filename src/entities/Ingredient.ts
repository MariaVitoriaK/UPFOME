import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { FoodRestriction } from "./FoodRestriction";
@Entity()
export class Ingredient {
    
        @PrimaryGeneratedColumn()
        id!: number
    
        @Column()
        name!: string

        @OneToMany(() => FoodRestriction, foodRestrictions => foodRestrictions.ingredient)
        public foodRestrictions: FoodRestriction[];
        
}