import express from "express";
import { searchMovies } from "./controllers";

const moviesRouter = express.Router();

moviesRouter.get("/:query?", searchMovies);

export default moviesRouter;
