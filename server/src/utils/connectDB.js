import mongoose from "mongoose";
import config from "../config/environtment.js";

mongoose
  .connect(config.db)
  .then(() => {
    console.log("Connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });
