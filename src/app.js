import express from "express";
import cors from "cors";
import bookController from "./controller/book-controller.js";
import indexController from "./controller/index.js";
import database from "./database/sqlite-db.js";

const app = express();
app.use(express.json());
app.use(cors());

indexController(app);
bookController(app, database);

export default app;
