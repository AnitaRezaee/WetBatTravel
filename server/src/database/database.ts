import mysql, { Pool } from "mysql2";

export const TABLES = {
  QUOTES: "quotes",
};

export const createConnection = () => {
  return mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
  });
};

export const query = (connection: Pool, query: string, params: any) => {
  return connection.promise().query(query, params);
};
