import express, { Express } from "express";
import cors from "cors";
import dotenv from "dotenv";
import router from "./router";

dotenv.config();

console.log("env variables =>", process.env.NODE_ENV, process.env.PORT);

export const app: Express = express();

const port = process.env.PORT;

app.use(cors());

//Setting routes
app.use("/", router);

//Starting the server
app.listen(port, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
});
