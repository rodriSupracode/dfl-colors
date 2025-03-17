import { Pool } from "pg";

const pool = new Pool({
  user: "root",
  host: "localhost",
  database: "dflcolors_db",
  password: "toor",
  port: 5432,
});

export default pool;
