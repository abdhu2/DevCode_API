import dotenv from "dotenv";

//load env file
dotenv.config({ path: "./config/config.env" });

import express from "express";

const app = express();

//API file
import bootcamps from "./routes/bootcamps.js";

//Aplication Routes
app.use("/api/v1/bootcamps", bootcamps);

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
