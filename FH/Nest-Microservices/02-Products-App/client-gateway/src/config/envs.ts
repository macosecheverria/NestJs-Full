import 'dotenv/config';
import * as joi from 'joi';

interface EnvVar {
  PORT: number;
  // PRODUCT_MICROSERVICES_HOST: string;
  // PRODUCT_MICROSERVICES_PORT: number;
  // ORDERS_MICROSERVICES_HOST: string;
  // ORDERS_MICROSERVICES_PORT: number;
  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    // PRODUCT_MICROSERVICES_HOST: joi.string().required(),
    // PRODUCT_MICROSERVICES_PORT: joi.number().required(),
    // ORDERS_MICROSERVICES_HOST: joi.string().required(),
    // ORDERS_MICROSERVICES_PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);

const { error, value } = envsSchema.validate({
  ...process.env,
  NATS_SERVERS: process.env.NATS_SERVERS.split(','),
});

if (error) {
  throw new Error(`Config validation error ${error.message}`);
}

const envVar: EnvVar = value;

export const envs = {
  port: envVar.PORT,
  // productMicroservicesHost: envVar.PRODUCT_MICROSERVICES_HOST,
  // productMicroservicesPort: envVar.PRODUCT_MICROSERVICES_PORT,
  // orderMicroservicesHost: envVar.ORDERS_MICROSERVICES_HOST,
  // orderMicroservicesPort: envVar.ORDERS_MICROSERVICES_PORT,
  natsServices: envVar.NATS_SERVERS,
};
