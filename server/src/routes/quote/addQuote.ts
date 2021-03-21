import { Router } from "express";
import asyncHandler from "express-async-handler";
import httpErrors from "http-errors";
import { v4 } from "uuid";
import { CONNECTION_POOL, query, TABLES } from "../../database/database";
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
    const statement = `
          INSERT INTO ${TABLES.QUOTES} (id, name, email, departure, destination, transportation, people, price, departureDate, returnDate) VALUE (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
        `;
    return query(CONNECTION_POOL, statement, [
      reqId,
      name,
      email,
      from,
      destination,
      transportation,
      people,
      `$${price}`,
      departureDate,
      returnDate,
    ])
      .then(() => {
        const resBody = {
          message: "Quote has been created",
        };

        return res.status(200).send(resBody);
      })
      .catch((err) => {
        return next(httpErrors(500, err.message));
      });
  })
);

export const createQuoteRoute = router;
