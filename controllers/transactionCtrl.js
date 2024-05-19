import { transactionModel } from "../models/transactionModel.js";

export const getAllTransaction = async (req, res) => {
  try {
    const transactions = await transactionModel.find({
      userid: req.body.userid,
    });
    console.log(req.body.userid);
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

export const addTransaction = async (req, res) => {
  try {
    const newTransaction = new transactionModel(req.body);
    await newTransaction.save();
    res.status(201).send("Transaction created");
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};
