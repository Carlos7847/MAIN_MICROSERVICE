import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:3000',
  });
  await app.listen(8001);

  // //microservices
  // const app = await NestFactory.createMicroservice(AppModule, {
  //   transport: Transport.RMQ,
  //   options: {
  //     urls: [
  //       'amqps://nabwcljr:pjAsncBhoBrmrhyPTVeChhTrHqqCwBKp@jackal.rmq.cloudamqp.com/nabwcljr',
  //     ],
  //     queue: 'main_queue',
  //     queueOptions: {
  //       durable: false,
  //     },
  //   },
  // });

  // await app.listen();
}
bootstrap();
