import express, { Response, Request } from "express";

import moviesRouter from "../modules/movies/movies.routes";

const router = express.Router();

router.get("/", async (req: Request, res: Response) => {
  res.send({ response: "The server is running" });
});

router.use("/movies", moviesRouter);

export default router;
