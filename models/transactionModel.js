import mongoose from "mongoose";
const transactionSchema = new mongoose.Schema(
  {
    amount: {
      type: Number,
      required: [true, "amount is required"],
    },
    category: {
      type: String,
      required: [true, "category is required"],
    },
    reference: {
      type: String,
    },
    description: {
      type: String,
      required: [true, "description is required"],
    },
    date: {
      type: String,
      required: [true, "data is required"],
    },
  },
  { timestamps: true }
);

export const transactionModel = mongoose.model(
  "transactions",
  transactionSchema
);
