import jwt from "jsonwebtoken";

import * as authenticationModel from "../models/authenticationModel.js";

export const getUserByEmailController = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await authenticationModel.getUserByEmail(email);

    if (!user) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    if (password !== user.password) {
      return res.status(401).json({
        success: false,
        message: "Invalid Email or Password",
      });
    }

    const token = jwt.sign(
      {
        id: user.user_id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      },
    );
    return res.status(200).json({
      success: true,
      token,
      user: {
        id: user.user_id,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.error("Error getting user", error);
    return res.status(500).json({
      success: false,
      message: "Internal server error.",
    });
  }
};
