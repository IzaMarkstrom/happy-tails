import express, { Request, Response } from "express";
import { saveUser, getUserByEmail } from "../controllers/userController";
import { authUser, generateToken, JwtRequest } from "../services/auth";
import { UserItem } from "@happy-tails/shared";
const { UserModel } = require("../models/user");
const bcrypt = require("bcrypt");

const userRouter = express.Router();

export default userRouter;

userRouter.post(
  "/create",
  async (req: Request<UserItem>, res: Response<any>) => {
    const { email } = req.body;

    const userExists = await UserModel.findOne({ email });

    if (userExists) {
      res.status(409).send("An account with this email already exist.");
    } else {
      try {
        const newUser = await saveUser(req.body);
        if (newUser) {
          const token = await generateToken(newUser.email);
          res.status(200).send({ token });
        } else {
          res.status(400).send("Something went wrong. Please try again.");
        }
      } catch (e) {
        res.status(400).send(`Error: ${e}`);
      }
    }
  }
);

userRouter.post(
  "/login",
  async (req: JwtRequest<UserItem>, res: Response<string>) => {
    const credentials = req.body;
    if(!credentials.password){
      res.status(403).send("No password provided");
    }

    const userExists = await UserModel.findOne({
      email: credentials.email,
    }).select("+password");

    if (userExists) {
      const validPassword = await bcrypt.compare(
        credentials.password,
        userExists.password
      );
      if (validPassword) {
        try {
          const token = generateToken(userExists.email);

          res.status(200).send(token);
        } catch (e) {
          res.status(400).send(`Error: ${e}`);
        }
      } else {
        res.status(403).send("Wrong password");
      }
    } else {
      res.status(403).send("No user found with this email");
    }
  }
);

userRouter.get(
  "/getuser",
  authUser,
  async (req: JwtRequest<UserItem>, res: Response<any>) => {
    const user = req.jwt;
    try {
      const userEmail = await getUserByEmail(user?.email);
      if (userEmail) {
        res.status(200).send(userEmail);
      }
    } catch (error) {
      res.status(403).send(error);
    }
  }
);
