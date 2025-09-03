import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm"
import { FoodRestriction } from "./FoodRestriction";

@Entity()
export class User {
    
    @PrimaryGeneratedColumn()
    id!: number

    @Column()
    name!: string

    @Column()
    email!: string

    @OneToMany(() => FoodRestriction, foodRestrictions => foodRestrictions.user)
    public foodRestrictions: FoodRestriction[];

}