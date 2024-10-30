import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from 'dotenv';
import { Todo } from './todos/todos.entity';
import { User } from './user/user.entity';
import * as path from 'path';

dotenv.config();

const config: TypeOrmModuleOptions = {
  type: process.env.DB_TYPE as any,
  host: process.env.DB_HOST,
  port: parseInt(process.env.DB_PORT, 10),
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true,
  logging: true,
  //entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  //entities: [Todo, User],
  entities: [`${__dirname}/**/*.entity{.ts,.js}`],
};

export default config;

//entities: [`${__dirname}/**/*.entity{.ts,.js}`],
