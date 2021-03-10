import { Router } from "express";
import { createQuoteRoute } from "./addQuote";
import { getAllQuoteRoute } from "./selectAllQuote";

const router = Router();
router.use("/add", createQuoteRoute);
router.use("/", getAllQuoteRoute);

export const quoteRoutes = router;
