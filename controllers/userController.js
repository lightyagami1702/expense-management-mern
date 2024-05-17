import { error } from "console";
import { userModel } from "../models/userModel.js";
//login controller
export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userModel.findOne({ email, password });
    if (!user) {
      res.status(404).send("User not Found");
    }
    res.status(200).json({
      success: true,
      user,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
    console.log(error);
  }
};
//register controller
export const registerController = async (req, res) => {
  try {
    const newUser = new userModel(req.body);
    await newUser.save(); //save the new user to the database
    res.status(201).json({
      success: true,
      newUser,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error,
    });
    console.log(error);
  }
};
