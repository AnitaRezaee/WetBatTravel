import { Router } from "express";
import asyncHandler from "express-async-handler";
import httpErrors from "http-errors";
import { RowDataPacket } from "mysql2";
import { CONNECTION_POOL, TABLES } from "../../database/database";
import { Quote } from "../../types/Quote";

const router = Router();

router.get(
  "/",
  asyncHandler(async (req, res, next) => {
    const quotes: Quote[] = [];

    const statement = `SELECT * FROM ${TABLES.QUOTES}`;

    return CONNECTION_POOL.promise()
      .query<RowDataPacket[]>(statement)
      .then(([rows]) => {
        rows.map((row) =>
          quotes.push({
            id: row.id,
            name: row.name,
            from: row.departure,
            destination: row.destination,
            departureDate: row.departureDate,
            returnDate: row.returnDate,
            people: row.people,
            transportation: row.transportation,
            email: row.email,
            price: row.price,
          })
        );
        return res.status(200).send(quotes);
      })
      .catch((err) => {
        return next(httpErrors(500, err.message));
      });
  })
);

export const getAllQuoteRoute = router;
