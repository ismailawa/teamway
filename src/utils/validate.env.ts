import 'dotenv/config';
import { cleanEnv, str, num } from 'envalid';

export function validateEnv() {
  cleanEnv(process.env, {
    DATABASE_URL: str(),
    PORT: num(),
  });
}
