//const NestFactory = require('nestjs/core').NestFactory;

import { NestFactory } from '@nestjs/core';
import {Options} from 'http-server';
//import * as httpserver from 'http-server'; //js

import { AppModule } from './app.module';
import {a} from "./mi-codigo";

async function bootstrap() {
    console.log(a);
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
