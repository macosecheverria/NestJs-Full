import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './presentation/products/product.module';


@Module({
  imports: [
    ConfigModule.forRoot(),
    ProductModule,
  ],
  
})
export class AppModule {}
