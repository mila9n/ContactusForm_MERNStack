import mongoose from "mongoose";

export const connectDb = () => {
  mongoose
    .connect(process.env.MONGODB_URI, { dbName: "ContactUsForm" })
    .then((c) =>
      console.log(`database is connected : ${c.connection.host}`.underline.cyan)
    )
    .catch((e) => console.log(e));
};
