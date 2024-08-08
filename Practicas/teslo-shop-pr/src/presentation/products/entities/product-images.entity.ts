import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity({name: "product_images"})
export class ProductImagesEntity {

    @PrimaryGeneratedColumn("identity")
    public id: number;

    @Column({type: "text"})
    public url: string;
    
    @ManyToOne(() => ProductEntity, (product) => product.images)
    public product: ProductEntity;
}