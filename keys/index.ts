import dotenv from "dotenv";
dotenv.config();

export const mongoDbUrl = process.env.MONGODB_URL;
export const port = process.env.PORT;
