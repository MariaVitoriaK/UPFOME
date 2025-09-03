import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./User";
import { Ingredient } from "./ingredient";

@Entity()
export class FoodRestriction {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    level!: number

    @ManyToOne(()=> User, (user) => user.foodRestrictions)
    public user: User

    @ManyToOne(()=> Ingredient, (ingredient) => ingredient.foodRestrictions)
    public ingredient: Ingredient

    /*
        0 - Não gosta
        1 - Intolerância
        2 - Alergia leve
        3 - Alergia severa
    */
   
}  