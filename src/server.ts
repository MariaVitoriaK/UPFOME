import 'reflect-metadata';
import app from './app';
import { AppDataSource } from './config/datasource';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT ? Number(process.env.PORT) : 3001;

async function start() {
  try {
    await AppDataSource.initialize();
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  } catch (err) {
    console.error('Falha ao iniciar a aplicação:', err);
    process.exit(1);
  }
}

start();