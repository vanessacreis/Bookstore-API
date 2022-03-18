import express from "express";
import bookController from "./controller/book-controller.js";
import database from "./database/sqlite-db.js";

const app = express();
app.use(express.json());

bookController(app, database);

export default app;
