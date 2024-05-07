import mongoose from "mongoose";

const db = process.env.DB_URL;

export const connect = async () => {
  const connectionState = mongoose.connection.readyState;

  if (connectionState === 1) {
    console.log("Already Connected");
    return;
  }
  if (connectionState === 2) {
    console.log("connecting..");
    return;
  }
  try {
    mongoose.connect(db!, {
      dbName: "urbaina",
      bufferCommands: false,
    });
    console.log("connected");
  } catch (err) {
    console.log("Error in connecting to database", err);
    throw new Error("Error connecting to database");
  }
};
