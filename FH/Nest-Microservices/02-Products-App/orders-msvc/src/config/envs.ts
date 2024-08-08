import 'dotenv/config';
import * as joi from 'joi';

interface EnvVar {
  PORT: number;
  // PRODUCT_MICROSERVICE_HOST: string;
  // PRODUCT_MICROSERVICE_PORT: number;
  NATS_SERVERS: string[];
}

const envsSchema = joi
  .object({
    PORT: joi.number().required(),
    // PRODUCT_MICROSERVICE_HOST: joi.string().required(),
    // PRODUCT_MICROSERVICE_PORT: joi.number().required(),
    NATS_SERVERS: joi.array().items(joi.string()).required(),
  })
  .unknown(true);


  const { error, value } = envsSchema.validate({
    ...process.env,
    NATS_SERVERS: process.env.NATS_SERVERS?.split(','),
  });

if (error) {
  throw new Error(`Config validation error ${error.message}`);
}

const envVar: EnvVar = value;

export const envs = {
  port: envVar.PORT,
  // productMicroserviceHost: envVar.PRODUCT_MICROSERVICE_HOST,
  // productMicroservicePort: envVar.PRODUCT_MICROSERVICE_PORT,
  natsServers: envVar.NATS_SERVERS,
};
