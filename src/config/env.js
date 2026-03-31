import 'dotenv/config'

//Charger et formater les variables d environnements dans .env

const toInt = (value, fallback) => {
  const parsed = Number.parseInt(value ?? '', 10);
  return Number.isNaN(parsed) ? fallback : parsed;
};

const port = toInt(process.env.PORT, 3000);
console.log("DATABASE_URL =", process.env.DATABASE_URL);

export const env = {
  databaseUrl: process.env.DATABASE_URL,
  port
}