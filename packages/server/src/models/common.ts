import { connect } from "mongoose";

export const setupMongoDb = async (url: string) => {
  try {
    console.log(`Connecting to MongoDB ${url}`);
    await connect(url);
  } catch (err) {
    console.log(`Error connecting to MongoDB ${err}`);
  }
};
