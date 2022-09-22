/* eslint-disable prettier/prettier */
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('products')

export class ProductsEntity {

    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar')
    name: string;

    @Column('longtext')
    image: string;

    @Column('float')
    price: number;

    @Column('date')
    expireOn: Date;

    @Column('varchar')
    description: string ;


    @Column('int')
    stock: number;


    @Column('varchar')
    activo: string;
    
}