import express from "express";
import cors from "cors";
import asyncHandler from "express-async-handler";
import bodyParser from "body-parser";
import { quoteRoutes } from "./routes/quote/quote";
import { createConnection } from "./database/database";

const app = express();
createConnection();
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  "/",
  asyncHandler(async (req, res, next) => {
    next();
  })
);

app.use("/quotes", quoteRoutes);

export default app;
