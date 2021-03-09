import { Router } from "express";
import asyncHandler from "express-async-handler";
import httpErrors from "http-errors";
import { v4 } from "uuid";
import { createConnection, query, TABLES } from "../../database/database";
import { AddQuote } from "../../types/Quote";

const router = Router();

router.post(
  "/",
  asyncHandler(async (req, res, next) => {
    const body = req.body as AddQuote;
    const {
      name,
      email,
      from,
      destination,
      transportation,
      people,
      price,
      departureDate,
      returnDate,
    } = body;
    const reqId = v4();
    try {
      const con = createConnection();
      const statement = `
          INSERT INTO ${TABLES.QUOTES} (id, name, email, departure, destination, transportation, people, price, departureDate, returnDate) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
      query(con, statement, [
        reqId,
        name,
        email,
        from,
        destination,
        transportation,
        people,
        price,
        departureDate,
        returnDate,
      ]);
    } catch (err) {
      return next(httpErrors(500, err.message));
    }
    return res.status(200).send({ message: "new quote created" });
  })
);

export const createQuoteRoute = router;
