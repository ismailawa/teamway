import 'dotenv/config';
import config from '../ormconfig';
import { DataSource, DataSourceOptions } from 'typeorm';

class Database {
  private static instance: Database | null = null;
  private dataSource: DataSource;

  private constructor() {
    this.dataSource = new DataSource(config);
  }

  static getInstance(): Database {
    if (!this.instance) {
      this.instance = new Database();
    }
    return this.instance;
  }

  getDataSource(): DataSource {
    return this.dataSource;
  }
}

export default Database;
