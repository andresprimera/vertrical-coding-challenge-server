import express, { Request, Response } from "express";
import { app } from "../../index";
import { searchMovies } from "./resolvers";

const moviesRouter = express.Router();

moviesRouter.get("/:query?", async (req: Request, res: Response) => {
  const query = req?.params?.query;

  const response = await searchMovies(query);

  res.send({
    response,
  });
});

export default moviesRouter;
