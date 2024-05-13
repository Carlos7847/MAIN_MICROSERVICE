import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductModule } from './product/product.module';
import { HttpModule } from '@nestjs/axios';
import * as dotenv from 'dotenv';
dotenv.config();

const mongoCredentials = process.env.MONGO_CREDENTIALS;

@Module({
  imports: [
    MongooseModule.forRoot(mongoCredentials, {
      autoCreate: true,
    }),
    ProductModule,
    HttpModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
