import pg from "pg";
import { config } from "../config.js";
// console.log(process.env.TESTING);
console.log(config.dbhost);
const pool = new pg.Pool({
   host: config.dbHost,
   database: config.db,
   user: config.dbUser,
   port: config.dbPort,
   password: config.dbPassword,

   // connectionString: process.env.DATABASE_URL,
   // max: 20,
   // idleTimeoutMillis: 30000,
   // connectionTimeoutMillis: 2000,
   ssl: {
      rejectUnauthorized: false,
   },
});

export default function query(text, params) {
   console.log("not working after here");
   return pool.query(text, params);
}
