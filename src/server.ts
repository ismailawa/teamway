import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'reflect-metadata';
import 'dotenv/config';
import App from './app';
import { validateEnv } from './utils/validate.env';
import Database from './database/datasource.connection';
import UsersController from './api/users/users.controller';

validateEnv();

(async () => {
  try {
    const dataSource = Database.getInstance().getDataSource();
    await dataSource.initialize();
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App([new UsersController()], 3000);
  app.listen();
})();
