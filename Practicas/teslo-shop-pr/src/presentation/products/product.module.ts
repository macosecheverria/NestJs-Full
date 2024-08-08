import { Module } from "@nestjs/common";
import { ProductController } from "./product.controller";
import { ProductServiceImpl } from "./product.service";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ProductEntity } from "./entities";
import { ProductImagesEntity } from "./entities/product-images.entity";

@Module({
    controllers: [ProductController],
    providers: [ProductServiceImpl],
    imports: [TypeOrmModule.forFeature([ProductEntity, ProductImagesEntity])]
})
export class ProductModule {

}