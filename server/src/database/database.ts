import mysql, { Pool } from "mysql2";

export const TABLES = {
  QUOTES: "quotes",
};

export let CONNECTION_POOL: mysql.Pool;

export const createConnection = (): void => {
  CONNECTION_POOL = mysql.createPool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    multipleStatements: true,
    socketPath: process.env.DB_HOST !== "localhost" ? process.env.DB_HOST : "",
  });
};

export const query = (connection: Pool, query: string, params: any) => {
  return connection.promise().query(query, params);
};
