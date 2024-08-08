import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { NatsModule } from 'src/transport/nats.module';

@Module({
  imports: [
    // ClientsModule.register([
    //   {
    //     name: NATS_SERVICES,
    //     transport: Transport.NATS,
    //     options: {
    //       servers: envs.natsServices
    //     },
    //   },
    // ]),
    NatsModule,
  ],
  controllers: [ProductsController],
})
export class ProductsModule {}
