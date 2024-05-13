import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Transport } from '@nestjs/microservices';
import * as dotenv from 'dotenv';
dotenv.config();

const url_RMQ = process.env.URL_OPTION_RMQ;
const rmq_queue = process.env.RMQ_QUEUE;

async function bootstrap() {
  //microservices
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.RMQ,
    options: {
      urls: [url_RMQ],
      queue: rmq_queue,
      queueOptions: {
        durable: false,
      },
    },
  });

  await app.listen();
}
bootstrap();
