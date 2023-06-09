import { Schema, model } from "mongoose";
import { UserItem } from "@happy-tails/shared";
const bcrypt = require("bcrypt");

const UserSchema = new Schema({
  full_name: String,
  email: { type: String, require: true, unique: true },
  password: { type: String, select: false },
  role: { type: String, default: "customer" },
});

const UserModel = model<UserItem>("User", UserSchema);

export const saveNewUser = async (user: UserItem): Promise<UserItem | null> => {
  const salt = await bcrypt.genSalt();
  user.password = await bcrypt.hash(user.password, salt);

  const newModel = new UserModel(user);
  newModel.save();
  return newModel;
};

export const getUser = async (
  email: string | undefined
): Promise<UserItem | null> => {
  const userInfo = await UserModel.findOne({ email: email }).select(
    "-password"
  );
  return userInfo;
};



exports.UserModel = UserModel;
