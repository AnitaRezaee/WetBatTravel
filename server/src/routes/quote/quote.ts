import { Router } from "express";
import { createQuoteRoute } from "./addQuote";

const router = Router();
router.use("/add", createQuoteRoute);

export const quoteRoutes = router;
