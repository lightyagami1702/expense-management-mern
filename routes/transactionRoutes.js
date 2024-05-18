import express from "express";
import {
  addTransaction,
  getAllTransaction,
} from "../controllers/transactionCtrl.js";
//router object
const router = express.Router();
//routers
//add transaction
router.post("/add-transaction", addTransaction);
//get transaction
router.get("/get-transaction", getAllTransaction);
export default router;
