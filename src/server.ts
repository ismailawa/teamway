import 'dotenv/config';
import 'reflect-metadata';
import { DataSource } from 'typeorm';
import App from './app';
import config from 'ormconfig';

(async () => {
  const AppDataSource = new DataSource(config);
  try {
    await AppDataSource.initialize();
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
  const app = new App(
    [
      // new PostController(),
    ],
    3000
  );
  app.listen();
})();
