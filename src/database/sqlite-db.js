import sqlite3 from "sqlite3";
import { dirname } from "path";
import { fileURLToPath } from "url";
sqlite3.verbose();
const filePath = dirname(fileURLToPath(import.meta.url)) + "/database.db";
const database = new sqlite3.Database("./database.db");

process.on("SIGINT", () =>
  database.close(() => {
    console.log("closed database");
    process.exit(0);
  })
);

export default database;
