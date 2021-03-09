import express, { NextFunction, Request, Response } from 'express';
import cors from 'cors';
import asyncHandler from 'express-async-handler';
import bodyParser, { json } from 'body-parser';

const app = express();

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true }));
app.use('/', asyncHandler(async (req, res, next) => {
    next();
}));

export default app;