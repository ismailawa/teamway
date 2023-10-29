import 'dotenv/config';
import { cleanEnv, str, num } from 'envalid';

export function validateEnv() {
  cleanEnv(process.env, {
    POSTGRES_HOST: str(),
    POSTGRES_PORT: num(),
    POSTGRES_USER: str(),
    POSTGRES_PASSWORD: str(),
    POSTGRES_DB: str(),
    PORT: num(),
  });
}
