import express, { Express, Request, Response } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

export const app: Express = express();

const port = process.env.PORT;

app.use(cors());

//Setting routes
app.use("/", router);

//Starting the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
